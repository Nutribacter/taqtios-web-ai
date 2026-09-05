import Link from "next/link";

/**
 * Preview en vivo del template Launchpad (Startups / Bold / Waitlist).
 * Mundo visual propio: fondo oscuro, un solo color vibrante, foco total en
 * el formulario de email. Startup de ejemplo ficticia ("Orbita").
 */
export default function LaunchpadPreview() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D14] px-6 font-sans text-white antialiased">
      <div className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-white/10 bg-[#0D0D14]/95 px-4 py-2 text-xs text-white/50 backdrop-blur">
        <span>Preview del template Launchpad — contenido de ejemplo</span>
        <Link href="/templates/launchpad" className="font-medium text-white/80 hover:text-white">
          ← Volver al template
        </Link>
      </div>

      <div className="mx-auto max-w-xl py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#7C5CFF]">Orbita</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Tu inventario, actualizado solo, sin planillas.
        </h1>
        <p className="mt-4 text-white/60">
          Orbita conecta tus ventas online y tu local físico para que el
          stock nunca se desactualice. Muy pronto en beta.
        </p>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="tu@email.com"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#7C5CFF] sm:w-64"
          />
          <button className="rounded-lg bg-[#7C5CFF] px-6 py-3 text-sm font-semibold">
            Sumarme a la lista
          </button>
        </div>
        <p className="mt-4 text-sm text-white/40">+312 personas ya se anotaron</p>
      </div>

      <div className="mx-auto max-w-2xl border-t border-white/10 py-16 text-center text-white/60">
        <p>Vas a poder conectar Mercado Libre, tu local y tu tienda online en un solo tablero de stock.</p>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/30">
        © 2026 Orbita — ejemplo de contenido para el template Launchpad.
      </footer>
    </div>
  );
}
