/**
 * Datos de ejemplo (ficticios) para la preview del template Abogado.
 * REBUILD (7/9, 2ª pasada): paleta clara marfil/carbón + dorado como
 * acento puntual — NO negro casi total como la v1, que el dueño rechazó
 * por genérica. Ver el mega prompt de rebuild para el detalle completo.
 */

export const PRACTICE_AREAS = [
  {
    n: "01",
    title: "Derecho Laboral",
    body: "Despidos, indemnizaciones, accidentes de trabajo y reclamos de ART.",
    img: "/templates/abogado/entrega-documento.webp",
  },
  {
    n: "02",
    title: "Civil y Comercial",
    body: "Contratos, cobros, sociedades y todo conflicto entre partes privadas.",
    img: "/templates/abogado/area-comercial.webp",
  },
  {
    n: "03",
    title: "Familia y Sucesiones",
    body: "Divorcios, alimentos, régimen de visitas y declaratorias de herederos.",
    img: "/templates/abogado/area-familia.webp",
  },
  {
    n: "04",
    title: "Derecho Penal",
    body: "Defensa en causas penales, desde la denuncia hasta el juicio.",
    img: "/templates/abogado/area-penal.webp",
  },
  {
    n: "05",
    title: "Defensa del Consumidor",
    body: "Reclamos contra empresas, bancos, seguros y servicios que incumplen.",
    img: "/templates/abogado/documentos-lupa.webp",
  },
  {
    n: "06",
    title: "Daños y Seguros",
    body: "Accidentes de tránsito, indemnizaciones y negociación con aseguradoras.",
    img: "/templates/abogado/area-danos.webp",
  },
];

export const SECONDARY_SERVICES = [
  { category: "Laboral", label: "Despido sin causa", desc: "Reclamo de indemnización y diferencias salariales cuando el despido no tiene una causa justificada." },
  { category: "Laboral", label: "Accidentes de trabajo", desc: "Gestión del reclamo por incapacidad ante la ART o el empleador, con pericia médica propia." },
  { category: "Laboral", label: "Reclamos de ART", desc: "Revisión de rechazos o pagos insuficientes de la aseguradora de riesgos del trabajo." },
  { category: "Civil", label: "Redacción de contratos", desc: "Contratos a medida (locación, servicios, compraventa) que evitan conflictos a futuro." },
  { category: "Civil", label: "Cobro de deudas", desc: "Gestión extrajudicial y judicial de cobro, desde la intimación hasta el embargo." },
  { category: "Civil", label: "Constitución de sociedades", desc: "Armado de la sociedad más conveniente según tu actividad, con toda la documentación." },
  { category: "Familia", label: "Divorcios y alimentos", desc: "Divorcio de mutuo acuerdo o contencioso, y fijación o revisión de cuota alimentaria." },
  { category: "Familia", label: "Sucesiones", desc: "Declaratoria de herederos y partición de bienes, con el trámite lo más simple posible." },
  { category: "Familia", label: "Régimen de visitas", desc: "Acuerdo o reclamo judicial de régimen de comunicación con hijos menores." },
  { category: "Penal", label: "Defensa penal", desc: "Defensa técnica desde la primera declaración hasta la resolución de la causa." },
  { category: "Penal", label: "Excarcelaciones", desc: "Solicitud de libertad durante el proceso cuando la situación procesal lo permite." },
  { category: "Penal", label: "Querellas", desc: "Representación de la víctima como parte querellante en el proceso penal." },
  { category: "Empresarial", label: "Asesoramiento societario", desc: "Acompañamiento legal continuo para la operación diaria de tu empresa." },
  { category: "Empresarial", label: "Contratos comerciales", desc: "Contratos entre empresas (distribución, provisión, confidencialidad) con respaldo legal real." },
  { category: "Consumidor", label: "Reclamos bancarios", desc: "Cargos indebidos, tasas mal aplicadas o negativas injustificadas de entidades bancarias." },
  { category: "Consumidor", label: "Seguros y garantías", desc: "Reclamos por rechazo de siniestros o incumplimiento de garantías de productos y servicios." },
];

export const SERVICE_CATEGORIES = ["Laboral", "Civil", "Familia", "Penal", "Empresarial", "Consumidor"];

export const RESULTS = [
  { v: "18", suffix: "", l: "años de trayectoria" },
  { v: "1200", suffix: "+", l: "casos resueltos" },
  { v: "92", suffix: "%", l: "resolución favorable" },
  { v: "3400", suffix: "+", l: "clientes atendidos" },
];

