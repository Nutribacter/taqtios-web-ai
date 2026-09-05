import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { Payment } from "mercadopago";
import { getMercadoPagoClient } from "@/lib/mercadopago";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendAccessReadyEmail } from "@/lib/email";

/**
 * Ver AGENTS.md, sección "Pago (Mercado Pago)".
 * CRÍTICO (regla del proyecto): nunca dar acceso solo porque el navegador
 * volvió a una URL de éxito. Acá siempre se re-consulta el pago real contra
 * la API de Mercado Pago antes de tocar el estado de la compra.
 */

function isSignatureValid(request: Request, dataId: string, rawSignature: string | null): boolean {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (!secret) return true; // sin secret configurado todavía: no bloquear, pero ver nota en AGENTS.md.
  if (!rawSignature) return false;

  const requestId = request.headers.get("x-request-id") ?? "";
  const parts = Object.fromEntries(
    rawSignature.split(",").map((p) => {
      const [k, v] = p.split("=");
      return [k.trim(), v?.trim()];
    }),
  );
  const ts = parts["ts"];
  const v1 = parts["v1"];
  if (!ts || !v1) return false;

  const manifest = `id:${dataId.toLowerCase()};request-id:${requestId};ts:${ts};`;
  const expected = crypto.createHmac("sha256", secret).update(manifest).digest("hex");

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(v1));
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const body = await request.json().catch(() => null);

  const dataId: string | undefined =
    body?.data?.id ?? url.searchParams.get("data.id") ?? undefined;
  const type: string | undefined = body?.type ?? url.searchParams.get("type") ?? undefined;

  // Solo nos importan las notificaciones de pago; el resto se confirma con 200 sin hacer nada.
  if (type !== "payment" || !dataId) {
    return NextResponse.json({ ok: true });
  }

  if (!isSignatureValid(request, dataId, request.headers.get("x-signature"))) {
    return NextResponse.json({ error: "firma inválida" }, { status: 401 });
  }

  const mpClient = getMercadoPagoClient();
  if (!mpClient) {
    return NextResponse.json({ error: "Mercado Pago no configurado" }, { status: 500 });
  }

  // Re-consultamos el pago real: nunca confiar en el status que venga en el body de la notificación.
  const payment = await new Payment(mpClient).get({ id: dataId });
  const purchaseId = payment.external_reference;
  const mpStatus = payment.status; // approved | pending | rejected | cancelled | in_process | refunded | charged_back

  if (!purchaseId) {
    return NextResponse.json({ ok: true }); // no es uno de nuestros pagos (o falta el external_reference)
  }

  const admin = createAdminClient();
  const { data: purchase } = await admin
    .from("purchases")
    .select("id, status, mp_payment_id, user_id")
    .eq("id", purchaseId)
    .maybeSingle();

  if (!purchase) {
    return NextResponse.json({ ok: true });
  }

  // Idempotencia: si ya procesamos este mismo pago con este mismo estado, no repetir el mail.
  const alreadyProcessed =
    purchase.mp_payment_id === String(payment.id) && purchase.status === mapStatus(mpStatus);

  const nextStatus = mapStatus(mpStatus);

  await admin
    .from("purchases")
    .update({
      status: nextStatus,
      mp_payment_id: String(payment.id),
      updated_at: new Date().toISOString(),
    })
    .eq("id", purchase.id);

  if (nextStatus === "approved" && !alreadyProcessed) {
    const { data: userData } = await admin.auth.admin.getUserById(purchase.user_id);
    if (userData?.user?.email) {
      await sendAccessReadyEmail(userData.user.email);
    }
  }

  return NextResponse.json({ ok: true });
}

function mapStatus(
  mpStatus: string | undefined,
): "pending" | "approved" | "rejected" | "cancelled" {
  switch (mpStatus) {
    case "approved":
      return "approved";
    case "rejected":
    case "charged_back":
      return "rejected";
    case "cancelled":
    case "refunded":
      return "cancelled";
    default:
      return "pending"; // pending, in_process, in_mediation, etc.
  }
}
