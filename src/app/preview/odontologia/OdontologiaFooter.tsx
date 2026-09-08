import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC } from "./content";

/**
 * Footer del template Odontología — mismo patrón funcional que
 * AbogadoFooter/DominioFooter (contacto + redes + nav), repaletteado en
 * verde salvia sobre carbón-verdoso oscuro (no el marrón/dorado de Abogado).
 */
const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
];

export function OdontologiaFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#171b19] text-white/50">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/preview/odontologia" className="text-2xl font-semibold tracking-tight text-[#F2F1EC]">
              {CLINIC.nameFull}
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Odontología integral con tecnología y una atención pensada
              para vos, en Córdoba.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[#8FB3A6] hover:text-[#8FB3A6]"
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
                <Phone className="h-4 w-4 shrink-0 text-[#8FB3A6]" />
                <a
                  href={`https://wa.me/${CLINIC.whatsappNumber}`}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:text-[#F2F1EC]"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#8FB3A6]" />
                <a href={`mailto:${CLINIC.email}`} className="transition hover:text-[#F2F1EC]">
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8FB3A6]" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#8FB3A6]" />
                <span>{CLINIC.hours}</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">Navegación</p>
            <ul className="mt-4 space-y-3">
              <li><Link href="/preview/odontologia#servicios" className="transition hover:text-[#F2F1EC]">Servicios</Link></li>
              <li><Link href="/preview/odontologia#equipo" className="transition hover:text-[#F2F1EC]">Equipo</Link></li>
              <li><Link href="/preview/odontologia#reservar" className="transition hover:text-[#F2F1EC]">Reservar turno</Link></li>
              <li><Link href="/preview/odontologia#faq" className="transition hover:text-[#F2F1EC]">Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 {CLINIC.nameFull} — ejemplo de contenido para el template de odontología de TAQTios.
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
