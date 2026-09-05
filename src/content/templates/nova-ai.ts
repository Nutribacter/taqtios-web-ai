import type { Template } from "./types";

export const novaAi: Template = {
  slug: "nova-ai",
  name: "Nova AI",
  category: "SaaS",
  style: "Dark / Futuristic / Premium",
  tags: ["SaaS", "AI", "Dark", "Premium"],
  status: "ready",
  featured: true,
  previewImage: "/templates/nova-ai/cover.jpg",
  description:
    "Landing oscura para un producto de IA: hero con demo en vivo simulada, prueba social densa y una sección de precios que vende el ahorro de tiempo, no la tecnología.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Nova AI",
      description:
        "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Product Designer + Frontend Engineer especializado en landings de producto SaaS de IA, con el nivel de pulido de Linear, Vercel y Perplexity.

CONTEXT
Voy a construir la landing de [PRODUCT_NAME], un producto de IA para [DESCRIBIR_QUE_HACE_EN_UNA_LINEA]. Reemplazá cada corchete con la info real de mi producto antes de generar nada; si algún dato no te lo doy, dejá el placeholder marcado como [FALTA: ...] en vez de inventarlo.

OBJECTIVE
Que un visitante que nunca escuchó hablar de [PRODUCT_NAME] entienda en menos de 8 segundos qué hace, para quién es, y sienta que está viendo un producto ya validado — no una idea. La página tiene un solo objetivo de conversión: click en el CTA principal.

TARGET AUDIENCE
[BUYER_PERSONA] — gente que ya usa 2-3 herramientas de IA en su día a día y desconfía de una más si no ve, en los primeros segundos, qué problema puntual resuelve.

BRAND
Nombre: [PRODUCT_NAME]. Tono: seguro, directo, cero jerga de "revolucionario" o "disruptivo". Paleta: fondo casi negro (#0A0A0F), acento eléctrico único (violeta o cian, elegí uno y usalo con disciplina — nunca los dos compitiendo en el mismo elemento). Tipografía sans geométrica para títulos, una sans neutra para cuerpo.

DESIGN DIRECTION
Oscuro no significa denso: dejá respirar cada sección con márgenes generosos (mínimo 96px verticales en desktop). El acento aparece en máximo 3 lugares por viewport: nunca lo uses para decorar, solo para señalar la acción o el dato que importa. Nada de partículas ni fondos 3D — el efecto "premium" lo da la tipografía y el espaciado, no el ruido visual.

INFORMATION ARCHITECTURE
Nav (logo + 3 links + CTA) → Hero → Barra de logos de clientes/integraciones → Cómo funciona (3 pasos) → Demo en vivo simulada (screenshot real de la interfaz, no un mockup genérico) → Resultados/métricas → Testimonios (si hay reales; si no, sección "Para quién es" en su lugar) → Precios → FAQ → CTA final → Footer.

PAGE STRUCTURE
1. Hero: headline de 6-9 palabras que nombra el resultado, no la tecnología. Subheadline de una oración que aclara el "cómo". CTA principal ("Empezar gratis" o el que corresponda) + CTA secundario de menor peso visual ("Ver cómo funciona"). A la derecha o abajo, un screenshot real de producto dentro de un browser frame, con una animación sutil de datos que se actualizan (no un video pesado).
2. Barra de confianza: "Usado por equipos en [logos]" en escala de grises, color al hover.
3. Cómo funciona: 3 pasos numerados (01/02/03), cada uno con un ícono lineal simple y una frase de máximo 12 palabras.
4. Demo: un screenshot grande con 2-3 callouts señalando features puntuales, no una lista de features aparte.
5. Métricas: 3 números grandes con su contexto ("40% menos tiempo en...", nunca inventados — si no hay dato real, sacar la sección).
6. Precios: 2-3 planes, el del medio destacado con un badge sutil, nunca con confeti ni gradientes gritones.
7. FAQ: acordeón nativo (<details>), 5-6 preguntas reales sobre seguridad de datos, integración y facturación.
8. CTA final: repetir el hero en una línea, sin nueva idea.

COMPONENTS
Botón primario: fondo sólido en el color de acento, texto en el color de fondo (alto contraste), radio de 8px, sin sombra dura. Botón secundario: solo borde, transparente. Cards de precio: borde de 1px sutil, sin degradado en el borde. Inputs (si hay): fondo un tono más claro que el body, borde que se ilumina en foco.

COPY DIRECTION
Cada headline nombra un resultado ("Cerrá el mes 3 días antes"), nunca una capacidad ("Automatización inteligente de reportes"). CTA en imperativo corto. Nada de "revolucionario", "disruptivo", "líder del mercado" sin dato que lo sostenga.

RESPONSIVE RULES
Mobile-first real, no "que no se rompa": en 375px el hero pasa a una columna, el screenshot va abajo del texto (nunca arriba tapando el headline), la barra de logos se convierte en carrusel horizontal con scroll-snap, las cards de precio se apilan con el plan destacado primero.

ANIMATIONS
Fade-up sutil al entrar en viewport (una sola vez, respetando prefers-reduced-motion). Hover en cards: elevación de 2-4px + sombra, sin escalar el contenido. Nada de scroll-jacking ni parallax pesado.

ACCESSIBILITY
Contraste mínimo 4.5:1 en todo texto sobre el fondo oscuro (el acento sobre negro suele fallar en texto chico — usarlo en texto grande o en fondos sólidos, nunca en texto de 14px). Navegación completa por teclado, foco visible en todos los interactivos.

SEO
Title y meta description específicos del producto (no genéricos), un solo <h1> (el headline del hero), Open Graph con imagen 1200x630 del screenshot de producto.

PERFORMANCE
El screenshot del hero con dimensiones explícitas y lazy loading en todo lo que esté debajo del fold. Cero librerías de animación pesadas: CSS transitions alcanza para todo lo de esta página.

TECHNICAL REQUIREMENTS
HTML semántico (header/main/section/footer), CSS con custom properties para la paleta (para poder recolorear sin tocar cada regla), JavaScript mínimo (acordeón del FAQ y el nav mobile, nada más).

FINAL QA
Antes de darlo por terminado, revisá: ¿el headline se entiende sin leer nada más? ¿el acento se usa con disciplina o está por todos lados? ¿funciona igual de bien en 375px que en 1440px? ¿hay algún claim sin dato real detrás?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description:
        "Para cuando ya tenés el layout y necesitás afinar paleta, logo y tono de marca sin rehacer la estructura.",
      content: `Tomá la landing de [PRODUCT_NAME] que generamos y ajustá SOLO la identidad visual, sin tocar la estructura ni el copy:
1. Paleta: reemplazá el acento actual por [COLOR_DE_MARCA], verificando que el contraste sobre el fondo oscuro se mantenga arriba de 4.5:1 en texto y 3:1 en elementos gráficos. Si el color de marca es muy claro o muy saturado para usar en texto chico, reservalo para elementos grandes (botones, líneas divisorias) y generá una variante más apagada para texto.
2. Logo: si tengo un archivo de logo, integralo en el nav y el footer respetando su área de resguardo (no lo aprietes contra otros elementos). Si no tengo logo, generá un wordmark simple con la tipografía de títulos ya elegida, sin ícono inventado.
3. Tono tipográfico: si mi marca es más [FORMAL/JUGUETONA/TÉCNICA] que el tono por defecto del template, ajustá el peso y tamaño de los headlines (más peso y compacto = serio/técnico; más aire y redondeado = cercano) sin cambiar la jerarquía de la página.
No toques: el orden de las secciones, los textos ya escritos, ni el sistema de espaciado.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description:
        "Reescribe todos los textos de la página con la info real de tu producto, manteniendo el diseño intacto.",
      content: `Reescribí TODO el copy de la landing de Nova AI con la información real de mi producto, sin tocar el HTML/CSS de layout:

Producto: [PRODUCT_NAME]
Qué hace en una oración: [QUE_HACE]
Problema que resuelve: [PROBLEMA]
Para quién es: [AUDIENCIA]
Diferencial frente a alternativas: [DIFERENCIAL]
Precio y plan(es): [PRECIOS]

Reglas:
- Cada headline nombra el resultado que consigue quien lo usa, no la funcionalidad técnica.
- Nada de superlativos sin dato ("el mejor", "líder") salvo que te dé el dato que lo sostiene.
- El CTA principal es una acción concreta ("Probar gratis 14 días"), nunca "Más información".
- Si te falta un dato para completar una sección (ej. no tengo testimonios reales), no inventes uno: dejá la sección marcada como [FALTA: testimonio real] para que yo la complete o decida sacarla.
- Mantené la longitud aproximada de cada bloque de texto actual (un headline no puede pasar a ser un párrafo).`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description:
        "Suma microinteracciones sin volver la página pesada ni distraer del mensaje.",
      content: `Sumá estas animaciones a la landing de Nova AI, todas livianas (CSS, sin librerías) y respetando prefers-reduced-motion:
1. Entrada: cada sección hace fade-up de 16px al entrar en viewport, una sola vez (usar IntersectionObserver, no una librería de scroll).
2. Hero: el screenshot de producto tiene un resplandor sutil detrás (blur grande, opacidad baja, color de acento) que respira lento (scale 1 → 1.02, 6s, ease-in-out infinito) — nada que compita con el texto.
3. Cards de precio: elevación de 2-4px + sombra al hover, transición de 150ms.
4. Números de la sección de métricas: cuentan de 0 al valor real al entrar en viewport, una sola vez, en 800ms.
5. Nav: se comprime levemente (menos padding vertical) después de 80px de scroll.
No agregues: parallax, scroll-jacking, ni animación en el hero que tarde más de 400ms en completarse — la primera impresión no puede depender de esperar una animación.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Deja la página lista para indexar bien desde el día uno.",
      content: `Optimizá el SEO de la landing de [PRODUCT_NAME] sin cambiar el diseño ni el copy visible:
1. <title>: "[PRODUCT_NAME] — [PROPUESTA_DE_VALOR_EN_6_PALABRAS]" (bajo 60 caracteres).
2. Meta description: una oración que incluya qué hace el producto y para quién, bajo 155 caracteres.
3. Un solo <h1> (el headline del hero); el resto de los títulos de sección van en <h2>.
4. Open Graph completo: og:title, og:description, og:image (1200x630, usar el screenshot del hero), og:type=website.
5. Twitter Card: summary_large_image con la misma imagen.
6. URLs limpias si hay rutas internas (sin parámetros innecesarios).
7. Todas las imágenes con atributo alt descriptivo (no "imagen1.png").
8. Schema.org tipo SoftwareApplication si corresponde, con nombre, descripción y precio si es público.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Revisión dedicada de mobile, tablet y desktop.",
      content: `Revisá y corregí el comportamiento responsive de la landing de Nova AI en estos anchos: 375px, 390px, 430px, 768px, 1024px, 1440px.
Puntos específicos a verificar:
1. Hero: en mobile el screenshot va DEBAJO del headline y el CTA, nunca arriba tapándolos. El headline no puede partirse en más de 3 líneas en 375px.
2. Barra de logos: se convierte en carrusel horizontal con scroll-snap en mobile, nunca en un grid apretado.
3. Cards de precio: se apilan verticalmente en mobile con el plan destacado PRIMERO (no en el medio, donde en desktop se nota pero en una columna se pierde).
4. Nav: hamburguesa en mobile con el menú a pantalla completa, no un dropdown chico.
5. Todos los botones táctiles con mínimo 44x44px de área de toque.
6. Ningún texto por debajo de 14px en mobile.
7. Verificar que no haya scroll horizontal en ningún ancho (revisar especialmente elementos con ancho fijo en px en vez de relativo).`,
    },
  ],
};
