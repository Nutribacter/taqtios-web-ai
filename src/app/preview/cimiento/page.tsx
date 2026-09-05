import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Cimiento (Construcción / Industrial /
 * Robusto). Mundo visual propio: gris hormigón + naranja de seguridad,
 * tipografía utilitaria. Empresa de ejemplo ficticia ("Trama Obras").
 *
 * Animaciones: SOLO fade-up por sección — la solidez industrial se
 * transmite con quietud, tal como pide el propio Prompt Maestro.
 */
export default function CimientoPreview() {
  return (
    <div className="min-h-screen bg-[#EDEBE7] font-sans text-[#1E1D1B] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1E1D1B]/10 bg-[#EDEBE7]/95 px-4 py-2 text-xs text-[#1E1D1B]/60 backdrop-blur">
        <span>Preview del template Cimiento — contenido de ejemplo</span>
        <Link href="/templates/cimiento" className="font-medium text-[#1E1D1B]/80 hover:text-[#1E1D1B]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-black uppercase">Trama Obras</span>
        <button className="bg-[#E0662B] px-5 py-2 text-sm font-bold uppercase text-white transition hover:brightness-110">
          Pedir presupuesto
        </button>
      </header>

      <section className="relative mx-6 flex h-[55vh] items-end bg-[#5B5852]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative p-8 text-white sm:p-12">
          <h1 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Construimos en tiempo y forma
          </h1>
          <p className="mt-2 text-white/70">Presupuesto cerrado. Sin sorpresas en la obra.</p>
        </div>
      </section>

      <ScrollReveal className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-xl font-black uppercase">Servicios</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Ampliaciones", "Remodelación integral", "Obra nueva"].map((s) => (
            <div key={s} className="border-2 border-[#1E1D1B]/15 bg-white p-5">
              <p className="font-bold">{s}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="border-t border-[#1E1D1B]/10 px-6 py-16">
        <h2 className="mx-auto max-w-4xl text-xl font-black uppercase">Obras realizadas</h2>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="aspect-square bg-[#5B5852]/60" />
          <div className="aspect-square bg-[#5B5852]/40" />
          <div className="aspect-square bg-[#5B5852]/70" />
        </div>
      </ScrollReveal>

      <ScrollReveal className="border-t border-[#1E1D1B]/10 px-6 py-16">
        <h2 className="mx-auto max-w-4xl text-xl font-black uppercase">Cómo trabajamos</h2>
        <ol className="mx-auto mt-6 max-w-4xl space-y-3">
          {["Visita y relevamiento", "Presupuesto cerrado en 5 días", "Obra en 4 a 8 semanas según alcance"].map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="font-mono font-black text-[#E0662B]">{String(i + 1).padStart(2, "0")}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </ScrollReveal>

      <footer className="border-t border-[#1E1D1B]/10 px-6 py-8 text-center text-xs text-[#1E1D1B]/40">
        © 2026 Trama Obras — ejemplo de contenido para el template Cimiento.
      </footer>
    </div>
  );
}
