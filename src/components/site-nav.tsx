import Link from "next/link";

export function SiteNav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="whitespace-nowrap font-heading text-base font-extrabold tracking-tight sm:text-lg">
          TAQTios <span className="brand-gradient-text">Web AI</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
          <Link href="/pricing" className="hover:text-foreground">
            Precio
          </Link>
          <Link href="/help" className="hover:text-foreground">
            Cómo funciona
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
          >
            Ingresar
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg btn-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Obtener acceso
          </Link>
          <details className="relative md:hidden">
            <summary className="neu-raised-sm grid h-9 w-9 cursor-pointer list-none place-items-center rounded-lg marker:content-none">
              <span className="sr-only">Menú</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </summary>
            <nav className="neu-raised absolute right-0 z-20 mt-2 w-44 rounded-xl p-2 text-sm font-medium text-muted-foreground">
              <Link href="/templates" className="block rounded-lg px-3 py-2 transition hover:text-foreground">
                Templates
              </Link>
              <Link href="/pricing" className="block rounded-lg px-3 py-2 transition hover:text-foreground">
                Precio
              </Link>
              <Link href="/help" className="block rounded-lg px-3 py-2 transition hover:text-foreground">
                Cómo funciona
              </Link>
              <Link href="/login" className="block rounded-lg px-3 py-2 transition hover:text-foreground">
                Ingresar
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
