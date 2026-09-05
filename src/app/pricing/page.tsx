import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getAccessStatus } from "@/lib/access";
import { finalPriceArs } from "@/lib/pricing";
import SpotlightCard from "@/components/SpotlightCard";
import Magnet from "@/components/Magnet";

const INCLUDES = [
  "20 templates premium originales",
  "6 prompts por template: Maestro, Branding, Copy, Animaciones, SEO y Responsive",
  "Prompt Toolkit: biblioteca de prompts universales para modificar cualquier diseño",
  "Acceso a las incorporaciones durante la etapa de lanzamiento",
];

export default async function PricingPage() {
  const { isAuthenticated, hasAccess } = await getAccessStatus();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-lg px-6 py-20 text-center">
          <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Acceso fundador
          </h1>
          <p className="mt-3 text-muted-foreground">
            Un solo pago. Sin suscripción.
          </p>

          <SpotlightCard className="neu-raised mt-10 p-8 text-left">
            <p className="font-heading text-5xl font-extrabold">
              ${finalPriceArs().toLocaleString("es-AR")}
              <span className="text-lg font-medium text-muted-foreground"> ARS</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Pago único</p>

            <ul className="mt-6 space-y-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {hasAccess ? (
              <Link
                href="/dashboard"
                className="mt-8 block rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Ya tenés acceso — ir al dashboard
              </Link>
            ) : isAuthenticated ? (
              <Magnet padding={20} magnetStrength={5} wrapperClassName="mt-8 block">
                <form action="/api/checkout" method="post">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                  >
                    Obtener acceso
                  </button>
                </form>
              </Magnet>
            ) : (
              <>
                <Magnet padding={20} magnetStrength={5} wrapperClassName="mt-8 block">
                  <Link
                    href="/signup?redirect=/pricing"
                    className="block rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
                  >
                    Crear cuenta y comprar
                  </Link>
                </Magnet>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  ¿Ya tenés cuenta?{" "}
                  <Link href="/login?redirect=/pricing" className="underline">
                    Ingresá
                  </Link>{" "}
                  antes de comprar.
                </p>
              </>
            )}
          </SpotlightCard>

          <p className="mt-6 text-xs text-muted-foreground">
            Pago procesado por Mercado Pago. El acceso se habilita apenas se
            confirma el pago — no depende de que revises el mail.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
