import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

/**
 * Preview en vivo del template Prime Estate (Real Estate / Luxury /
 * Architectural). Mundo visual propio: tonos piedra/carbón, acento bronce,
 * tipografía fina. Propiedad de ejemplo ficticia ("Casa Meridian").
 *
 * Animaciones: zoom muy lento en el hero, números de la ficha que cuentan,
 * fade-up más pausado que el estándar — lo que pide el propio Prompt
 * Maestro de este template (ritmo deliberadamente lento).
 */
const FICHA = [
  { v: "420", l: "m² cubiertos" },
  { v: "4", l: "Ambientes" },
  { v: "2019", l: "Año de construcción" },
  { v: "Norte", l: "Orientación" },
];

export default function PrimeEstatePreview() {
  return (
    <div className="min-h-screen bg-[#EDEAE4] font-sans text-[#232019] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#232019]/10 bg-[#EDEAE4]/95 px-4 py-2 text-xs text-[#232019]/60 backdrop-blur">
        <span>Preview del template Prime Estate — contenido de ejemplo</span>
        <Link href="/templates/prime-estate" className="font-medium text-[#232019]/80 hover:text-[#232019]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm tracking-wide">
        <span className="font-light text-lg">MERIDIAN</span>
        <nav className="flex gap-10 text-[#232019]/60">
          <span>Propiedades</span>
          <span>Contacto</span>
        </nav>
      </header>

      {/* Hero, zoom muy lento (10-12s) como pide el prompt */}
      <section className="relative mx-6 flex h-[75vh] items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-[#3C382E]"
          style={{ animation: "meridian-breathe 12s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative p-8 text-white sm:p-14">
          <h1 className="text-3xl font-light tracking-wide sm:text-5xl">Casa Meridian</h1>
          <p className="mt-2 text-white/70">Barrio Las Lomas · Vista panorámica</p>
        </div>
        <style>{`@keyframes meridian-breathe { 0%,100% { transform:scale(1); } 50% { transform:scale(1.03); } }`}</style>
      </section>

      {/* Ficha técnica, con conteo */}
      <ScrollReveal className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 py-20 sm:grid-cols-4">
        {FICHA.map((f) => (
          <div key={f.l}>
            <p className="text-4xl font-light">
              <CountUp value={f.v} duration={900} />
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#232019]/50">{f.l}</p>
          </div>
        ))}
      </ScrollReveal>

      {/* Galería */}
      <ScrollReveal className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-6 py-16">
        <div className="col-span-2 aspect-[16/9] overflow-hidden">
          <div className="h-full w-full bg-[#3C382E]/70 transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <div className="h-full w-full bg-[#3C382E]/50 transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <div className="h-full w-full bg-[#3C382E]/60 transition-transform duration-500 hover:scale-105" />
        </div>
      </ScrollReveal>

      {/* Ubicación */}
      <ScrollReveal className="border-t border-[#232019]/10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-[#232019]/50">Ubicación</p>
          <p className="mt-3 max-w-xl text-[#232019]/70">
            Las Lomas es una zona residencial arbolada a quince minutos del
            centro, con acceso directo a la autopista y colegios bilingües
            en un radio de dos kilómetros.
          </p>
          <div className="mt-6 aspect-[21/9] w-full bg-[#3C382E]/30" />
        </div>
      </ScrollReveal>

      {/* Contacto */}
      <ScrollReveal className="border-t border-[#232019]/10 px-6 py-20 text-center">
        <p className="text-2xl font-light">¿Te interesa esta propiedad?</p>
        <button className="mt-8 border border-[#9C7A45] px-8 py-3 text-sm font-medium tracking-wide text-[#9C7A45] transition hover:bg-[#9C7A45] hover:text-white">
          Solicitar visita
        </button>
      </ScrollReveal>

      <footer className="border-t border-[#232019]/10 px-6 py-8 text-center text-xs text-[#232019]/40">
        © 2026 Meridian — ejemplo de contenido para el template Prime Estate.
      </footer>
    </div>
  );
}
