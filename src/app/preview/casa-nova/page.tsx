import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Casa Nova (Hospitality / Warm Premium). Mundo
 * visual propio: crema/terracota, serif suave. Alojamiento de ejemplo
 * ficticio ("Casa Alba").
 *
 * Animaciones: zoom muy leve en el hero, fade-up por sección, escala leve
 * en fotos de habitación al hover — lo que pide el propio Prompt Maestro.
 */
const ROOMS = [
  { name: "Suite Jardín", cap: "2 huéspedes", price: "$68.000 / noche" },
  { name: "Habitación Vista", cap: "2 huéspedes", price: "$52.000 / noche" },
];

export default function CasaNovaPreview() {
  return (
    <div className="min-h-screen bg-[#F2E9DD] font-serif text-[#3A2E22] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#3A2E22]/10 bg-[#F2E9DD]/95 px-4 py-2 font-sans text-xs text-[#3A2E22]/60 backdrop-blur">
        <span>Preview del template Casa Nova — contenido de ejemplo</span>
        <Link href="/templates/casa-nova" className="font-medium text-[#3A2E22]/80 hover:text-[#3A2E22]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 font-sans text-sm">
        <span className="font-serif text-lg font-semibold">Casa Alba</span>
        <nav className="flex gap-8 text-[#3A2E22]/70">
          <span>Habitaciones</span>
          <span>Reservar</span>
        </nav>
      </header>

      <section className="relative mx-6 flex h-[65vh] items-end overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 bg-[#B98559]"
          style={{ animation: "alba-breathe 9s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative p-8 text-white sm:p-12">
          <h1 className="text-4xl font-semibold sm:text-6xl">Casa Alba</h1>
          <p className="mt-2 font-sans text-white/80">Valle de Punilla, Córdoba</p>
        </div>
        <style>{`@keyframes alba-breathe { 0%,100% { transform:scale(1); } 50% { transform:scale(1.04); } }`}</style>
      </section>

      <ScrollReveal className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-2xl font-semibold">Habitaciones</h2>
        <div className="mt-10 space-y-8">
          {ROOMS.map((r) => (
            <div key={r.name} className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <div className="h-full w-full bg-[#B98559]/60 transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="font-sans">
                <h3 className="font-serif text-xl font-semibold">{r.name}</h3>
                <p className="mt-1 text-sm text-[#3A2E22]/60">{r.cap}</p>
                <p className="mt-3 text-lg font-semibold">{r.price}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-2xl px-6 py-16 text-center font-sans">
        <p className="text-[#3A2E22]/70">
          Desayuno con productos de la zona, pileta con vista a las sierras
          y senderos a cinco minutos caminando.
        </p>
      </ScrollReveal>

      <ScrollReveal className="border-t border-[#3A2E22]/10 px-6 py-20 text-center font-sans">
        <p className="text-sm uppercase tracking-widest text-[#3A2E22]/50">Reservas</p>
        <button className="mt-6 rounded-sm bg-[#8A4A2A] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Consultar disponibilidad
        </button>
      </ScrollReveal>

      <footer className="border-t border-[#3A2E22]/10 px-6 py-8 text-center font-sans text-xs text-[#3A2E22]/40">
        © 2026 Casa Alba — ejemplo de contenido para el template Casa Nova.
      </footer>
    </div>
  );
}
