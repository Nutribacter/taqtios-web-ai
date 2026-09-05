import Link from "next/link";

/**
 * Preview en vivo del template Bloom (Belleza / Suave / Elegante). Mundo
 * visual propio: pastel, formas circulares, mucho aire. Marca de ejemplo
 * ficticia ("Musgo").
 */
const PRODUCTS = [
  { name: "Sérum de niacinamida", price: "$8.900" },
  { name: "Crema de día SPF30", price: "$11.400" },
  { name: "Aceite limpiador", price: "$7.200" },
];

export default function BloomPreview() {
  return (
    <div className="min-h-screen bg-[#FBF3EE] font-serif text-[#3D2E28] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#3D2E28]/10 bg-[#FBF3EE]/95 px-4 py-2 font-sans text-xs text-[#3D2E28]/60 backdrop-blur">
        <span>Preview del template Bloom — contenido de ejemplo</span>
        <Link href="/templates/bloom" className="font-medium text-[#3D2E28]/80 hover:text-[#3D2E28]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 font-sans text-sm">
        <span className="font-serif text-lg font-semibold">Musgo</span>
        <nav className="flex gap-6 text-[#3D2E28]/60">
          <span>Productos</span>
          <span>Nosotras</span>
        </nav>
      </header>

      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center">
        <div className="h-56 w-56 rounded-full bg-[#E8C4B8]" />
        <h1 className="mt-8 text-3xl font-semibold sm:text-4xl">Piel cuidada, sin vueltas</h1>
        <p className="mt-3 max-w-sm font-sans text-[#3D2E28]/60">
          Tres pasos, ingredientes que se entienden, resultados que se notan.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold">Nuestros productos</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="text-center">
              <div className="mx-auto aspect-square w-full max-w-[180px] rounded-full bg-[#E8C4B8]/60" />
              <p className="mt-4 font-sans text-sm font-medium">{p.name}</p>
              <p className="font-sans text-sm text-[#3D2E28]/50">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#3D2E28]/10 px-6 py-16 text-center font-sans">
        <p className="mx-auto max-w-md text-[#3D2E28]/60">
          Niacinamida para parejo la textura, ácido hialurónico para hidratar
          en profundidad, y nada más de lo que tu piel no necesita.
        </p>
      </section>

      <footer className="border-t border-[#3D2E28]/10 px-6 py-8 text-center font-sans text-xs text-[#3D2E28]/40">
        © 2026 Musgo — ejemplo de contenido para el template Bloom.
      </footer>
    </div>
  );
}
