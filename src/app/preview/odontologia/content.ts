/**
 * Datos de ejemplo (ficticios) para la preview del template Odontología —
 * rubro #3, "Cala Odontología". Identidad propia: verde salvia/perla +
 * Manrope, sistema neumorfismo+glass — nada de piedra/bronce (Inmobiliaria)
 * ni marfil/dorado (Abogado). Ver el mega prompt del dueño (7/9) para el
 * detalle completo del pedido.
 *
 * Todo nombre, testimonio y cifra es contenido DEMO editable — no se
 * inventaron matrículas, obras sociales reales ni resultados clínicos.
 */

export const CLINIC = {
  name: "Cala",
  nameFull: "Cala Odontología",
  tagline: "Odontología integral · Córdoba",
  whatsappNumber: "5493511230000", // placeholder — reemplazar por el número real
  address: "Bv. Illia 240, Nueva Córdoba",
  hours: "Lun a Vie 9 a 19hs · Sáb 9 a 13hs",
  email: "hola@cala-odontologia.demo",
};

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Equipo", href: "#equipo" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Preguntas", href: "#faq" },
];

export type ServiceCategory = {
  n: string;
  title: string;
  teaser: string;
  img: string;
  items: string[];
};

export const SERVICES: ServiceCategory[] = [
  {
    n: "01",
    title: "Odontología General",
    teaser: "Control, limpieza y prevención de base.",
    img: "/templates/odontologia/general-control.webp",
    items: ["Consulta y diagnóstico", "Limpieza profesional", "Radiografías digitales", "Selladores y flúor"],
  },
  {
    n: "02",
    title: "Estética Dental",
    teaser: "Blanqueamiento, carillas y diseño de sonrisa.",
    img: "/templates/odontologia/estetica-guia-color.webp",
    items: ["Blanqueamiento dental", "Carillas de porcelana", "Diseño de sonrisa", "Resinas estéticas"],
  },
  {
    n: "03",
    title: "Ortodoncia & Alineadores",
    teaser: "Alineadores invisibles y brackets estéticos.",
    img: "/templates/odontologia/ortodoncia-brackets.webp",
    items: ["Alineadores invisibles", "Ortodoncia estética", "Ortodoncia convencional", "Evaluación de mordida"],
  },
  {
    n: "04",
    title: "Implantes & Rehabilitación",
    teaser: "Reemplazo de piezas con planificación digital.",
    img: "/templates/odontologia/implante-corona.webp",
    items: ["Implantes unitarios", "Rehabilitación completa", "Coronas y puentes", "Prótesis sobre implantes"],
  },
  {
    n: "05",
    title: "Endodoncia",
    teaser: "Tratamiento de conducto sin vueltas.",
    img: "/templates/odontologia/tech-radiografia.webp",
    items: ["Tratamiento de conducto", "Retratamientos", "Urgencias por dolor", "Diagnóstico con radiografía digital"],
  },
  {
    n: "06",
    title: "Periodoncia",
    teaser: "Salud de encías y sostén de cada pieza.",
    img: "/templates/odontologia/moldes-yeso.webp",
    items: ["Tratamiento de encías", "Limpieza profunda", "Control de bruxismo", "Mantenimiento periodontal"],
  },
  {
    n: "07",
    title: "Cirugía & Urgencias",
    teaser: "Extracciones y atención el mismo día.",
    img: "/templates/odontologia/equipo-cirugia.webp",
    items: ["Extracciones simples y quirúrgicas", "Terceros molares", "Atención de urgencias", "Traumatismos dentales"],
  },
  {
    n: "08",
    title: "Odontopediatría",
    teaser: "La primera consulta, pensada para chicos.",
    img: "/templates/odontologia/equipo-procedimiento.webp",
    items: ["Primera consulta infantil", "Selladores en niños", "Prevención de caries", "Control de crecimiento"],
  },
];

/** Motivos frecuentes de consulta — rail horizontal, sin fotos: iconos +
 * texto sobre superficie hundida (regla del material: los datos van en un
 * hueco). `icon` es el nombre exportado por lucide-react, mapeado en la
 * página para no meter JSX en el archivo de datos. */
export const PROBLEMS: { icon: string; label: string }[] = [
  { icon: "Zap", label: "Dolor de muela" },
  { icon: "Snowflake", label: "Sensibilidad" },
  { icon: "Moon", label: "Bruxismo" },
  { icon: "AlertTriangle", label: "Diente roto" },
  { icon: "Flame", label: "Encías inflamadas" },
  { icon: "XCircle", label: "Falta de piezas" },
  { icon: "Droplet", label: "Dientes manchados" },
  { icon: "Wind", label: "Mal aliento" },
];

export type TechSlide = {
  n: string;
  title: string;
  body: string;
  img?: string;
  icon?: string;
};

