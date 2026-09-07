"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AbogadoFooter } from "../AbogadoFooter";
import { PRACTICE_AREAS } from "../content";

/**
 * Página de agendar consulta del template Abogado — repaletteada en el
 * rebuild (marfil/carbón + dorado, no marino/dorado de la v1). El área
 * llega precargada si se entra desde el CTA "Consultar" de una tarjeta de
 * Áreas de práctica (?area=Nombre), leído del lado del cliente para no
 * necesitar un Suspense boundary por useSearchParams.
 */
export default function AgendarPage() {
  const [sent, setSent] = useState(false);
  const [area, setArea] = useState("");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("area");
    if (fromUrl) setArea(fromUrl);
  }, []);

  return (
    <div className="min-h-screen bg-[#EFEAE0] font-sans text-[#221F1B] antialiased">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#EFEAE0]/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Abogado — agendar consulta de ejemplo</span>
        <Link href="/templates/abogado" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <header className="border-b border-black/5 bg-[#EFEAE0]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/preview/abogado" className="font-serif text-xl font-semibold tracking-tight">
            Zafra <span className="text-[#B8873A]">&amp;</span> Celis
          </Link>
          <Link href="/preview/abogado" className="text-sm text-[#221F1B]/60 transition hover:text-[#221F1B]">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:py-20">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#948A79]">Agendar consulta</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Contanos tu caso.
          </h1>
          <p className="mt-4 max-w-sm text-[#221F1B]/60">
            La primera consulta no tiene costo. Te respondemos dentro de las
            24 horas hábiles para coordinar día y horario.
          </p>
          <div className="mt-8 aspect-[16/10] w-full overflow-hidden rounded-sm border border-black/10">
            <iframe
              src="https://www.google.com/maps?q=Arturo%20M.%20Bas%20136%2C%20C%C3%B3rdoba%2C%20Argentina&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación — Zafra & Celis Abogados"
              className="h-full w-full border-0"
            />
          </div>
          <p className="mt-4 text-sm text-[#221F1B]/50">
            Arturo M. Bas 136, 2° piso, Córdoba · Lun a Vie 8 a 18hs
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="rounded-sm border border-black/10 bg-white/50 p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <p className="font-serif text-2xl">¡Listo!</p>
              <p className="mt-2 max-w-xs text-sm text-[#221F1B]/60">
                Recibimos tu consulta. Te vamos a contactar a la brevedad
                para coordinar día y horario.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-medium text-[#B8873A] transition hover:text-[#96702e]"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <Field label="Nombre y apellido" className="sm:col-span-2">
                <input required type="text" name="nombre" placeholder="Ej: Valeria Suárez" className={inputCls} />
              </Field>
              <Field label="Teléfono">
                <input required type="tel" name="telefono" placeholder="351 000-0000" className={inputCls} />
              </Field>
              <Field label="Email">
                <input required type="email" name="email" placeholder="vos@mail.com" className={inputCls} />
              </Field>
              <Field label="Área de consulta" className="sm:col-span-2">
                <select
                  required
                  name="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className={inputCls}
                >
                  <option value="" disabled>Elegí una opción</option>
                  {PRACTICE_AREAS.map((a) => (
                    <option key={a.n} value={a.title}>{a.title}</option>
                  ))}
                  <option value="Otra">Otra</option>
                </select>
              </Field>
              <Field label="Contanos tu situación" className="sm:col-span-2">
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  placeholder="Contanos brevemente qué te pasó"
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 h-12 rounded-sm bg-[#221F1B] text-sm font-semibold text-[#EFEAE0] transition hover:bg-black sm:col-span-2"
              >
                Solicitar consulta
              </button>
              <p className="text-xs text-[#221F1B]/40 sm:col-span-2">
                Al enviar aceptás que te contactemos para coordinar la
                consulta. No compartimos tus datos con terceros.
              </p>
            </form>
          )}
        </ScrollReveal>
      </section>

      <AbogadoFooter />
    </div>
  );
}

const inputCls =
  "h-11 w-full rounded-sm border border-black/15 bg-[#EFEAE0] px-3 text-sm text-[#221F1B] outline-none transition focus:border-[#B8873A]";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-xs font-medium uppercase tracking-wide text-[#948A79] ${className}`}>
      {label}
      <div className="mt-1.5 normal-case tracking-normal">{children}</div>
    </label>
  );
}
