import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Mono (Portfolio / Minimal / Editorial).
 * Mundo visual propio: monocromo, una sola columna, sin decoración.
 * Diseñadora de ejemplo ficticia ("Lucía Ferro").
 *
 * Animaciones: fade-up de 12-16px al entrar cada proyecto, y NADA MÁS —
 * es literalmente lo único que pide el Prompt Maestro de este template.
 */
const PROJECTS = [
  {
    title: "Rediseño de checkout — Vela",
    desc: "Simplifiqué el flujo de pago de 6 a 3 pasos para una fintech B2C.",
    role: "Diseño de producto · Figma",
  },
  {
    title: "Sistema de diseño — Nortek",
    desc: "Construí la librería de componentes que hoy usan 4 equipos.",
    role: "Design systems · Figma, Storybook",
  },
  {
    title: "App de hábitos — Runa",
    desc: "De la idea al primer prototipo testeado en 3 semanas.",
    role: "Producto 0→1 · Figma, Framer",
  },
];

export default function MonoPreview() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Mono — contenido de ejemplo</span>
        <Link href="/templates/mono" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <div className="mx-auto max-w-[720px] px-6 py-16">
        <header className="mb-16 flex items-baseline justify-between text-sm">
          <span className="font-medium">Lucía Ferro</span>
          <nav className="flex gap-6 text-black/50">
            <span>Trabajo</span>
            <span>Sobre mí</span>
            <span>Contacto</span>
          </nav>
        </header>

        <section className="mb-20">
          <h1 className="text-3xl font-semibold leading-snug sm:text-4xl">Lucía Ferro</h1>
          <p className="mt-2 text-lg text-black/60">Diseño producto para startups B2B.</p>
        </section>

        <section className="space-y-16">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.05}>
              <article>
                <div className="aspect-[16/10] w-full bg-black/5" />
                <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
                <p className="mt-1 text-black/70">{p.desc}</p>
                <p className="mt-2 text-sm text-black/40">{p.role}</p>
              </article>
            </ScrollReveal>
          ))}
        </section>

        <section className="mt-20 border-t border-black/10 pt-12">
          <p className="text-black/70">
            Trabajo hace 7 años en producto digital, los últimos 3 enfocada
            en fintech B2B. Me interesa lo que pasa entre la investigación
            y la primera línea de código.
          </p>
        </section>

        <section className="mt-16 border-t border-black/10 pt-12">
          <a href="mailto:hola@luciaferro.com" className="text-2xl font-semibold hover:text-black/60">
            hola@luciaferro.com
          </a>
          <p className="mt-2 text-sm text-black/40">LinkedIn · Behance</p>
        </section>

        <footer className="mt-20 text-xs text-black/30">
          © 2026 Lucía Ferro — ejemplo de contenido para el template Mono.
        </footer>
      </div>
    </div>
  );
}
