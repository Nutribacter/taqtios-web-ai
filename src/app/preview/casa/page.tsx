import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Casa (Restaurant / Editorial / Luxury).
 * Mundo visual propio: fondo cálido crema, serif editorial, menú con puntos
 * guía. Restaurante de ejemplo ficticio ("Brasa").
 *
 * Animaciones: zoom lento en la foto del hero, fade-up por sección, zoom
 * leve en las fotos de ambiente al hover — lo que pide el propio Prompt
 * Maestro de este template, nada más.
 */
const MENU = [
  { name: "Entraña a la parrilla", desc: "Chimichurri de la casa, papas rústicas", price: "$18.500" },
  { name: "Risotto de hongos", desc: "Hongos de estación, parmesano 24 meses", price: "$14.200" },
  { name: "Trucha a las brasas", desc: "Manteca de limón, espárragos", price: "$16.800" },
  { name: "Flan casero", desc: "Dulce de leche, crema", price: "$6.500" },
];

export default function CasaPreview() {
  return (
    <div className="min-h-screen bg-[#F5EFE4] font-serif text-[#2B2118] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2B2118]/10 bg-[#F5EFE4]/95 px-4 py-2 font-sans text-xs text-[#2B2118]/60 backdrop-blur">
        <span>Preview del template Casa — contenido de ejemplo</span>
        <Link href="/templates/casa" className="font-medium text-[#2B2118]/80 hover:text-[#2B2118]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 font-sans text-sm">
        <span className="font-serif text-lg font-semibold">Brasa</span>
        <nav className="flex gap-8 text-[#2B2118]/70">
          <span>Menú</span>
          <span>Reservar</span>
        </nav>
      </header>

      {/* Hero, con el zoom lento que pide el prompt de animaciones */}
      <section className="relative mx-6 flex h-[70vh] items-end overflow-hidden rounded-2xl bg-[#3A2A1A]">
        <div
          className="absolute inset-0 bg-[#3A2A1A]"
          style={{ animation: "casa-breathe 9s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative p-8 text-[#F5EFE4] sm:p-12">
          <h1 className="text-4xl font-semibold sm:text-6xl">Brasa</h1>
          <p className="mt-2 font-sans text-lg text-[#F5EFE4]/80">
            Cocina de mercado, fuego a leña.
          </p>
        </div>
        <style>{`@keyframes casa-breathe { 0%,100% { transform:scale(1); } 50% { transform:scale(1.05); } }`}</style>
      </section>

      {/* Historia */}
      <ScrollReveal className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-xl leading-relaxed text-[#2B2118]/80 sm:text-2xl">
          Empezamos con una parrilla y ocho mesas en 2019. Seguimos cocinando
          igual: fuego de leña, productos de estación y nada que no
          firmaríamos con nuestro nombre.
        </p>
      </ScrollReveal>

      {/* Menú */}
      <ScrollReveal className="mx-auto max-w-2xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold">Algunos platos</h2>
        <div className="space-y-6">
          {MENU.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-[#2B2118]/30" />
                <span className="font-sans text-sm">{item.price}</span>
              </div>
              <p className="mt-1 font-sans text-sm text-[#2B2118]/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Ambiente, con zoom leve al hover en cada foto */}
      <ScrollReveal className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-6 py-16 sm:grid-cols-3">
        <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-xl sm:col-span-1 sm:row-span-2 sm:aspect-auto">
          <div className="h-full w-full bg-[#3A2A1A]/80 transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="aspect-square overflow-hidden rounded-xl">
          <div className="h-full w-full bg-[#3A2A1A]/60 transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="aspect-square overflow-hidden rounded-xl">
          <div className="h-full w-full bg-[#3A2A1A]/70 transition-transform duration-300 hover:scale-105" />
        </div>
      </ScrollReveal>

      {/* Reservas */}
      <ScrollReveal className="border-t border-[#2B2118]/10 px-6 py-20 text-center font-sans">
        <p className="text-sm uppercase tracking-widest text-[#2B2118]/50">Reservas</p>
        <p className="mt-3 text-lg">Mar a Dom · 20:00 a 00:00</p>
        <p className="text-sm text-[#2B2118]/60">Av. Costanera 1450 · Ver en mapa</p>
        <button className="mt-8 rounded-sm bg-[#7A3B22] px-8 py-3 text-sm font-semibold text-[#F5EFE4] transition hover:opacity-90">
          Reservar mesa
        </button>
      </ScrollReveal>

      <footer className="border-t border-[#2B2118]/10 px-6 py-8 text-center font-sans text-xs text-[#2B2118]/40">
        © 2026 Brasa — ejemplo de contenido para el template Casa.
      </footer>
    </div>
  );
}
