/**
 * Content model del template Constructora (rubro #4, "NIVEL").
 * Identidad propia: negro mate + piedra + madera + vidrio ahumado, tipografía
 * enorme editorial, cuatro videos (dron + interiores) como protagonistas —
 * distinta a piedra/bronce (Inmobiliaria), marfil/dorado (Abogado) y verde
 * salvia/perla (Odontología). Ver el mega prompt del dueño (8/9) para el
 * pedido completo.
 *
 * Todo el contenido de números, testimonios y equipo es DEMO/ficticio y
 * editable — no representa una empresa ni personas reales.
 */

export const COMPANY = {
  name: "NIVEL",
  nameFull: "NIVEL Arquitectura + Construcción",
  tagline: "Construimos lo que permanece.",
  whatsappNumber: "5493511230000", // placeholder — reemplazar por el número real
  address: "Av. Rafael Núñez 4500, Córdoba",
  hours: "Lun a Vie 9 a 18 h",
  email: "proyectos@nivel-constructora.demo",
  instagram: "@nivel.constructora",
};

export const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

// ── Videos protagonistas ────────────────────────────────────────────────
// Los 4 videos ya provistos, comprimidos a 1080p H.264 sin audio con ffmpeg
// (ver scripts/optimize-constructora-assets.mjs para las fotos — los videos
// se comprimieron aparte, sharp no procesa video). Cada uno tiene su poster
// (frame extraído) para evitar layout shift mientras carga.
export type FeaturedVideo = {
  id: string;
  label: string; // paso de la narrativa: Obra → Materia → Espacio → Resultado
  title: string;
  src: string;
  poster: string;
};

export const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: "obra",
    label: "Obra",
    title: "Edificio en construcción",
    src: "/templates/constructora/video-dron-edificio.mp4",
    poster: "/templates/constructora/poster-dron-edificio.webp",
  },
  {
    id: "materia",
    label: "Materia",
    title: "Interior en detalle",
    src: "/templates/constructora/video-casa-interior-02.mp4",
    poster: "/templates/constructora/poster-casa-interior-02.webp",
  },
  {
    id: "espacio",
    label: "Espacio",
    title: "Recorrido interior",
    src: "/templates/constructora/video-casa-lujo-03.mp4",
    poster: "/templates/constructora/poster-casa-lujo-03.webp",
  },
  {
    id: "resultado",
    label: "Resultado",
    title: "Vista aérea, obra terminada",
    src: "/templates/constructora/video-dron-casa-lujo.mp4",
    poster: "/templates/constructora/poster-dron-casa-lujo.webp",
  },
];

export const HERO_VIDEO = FEATURED_VIDEOS[0];

