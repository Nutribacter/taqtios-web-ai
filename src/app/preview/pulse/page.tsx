import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Pulse (Fitness / Bold / Energetic). Mundo
 * visual propio: fondo casi negro, acento naranja vibrante, tipografía
 * gruesa en mayúsculas. Box de ejemplo ficticio ("FORJA").
 *
 * Animaciones: entrada rápida por sección, cards de disciplina con empuje
 * al hover — lo que pide el propio Prompt Maestro de este template.
 */
const CLASSES = [
  { name: "Funcional", level: "Todos los niveles", dur: "45 min" },
  { name: "Fuerza", level: "Intermedio", dur: "60 min" },
  { name: "Movilidad", level: "Todos los niveles", dur: "30 min" },
];

export default function PulsePreview() {
  return (
    <div className="min-h-screen bg-[#111] font-sans text-white antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#111]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Pulse — contenido de ejemplo</span>
        <Link href="/templates/pulse" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-black tracking-tight">FORJA</span>
        <nav className="hidden gap-8 text-sm font-bold uppercase text-white/60 md:flex">
          <span>Clases</span>
          <span>Horarios</span>
        </nav>
        <button className="rounded bg-[#FF5A1F] px-5 py-2 text-sm font-bold uppercase transition hover:brightness-110">
          Clase de prueba
        </button>
      </header>

      <section className="relative mx-6 flex h-[65vh] items-end bg-[#1C1C1C]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
        <div className="relative p-8 sm:p-12">
          <h1 className="text-5xl font-black uppercase leading-none sm:text-7xl">
            Entrená<br />en serio
          </h1>
          <button className="mt-6 rounded bg-[#FF5A1F] px-8 py-3 text-sm font-bold uppercase transition hover:brightness-110">
            Reservá tu clase de prueba
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-black uppercase">Disciplinas</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CLASSES.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.06}>
              <div className="rounded-lg border border-white/10 p-5 transition-all duration-150 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:shadow-lg hover:shadow-black/40">
                <h3 className="text-lg font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-white/50">{c.level} · {c.dur}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <h2 className="text-2xl font-black uppercase">Horarios de hoy</h2>
        <div className="mt-6 space-y-2">
          {["07:00 · Funcional", "09:00 · Movilidad", "18:00 · Fuerza", "19:30 · Funcional"].map((h) => (
            <div
              key={h}
              className="flex items-center justify-between border-b border-white/10 py-2 text-sm transition-colors hover:bg-white/[0.03]"
            >
              <span>{h}</span>
              <span className="font-bold text-[#FF5A1F]">Reservar</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 text-center">
        <p className="text-2xl font-black uppercase">Av. del Trabajo 890</p>
        <p className="mt-2 text-white/50">Lun a Sáb · 07:00 a 21:00</p>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/30">
        © 2026 Forja — ejemplo de contenido para el template Pulse.
      </footer>
    </div>
  );
}
