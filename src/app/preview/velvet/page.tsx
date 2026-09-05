import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Velvet (Ecommerce / Fashion / Luxury). Mundo
 * visual propio: negro puro, grilla editorial asimétrica, tipografía fina.
 * Marca de ejemplo ficticia ("Ocre").
 *
 * Animaciones: fade-in de las fotos, zoom leve al hover (solo desktop) —
 * lo que pide el propio Prompt Maestro de este template.
 */
const PRODUCTS = [
  { name: "Camisa de lino cruda", price: "$42.000", big: true },
  { name: "Pantalón sastre negro", price: "$58.000", big: false },
  { name: "Abrigo de lana", price: "$96.000", big: false },
  { name: "Botín de cuero", price: "$74.000", big: true },
];

export default function VelvetPreview() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] font-sans text-white antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0B0B0B]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Velvet — contenido de ejemplo</span>
        <Link href="/templates/velvet" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm tracking-widest">
        <span className="font-light">OCRE</span>
        <nav className="flex gap-8 text-white/60">
          <span>Colección</span>
          <span>Carrito (0)</span>
        </nav>
      </header>

      {/* Campaña hero */}
      <section className="relative mx-6 flex h-[70vh] items-end bg-[#1A1A1A]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h1 className="relative p-8 text-3xl font-light tracking-wide sm:p-12 sm:text-5xl">
          Colección Invierno
        </h1>
      </section>

      {/* Grilla de productos, ritmo asimétrico, fade-in + zoom al hover */}
      <ScrollReveal className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-16 sm:grid-cols-4">
        {PRODUCTS.map((p) => (
          <div key={p.name} className={p.big ? "col-span-2 row-span-2" : "col-span-1"}>
            <div className="aspect-[3/4] overflow-hidden">
              <div className="h-full w-full bg-[#1A1A1A] transition-transform duration-300 [@media(hover:hover)]:hover:scale-[1.03]" />
            </div>
            <p className="mt-2 text-sm font-medium">{p.name}</p>
            <p className="text-sm text-white/50">{p.price}</p>
          </div>
        ))}
      </ScrollReveal>

      {/* Historia de marca */}
      <ScrollReveal className="border-t border-white/10 px-6 py-20 text-center">
        <p className="mx-auto max-w-md text-white/60">
          Ocre nació en 2021 con una idea simple: ropa bien hecha, en pocas
          telas, que dure más de una temporada.
        </p>
      </ScrollReveal>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/30">
        © 2026 Ocre — ejemplo de contenido para el template Velvet.
      </footer>
    </div>
  );
}
