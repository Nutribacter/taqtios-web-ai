import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { listReadyTemplates } from "@/content/templates";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import TiltedCard from "@/components/TiltedCard";
import FoldText from "@/components/FoldText";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Producto 1: web armada a mano por el equipo, entrega manual. Ver AGENTS.md
 * "Precio y estrategia de lanzamiento" — esta es la oferta que se lanza
 * primero, como test de demanda, sin automatizar nada todavía.
 *
 * El Producto 2 (biblioteca self-service, comprás el prompt y lo pegás vos)
 * vive ahora en /biblioteca.
 */

const WHATSAPP_NUMBER = "549313021100";
const WHATSAPP_MESSAGE = "Hola! Quiero mi web armada por TAQTios (Producto 1, $14.900).";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const metadata: Metadata = {
  title: "TAQTios — Tu web lista en 48-72hs, armada por nosotros",
  description:
    "Elegís el diseño, nos contás de tu negocio y te entregamos la web lista. $14.900, pago único, sin que sepas nada de tecnología.",
};

const STEPS = [
  {
    n: "1",
    title: "Elegís tu diseño",
    text: "Mirás la galería de 20 estilos y nos decís cuál te gusta más para tu negocio.",
  },
  {
    n: "2",
    title: "Nos contás de tu negocio",
    text: "Por WhatsApp: nombre, rubro, textos, fotos y un medio de contacto. Nada técnico.",
  },
  {
    n: "3",
    title: "Te la entregamos lista",
    text: "En 48-72hs hábiles tenés el link de tu web funcionando, para compartir donde quieras.",
  },
];

const INCLUDE = [
  "Diseño a elección entre 20 estilos distintos",
  "Textos y fotos de tu negocio, acomodados por nosotros",
  "Entrega en 48-72hs hábiles",
  "El link de tu web funcionando, online por 30 días",
];

const NOT_INCLUDE = [
  "Dominio propio (tuweb.com.ar) — te asesoramos si después querés dar ese paso",
  "Cambios grandes de diseño una vez entregada (un ajuste chico de textos sí entra)",
];

const FAQ = [
  {
    q: "¿Quién arma la web, una IA?",
    a: "La arma el equipo de TAQTios a mano. Usamos IA como herramienta interna, pero no te entregamos un prompt para que la hagas vos — eso es otro producto, la Biblioteca.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Entre 48 y 72 horas hábiles desde que nos mandás todos tus datos completos por WhatsApp.",
  },
  {
    q: "¿Necesito comprar un dominio o hosting?",
    a: "No para empezar. Tu web queda online 30 días con el link que te mandamos. Si después querés tu propio dominio, te acompañamos a darlo de alta.",
  },
  {
    q: "¿Cómo pago?",
    a: "Coordinamos el pago por WhatsApp una vez que confirmamos el diseño y tus datos.",
  },
  {
    q: "¿Y si ningún diseño de la galería me convence?",
    a: "Elegís el que más se acerque y lo adaptamos con tu marca y tus colores. Si de verdad ninguno encaja, escribinos y lo vemos.",
  },
  {
    q: "¿Puedo pedir cambios después de entregada?",
    a: "Un ajuste chico de textos, fotos o colores está incluido. Un cambio grande de diseño ya es otro trabajo, y te lo cotizamos aparte.",
  },
];

export default function Home() {
  const templates = listReadyTemplates();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="glass sticky top-0 z-30">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="whitespace-nowrap font-heading text-base font-extrabold tracking-tight sm:text-lg">
            TAQTios <span className="brand-gradient-text">Web AI</span>
          </Link>
          <Link
            href="/biblioteca"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
          >
            ¿Sos diseñador o agencia? Armala vos con IA →
          </Link>
          <Magnet padding={20} magnetStrength={5}>
            <a
              href={waLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg btn-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Quiero mi web
            </a>
          </Magnet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <BlurText text="Tu web profesional," delay={60} className="justify-center" />
            <BlurText
              text="sin que muevas un dedo"
              delay={60}
              className="justify-center italic font-medium"
              spanClassName="brand-gradient-text"
            />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Elegís el diseño que te gusta, nos contás de tu negocio y en
            48-72hs te entregamos la web lista para compartir. Sin que sepas
            nada de tecnología.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnet padding={30} magnetStrength={4}>
              <a
                href={waLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg btn-primary px-6 py-3 text-sm font-semibold text-primary-foreground sm:w-auto"
              >
                Quiero mi web — $14.900
              </a>
            </Magnet>
            <a
              href="#galeria"
              className="w-full rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-muted sm:w-auto"
            >
              Ver diseños
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            Armada por personas, no por un formulario automático
          </p>
        </section>

        {/* Cómo funciona */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <FoldText
              text="Así de simple es"
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
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {STEPS.map((s, i) => (
                <ScrollReveal key={s.n} delay={i * 0.1}>
                  <div className="neu-raised h-full rounded-2xl p-6">
                    <span className="font-heading text-3xl font-extrabold brand-gradient-text">
                      {s.n}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-bold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de diseños */}
        <section id="galeria" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Elegí el diseño de tu web
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              20 estilos distintos. Tocá uno para verlo en vivo.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t, i) => (
              <ScrollReveal key={t.slug} delay={i * 0.03}>
                <TiltedCard containerHeight="auto" rotateAmplitude={6}>
                  <div className="neu-raised group block overflow-hidden rounded-2xl p-2">
                    <Link
                      href={`/preview/${t.slug}`}
                      target="_blank"
                      className="block"
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
                    <a
                      href={waLink(
                        `Hola! Quiero mi web con el diseño "${t.name}" (Producto 1, $14.900).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-4 mb-4 mt-1 block rounded-lg border border-border px-4 py-2 text-center text-xs font-semibold hover:bg-muted"
                    >
                      Quiero este diseño
                    </a>
                  </div>
                </TiltedCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Qué incluye */}
        <section className="border-t border-border py-20">
          <div className="mx-auto grid max-w-4xl gap-10 px-6 sm:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-bold">Qué incluye</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {INCLUDE.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold">Qué no incluye</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {NOT_INCLUDE.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-muted-foreground">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Un precio, sin sorpresas
            </h2>
            <p className="mt-4 font-heading text-5xl font-extrabold">
              $14.900
              <span className="text-lg font-medium text-muted-foreground"> ARS</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pago único. Coordinamos todo por WhatsApp.
            </p>
            <Magnet padding={30} magnetStrength={4} wrapperClassName="mt-8 inline-block">
              <a
                href={waLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg btn-primary px-8 py-3 text-sm font-semibold text-primary-foreground"
              >
                Quiero mi web
              </a>
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
              Tu negocio se merece una web de verdad.
            </h2>
            <Magnet padding={30} magnetStrength={4} wrapperClassName="mt-8 inline-block">
              <a
                href={waLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg btn-primary px-8 py-3 text-sm font-semibold text-primary-foreground"
              >
                Quiero mi web — $14.900
              </a>
            </Magnet>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
