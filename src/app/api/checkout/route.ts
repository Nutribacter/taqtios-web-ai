import { NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getMercadoPagoClient } from "@/lib/mercadopago";
import { finalPriceArs, PRICING } from "@/lib/pricing";

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return NextResponse.redirect(new URL("/login?redirect=/pricing", request.url));
  }

  const mpClient = getMercadoPagoClient();
  if (!mpClient) {
    return NextResponse.redirect(
      new URL(
        `/pricing?error=${encodeURIComponent(
          "Mercado Pago todavía no está conectado del lado del servidor.",
        )}`,
        request.url,
      ),
    );
  }

  const admin = createAdminClient();
  const { data: purchase, error: insertError } = await admin
    .from("purchases")
    .insert({ user_id: user.id, status: "pending", amount_ars: finalPriceArs() })
    .select()
    .single();

  if (insertError || !purchase) {
    return NextResponse.redirect(
      new URL(
        `/pricing?error=${encodeURIComponent("No pudimos iniciar la compra. Probá de nuevo.")}`,
        request.url,
      ),
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;

  const preference = await new Preference(mpClient).create({
    body: {
      items: [
        {
          id: "taqtios-web-ai-founder",
          title: "TAQTios Web AI — Acceso fundador",
          quantity: 1,
          unit_price: finalPriceArs(),
          currency_id: PRICING.currency,
        },
      ],
      payer: { email: user.email },
      external_reference: purchase.id,
      back_urls: {
        success: `${siteUrl}/dashboard?compra=exito`,
        failure: `${siteUrl}/pricing?compra=fallo`,
        pending: `${siteUrl}/pricing?compra=pendiente`,
      },
      auto_return: "approved",
      notification_url: `${siteUrl}/api/webhooks/mercadopago`,
    },
  });

  await admin
    .from("purchases")
    .update({ mp_preference_id: preference.id })
    .eq("id", purchase.id);

  const checkoutUrl = preference.init_point;
  if (!checkoutUrl) {
    return NextResponse.redirect(
      new URL(
        `/pricing?error=${encodeURIComponent("Mercado Pago no devolvió un link de pago.")}`,
        request.url,
      ),
    );
  }

  return NextResponse.redirect(checkoutUrl);
}
