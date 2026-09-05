import Link from "next/link";

/**
 * Preview en vivo del template Signature (Personal Brand / Editorial /
 * Confident). Mundo visual propio: editorial, la foto manda. Persona de
 * ejemplo ficticia ("Martina Sosa").
 */
const MEDIA = ["Forbes", "La Nación", "TEDx Rosario", "Endeavor"];

export default function SignaturePreview() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414] antialiased">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-2 text-xs text-black/50 backdrop-blur">
        <span>Preview del template Signature — contenido de ejemplo</span>
        <Link href="/templates/signature" className="font-medium text-black/80 hover:text-black">
          ← Volver al template
        </Link>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-16 flex items-center justify-between text-sm">
          <span className="font-semibold">Martina Sosa</span>
          <nav className="flex gap-6 text-black/50">
            <span>Sobre mí</span>
            <span>Contacto</span>
          </nav>
        </header>

        <section className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="h-40 w-40 shrink-0 rounded-full bg-black/5" />
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">Martina Sosa</h1>
            <p className="mt-2 text-lg text-black/60">
              Ayudo a empresas B2B a vender sin depender de publicidad paga.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-black/10 pt-10">
          <p className="text-xs uppercase tracking-widest text-black/40">Como se me vio en</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-black/40">
            {MEDIA.map((m) => (
              <span key={m} className="font-semibold">{m}</span>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-black/10 pt-10">
          <p className="leading-relaxed text-black/70">
            Trabajé 9 años en desarrollo de negocios B2B antes de empezar a
            escribir sobre ventas basadas en contenido. Di más de 30 charlas
            en 5 países y ayudé a 40+ empresas a armar su primer motor de
            ventas orgánico.
          </p>
        </section>

        <section className="mt-16 border-t border-black/10 pt-10">
          <a href="mailto:hola@martinasosa.com" className="text-2xl font-bold hover:text-black/60">
            hola@martinasosa.com
          </a>
        </section>

        <footer className="mt-16 text-xs text-black/30">
          © 2026 Martina Sosa — ejemplo de contenido para el template Signature.
        </footer>
      </div>
    </div>
  );
}
