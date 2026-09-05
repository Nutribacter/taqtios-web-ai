import Link from "next/link";

/**
 * Preview en vivo del template Prisma (Estudios Creativos / Maximalista /
 * Colorido). Mundo visual propio: fondo claro, múltiples colores saturados
 * a la vez — el opuesto declarado de Black Studio. Estudio de ejemplo
 * ficticio ("Cactus Studio").
 */
const PROJECTS = [
  { client: "Fruta Cola", color: "#FF5C7A" },
  { client: "Banco Vivo", color: "#3D7BFF" },
  { client: "Selva App", color: "#2ECC71" },
  { client: "Radio Norte", color: "#FFC94D" },
];

export default function PrismaPreview() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] font-sans text-[#141414] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-[#FAFAF5]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Prisma — contenido de ejemplo</span>
        <Link href="/templates/prisma" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-xl font-black">Cactus Studio 🌵</span>
        <nav className="flex gap-6 text-sm font-bold">
          <span>Trabajo</span>
          <span>Contacto</span>
        </nav>
      </header>

      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <div className="absolute -left-6 top-6 h-32 w-32 rounded-full bg-[#FFC94D]" />
        <div className="absolute right-4 top-24 h-20 w-20 rotate-12 bg-[#3D7BFF]" />
        <h1 className="relative text-5xl font-black leading-[0.95] sm:text-7xl">
          Hacemos marcas
          <br />
          que <span className="text-[#FF5C7A]">no se olvidan</span>.
        </h1>
        <p className="relative mt-6 max-w-md text-lg text-black/60">
          Branding, ilustración y motion para marcas que quieren destacarse, no encajar.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-black">Proyectos</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <div
              key={p.client}
              className={i === 0 ? "col-span-2 row-span-2" : "col-span-1"}
              style={{ backgroundColor: p.color }}
            >
              <div className="flex h-full flex-col justify-end p-4 text-white">
                <p className="font-black">{p.client}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-16 text-center">
        <p className="text-3xl font-black">¿Hacemos algo memorable?</p>
        <button className="mt-6 rounded-full bg-[#141414] px-8 py-3 text-sm font-bold text-white">
          Escribinos
        </button>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-black/30">
        © 2026 Cactus Studio — ejemplo de contenido para el template Prisma.
      </footer>
    </div>
  );
}