export const TECHNOLOGY: TechSlide[] = [
  {
    n: "01",
    title: "Radiología digital",
    body: "Radiografías al instante, con mucha menos radiación que la placa tradicional.",
    img: "/templates/odontologia/tech-radiografia.webp",
  },
  {
    n: "02",
    title: "Diagnóstico digital",
    body: "El plan de tratamiento se arma y se explica sobre una imagen 3D de tu boca.",
    img: "/templates/odontologia/tech-diagnostico-digital.webp",
  },
  {
    n: "03",
    title: "Historia clínica digital",
    body: "Cada estudio, receta y control queda guardado y a mano en el momento que haga falta.",
    img: "/templates/odontologia/tech-historia-clinica.webp",
  },
  {
    n: "04",
    title: "Fotografía clínica",
    body: "Registro fotográfico de cada etapa del tratamiento, para comparar el antes y el después.",
    img: "/templates/odontologia/tech-fotografia-clinica.webp",
  },
  {
    n: "05",
    title: "Sala equipada",
    body: "Consultorios propios, con instrumental esterilizado para cada paciente.",
    img: "/templates/odontologia/tech-sala.webp",
  },
];

/** `mp` (matrícula profesional) es un número DEMO — no corresponde a ningún
 * colegio ni registro real, mismo criterio que la matrícula de ejemplo del
 * template Abogado. */
export const TEAM = [
  {
    name: "Dra. Milagros Funes",
    role: "Odontología estética y rehabilitación",
    mp: "MP 45.231",
    bio: "Se enfoca en diseño de sonrisa y rehabilitación con implantes, con seguimiento fotográfico de cada caso.",
    photo: "/templates/odontologia/equipo-dra.webp",
  },
  {
    name: "Dr. Tomás Ibarra",
    role: "Ortodoncia y cirugía",
    mp: "MP 38.914",
    bio: "Ortodoncia con alineadores y brackets estéticos, además de cirugía y atención de urgencias.",
    photo: "/templates/odontologia/equipo-dr.webp",
  },
];

export const TESTIMONIALS = [
  { quote: "Saqué turno un lunes y el jueves ya tenía el diagnóstico y el presupuesto claro, sin vueltas.", author: "Ana P." },
  { quote: "Nunca me habían explicado tan bien qué me iban a hacer antes de empezar.", author: "Rodrigo M." },
  { quote: "El tratamiento de conducto que tanto le temía terminó siendo lo más tranquilo de mi semana.", author: "Julieta S." },
  { quote: "Llevé a mi hijo por primera vez y salió contento, eso ya es un montón.", author: "Nicolás D." },
  { quote: "La ortodoncista me mostró en pantalla cómo iba a terminar mi mordida antes de arrancar.", author: "Camila R." },
  { quote: "Perdí una muela en un accidente y me resolvieron el implante de punta a punta.", author: "Ezequiel V." },
];

/** Nombres genéricos, no obras sociales reales — la marca las reemplaza por
 * las que efectivamente acepta. */
export const INSURANCE = [
  "Obra social A",
  "Obra social B",
  "Prepaga C",
  "Prepaga D",
  "Obra social E",
  "Prepaga F",
];

export const FAQ = [
  { q: "¿Cómo solicito un turno?", a: "Completá el formulario de reserva o escribinos directo por WhatsApp — te confirmamos día y horario a la brevedad." },
  { q: "¿Cuánto dura la primera consulta?", a: "Entre 30 y 45 minutos: diagnóstico, radiografía si hace falta, y un presupuesto claro antes de empezar cualquier tratamiento." },
  { q: "¿Trabajan con obras sociales o prepagas?", a: "Sí, con varias — contanos la tuya cuando escribas y te confirmamos la cobertura." },
  { q: "¿Qué pasa si tengo una urgencia?", a: "Reservamos lugar todos los días para urgencias. Escribinos por WhatsApp y te damos el primer horario disponible." },
  { q: "¿Puedo consultar por un tratamiento estético sin compromiso?", a: "Sí, la primera consulta es para evaluar y armar el plan — vos decidís si avanzar." },
  { q: "¿Puedo pedir presupuesto antes de comenzar?", a: "Siempre. Ningún tratamiento arranca sin que sepas antes el costo y los pasos." },
  { q: "¿Qué debo llevar a mi primera consulta?", a: "Si tenés estudios o radiografías previas, traelas — si no, no hay problema, empezamos desde cero." },
];

export const BOOKING_MOTIVOS = [
  "Consulta general",
  "Estética dental",
  "Ortodoncia",
  "Implantes",
  "Dolor / urgencia",
  "Otro",
];

export const BOOKING_HORARIOS = ["Mañana", "Mediodía", "Tarde"];

export const GALLERY = [
  { src: "/templates/odontologia/clinica-sala.webp", alt: "Sala de atención, silla y equipo dental" },
  { src: "/templates/odontologia/equipo-cirugia.webp", alt: "Equipo trabajando en un procedimiento" },
  { src: "/templates/odontologia/estetica-guia-color.webp", alt: "Selección de color para una restauración estética" },
  { src: "/templates/odontologia/ortodoncia-brackets.webp", alt: "Control de ortodoncia con brackets" },
  { src: "/templates/odontologia/tech-diagnostico-digital.webp", alt: "Consulta con diagnóstico digital en pantalla" },
  { src: "/templates/odontologia/moldes-yeso.webp", alt: "Moldes de yeso para planificación de tratamiento" },
  { src: "/templates/odontologia/clinica-detalle.webp", alt: "Detalle de consultorio" },
  { src: "/templates/odontologia/equipo-procedimiento.webp", alt: "Procedimiento con luz de fotocurado" },
  { src: "/templates/odontologia/implante-corona.webp", alt: "Corona sobre implante" },
];
