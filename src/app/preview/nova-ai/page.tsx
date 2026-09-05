import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

/**
 * Preview en vivo del template Nova AI (SaaS / AI / Dark / Premium).
 * Paleta propia (#0A0A0F + cian), separada de los tokens de TAQTios Web AI:
 * este es el mundo visual del TEMPLATE que se vende, no el del marketplace.
 * Producto de ejemplo ficticio ("Aria") para demostrar el diseño sin
 * pretender ser una captura de un sitio real de terceros.
 *
 * Animaciones: las que pide el propio Prompt Maestro de Nova AI — glow que
 * respira detrás del mockup, hover elevado en pricing, métricas que cuentan.
 */

const LOGOS = ["Fluxa", "Nordly", "Orbitel", "Kaira", "Vantiq"];
const STEPS = [
  { n: "01", t: "Conectá tu inbox", d: "Sumás tu bandeja de soporte en un click, sin migrar nada." },
  { n: "02", t: "Aria aprende tu tono", d: "Lee tus últimas 200 respuestas y arma su propio estilo." },
  { n: "03", t: "Responde por vos", d: "Los tickets simples se resuelven solos; los difíciles te los deriva." },
];
const METRICS = [
  { v: "40", suffix: "%", l: "Menos tiempo de primera respuesta" },
  { v: "3,2", suffix: "×", l: "Tickets resueltos por agente" },
  { v: "24/7", suffix: "", l: "Cobertura sin turnos nocturnos" },
];
const FAQ = [
  { q: "¿Reemplaza a mi equipo de soporte?", a: "No. Resuelve lo repetitivo y deriva lo que necesita a una persona, con todo el contexto ya armado." },
  { q: "¿Funciona con mi helpdesk actual?", a: "Se conecta por API a las plataformas más usadas. Si la tuya no está, armamos la integración." },
  { q: "¿Mis datos entrenan un modelo compartido?", a: "No. Cada cuenta tiene su propio contexto aislado." },
];

export default function NovaAiPreview() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] font-sans text-[#E7E7EC] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0A0A0F]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Nova AI — contenido de ejemplo</span>
        <Link href="/templates/nova-ai" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold tracking-tight">Aria</span>
        <nav className="hidden gap-8 text-sm text-white/60 md:flex">
          <span>Producto</span>
          <span>Precios</span>
          <span>Docs</span>
        </nav>
        <button className="rounded-lg bg-[#22D3EE] px-4 py-2 text-sm font-semibold text-[#0A0A0F] transition hover:opacity-90">
          Empezar gratis
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Cerrá el mes 3 días antes
          <span className="text-[#22D3EE]"> con soporte en piloto automático</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Aria responde los tickets repetitivos con tu propio tono, y deriva
          el resto a tu equipo con todo el contexto ya listo.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button className="rounded-lg bg-[#22D3EE] px-6 py-3 text-sm font-semibold text-[#0A0A0F] transition hover:opacity-90">
            Empezar gratis
          </button>
          <button className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30">
            Ver demo
          </button>
        </div>

        {/* Mockup de producto, todo en CSS, con el glow que respira que pide el prompt */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="absolute inset-x-8 -top-6 h-24 rounded-full bg-[#22D3EE]/20 blur-3xl"
            style={{ animation: "nova-breathe 6s ease-in-out infinite" }}
          />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111117] text-left shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 h-5 w-40 rounded bg-white/5" />
            </div>
            <div className="grid grid-cols-3 gap-px bg-white/5 p-px">
              <div className="col-span-1 space-y-2 bg-[#111117] p-4">
                {["Ticket #482", "Ticket #481", "Ticket #480", "Ticket #479"].map((t, i) => (
                  <div
                    key={t}
                    className={`rounded-lg p-2 text-xs transition ${i === 0 ? "bg-[#22D3EE]/10 text-[#22D3EE]" : "text-white/40"}`}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div className="col-span-2 space-y-3 bg-[#111117] p-5">
                <div className="h-3 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-1/2 rounded bg-white/10" />
                <div className="mt-4 h-16 rounded-lg bg-[#22D3EE]/10" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes nova-breathe { 0%,100% { opacity:.5; transform:scale(1); } 50% { opacity:.9; transform:scale(1.08); } }`}</style>
      </section>

      {/* Logos */}
      <ScrollReveal className="border-t border-white/10 py-10">
        <p className="text-center text-xs uppercase tracking-widest text-white/30">
          Usado por equipos de soporte en
        </p>
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-4 px-6">
          {LOGOS.map((l) => (
            <span key={l} className="text-sm font-semibold text-white/30 transition hover:text-white/70">
              {l}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Cómo funciona</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.1}>
              <span className="text-3xl font-bold text-[#22D3EE]">{s.n}</span>
              <h3 className="mt-3 font-bold">{s.t}</h3>
              <p className="mt-1 text-sm text-white/50">{s.d}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Métricas */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 sm:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.l} className="text-center">
              <p className="text-4xl font-bold text-[#22D3EE]">
                <CountUp value={m.v} suffix={m.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/50">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">Precios</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { name: "Starter", price: "US$29/mes", featured: false },
            { name: "Growth", price: "US$89/mes", featured: true },
            { name: "Scale", price: "A medida", featured: false },
          ].map((p) => (
            <div
              key={p.name}
              className={`rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${p.featured ? "border-[#22D3EE]/40 bg-[#22D3EE]/5" : "border-white/10"}`}
            >
              {p.featured && (
                <span className="text-xs font-semibold uppercase tracking-wide text-[#22D3EE]">
                  Más elegido
                </span>
              )}
              <h3 className="mt-2 font-bold">{p.name}</h3>
              <p className="mt-2 text-2xl font-bold">{p.price}</p>
              <button className="mt-6 w-full rounded-lg border border-white/15 py-2 text-sm font-semibold transition hover:border-white/30">
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-white/10">
          {FAQ.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer list-none font-semibold marker:content-none">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-white/50">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-white/10 py-20 text-center">
        <h2 className="text-3xl font-bold">Dejá que Aria conteste lo repetitivo.</h2>
        <button className="mt-8 rounded-lg bg-[#22D3EE] px-8 py-3 text-sm font-semibold text-[#0A0A0F] transition hover:opacity-90">
          Empezar gratis
        </button>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/30">
        © 2026 Aria — ejemplo de contenido para el template Nova AI.
      </footer>
    </div>
  );
}
