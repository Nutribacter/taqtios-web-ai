import Link from "next/link";

/**
 * Preview en vivo del template Ledger (Finanzas / Preciso / Fintech). Mundo
 * visual propio: navy oscuro, acento esmeralda, cifras en monoespaciada.
 * Producto de ejemplo ficticio ("Cauce").
 */
export default function LedgerPreview() {
  return (
    <div className="min-h-screen bg-[#0A1310] font-sans text-white antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0A1310]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Ledger — contenido de ejemplo</span>
        <Link href="/templates/ledger" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold">Cauce</span>
        <nav className="hidden gap-8 text-sm text-white/60 md:flex">
          <span>Producto</span>
          <span>Seguridad</span>
          <span>Precios</span>
        </nav>
        <button className="rounded-md bg-[#2FBF8F] px-4 py-2 text-sm font-semibold text-[#0A1310]">
          Abrir cuenta
        </button>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-12 pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Tu plata, rindiendo, con costos que se ven.
            </h1>
            <p className="mt-4 text-white/60">
              Sin letra chica. 0% de comisión de mantenimiento los primeros 3 meses.
            </p>
            <button className="mt-6 rounded-md bg-[#2FBF8F] px-6 py-3 text-sm font-semibold text-[#0A1310]">
              Abrir cuenta gratis
            </button>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-widest text-white/40">Rendimiento simulado</p>
            <p className="mt-2 font-mono text-4xl font-bold text-[#2FBF8F]">+12,4%</p>
            <svg viewBox="0 0 300 80" className="mt-4 w-full">
              <polyline
                points="0,70 40,55 80,60 120,35 160,42 200,20 240,28 300,8"
                fill="none"
                stroke="#2FBF8F"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <h2 className="mx-auto max-w-5xl text-xl font-bold">Costos, sin sorpresas</h2>
        <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
          {[
            { l: "Mantenimiento", v: "$0" },
            { l: "Transferencias", v: "$0" },
            { l: "Retiro en cajero", v: "$150" },
          ].map((c) => (
            <div key={c.l} className="rounded-lg border border-white/10 p-4">
              <p className="text-sm text-white/50">{c.l}</p>
              <p className="mt-1 font-mono text-2xl font-bold">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold">Seguridad</h2>
          <p className="mt-2 text-white/60">
            Fondos custodiados en entidades reguladas. Cifrado de extremo a
            extremo en cada transacción. Autenticación de dos factores obligatoria.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/30">
        © 2026 Cauce — ejemplo de contenido para el template Ledger.
      </footer>
    </div>
  );
}
