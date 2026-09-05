import type { Template } from "./types";

export const prisma: Template = {
  slug: "prisma",
  name: "Prisma",
  category: "Estudios Creativos",
  style: "Maximalista / Colorido",
  tags: ["Estudio Creativo", "Maximalista", "Colorido"],
  status: "ready",
  featured: false,
  previewImage: "/templates/prisma/cover.jpg",
  description:
    "Landing maximalista para estudios creativos y de branding: color a máximo volumen, tipografía experimental y composición que rompe la grilla — el opuesto declarado de Black Studio.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Prisma",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Art Director + Frontend Engineer especializado en estudios creativos maximalistas, con el nivel de los estudios de branding más audaces y coloridos de la escena internacional.

CONTEXTO
Voy a construir la landing de [STUDIO_NAME], un estudio de [DISCIPLINA: branding, ilustración, diseño de producto, motion]. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...].

OBJETIVO
Que un cliente potencial sienta la energía creativa del estudio de inmediato — acá el diseño en sí mismo es la prueba de capacidad, no un texto que lo explique.

AUDIENCIA
Marcas y clientes que buscan algo memorable y distinto, no un estudio "seguro" — valoran la audacia visual como señal de que van a conseguir algo que se destaque.

MARCA
Nombre: [STUDIO_NAME]. Tono: juguetón, seguro, con personalidad fuerte. Paleta: MÚLTIPLES colores saturados conviviendo (no un solo acento — acá el maximalismo es la identidad), fondo claro para que el color explote, tipografía experimental o con mucho carácter para títulos.

DIRECCIÓN DE DISEÑO
Romper la grilla a propósito: elementos superpuestos, tamaños de texto que varían mucho entre sí, formas geométricas grandes de color sólido como elementos decorativos con intención (no ruido). Es el OPUESTO declarado de un estudio minimalista: acá "menos" no es "más", más SÍ es más, pero con criterio de composición, no caos real.

ARQUITECTURA DE INFORMACIÓN
Nav (logo con personalidad + Trabajo + Contacto) → Hero con statement audaz + elementos gráficos grandes → Proyectos (grilla que rompe el orden, tamaños variados) → Servicios/disciplinas → Equipo (fotos con personalidad, no corporativas) → Contacto directo con energía.

ESTRUCTURA DE PÁGINA
1. Hero: statement corto y con personalidad, tipografía enorme y con carácter, formas de color grande como fondo/acompañamiento.
2. Proyectos: grilla asimétrica real (tamaños de card variados, no todos iguales), cada uno con su color dominante propio.
3. Servicios: lista de disciplinas con tratamiento gráfico distinto para cada una (no una lista aburrida uniforme).
4. Equipo: fotos con personalidad (poses reales, no corporativas), nombres con tipografía jugada.
5. Contacto: CTA con energía, nunca un formulario gris aburrido.

COMPONENTES
Botones con formas no convencionales (esquinas muy redondeadas, o formas orgánicas), colores sólidos saturados, sin miedo al contraste de color contra color. Cards de proyecto con su propio color de fondo, cada una distinta a la de al lado.

DIRECCIÓN DE COPY
Con personalidad y confianza, un poco irreverente si es coherente con el tono del estudio real. Nunca genérico tipo "soluciones creativas integrales".

REGLAS RESPONSIVE
En mobile la grilla asimétrica se simplifica pero mantiene variación de tamaños (no cae en una columna perfectamente uniforme, eso mataría la identidad). Los colores y formas se mantienen vibrantes.

ANIMACIONES
Movimiento con personalidad: elementos que entran con rebote (spring, no solo fade), formas de color que se desplazan levemente con el scroll. Acá SÍ hay lugar para más energía animada que en los templates minimalistas — pero cada movimiento tiene que tener intención, no ser ruido porque sí.

ACCESIBILIDAD
Contraste 4.5:1 en todo texto, cuidando especialmente las combinaciones de color saturado contra color saturado (verificar cada combinación real, no asumir que "todo colorido" pasa el mínimo).

SEO
Title: "[STUDIO_NAME] — [DISCIPLINA]". Open Graph con la imagen más representativa y colorida del estudio.

RENDIMIENTO
Las formas de color pueden ser CSS/SVG (livianas) en vez de imágenes pesadas cuando sea posible, para no perder velocidad por el maximalismo visual.

REQUISITOS TÉCNICOS
HTML semántico a pesar de la composición visual libre — el orden de lectura lógico no se sacrifica por el efecto visual.

CONTROL DE CALIDAD FINAL
¿La energía se siente intencional o caótica sin criterio? ¿Cada color pasa el contraste mínimo? ¿Un cliente se va con ganas de trabajar con este estudio o se siente abrumado?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá la paleta múltiple sin perder la energía maximalista.",
      content: `Ajustá SOLO la identidad de Prisma:
1. Paleta: reemplazá los colores por los de [PALETA_DE_MARCA] si el estudio tiene colores propios — mantené MÚLTIPLES colores conviviendo, nunca reducir a uno solo (eso rompe la identidad maximalista del template).
2. Logo: con personalidad, puede ser grande y protagonista en el nav.
No toques: la ruptura intencional de grilla ni la variación de tamaños en la grilla de proyectos.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá proyectos y equipo reales, con personalidad.",
      content: `Reescribí el copy de Prisma con mi información real:

Estudio: [STUDIO_NAME]
Disciplina: [DISCIPLINA]
Statement del hero (con personalidad): [STATEMENT]
Proyectos (cliente, qué se hizo — mínimo 4): [PROYECTOS]
Servicios/disciplinas: [SERVICIOS]
Equipo (nombre, rol): [EQUIPO]
Contacto: [CONTACTO]

Reglas:
- Nunca inventar un proyecto — si falta, dejar [FALTA: proyecto real].
- El tono puede ser irreverente pero siempre coherente con cómo el estudio real se comunica.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Acá sí hay lugar para más energía animada, con intención.",
      content: `Sumá estas animaciones a Prisma:
1. Entrada con rebote (spring physics, no solo fade) en los elementos del hero.
2. Formas de color de fondo que se desplazan levemente (parallax sutil) con el scroll.
3. Cards de proyecto con leve rotación o escala al hover, distinta para cada tamaño de card.
Cuidado: cada animación tiene que tener una razón (dirigir atención, dar personalidad) — no agregues movimiento porque "queda más maximalista", eso es ruido, no diseño.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO simple, con una imagen representativa del estilo del estudio.",
      content: `Optimizá el SEO de [STUDIO_NAME]:
1. Title: "[STUDIO_NAME] — [DISCIPLINA]".
2. Meta description con el statement del estudio.
3. Open Graph con la imagen más representativa y colorida (probablemente el hero).`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "La grilla asimétrica tiene que seguir sintiéndose viva en mobile.",
      content: `Revisá el responsive de Prisma en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. La grilla de proyectos mantiene variación de tamaños en mobile (no cae en una columna perfectamente uniforme).
2. Los colores y formas se mantienen vibrantes y visibles, sin perder saturación por compresión de imagen.
3. Verificar que ningún elemento con posición/rotación libre desborde el ancho de pantalla en mobile.`,
    },
  ],
};