export const PARTNERS = [
  { initials: "MZ", name: "Mariana Zafra", title: "Socia fundadora", area: "Civil y Comercial", bio: "18 años ejerciendo en Córdoba. Dirige las causas comerciales y societarias del estudio.", photo: "/templates/abogado/mariana.webp" },
  { initials: "FC", name: "Federico Celis", title: "Socio fundador", area: "Derecho Laboral", bio: "Especialista en despidos y accidentes de trabajo. Docente de posgrado en la UNC.", photo: "/templates/abogado/federico.webp" },
  { initials: "LR", name: "Lucía Roldán", title: "Asociada senior", area: "Familia y Sucesiones", bio: "Se enfoca en resolver divorcios y sucesiones con el menor desgaste posible para la familia.", photo: "/templates/abogado/lucia.webp" },
  { initials: "JP", name: "Julián Pizarro", title: "Asociado senior", area: "Derecho Penal", bio: "Defensor penal con más de una década de trayectoria en los tribunales de Córdoba.", photo: "/templates/abogado/julian.webp" },
];

export const PROCESS = [
  { n: "01", title: "Consulta inicial", body: "Nos contás tu situación, en el estudio o por videollamada. Sin costo la primera vez." },
  { n: "02", title: "Análisis y estrategia", body: "Revisamos la documentación y armamos el camino más corto hacia tu resolución." },
  { n: "03", title: "Gestión del caso", body: "Te mantenemos al tanto en cada paso, con lenguaje claro, sin tecnicismos de más." },
  { n: "04", title: "Resolución", body: "Cerramos el caso de la forma más favorable posible, con el mismo compromiso del día uno." },
];

/** Casos DEMO, claramente genéricos — no afirman resultados jurídicos reales. */
export const CASES = [
  {
    n: "01",
    category: "Laboral",
    problem: "Despido sin causa tras 9 años de antigüedad.",
    approach: "Reclamo de indemnización agravada y diferencias salariales.",
    result: "Acuerdo homologado favorable, sin llegar a juicio.",
  },
  {
    n: "02",
    category: "Daños y Seguros",
    problem: "Accidente de tránsito con incapacidad parcial.",
    approach: "Pericia médica propia y negociación directa con la aseguradora.",
    result: "Indemnización por encima de la oferta inicial de la compañía.",
  },
  {
    n: "03",
    category: "Familia",
    problem: "Sucesión con bienes en dos provincias.",
    approach: "Declaratoria de herederos y partición coordinada entre jurisdicciones.",
    result: "Proceso resuelto en la mitad del tiempo estimado por el fuero.",
  },
  {
    n: "04",
    category: "Consumidor",
    problem: "Cargo bancario indebido sostenido por meses.",
    approach: "Reclamo administrativo y posterior demanda por daño punitivo.",
    result: "Devolución del monto más una compensación adicional.",
  },
];

/** Un color distinto por categoría para el badge de cada caso — si los 4
 * badges comparten el mismo dorado, las tarjetas se leen idénticas a
 * simple vista. Todos calibrados para leerse bien sobre el fondo oscuro
 * de la card (#221F1B). */
export const CASE_CATEGORY_COLOR: Record<string, string> = {
  Laboral: "#D4A65E",
  "Daños y Seguros": "#C97B5E",
  Familia: "#8FAE7A",
  Consumidor: "#7FA8C9",
};

export const TESTIMONIALS = [
  { quote: "Me explicaron cada paso en criollo, nunca me sentí perdida con los tiempos judiciales.", author: "Valeria S.", caso: "Divorcio y régimen de visitas" },
  { quote: "Recuperé lo que me correspondía del accidente en menos de lo que esperaba.", author: "Martín O.", caso: "Accidente de tránsito" },
  { quote: "Profesionales serios, directos y disponibles cuando los necesité.", author: "Diego H.", caso: "Despido laboral" },
  { quote: "La sucesión de mi papá parecía eterna hasta que empezamos a trabajar con ellos.", author: "Carla N.", caso: "Sucesión" },
  { quote: "Me devolvieron la plata que el banco me cobraba de más, algo que ya daba por perdido.", author: "Ramiro V.", caso: "Defensa del consumidor" },
];

export const FAQ = [
  { q: "¿La primera consulta tiene costo?", a: "No. La primera consulta es gratuita y sirve para evaluar tu caso y explicarte los pasos a seguir, sin ningún compromiso." },
  { q: "¿Cómo se cobran los honorarios?", a: "Depende del tipo de caso: puede ser un monto fijo, por hora, o un porcentaje sobre lo que se recupere (frecuente en accidentes y daños). Te lo explicamos antes de empezar, por escrito." },
  { q: "¿Cuánto dura un juicio tipo?", a: "Varía mucho según el fuero y la complejidad — un reclamo laboral simple puede resolverse en meses, una sucesión puede llevar más tiempo. Te damos una estimación realista en la consulta inicial." },
  { q: "¿Atienden por videollamada?", a: "Sí, para quien no pueda acercarse al estudio. La consulta inicial y buena parte del seguimiento se pueden hacer así." },
  { q: "¿Qué documentación necesito para la primera consulta?", a: "Lo que tengas a mano: contratos, notificaciones, recibos o certificados. Si no tenés nada todavía, igual podemos avanzar con tu relato del caso." },
  { q: "¿En qué localidades trabajan?", a: "Córdoba Capital y el interior de la provincia. Consultanos por tu caso puntual si estás fuera de esta zona." },
];
