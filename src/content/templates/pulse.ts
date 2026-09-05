import type { Template } from "./types";

export const pulse: Template = {
  slug: "pulse",
  name: "Pulse",
  category: "Gimnasios",
  style: "Audaz / Enérgico",
  tags: ["Gimnasio", "Audaz", "Enérgico"],
  status: "ready",
  featured: false,
  previewImage: "/templates/pulse/cover.jpg",
  description:
    "Landing de alta energía para gimnasios y estudios: tipografía gruesa, foto de acción real y clases con horarios que se filtran solos.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Pulse",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en landings de gimnasios y estudios de entrenamiento, con el nivel de las mejores marcas boutique de fitness.

CONTEXTO
Voy a construir la landing de [GYM_NAME], un [DESCRIBIR: gimnasio funcional, estudio de yoga, box de crossfit, etc.] en [CIUDAD]. Reemplazá cada corchete con mi información real; nunca inventes horarios, precios ni instructores.

OBJETIVO
Que alguien que está evaluando empezar a entrenar sienta la energía del lugar en los primeros segundos y agende una clase de prueba sin fricción.

AUDIENCIA
Gente que ya decidió que quiere empezar a entrenar pero todavía no eligió dónde — compara 2-3 lugares por redes/Google antes de ir presencialmente.

MARCA
Nombre: [GYM_NAME]. Tono: directo, motivador sin ser gritón ("VENÍ Y ROMPELA" queda mal si no es literalmente esa la marca). Paleta: fondo oscuro o muy contrastado, UN color de acento vibrante (no dos compitiendo), tipografía gruesa y condensada para títulos.

DIRECCIÓN DE DISEÑO
Fotografía de acción real (gente entrenando, no stock genérico de sonrisas perfectas) a página completa en el hero. Tipografía como fuerza: títulos grandes, gruesos, en mayúsculas donde tenga sentido. Contraste alto entre texto y fondo para que se lea la energía incluso en un vistazo rápido en el celular.

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Clases + Horarios + CTA) → Hero con foto de acción + propuesta + CTA a clase de prueba → Disciplinas/clases (cards con nombre, nivel, duración) → Horarios (grilla filtrable por día) → Instructores (foto + nombre + especialidad) → Planes → CTA final con dirección y horario de atención.

ESTRUCTURA DE PÁGINA
1. Hero: foto de acción real a página completa, headline corto y directo ("Entrená en serio" o similar), CTA "Reservá tu clase de prueba".
2. Disciplinas: cards por tipo de clase (funcional, fuerza, movilidad, etc.) con nivel de intensidad y duración.
3. Horarios: grilla semanal, filtrable por día de la semana, cada clase con su horario y disciplina.
4. Instructores: foto real + nombre + especialidad, sin biografías largas.
5. Planes: 2-3 opciones claras (mensual, trimestral, clase suelta) con lo que incluye cada uno.
6. CTA final: dirección, horario de atención, botón de WhatsApp o reserva.

COMPONENTES
Botón CTA: sólido, color de acento vibrante, texto en mayúsculas, sin ser un botón "gritón" con múltiples efectos — la energía la da la tipografía y la foto, no un botón con 5 animaciones.

DIRECCIÓN DE COPY
Frases cortas y directas. Nombres de clase concretos (no "Clase Mágica de Transformación Total"). Los horarios y precios siempre exactos, nunca "consultar" si el dato existe.

REGLAS RESPONSIVE
En mobile la grilla de horarios pasa de vista semanal completa a un selector de día + lista de clases de ese día (una grilla de 7 columnas no entra legible en 375px).

ANIMACIONES
Fade-up rápido (300ms, más rápido que el estándar — este template tiene energía) al entrar cada sección. Las cards de disciplina pueden tener un leve efecto de "empuje" al hover (translateY -4px + sombra). Nada de parallax pesado que ralentice el scroll — la sensación tiene que ser ágil.

ACCESIBILIDAD
Contraste alto por diseño (fondo oscuro + texto claro), pero verificar que el color de acento sobre el fondo oscuro pase 4.5:1 si se usa en texto (no solo en botones grandes donde el mínimo es 3:1).

SEO
Title: "[GYM_NAME] — [DISCIPLINA] en [CIUDAD]". Schema.org tipo LocalBusiness o ExerciseGym con dirección y horarios.

RENDIMIENTO
La foto de acción del hero es el elemento más pesado: WebP/AVIF con compresión que mantenga nitidez del movimiento, dimensiones explícitas.

REQUISITOS TÉCNICOS
Schema.org LocalBusiness en JSON-LD con horarios de atención reales.

CONTROL DE CALIDAD FINAL
¿Se siente la energía del lugar con solo ver el hero? ¿Se puede encontrar el horario de una clase en menos de 10 segundos? ¿El acento se usa con fuerza pero sin saturar cada elemento de la página?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el acento vibrante sin perder la energía del template.",
      content: `Ajustá SOLO la identidad de Pulse:
1. Color de acento: reemplazá por [COLOR_DE_MARCA], verificando que mantenga la sensación de energía (evitar tonos pasteles que le bajen la fuerza al template).
2. Logo: integralo en el nav; si es un isotipo fuerte, puede repetirse como marca de agua en el CTA final.
3. Tipografía: si preferís otra fuente gruesa/condensada, mantené el mismo peso visual — una tipografía fina le rompe el tono a este template.
No toques: la estructura de la grilla de horarios ni el tamaño de la foto del hero.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá clases, horarios e instructores reales.",
      content: `Reescribí el copy de Pulse con mi información real:

Gimnasio/estudio: [GYM_NAME]
Disciplina principal: [DISCIPLINA]
Ciudad y dirección: [DIRECCION]
Clases (nombre, nivel, duración — mínimo 4): [CLASES]
Horarios reales por día: [HORARIOS]
Instructores (nombre, especialidad): [INSTRUCTORES]
Planes y precios: [PLANES]

Reglas:
- Nunca inventar horarios ni precios — si falta un dato, dejar [FALTA: horario real].
- Nombres de clase concretos y descriptivos, sin relleno motivacional vacío.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento ágil que transmita energía sin ralentizar.",
      content: `Sumá estas animaciones a Pulse:
1. Fade-up rápido (300ms) al entrar cada sección en viewport.
2. Cards de disciplina: translateY(-4px) + sombra al hover, transición de 150ms.
3. Los horarios de la clase seleccionada en el filtro por día pueden resaltarse con un fade rápido al cambiar de día.
No agregues: parallax en la foto del hero, ni animaciones que tarden más de 400ms — este template se mueve rápido, no pausado.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org de negocio local con horarios reales.",
      content: `Optimizá el SEO de [GYM_NAME]:
1. Title: "[GYM_NAME] — [DISCIPLINA] en [CIUDAD]".
2. JSON-LD Schema.org LocalBusiness (o ExerciseGym si aplica) con address, openingHours y telephone.
3. Open Graph con la foto de acción del hero.
4. Meta description con la propuesta + ubicación, bajo 155 caracteres.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "La grilla de horarios es lo más delicado en mobile.",
      content: `Revisá el responsive de Pulse en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Grilla de horarios: de vista semanal en desktop a selector de día + lista en mobile (una grilla de 7 columnas no entra legible en 375px).
2. Cards de disciplina e instructores en una columna en mobile.
3. La foto del hero mantiene el foco en la acción (no cortar la parte del movimiento al recortar para mobile).
4. Botón de reserva/CTA con área táctil de mínimo 44px, considerando sticky si la página es larga.`,
    },
  ],
};
