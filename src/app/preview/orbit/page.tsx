import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

/**
 * Preview en vivo del template Orbit (Professional / Modern / B2B). Mundo
 * visual propio: azul marino + gris carbón, sobrio. Consultora de ejemplo
 * ficticia ("Vertex Partners").
 *
 * Animaciones: fade-up por sección, los números de los casos de éxito
 * cuentan al entrar en viewport — lo que pide el propio Prompt Maestro,
 * nada más (la sobriedad depende de la quietud, no del movimiento).
 */
const CASES = [
  { prefix: "+", value: "30", suffix: "%", desc: "Eficiencia operativa en 6 meses — cliente de logística" },
  { prefix: "-", value: "18", suffix: "%", desc: "Costo de adquisición — cliente de retail" },
];

export default function OrbitPreview() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#12172B] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Orbit — contenido de ejemplo</span>
        <Link href="/templates/orbit" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold text-[#12172B]">Vertex Partners</span>
        <nav className="hidden gap-8 text-sm text-black/60 md:flex">
          <span>Servicios</span>
          <span>Casos</span>
          <span>Contacto</span>
        </nav>
        <button className="rounded-md bg-[#12172B] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
          Agendar llamada
        </button>
      </header>

      <section className="mx-auto max-w-3xl px-6 pt-16 pb-20 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
          Reducimos tu costo operativo, no tu calidad.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-black/60">
          Consultoría de operaciones para empresas de 50 a 500 personas.
        </p>
        <button className="mt-8 rounded-md bg-[#12172B] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Agendar una llamada
        </button>
      </section>

      <ScrollReveal className="border-t border-black/10 px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {["Estrategia operativa", "Reducción de costos", "Transformación digital"].map((s) => (
            <div key={s}>
              <h3 className="font-semibold">{s}</h3>
              <p className="mt-1 text-sm text-black/60">
                Diagnóstico + plan de acción medible en 90 días.
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <section className="border-t border-black/10 px-6 py-20">
        <h2 className="mx-auto max-w-4xl text-2xl font-bold">Casos de éxito</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-8 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.desc} delay={i * 0.1}>
              <div className="rounded-lg border border-black/10 p-6">
                <p className="text-4xl font-bold text-[#12172B]">
                  <CountUp value={c.value} prefix={c.prefix} suffix={c.suffix} />
                </p>
                <p className="mt-2 text-sm text-black/60">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal className="border-t border-black/10 px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">¿Hablamos de tu operación?</h2>
        <button className="mt-6 rounded-md bg-[#12172B] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Agendar llamada
        </button>
      </ScrollReveal>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-black/30">
        © 2026 Vertex Partners — ejemplo de contenido para el template Orbit.
      </footer>
    </div>
  );
}
