import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-foreground-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} TAQTios Web AI. Una línea de producto de TAQTios.</p>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-foreground">
            Términos
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacidad
          </Link>
          <Link href="/help" className="hover:text-foreground">
            Ayuda
          </Link>
        </div>
      </div>
    </footer>
  );
}
