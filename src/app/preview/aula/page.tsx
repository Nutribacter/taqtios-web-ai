import Link from "next/link";

/**
 * Preview en vivo del template Aula (Education / Friendly / Clear). Mundo
 * visual propio: cálido y claro, temario en acordeón. Curso de ejemplo
 * ficticio ("Excel para no contadores").
 */
const TEMARIO = [
  { m: "Módulo 1", t: "Fórmulas que vas a usar todos los días" },
  { m: "Módulo 2", t: "Tablas dinámicas sin miedo" },
  { m: "Módulo 3", t: "Armar un dashboard simple" },
  { m: "Módulo 4", t: "Automatizar con macros básicas" },
];

export default function AulaPreview() {
  return (
    <div className="min-h-screen bg-[#FFF8ED] font-sans text-[#2E2417] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2E2417]/10 bg-[#FFF8ED]/95 px-4 py-2 text-xs text-[#2E2417]/60 backdrop-blur">
        <span>Preview del template Aula — contenido de ejemplo</span>
        <Link href="/templates/aula" className="font-medium text-[#2E2417]/80 hover:text-[#2E2417]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold">Excel para no contadores</span>
        <button className="rounded-full bg-[#D97D3F] px-5 py-2 text-sm font-semibold text-white">
          Inscribirme
        </button>
      </header>

      <section className="mx-auto max-w-2xl px-6 pt-8 pb-16 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Armá tus propios reportes sin depender de nadie
        </h1>
        <p className="mt-3 text-[#2E2417]/60">Para equipos de administración y ventas, sin conocimientos previos.</p>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-8">
        <h2 className="text-xl font-bold">Qué vas a aprender</h2>
        <div className="mt-4 divide-y divide-[#2E2417]/10 rounded-xl border border-[#2E2417]/10 bg-white">
          {TEMARIO.map((m) => (
            <details key={m.m} className="p-4">
              <summary className="cursor-pointer font-semibold marker:content-none">
                {m.m}: {m.t}
              </summary>
              <p className="mt-2 text-sm text-[#2E2417]/60">
                Clases grabadas + ejercicio práctico descargable.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-[#2E2417]/10 px-6 py-16 text-center">
        <p className="text-2xl font-bold">$24.900</p>
        <p className="mt-1 text-sm text-[#2E2417]/60">Acceso de por vida + certificado</p>
        <button className="mt-6 rounded-full bg-[#D97D3F] px-8 py-3 text-sm font-semibold text-white">
          Inscribirme
        </button>
      </section>

      <footer className="border-t border-[#2E2417]/10 px-6 py-8 text-center text-xs text-[#2E2417]/40">
        © 2026 Excel para no contadores — ejemplo de contenido para el template Aula.
      </footer>
    </div>
  );
}
