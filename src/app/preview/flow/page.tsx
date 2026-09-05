import Link from "next/link";

/**
 * Preview en vivo del template Flow (SaaS / Clean / Modern). Mundo visual
 * propio: blanco, un acento verde-azulado, mockups en frame de navegador.
 * Producto de ejemplo ficticio ("Nimbus").
 */
const STEPS = [
  { n: "01", t: "Conectá tu equipo", d: "Invitá a todos en un link, sin instalar nada." },
  { n: "02", t: "Armá tu primer tablero", d: "Plantillas listas para proyectos, sprints o clientes." },
  { n: "03", t: "Dejá de perseguir gente por Slack", d: "Todo el estado del proyecto en un solo lugar." },
];
const INTEGRATIONS = ["Slack", "Google Calendar", "Notion", "Figma", "Zapier"];

export default function FlowPreview() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#171717] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Flow — contenido de ejemplo</span>
        <Link href="/templates/flow" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold">Nimbus</span>
        <nav className="hidden gap-8 text-sm text-black/60 md:flex">
          <span>Producto</span>
          <span>Precios</span>
        </nav>
        <button className="rounded-lg bg-[#0F9B8E] px-4 py-2 text-sm font-semibold text-white">
          Empezar gratis
        </button>
      </header>

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 text-center">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Todo tu equipo, <span className="text-[#0F9B8E]">un solo lugar</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-black/60">
          Dejá de perseguir gente por Slack. Nimbus junta tareas, plazos y
          conversaciones en un solo tablero.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button className="rounded-lg bg-[#0F9B8E] px-6 py-3 text-sm font-semibold text-white">
            Empezar gratis
          </button>
          <button className="rounded-lg border border-black/15 px-6 py-3 text-sm font-semibold">
            Ver demo
          </button>
        </div>

        <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl shadow-black/5">
          <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          </div>
          <div className="grid grid-cols-3 gap-3 p-5 text-left">
            {["Por hacer", "En curso", "Listo"].map((col) => (
              <div key={col} className="space-y-2">
                <p className="text-xs font-semibold text-black/50">{col}</p>
                <div className="h-14 rounded-lg bg-black/5" />
                <div className="h-14 rounded-lg bg-[#0F9B8E]/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-8">
        <p className="text-center text-xs uppercase tracking-widest text-black/30">
          Usado por equipos en
        </p>
        <div className="mx-auto mt-4 flex max-w-2xl justify-center gap-8 px-6 text-sm font-semibold text-black/30">
          <span>Fluxa</span>
          <span>Nordly</span>
          <span>Kaira</span>
          <span>Vantiq</span>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">Cómo funciona</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <span className="text-2xl font-bold text-[#0F9B8E]">{s.n}</span>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-black/60">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 py-16">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-4 px-6 text-black/40">
          {INTEGRATIONS.map((i) => (
            <span key={i} className="text-sm font-semibold">{i}</span>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 py-20 text-center">
        <h2 className="text-3xl font-bold">Probalo gratis 14 días.</h2>
        <button className="mt-8 rounded-lg bg-[#0F9B8E] px-8 py-3 text-sm font-semibold text-white">
          Empezar gratis
        </button>
      </section>

      <footer className="border-t border-black/10 py-8 text-center text-xs text-black/30">
        © 2026 Nimbus — ejemplo de contenido para el template Flow.
      </footer>
    </div>
  );
}
