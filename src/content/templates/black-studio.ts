import type { Template } from "./types";

export const blackStudio: Template = {
  slug: "black-studio",
  name: "Black Studio",
  category: "Agencies",
  style: "Editorial / Dark / Minimal",
  tags: ["Agency", "Editorial", "Dark", "Minimal"],
  status: "ready",
  featured: true,
  previewImage: "/templates/black-studio/cover.jpg",
  description:
    "Landing editorial para agencias creativas: tipografía enorme como protagonista, grilla de proyectos a página completa y cero decoración — el trabajo se muestra solo.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Black Studio",
      description:
        "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Art Director + Frontend Engineer especializado en sitios editoriales de estudios creativos, con el nivel de Pentagram, Locomotive o Résumé.

CONTEXT
Voy a construir la landing de [AGENCY_NAME], un estudio de [DISCIPLINA: branding / diseño web / producción audiovisual / lo que corresponda]. Reemplazá cada corchete con mi información real antes de generar nada; si un dato no te lo doy, dejalo marcado como [FALTA: ...] en vez de inventarlo.

OBJECTIVE
Que un cliente potencial entienda en 5 segundos qué tipo de trabajo hace el estudio con solo ver dos proyectos, y sienta que está frente a un equipo con criterio, no frente a una agencia genérica de "soluciones digitales".

TARGET AUDIENCE
Directores de marketing y fundadores de marca que ya vieron 20 sitios de agencias esta semana y descartan en dos segundos los que se ven a "plantilla".

BRAND
Nombre: [AGENCY_NAME]. Tono: seguro, seco, sin adjetivos vacíos ("innovador", "disruptivo"). El estudio deja que el trabajo hable. Paleta: blanco o negro puro como fondo (elegí uno y quedate ahí, no alternés secciones oscuras y claras porque sí), un único acento que aparece solo en los links y el cursor custom.

DESIGN DIRECTION
Tipografía como layout: los títulos ocupan el ancho completo de la pantalla en tamaños de 8-14vw, no hay "hero image" tradicional — el titular ES el hero. Grilla editorial estricta (12 columnas, gouttières angostas). Muchísimo blanco/negro de sobra: el 60% de cada viewport puede estar vacío a propósito.

INFORMATION ARCHITECTURE
Nav minimal (solo logo + "Trabajo" + "Contacto", sin menú de 8 items) → Statement de una línea a página completa → Grilla de proyectos (cada uno ocupa un viewport entero, imagen + nombre + categoría, nada más) → Sobre el estudio (un párrafo, no una lista de "nuestros valores") → Clientes en texto plano, sin logos → Contacto directo (mail grande, no formulario) → Footer mínimo.

PAGE STRUCTURE
1. Statement: una frase que define la filosofía del estudio, en tipografía gigante, centrada o alineada a un borde, con scroll indicator sutil abajo.
2. Proyectos: uno por viewport completo. Al hacer scroll, la imagen del proyecto anterior se aleja (scale down + fade) mientras entra la siguiente — transición de "cambio de diapositiva editorial", no un carrusel.
3. Sobre el estudio: un párrafo de 3-4 oraciones, tipografía grande, sin foto de equipo genérica de stock.
4. Clientes: nombres en texto plano, en una fila que se puede leer como una lista, sin logos ni tarjetas.
5. Contacto: el mail del estudio en tipografía enorme, clickeable, con un "o escribinos por WhatsApp" como alternativa chica debajo.

COMPONENTS
No hay botones tradicionales: los links son subrayado que se anima al hover (underline que crece desde un lado). No hay cards con sombra ni bordes redondeados — todo es rectangular, a sangre.

COPY DIRECTION
Frases cortas, afirmativas, sin signos de exclamación. Nunca "creemos que", siempre la afirmación directa. El nombre de cada proyecto va solo con el nombre del cliente y una palabra de categoría (ej. "Branding", "Sitio web") — nada de descripciones largas.

RESPONSIVE RULES
En mobile la tipografía gigante baja a un tamaño que siga ocupando el ancho pero sea legible (usar clamp() con vw y un mínimo/máximo en rem, nunca un tamaño fijo en vw sin clamp). Los proyectos siguen siendo un viewport completo cada uno, sin recortar la imagen de forma que pierda el encuadre original.

ANIMATIONS
Solo dos: el cambio entre proyectos al hacer scroll (descripto arriba) y el underline animado en los links. Nada de parallax, nada de texto que entra letra por letra — eso contradice la sobriedad editorial del template.

ACCESSIBILITY
Contraste máximo (blanco puro sobre negro puro o viceversa) así que el mínimo de 4.5:1 se cumple naturalmente; cuidar que el acento de los links también pase ese mínimo sobre el fondo elegido.

SEO
Title con el nombre del estudio + la disciplina en 6 palabras. Open Graph con una imagen de proyecto real, no un logo. Cada proyecto, si tiene su propia URL, con su propio title/description.

PERFORMANCE
Las imágenes de proyecto son el peso principal de esta página: servir en WebP/AVIF, con dimensiones explícitas, y cargar solo la primera a full-res de entrada — el resto con lazy loading a medida que se acercan al viewport.

TECHNICAL REQUIREMENTS
HTML semántico, cada proyecto como su propia <section>, transición de scroll hecha con CSS (scroll-snap + transform) antes de recurrir a JavaScript si el navegador lo permite.

FINAL QA
¿La tipografía se lee como layout o parece un título de blog con font-size grande? ¿Hay al menos un 40% de espacio vacío en cada viewport? ¿Sacarías esto por una agencia genérica de plantilla o se nota que hay una dirección de arte real?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta, logo y el único acento sin tocar el layout editorial.",
      content: `Tomá la landing de Black Studio y ajustá SOLO la identidad, sin tocar la grilla ni el tamaño de la tipografía:
1. Elegí UN fondo (blanco puro #FFFFFF o negro puro #0A0A0A) según [PREFERENCIA] — no mezclés ambos entre secciones.
2. El acento (color de los links y el cursor si tiene uno custom) va en [COLOR_DE_MARCA], verificando 4.5:1 de contraste sobre el fondo elegido.
3. Logo: si tengo uno, va SOLO como wordmark chico en el nav — nunca como isotipo grande en el hero, eso le rompe la lógica tipográfica al statement.
No toques: los tamaños de fuente, el espaciado entre proyectos, ni la estructura de un-proyecto-por-viewport.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Reescribe todos los textos con proyectos e información reales del estudio.",
      content: `Reescribí el copy de Black Studio con mi información real:

Estudio: [AGENCY_NAME]
Disciplina: [DISCIPLINA]
Statement (la frase que define la filosofía del estudio en una oración): [STATEMENT]
Proyectos (nombre de cliente + categoría de cada uno, mínimo 4): [LISTA_DE_PROYECTOS]
Sobre el estudio (3-4 oraciones reales, no genéricas): [SOBRE_NOSOTROS]
Clientes (lista de nombres): [CLIENTES]
Contacto: [MAIL] y [WHATSAPP_SI_HAY]

Reglas:
- Cero frases genéricas de agencia ("soluciones creativas a medida", "llevamos tu marca al siguiente nivel").
- El statement tiene que poder leerse en una sola respiración.
- Si falta un dato (ej. no tengo 4 proyectos reales todavía), dejá [FALTA: proyecto real] en vez de inventar uno — mostrar un proyecto que no existe es peor que mostrar menos.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Las únicas dos animaciones que tiene este template, bien afinadas.",
      content: `Implementá SOLO estas dos animaciones en Black Studio, nada más:
1. Transición entre proyectos al scrollear: el proyecto actual se aleja (scale de 1 a 0.92 + opacity de 1 a 0) mientras el siguiente entra desde abajo (translateY + opacity). Usar scroll-snap-type: y mandatory en el contenedor y IntersectionObserver para togglear las clases de "activo"/"saliente". Duración 400-500ms, ease-out.
2. Underline animado en los links: por defecto el underline mide 0% de ancho, al hover crece a 100% en 200ms desde el lado izquierdo (o desde donde vino el cursor, si querés el detalle fino).
No agregues: fade-in genérico en el resto de las secciones, cursor custom con trail, ni parallax — este template se apoya en la quietud, no en el movimiento.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO editorial: cada proyecto merece poder indexarse.",
      content: `Optimizá el SEO de la landing de [AGENCY_NAME]:
1. Title: "[AGENCY_NAME] — [DISCIPLINA]" (corto, sin relleno).
2. Meta description con el statement del estudio, recortado a 155 caracteres si hace falta.
3. Un solo <h1> (el statement); los nombres de proyecto van en <h2>.
4. Open Graph con la imagen del PRIMER proyecto de la grilla (no un logo ni una imagen genérica).
5. Si los proyectos tienen rutas propias (/trabajo/[slug]), cada uno con su propio title y su propia OG image.
6. Alt text descriptivo en cada imagen de proyecto (nombre del cliente + qué se hizo), nunca "proyecto1.jpg".`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "La tipografía gigante es lo más delicado de este template en mobile.",
      content: `Revisá el comportamiento responsive de Black Studio en 375px, 390px, 430px, 768px, 1024px, 1440px, con foco especial en:
1. El statement: usar clamp(2.5rem, 10vw, 9rem) o valores equivalentes — nunca un tamaño en vw puro sin clamp, porque en pantallas muy chicas o muy grandes se vuelve ilegible o gigantesco.
2. Cada proyecto sigue ocupando el viewport completo en mobile, pero la imagen usa object-fit: cover con un encuadre que no corte lo importante (si la imagen es horizontal, no cortarla verticalmente sin criterio).
3. El nav en mobile: si hay hamburguesa, que abra a pantalla completa con la misma tipografía grande del resto del sitio, no un dropdown chico que rompa el tono editorial.
4. El mail de contacto en la sección final se achica lo necesario para no partirse en dos líneas de forma fea, pero se mantiene grande — es el CTA principal de la página.
5. Verificar que el scroll-snap no trabe el scroll normal en mobile (algunos navegadores móviles tienen comportamientos raros con scroll-snap-type: y mandatory — probar con "proximity" si "mandatory" se siente tosco).`,
    },
  ],
};
