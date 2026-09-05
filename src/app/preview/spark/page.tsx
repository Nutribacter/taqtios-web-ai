import Link from "next/link";

/**
 * Preview en vivo del template Spark (Landing Pages / Punchy / Conversion).
 * Mundo visual propio: blanco con un acento fuerte, CTA repetido. Producto
 * de ejemplo ficticio ("Guion en 7 días").
 */
const INCLUDES = ["12 videoclases grabadas", "Plantillas editables", "Grupo privado de feedback", "Certificado"];
const FAQ = [
  { q: "¿Y si no tengo tiempo?", a: "Son 15 minutos por día, a tu ritmo, acceso de por vida." },
  { q: "¿Necesito experiencia previa?", a: "No, arrancamos desde cero." },
];

export default function SparkPreview() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#171717] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Spark — contenido de ejemplo</span>
        <Link href="/templates/spark" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <section className="mx-auto max-w-2xl px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Escribí el guion de tu video en 7 días
        </h1>
        <p className="mt-4 text-lg text-black/60">
          El método paso a paso para dejar de trabarte frente a la cámara.
        </p>
        <button className="mt-8 rounded-lg bg-[#E5484D] px-8 py-4 text-base font-bold text-white">
          Quiero empezar — $19.900
        </button>
      </section>

      <section className="border-t border-black/10 px-6 py-12">
        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          <div>
            <p className="font-bold text-[#0F9B58]">Es para vos si...</p>
            <p className="mt-1 text-sm text-black/60">Grabás contenido seguido y sentís que improvisás cada vez.</p>
          </div>
          <div>
            <p className="font-bold text-black/40">No es para vos si...</p>
            <p className="mt-1 text-sm text-black/60">Ya tenés un proceso de guion que te funciona bien.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-16">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold">Qué incluye</h2>
        <ul className="mx-auto mt-6 max-w-md space-y-2">
          {INCLUDES.map((i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-[#0F9B58]">✓</span>{i}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <button className="rounded-lg bg-[#E5484D] px-8 py-4 text-base font-bold text-white">
            Quiero empezar — $19.900
          </button>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-16">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mx-auto mt-6 max-w-2xl divide-y divide-black/10">
          {FAQ.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-semibold marker:content-none">{f.q}</summary>
              <p className="mt-2 text-sm text-black/60">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-black/30">
        © 2026 Guion en 7 días — ejemplo de contenido para el template Spark.
      </footer>
    </div>
  );
}
