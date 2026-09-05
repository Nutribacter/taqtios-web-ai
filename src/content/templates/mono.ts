import type { Template } from "./types";

export const mono: Template = {
  slug: "mono",
  name: "Mono",
  category: "Portafolio",
  style: "Minimalista / Editorial",
  tags: ["Portafolio", "Minimalista", "Editorial"],
  status: "ready",
  featured: false,
  previewImage: "/templates/mono/cover.jpg",
  description:
    "Portfolio de una sola columna para diseñadores y creativos independientes: un proyecto a la vez, tipografía cuidada, sin distracciones ni relleno.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Mono",
      description:
        "El prompt principal: genera el portfolio completo. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en portfolios minimalistas de diseñadores y creativos independientes, con el nivel de los mejores portfolios premiados en Awwwards en la categoría "minimal".

CONTEXTO
Voy a construir el portfolio de [NAME], [DISCIPLINA: diseñador/a de producto, ilustrador/a, fotógrafo/a, developer creativo/a, etc.]. Reemplazá cada corchete con mi información real; si falta un dato, dejalo como [FALTA: ...] en vez de inventarlo.

OBJETIVO
Que quien visite el sitio (un cliente potencial o un reclutador) entienda en segundos el nivel de trabajo de [NAME] viendo 3-4 proyectos bien mostrados, sin tener que leer una biografía larga primero.

AUDIENCIA
Clientes o reclutadores que revisan 10-15 portfolios en una sesión y descartan rápido los que se ven sobrecargados o los que esconden el trabajo detrás de animaciones innecesarias.

MARCA
Nombre: [NAME]. Tono: seguro y directo, en primera persona. Paleta: monocromática (blanco/negro/grises) con máximo un acento de color usado con extrema moderación — el nombre del template lo dice: "Mono".

DIRECCIÓN DE DISEÑO
Una sola columna central (max-width acotado, ej. 720-960px), todo el contenido fluye verticalmente sin sidebars ni grids complejos. Tipografía como protagonista: buena escala tipográfica, buen interlineado, nada de decoración. El trabajo se muestra con imágenes grandes intercaladas con texto breve, como un ensayo bien diseñado, no como una galería de tarjetas.

ARQUITECTURA DE INFORMACIÓN
Header simple (nombre + 2-3 links: Trabajo, Sobre mí, Contacto) → Intro breve (una o dos oraciones sobre quién es y qué hace) → Proyectos (cada uno con imagen(es), título, una descripción corta y el rol/herramientas) → Sobre mí (párrafo breve, sin biografía extensa) → Contacto (mail + 1-2 redes, nada más).

ESTRUCTURA DE PÁGINA
1. Intro: nombre en tipografía grande + una línea que dice qué hace ("Diseño producto para startups B2B" en vez de "Soy un apasionado diseñador multidisciplinario").
2. Proyectos: cada uno con su imagen o secuencia de imágenes a ancho de columna, título del proyecto, una descripción de 1-2 oraciones (qué se hizo, para quién) y el rol/herramientas en texto chico.
3. Sobre mí: un párrafo de 3-4 oraciones, sin foto de perfil obligatoria (opcional, chica, circular, si el creativo la quiere).
4. Contacto: mail clickeable grande + links a 1-2 redes relevantes (no una fila de 8 iconos sociales).

COMPONENTES
Sin cards con sombra ni bordes redondeados llamativos — las imágenes van a sangre de la columna o con un margen mínimo. Los links de contacto llevan underline simple, sin botones grandes.

DIRECCIÓN DE COPY
Descripciones de proyecto concretas: qué se hizo, para quién, con qué resultado si lo hay — nunca "un proyecto muy interesante en el que exploré varias posibilidades creativas".

REGLAS RESPONSIVE
La columna central se ajusta con padding lateral generoso en mobile (nunca el texto pegado a los bordes de la pantalla). Las imágenes de proyecto mantienen su proporción original, sin recortes forzados.

ANIMACIONES
Fade-up muy sutil al entrar cada proyecto en viewport. Nada más — este template se apoya en la calidad de la tipografía y las imágenes, no en el movimiento. Cualquier animación de más compite con la sobriedad que pide el nombre "Mono".

ACCESIBILIDAD
Contraste alto por defecto (paleta monocromática ya lo favorece); cuidar que el único acento de color también cumpla 4.5:1 si se usa en texto.

SEO
Title: "[NAME] — [DISCIPLINA]". Meta description con una línea sobre el tipo de trabajo. Si cada proyecto tiene su propia URL, título y descripción específicos por proyecto.

RENDIMIENTO
Las imágenes de proyecto con dimensiones explícitas y lazy loading debajo del fold — en un portfolio minimalista, un salto de layout por una imagen sin dimensiones se nota mucho más que en un sitio recargado.

REQUISITOS TÉCNICOS
HTML semántico simple, cero dependencias de animación pesadas — este template debería poder construirse casi sin JavaScript.

CONTROL DE CALIDAD FINAL
¿Se entiende el nivel de trabajo con solo scrollear, sin leer nada? ¿Hay algún elemento decorativo que no aporte nada y se pueda sacar? ¿La tipografía sola sostiene la sensación de calidad?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el único acento de color y la tipografía sin romper el minimalismo.",
      content: `Ajustá SOLO la identidad de Mono:
1. Acento: agregá [COLOR_DE_MARCA] como único color, usado con moderación extrema (links, algún detalle chico) — nunca como fondo de sección ni en más de 2-3 lugares por pantalla.
2. Tipografía: si preferís otra fuente a la elegida, mantené el criterio de buena legibilidad y buen interlineado por sobre lo decorativo.
3. Si tenés un logo/isotipo personal, va chico en el header, nunca compitiendo en tamaño con el nombre en texto.
No toques: la columna central de ancho acotado, ni el espaciado entre proyectos.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá tus proyectos y tu bio real.",
      content: `Reescribí el copy de Mono con mi información real:

Nombre: [NAME]
Disciplina/qué hago (una línea): [QUE_HAGO]
Proyectos (título, descripción de 1-2 oraciones, rol/herramientas — mínimo 3): [PROYECTOS]
Sobre mí (3-4 oraciones): [SOBRE_MI]
Contacto: [MAIL] y [REDES]

Reglas:
- Cero relleno tipo "apasionado", "multidisciplinario", "creativo nato" sin nada concreto detrás.
- Cada proyecto dice qué se hizo y para quién, no solo cómo se sintió hacerlo.
- Si falta un proyecto o dato real, dejá [FALTA: proyecto real] — mejor 3 proyectos reales que 6 con relleno.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "La animación mínima que este template necesita, y ni una más.",
      content: `Sumá SOLO esta animación a Mono:
1. Fade-up de 12-16px al entrar cada proyecto en viewport, una sola vez, 400ms, ease-out. Respetar prefers-reduced-motion.
No agregues absolutamente nada más: sin hover effects elaborados en las imágenes, sin scroll parallax, sin transiciones de página custom. La sobriedad es la identidad de este template — cualquier efecto de más lo convierte en otra cosa.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO simple: que aparezcas cuando alguien busque tu nombre y disciplina.",
      content: `Optimizá el SEO de [NAME]:
1. Title: "[NAME] — [DISCIPLINA]".
2. Meta description con una línea concreta sobre el tipo de trabajo.
3. Un solo <h1> con el nombre; los títulos de proyecto en <h2>.
4. Open Graph con la imagen del primer proyecto (no una foto de perfil genérica, salvo que sea fotografía y la cara sea parte del trabajo).
5. Alt text descriptivo en cada imagen de proyecto.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Columna central y tipografía en mobile.",
      content: `Revisá el responsive de Mono en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Padding lateral generoso en mobile (mínimo 20-24px), nunca el texto pegado al borde de la pantalla.
2. Las imágenes de proyecto mantienen su proporción original en todos los anchos, sin recortes forzados a cuadrado.
3. La tipografía del intro se achica proporcionalmente pero mantiene jerarquía clara frente al resto del texto.
4. Verificar que el interlineado siga siendo cómodo de leer en pantallas chicas (no comprimir el line-height solo porque el ancho bajó).`,
    },
  ],
};
