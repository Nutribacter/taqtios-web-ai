import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="prose prose-neutral mx-auto max-w-2xl px-6 py-16 text-sm text-muted-foreground [&_h2]:text-foreground [&_h2]:font-heading [&_p]:mt-3">
          <h1 className="font-heading text-3xl font-extrabold text-foreground">
            Privacidad
          </h1>
          <p className="mt-4">
            [PENDIENTE DE REVISIÓN LEGAL] Este texto describe el
            funcionamiento real del producto; no reemplaza el asesoramiento de
            un abogado antes del lanzamiento público.
          </p>

          <h2 className="mt-8">Qué datos guardamos</h2>
          <p>
            Tu email y la contraseña de tu cuenta (encriptada, no la vemos en
            texto plano), y el estado de tu compra (pendiente, aprobada,
            rechazada). El pago en sí lo procesa Mercado Pago: no vemos ni
            guardamos los datos de tu tarjeta.
          </p>

          <h2 className="mt-8">Con quién se comparte</h2>
          <p>
            Con Mercado Pago (para procesar el pago) y con nuestro proveedor
            de envío de mails (para el mail de confirmación de acceso).
            Ninguna otra parte recibe tus datos.
          </p>

          <h2 className="mt-8">Cómo pedir que borremos tus datos</h2>
          <p>[FALTA: email de contacto para pedir la baja de la cuenta]</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
