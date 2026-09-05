import type { Template } from "./types";

export const launchpad: Template = {
  slug: "launchpad",
  name: "Launchpad",
  category: "Startups",
  style: "Audaz / Etapa Temprana",
  tags: ["Startups", "Audaz", "Lista de espera"],
  status: "ready",
  featured: false,
  previewImage: "/templates/launchpad/cover.jpg",
  description:
    "Landing de pre-lanzamiento para startups: una promesa, un formulario de lista de espera y contador de anotados — hecha para validar antes de construir todo el producto.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Launchpad",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en landings de pre-lanzamiento para startups en etapa temprana, con el nivel de las mejores páginas de "coming soon" que sí convierten.

CONTEXTO
Voy a construir la landing de pre-lanzamiento de [STARTUP_NAME], que va a resolver [PROBLEMA_QUE_RESUELVE]. El producto todavía no existe del todo o está en beta cerrada. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...].

OBJETIVO
Que un visitante entienda la promesa en 5 segundos y deje su email en la lista de espera — es el único objetivo de conversión de esta página, no hay nada más que vender todavía.

AUDIENCIA
Early adopters que siguen cuentas de startups y prueban productos nuevos antes que nadie — responden a una promesa clara, no a features detalladas que todavía no existen.

MARCA
Nombre: [STARTUP_NAME]. Tono: seguro y con energía de "esto va a pasar", sin prometer fechas que no se van a cumplir. Paleta: un color vibrante como protagonista sobre fondo claro u oscuro (elegir uno), composición limpia tipo landing de producto de Silicon Valley.

DIRECCIÓN DE DISEÑO
Todo gira en torno a UNA acción: dejar el email. El resto del contenido (problema, solución, para quién) es soporte, no el centro de la página. Composición simple, sin necesidad de mockups de producto terminado si no existen — se puede usar un mockup conceptual o una ilustración simple del problema.

ARQUITECTURA DE INFORMACIÓN
Nav mínimo (logo + link a redes) → Hero con promesa + formulario de email + contador de anotados → El problema (2-3 líneas) → Qué vas a poder hacer (3 puntos, sin over-prometer features específicas si no están confirmadas) → Formulario de email repetido al final → Footer con redes.

ESTRUCTURA DE PÁGINA
1. Hero: headline que nombra el resultado prometido, subheadline de una oración, input de email + botón "Sumarme a la lista de espera", y un contador ("+250 personas ya se anotaron" — solo si es un número real, nunca inventado).
2. El problema: 2-3 líneas sobre qué duele hoy sin este producto.
3. Qué vas a poder hacer: 3 puntos concretos de lo que resuelve, en futuro ("vas a poder..."), sin prometer fecha de lanzamiento si no está confirmada.
4. CTA final: repetir el formulario de email.

COMPONENTES
Input de email + botón en la misma fila (o apilados en mobile), sin fricción — un solo campo, nada de nombre/apellido/teléfono para esta etapa. Botón sólido con el color vibrante de marca.

DIRECCIÓN DE COPY
Directo, en segunda persona ("vas a poder", no "los usuarios podrán"). Nunca prometer una fecha de lanzamiento específica si no está confirmada — mejor "muy pronto" o directamente no mencionar fecha.

REGLAS RESPONSIVE
El formulario de email en mobile: input y botón apilados si no entran en una fila cómoda, nunca comprimidos hasta ilegibles.

ANIMACIONES
Fade-up al entrar cada sección. El contador de anotados puede tener una animación de conteo si el número es real y se actualiza. Confirmación visual clara al enviar el email (mensaje de "¡Listo! Te avisamos apenas esté disponible"), sin depender solo de un alert del navegador.

ACCESIBILIDAD
El formulario con label asociado al input (puede ser visualmente oculto pero accesible), mensaje de error/éxito anunciado para lectores de pantalla.

SEO
Title: "[STARTUP_NAME] — [PROMESA_EN_6_PALABRAS]". Meta description con la promesa. Open Graph con una imagen simple de marca (no hace falta mockup de producto si no existe).

RENDIMIENTO
Página muy liviana por naturaleza — cuidar que el envío del formulario no dependa de una librería pesada si se puede hacer con un fetch simple a un endpoint o servicio de email marketing.

REQUISITOS TÉCNICOS
El formulario debe validar el formato de email antes de enviar. Si se conecta a un servicio externo (Mailchimp, ConvertKit, etc.), dejarlo claramente marcado como [FALTA: conectar servicio de email].

CONTROL DE CALIDAD FINAL
¿La promesa se entiende sin leer nada más? ¿El formulario de email es la acción más fácil de encontrar en toda la página? ¿Se promete algo que todavía no está confirmado?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el color vibrante y el tono sin perder el foco en la conversión.",
      content: `Ajustá SOLO la identidad de Launchpad:
1. Color vibrante: reemplazá por [COLOR_DE_MARCA], manteniendo alto contraste con el fondo para que el botón de email sea imposible de no ver.
2. Logo: chico en el nav, sin competir con el headline del hero.
No toques: la posición del formulario de email (siempre visible sin scrollear en el hero) ni la simplicidad de un solo campo.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá la promesa real de tu startup, sin over-prometer.",
      content: `Reescribí el copy de Launchpad con mi información real:

Startup: [STARTUP_NAME]
Problema que resuelve: [PROBLEMA]
Qué vas a poder hacer (3 puntos, en futuro): [PUNTOS]
Anotados reales (si hay número real): [NUMERO_ANOTADOS]

Reglas:
- Nunca prometer una fecha de lanzamiento específica salvo que esté confirmada.
- El contador de anotados solo se muestra si es un número real — si no hay dato, sacar esa parte en vez de inventar un número.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento mínimo, todo apunta a que se complete el formulario.",
      content: `Sumá estas animaciones a Launchpad:
1. Fade-up de 16px al entrar cada sección.
2. Al enviar el formulario con éxito, un mensaje de confirmación aparece con fade-in reemplazando el formulario (no un alert del navegador).
3. Si hay contador de anotados, puede contar desde un número menor al real en 800ms al cargar la página, una sola vez.
No agregues más animaciones — cualquier distracción de más le resta al único objetivo de esta página.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO simple para una landing de pre-lanzamiento.",
      content: `Optimizá el SEO de [STARTUP_NAME]:
1. Title: "[STARTUP_NAME] — [PROMESA_EN_6_PALABRAS]".
2. Meta description con la promesa concreta.
3. Open Graph con una imagen de marca simple (logo + color, si no hay mockup de producto).`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "El formulario de email tiene que funcionar perfecto en mobile.",
      content: `Revisá el responsive de Launchpad en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. El input de email y el botón se apilan en mobile si no entran cómodos en una fila, con el botón siempre visible sin scroll horizontal.
2. El mensaje de confirmación al enviar se lee completo sin cortarse en pantallas chicas.
3. Verificar que el teclado del celular (al enfocar el input de email) no tape el botón de envío.`,
    },
  ],
};
