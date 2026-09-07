import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * Footer del template Abogado — mismo patrón funcional que DominioFooter
 * (contacto con íconos + redes + nav), repaletteado en marino/dorado.
 */
const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X", href: "#", icon: XIcon },
];

export function AbogadoFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#171613] text-white/50">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/preview/abogado" className="font-serif text-2xl font-semibold text-[#EFEAE0]">
              Zafra &amp; Celis
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Estudio jurídico en Córdoba. Defendemos lo que te pertenece,
              caso a caso.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[#B8873A] hover:text-[#B8873A]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">Contacto</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#B8873A]" />
                <a href="tel:+5493511234567" className="transition hover:text-[#EFEAE0]">
                  +54 9 351 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#B8873A]" />
                <a href="mailto:hola@zafraycelis.com.ar" className="transition hover:text-[#EFEAE0]">
                  hola@zafraycelis.com.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B8873A]" />
                <span>Arturo M. Bas 136, 2° piso, Córdoba</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">Navegación</p>
            <ul className="mt-4 space-y-3">
              <li><Link href="/preview/abogado#areas" className="transition hover:text-[#EFEAE0]">Áreas de práctica</Link></li>
              <li><Link href="/preview/abogado#equipo" className="transition hover:text-[#EFEAE0]">Equipo</Link></li>
              <li><Link href="/preview/abogado/agendar" className="transition hover:text-[#EFEAE0]">Agendar consulta</Link></li>
              <li><Link href="/preview/abogado#faq" className="transition hover:text-[#EFEAE0]">Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 Zafra &amp; Celis — ejemplo de contenido para el template de estudios jurídicos de TAQTios.
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.3c0-.87.24-1.46 1.5-1.46h1.6V4.14C16.3 4.1 15.3 4 14.2 4c-2.34 0-3.95 1.43-3.95 4.04v2.36H7.6v3h2.65V21h3.25Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5Zm-1.44-4.6a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34ZM20 13.28c0-3.1-1.65-4.54-3.86-4.54-1.78 0-2.57 1-3.02 1.7V8.5H10.3c.04.85 0 11.5 0 11.5h2.82v-6.42c0-.34.02-.69.13-.94.28-.69.92-1.4 2-1.4 1.4 0 1.97 1.07 1.97 2.64V20H20v-6.72Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 3H21l-6.3 7.2L22 21h-6.2l-4.86-6.34L5.3 21H2.5l6.74-7.7L2 3h6.35l4.4 5.8L18.24 3Zm-1.08 16.2h1.53L7.9 4.7H6.26l10.9 14.5Z" />
    </svg>
  );
}
