import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Preview en vivo del template Vital (Healthcare / Clean / Trustworthy).
 * Mundo visual propio: celestes suaves, mucha claridad. Consultorio de
 * ejemplo ficticio ("Consultorio Dra. Paz").
 *
 * Animaciones: SOLO fade-up muy sutil por sección — es literalmente lo
 * único que pide el propio Prompt Maestro (el tono de salud pide calma).
 */
const SERVICES = ["Control anual", "Ecografías", "Nutrición deportiva", "Telemedicina"];

export default function VitalPreview() {
  return (
    <div className="min-h-screen bg-[#F4FAFB] font-sans text-[#1B2A2E] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1B2A2E]/10 bg-[#F4FAFB]/95 px-4 py-2 text-xs text-[#1B2A2E]/60 backdrop-blur">
        <span>Preview del template Vital — contenido de ejemplo</span>
        <Link href="/templates/vital" className="font-medium text-[#1B2A2E]/80 hover:text-[#1B2A2E]">
          ← Volver al template
        </Link>
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold">Consultorio Dra. Paz</span>
        <button className="rounded-lg bg-[#1A8FA3] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
          Sacar turno
        </button>
      </header>

      <section className="mx-auto max-w-3xl px-6 pt-8 pb-16 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Medicina clínica en Belgrano. Turnos en 48hs.
        </h1>
        <p className="mt-3 text-[#1B2A2E]/60">Atención presencial y por videollamada.</p>
        <button className="mt-8 rounded-lg bg-[#1A8FA3] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Sacar turno
        </button>
      </section>

      <ScrollReveal className="border-t border-[#1B2A2E]/10 px-6 py-16">
        <h2 className="mx-auto max-w-3xl text-xl font-bold">Servicios</h2>
        <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s} className="rounded-lg border border-[#1B2A2E]/10 bg-white p-4 text-sm font-medium">
              {s}
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="border-t border-[#1B2A2E]/10 px-6 py-16">
        <div className="mx-auto flex max-w-3xl items-center gap-6">
          <div className="h-24 w-24 shrink-0 rounded-full bg-[#1A8FA3]/20" />
          <div>
            <h3 className="font-bold">Dra. María Paz — M.N. 45.210</h3>
            <p className="mt-1 text-sm text-[#1B2A2E]/60">
              Médica clínica, especialista en medicina interna (UBA, 2011).
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="border-t border-[#1B2A2E]/10 px-6 py-12 text-center text-sm text-[#1B2A2E]/60">
        <p>Obras sociales: OSDE, Swiss Medical, Galeno, particular.</p>
        <p className="mt-1">Lun a Vie · 09:00 a 18:00</p>
      </ScrollReveal>

      <footer className="border-t border-[#1B2A2E]/10 px-6 py-8 text-center text-xs text-[#1B2A2E]/40">
        © 2026 Consultorio Dra. Paz — ejemplo de contenido para el template Vital.
      </footer>
    </div>
  );
}