// ── Proyectos ────────────────────────────────────────────────────────────
export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  area: string;
  year: string;
  status: "En construcción" | "Terminado";
  image: string;
  description: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "torre-origen",
    name: "Torre Origen",
    category: "Residencial",
    location: "Córdoba",
    area: "3.200 m²",
    year: "2026",
    status: "En construcción",
    image: "/templates/constructora/proyecto-edificio-obra.webp",
    description:
      "Un edificio residencial de 12 niveles pensado desde la estructura hacia afuera. Hormigón visto, grandes luces y unidades orientadas a maximizar luz natural — hoy en etapa de obra gruesa.",
    gallery: [
      "/templates/constructora/proyecto-edificio-obra.webp",
      "/templates/constructora/proceso-obra-grua.webp",
      "/templates/constructora/proceso-planos.webp",
    ],
  },
  {
    id: "02",
    slug: "edificio-cristal",
    name: "Edificio Cristal",
    category: "Corporativo",
    location: "Córdoba",
    area: "4.800 m²",
    year: "2025",
    status: "Terminado",
    image: "/templates/constructora/proyecto-edificio-terminado.webp",
    description:
      "Fachada vidriada sobre estructura de acero negro, pensada para oficinas de planta libre. La piel de vidrio filtra la luz sin perder la escala monumental que pedía el terreno.",
    gallery: [
      "/templates/constructora/proyecto-edificio-terminado.webp",
      "/templates/constructora/equipo-oficina.webp",
      "/templates/constructora/material-piedra.webp",
    ],
  },
  {
    id: "03",
    slug: "casa-alto-roble",
    name: "Casa Alto Roble",
    category: "Residencial",
    location: "Villa Allende, Córdoba",
    area: "420 m²",
    year: "2025",
    status: "Terminado",
    image: "/templates/constructora/proyecto-casa-madera-vidrio.webp",
    description:
      "Vivienda unifamiliar en dos plantas, madera y vidrio como protagonistas. El living se abre por completo al parque a través de paños fijos de piso a techo.",
    gallery: [
      "/templates/constructora/proyecto-casa-madera-vidrio.webp",
      "/templates/constructora/bento-living.webp",
      "/templates/constructora/bento-cocina.webp",
    ],
  },
  {
    id: "04",
    slug: "casa-costanera",
    name: "Casa Costanera",
    category: "Residencial",
    location: "Nueva Córdoba, Córdoba",
    area: "380 m²",
    year: "2024",
    status: "Terminado",
    image: "/templates/constructora/proyecto-casa-pileta.webp",
    description:
      "Casa de un nivel organizada alrededor de la pileta. Piedra, hormigón alisado y grandes aberturas corredizas disuelven el límite entre el interior y el exterior.",
    gallery: [
      "/templates/constructora/proyecto-casa-pileta.webp",
      "/templates/constructora/material-bano.webp",
      "/templates/constructora/material-piedra.webp",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

// ── Antes / Después ──────────────────────────────────────────────────────
export const BEFORE_AFTER = {
  before: { src: "/templates/constructora/antes-obra.webp", label: "En obra" },
  after: { src: "/templates/constructora/despues-terminado.webp", label: "Terminado" },
  note: "Imagen ilustrativa — el antes y el después no pertenecen necesariamente a la misma obra.",
};

// ── Números (DEMO — no representan datos reales) ──────────────────────────
export const NUMBERS = [
  { value: "120", prefix: "+", label: "Proyectos" },
  { value: "85", suffix: " mil", label: "M² construidos" }, // CountUp no soporta "." como separador de miles (lo lee como decimal)
  { value: "18", label: "Años" },
  { value: "4", label: "Provincias" },
];

// ── Servicios ─────────────────────────────────────────────────────────────
export type ServiceItem = { n: string; title: string; description: string; image: string };

export const SERVICES: ServiceItem[] = [
  {
    n: "01",
    title: "Arquitectura",
    description: "Diseño y desarrollo arquitectónico integral, desde el primer trazo hasta la documentación ejecutiva.",
    image: "/templates/constructora/proceso-planos.webp",
  },
  {
    n: "02",
    title: "Construcción",
    description: "Ejecución integral de la obra, con equipo propio y control de calidad en cada etapa.",
    image: "/templates/constructora/proyecto-edificio-obra.webp",
  },
  {
    n: "03",
    title: "Dirección de obra",
    description: "Coordinación técnica, control de avance y gestión de proveedores.",
    image: "/templates/constructora/proceso-obra-grua.webp",
  },
  {
    n: "04",
    title: "Desarrollos",
    description: "Proyectos residenciales y comerciales de escala, desde el terreno hasta la entrega de unidades.",
    image: "/templates/constructora/proyecto-edificio-terminado.webp",
  },
  {
    n: "05",
    title: "Reformas",
    description: "Transformación y puesta en valor de espacios existentes, sin perder identidad.",
    image: "/templates/constructora/bento-living.webp",
  },
  {
    n: "06",
    title: "Proyectos industriales",
    description: "Soluciones constructivas para naves, plantas y espacios productivos.",
    image: "/templates/constructora/material-piedra.webp",
  },
];

// ── Materiales ─────────────────────────────────────────────────────────────
export const MATERIALS = [
  { title: "Piedra", description: "Base y revestimiento. Textura cruda, sin pulir de más.", image: "/templates/constructora/material-piedra.webp" },
  { title: "Madera & Vidrio", description: "Calidez y transparencia trabajando juntas.", image: "/templates/constructora/proyecto-casa-madera-vidrio.webp" },
  { title: "Mármol & Superficies", description: "Terminaciones donde el detalle se nota de cerca.", image: "/templates/constructora/material-bano.webp" },
  { title: "Metal & Fachada", description: "Estructura y piel exterior, pensadas juntas desde el proyecto.", image: "/templates/constructora/proyecto-edificio-terminado.webp" },
];

// ── Proceso ─────────────────────────────────────────────────────────────
export const PROCESS = [
  { n: "01", title: "Idea", description: "Escuchamos el terreno, el uso y el presupuesto disponible." },
  { n: "02", title: "Proyecto", description: "Anteproyecto, diseño y documentación técnica." },
  { n: "03", title: "Presupuesto", description: "Cómputo y presupuesto detallado, sin sorpresas." },
  { n: "04", title: "Planificación", description: "Cronograma de obra, proveedores y logística." },
  { n: "05", title: "Construcción", description: "Ejecución con seguimiento semanal y control de calidad." },
  { n: "06", title: "Entrega", description: "Final de obra, terminaciones y entrega llave en mano." },
];

// ── Equipo (DEMO — nombres y roles ficticios) ─────────────────────────────
export const TEAM = [
  { name: "Lucía Ferreyra", role: "Arquitecta · Dirección de proyectos", bio: "Coordina el proyecto desde el anteproyecto hasta la entrega, en contacto directo con cada cliente." },
  { name: "Martín Bianchi", role: "Ingeniero civil", bio: "Responsable de cálculo estructural y control técnico de obra." },
  { name: "Sofía Ordóñez", role: "Arquitecta · Diseño", bio: "Desarrolla la propuesta espacial y el detalle de terminaciones." },
  { name: "Nicolás Paz", role: "Jefe de obra", bio: "Sigue el avance en el terreno, día a día, junto a los equipos." },
];

// ── Testimonio (DEMO) ──────────────────────────────────────────────────────
export const TESTIMONIAL = {
  quote: "El verdadero valor de una obra se nota cuando empieza a ser habitada.",
  author: "Cliente",
  project: "Casa Alto Roble, 2025",
};

// ── Contacto ────────────────────────────────────────────────────────────
export const PROJECT_TYPES = ["Casa", "Edificio", "Comercial", "Industrial", "Reforma", "Otro"];
