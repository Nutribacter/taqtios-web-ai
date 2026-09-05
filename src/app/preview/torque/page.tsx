import Link from "next/link";

/**
 * Preview en vivo del template Torque (Automotor / Agresivo / Metálico).
 * Mundo visual propio: casi negro, acento rojo, composición diagonal.
 * Taller de ejemplo ficticio ("APEX Performance").
 */
export default function TorquePreview() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] font-sans text-white antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0D0D0D]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Torque — contenido de ejemplo</span>
        <Link href="/templates/torque" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-black uppercase tracking-tight">APEX Performance</span>
        <button className="bg-[#E4213B] px-5 py-2 text-sm font-bold uppercase">Cotizar</button>
      </header>

      <section className="relative mx-6 h-[60vh] overflow-hidden bg-[#1A1A1A]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-8 sm:p-12">
          <h1 className="text-4xl font-black uppercase leading-none sm:text-6xl">
            Más potencia.<br />Cero excusas.
          </h1>
          <div className="mt-4 flex gap-8 font-mono">
            <div>
              <p className="text-3xl font-bold text-[#E4213B]">420 HP</p>
              <p className="text-xs uppercase text-white/50">Potencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#E4213B]">4.2s</p>
              <p className="text-xs uppercase text-white/50">0-100</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#E4213B]">560 Nm</p>
              <p className="text-xs uppercase text-white/50">Torque</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="mx-auto max-w-4xl text-xl font-black uppercase">Specs completos</h2>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-4 font-mono sm:grid-cols-4">
          {[
            ["Cilindrada", "3.0L"],
            ["Tracción", "AWD"],
            ["Peso", "1.480 kg"],
            ["Velocidad máx.", "280 km/h"],
          ].map(([k, v]) => (
            <div key={k} className="border border-white/10 p-4">
              <p className="text-xs uppercase text-white/40">{k}</p>
              <p className="mt-1 text-lg font-bold">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 text-center">
        <p className="text-2xl font-black uppercase">Reservá tu turno de prueba</p>
        <button className="mt-6 bg-[#E4213B] px-8 py-3 text-sm font-bold uppercase">
          Cotizar ahora
        </button>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/30">
        © 2026 APEX Performance — ejemplo de contenido para el template Torque.
      </footer>
    </div>
  );
}
