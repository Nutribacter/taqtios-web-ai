import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { listFeaturedTemplates } from "@/content/templates";
import { finalPriceArs } from "@/lib/pricing";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import TiltedCard from "@/components/TiltedCard";
import MagicBento from "@/components/MagicBento";
import FoldText from "@/components/FoldText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StepsShowcase } from "@/components/StepsShowcase";

/**
 * Producto 2: biblioteca self-service (comprás acceso a los prompts y los
 * pegás vos en tu propia IA). Antes vivía en "/" — se movió acá cuando se
 * lanzó el Producto 1 (web armada a mano) como oferta principal. Ver
 * AGENTS.md "Precio y estrategia de lanzamiento".
 */

export const metadata: Metadata = {
  title: "Biblioteca de templates — TAQTios Web AI",
  description:
    "Templates y prompts premium para crear páginas web profesionales con Claude, Qwen, Lovable, Cursor y Gemini.",
};

const TOOLS = ["Claude", "Qwen", "Lovable", "Cursor", "Gemini"];

const AUDIENCE = [
  "Freelancers",
  "Diseñadores",
  "Developers",
  "Agencias",
  "Emprendedores",
  "Pymes",
];

const FAQ = [
  {
    q: "¿Esto arma la web por mí?",
    a: "No. Vos elegís el diseño, copiás el prompt y lo pegás en tu herramienta de IA — ella construye la web. TAQTios Web AI es la biblioteca de diseños y prompts, no un generador propio.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "No. Necesitás una cuenta en la IA que uses (Claude, Lovable, Cursor, etc.) y saber copiar y pegar. Los prompts ya traen las instrucciones de personalización.",
  },
  {
    q: "¿Con qué herramientas funciona?",
    a: "Los prompts están escritos para funcionar con cualquier asistente de IA moderno para desarrollo: Claude, Qwen, Lovable, Cursor y Gemini son los más probados.",
  },
  {
    q: "¿Puedo usar un template para un cliente?",
    a: "Sí, podés usar los diseños para tus propios proyectos y los de tus clientes. Lo que no podés hacer es revender o redistribuir los prompts o los diseños como si fueran tuyos para crear otro producto competidor.",
  },
  {
    q: "¿El precio es único o es una suscripción?",
    a: "Es un pago único. Con el acceso fundador entrás a la biblioteca actual y a las incorporaciones que sumemos durante esta etapa de lanzamiento.",
  },
];

export default function Home() {
  const featured = listFeaturedTemplates();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
            <BlurText text="Creá webs que parecen" delay={60} className="justify-center" />
            <BlurText
              text="de miles de dólares"
              delay={60}
              className="justify-center italic font-medium"
              spanClassName="brand-gradient-text"
            />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Elegí un diseño. Copiá el prompt. Pegalo en tu IA. Y construí una
            web profesional sin empezar desde cero.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnet padding={30} magnetStrength={4}>
              <Link
                href="/templates"
                className="block w-full rounded-lg btn-primary px-6 py-3 text-sm font-semibold text-primary-foreground sm:w-auto"
              >
                Explorar templates
              </Link>
            </Magnet>
            <Link
              href="/help"
              className="w-full rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-muted sm:w-auto"
            >
              Cómo funciona
            </Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            Compatible con {TOOLS.join(" · ")}
          </p>
        </section>

        {/* Cómo funciona */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <FoldText
              text="De idea a web en minutos"
              splitBy="word"
              hinge="top"
              trigger="scroll"
              duration={0.6}
              stagger={0.08}
              fontSize="clamp(1.75rem, 4vw, 2.75rem)"
              fontWeight={800}
              color="var(--foreground)"
              className="font-heading"
            />
            <StepsShowcase />
          </div>
        </section>

        {/* Galería destacada */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Algunos de los templates
            </h2>
            <Link
              href="/templates"
              className="text-sm font-semibold text-primary hover:opacity-80"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t, i) => (
              <ScrollReveal key={t.slug} delay={i * 0.06}>
                <TiltedCard containerHeight="auto" rotateAmplitude={6}>
                  <Link
                    href={`/templates/${t.slug}`}
                    className="neu-raised group block overflow-hidden rounded-2xl p-2"
                  >
                    <div className="neu-pressed aspect-video overflow-hidden rounded-xl" />
                    <div className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {t.category}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold">
                        {t.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t.style}
                      </p>
                    </div>
                  </Link>
                </TiltedCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Qué incluye */}
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Qué incluye el acceso
            </h2>
          </div>
          <div className="mt-8 flex justify-center">
            <MagicBento />
          </div>
        </section>

        {/* Para quién es */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Para quién es
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {AUDIENCE.map((a) => (
              <span
                key={a}
                className="neu-raised-sm rounded-full px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Acceso fundador
            </h2>
            <p className="mt-4 font-heading text-5xl font-extrabold">
              ${finalPriceArs().toLocaleString("es-AR")}
              <span className="text-lg font-medium text-muted-foreground"> ARS</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pago único. Acceso a la biblioteca actual y a las incorporaciones
              durante la etapa de lanzamiento.
            </p>
            <Magnet padding={30} magnetStrength={4} wrapperClassName="mt-8 inline-block">
              <Link
                href="/pricing"
                className="block rounded-lg btn-primary px-8 py-3 text-sm font-semibold text-primary-foreground"
              >
                Obtener acceso
              </Link>
            </Magnet>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 divide-y divide-border">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-heading text-base font-bold marker:content-none">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-heading text-3xl font-extrabold">
              Dejá de empezar desde una pantalla en blanco.
            </h2>
            <Magnet padding={30} magnetStrength={4} wrapperClassName="mt-8 inline-block">
              <Link
                href="/templates"
                className="block rounded-lg btn-primary px-8 py-3 text-sm font-semibold text-primary-foreground"
              >
                Explorar templates
              </Link>
            </Magnet>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
