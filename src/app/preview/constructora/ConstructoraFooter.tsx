import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "./content";

/**
 * Footer del template Constructora — minimalista, negro mate, mismo patrón
 * funcional que OdontologiaFooter/AbogadoFooter (contacto + redes + nav)
 * pero sin glass ni color: acá la identidad es material, no de color.
 */
const SOCIALS = [{ label: "Instagram", href: "#", icon: InstagramIcon }];

export function ConstructoraFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0c0c0a] text-white/45">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/preview/constructora" className="text-2xl font-semibold tracking-tight text-[#F3F0E8]">
              {COMPANY.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm">Arquitectura, construcción y desarrollo de proyectos en Córdoba.</p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/45 transition hover:border-[#8A6A4B] hover:text-[#D6D0C4]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">Contacto</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#8A6A4B]" />
                <a href={`https://wa.me/${COMPANY.whatsappNumber}`} target="_blank" rel="noopener" className="transition hover:text-[#F3F0E8]">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#8A6A4B]" />
                <a href={`mailto:${COMPANY.email}`} className="transition hover:text-[#F3F0E8]">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A4B]" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A4B]" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">Navegación</p>
            <ul className="mt-4 space-y-3">
              <li><Link href="/preview/constructora#proyectos" className="transition hover:text-[#F3F0E8]">Proyectos</Link></li>
              <li><Link href="/preview/constructora#servicios" className="transition hover:text-[#F3F0E8]">Servicios</Link></li>
              <li><Link href="/preview/constructora#proceso" className="transition hover:text-[#F3F0E8]">Proceso</Link></li>
              <li><Link href="/preview/constructora#contacto" className="transition hover:text-[#F3F0E8]">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-6 text-center text-xs text-white/25">
          © 2026 {COMPANY.nameFull} — ejemplo de contenido para el template de constructora de TAQTios.
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
