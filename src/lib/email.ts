import { Resend } from "resend";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendAccessReadyEmail(to: string) {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY no configurada, no se envió el mail a", to);
    return;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const from = process.env.RESEND_FROM_EMAIL ?? "TAQTios Web AI <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to,
    subject: "Tu acceso a TAQTios Web AI ya está listo",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
        <h1 style="font-size: 20px;">Tu acceso ya está listo</h1>
        <p>Confirmamos tu pago. Ya podés entrar a tu biblioteca de templates y copiar los prompts.</p>
        <p style="margin: 24px 0;">
          <a href="${siteUrl}/dashboard" style="background:#6d5bd0;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;">
            Ir a mi biblioteca
          </a>
        </p>
        <p style="color:#666;font-size:13px;">¿Alguna duda? Respondé este mail.</p>
      </div>
    `,
  });
}
