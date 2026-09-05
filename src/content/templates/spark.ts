import type { Template } from "./types";

export const spark: Template = {
  slug: "spark",
  name: "Spark",
  category: "Landing Pages",
  style: "Punchy / Conversion",
  tags: ["Landing Pages", "Conversion", "Product Launch"],
  status: "ready",
  featured: false,
  previewImage: "/templates/spark/cover.jpg",
  description:
    "Landing de una sola página para lanzar un producto puntual (digital o físico): un beneficio central, objeciones resueltas y un solo CTA repetido, sin distraerse con nada más.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Spark",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior CRO Specialist + Frontend Engineer especializado en landing pages de un solo producto, con el nivel de las mejores páginas de lanzamiento de infoproductos y productos digitales.

CONTEXT
Voy a construir la landing de [PRODUCT_NAME], un [DESCRIBIR: curso, ebook, producto físico, herramienta puntual]. Reemplazá cada corchete con mi información real; nunca inventes precio, garantía ni testimonios.

OBJECTIVE
Que un visitante que llega desde un anuncio o un link entienda el beneficio central en segundos y compre sin necesitar navegar a ningún otro lado — es una landing de una sola página, un solo producto, un solo CTA.

TARGET AUDIENCE
[DESCRIBIR_AUDIENCIA] que ya tiene el problema que este producto resuelve y está comparando 2-3 opciones antes de decidir.

BRAND
Nombre: [PRODUCT_NAME]. Tono: directo, orientado a conversión sin ser agresivo tipo infoproducto de los 2010s (nada de countdown falso ni "solo hoy"). Paleta: un color de acento fuerte para el CTA, resto neutro.

DESIGN DIRECTION
Cada sección resuelve UNA objeción o refuerza UN beneficio, en orden de lo más importante a lo menos. El CTA se repite cada 2-3 secciones (nunca solo al final, donde alguien convencido a mitad de página tendría que scrollear de vuelta).

INFORMATION ARCHITECTURE
Hero con beneficio central + CTA → Para quién es / para quién no es (filtra visitantes que no van a comprar) → Qué incluye (lista concreta) → Cómo funciona/qué vas a lograr → Prueba social si existe (reseñas reales) → Precio y garantía → FAQ (objeciones reales) → CTA final.

PAGE STRUCTURE
1. Hero: headline del beneficio central, subheadline, CTA principal, imagen del producto si es físico o mockup si es digital.
2. Para quién es / no es: 2 columnas cortas que filtran a quien realmente lo necesita.
3. Qué incluye: lista concreta de lo que se recibe, sin relleno.
4. Prueba social: reseñas o casos reales, nunca inventados — si no hay, sacar la sección.
5. Precio: claro, con lo que incluye al lado, y garantía si existe (real, con sus condiciones).
6. FAQ: objeciones reales que la gente pregunta antes de comprar.
7. CTA final: repetir el beneficio central + botón de compra.

COMPONENTS
Botón de CTA: el elemento más visible de cada sección donde aparece, color de acento consistente en todos los CTAs de la página (nunca cambiar el color del botón principal entre secciones, eso confunde).

COPY DIRECTION
Cada objeción se nombra y se resuelve explícitamente ("¿Y si no tengo tiempo? Son 15 minutos por día."), nunca ignorada. Precio siempre claro, nunca "consultar".

RESPONSIVE RULES
El CTA sticky en mobile si la página es larga (un botón fijo abajo con el precio o la acción principal), para que nunca haya que buscar cómo comprar.

ANIMATIONS
Fade-up al entrar cada sección. El CTA puede tener un leve efecto de pulso sutil (no agresivo) para dirigir la atención, sin ser molesto con loops muy notorios.

ACCESSIBILITY
Contraste 4.5:1 en todo texto, especialmente en el precio y el CTA. FAQ en acordeón nativo (<details>) navegable por teclado.

SEO
Title y meta description con el beneficio central del producto. Schema.org Product con precio si corresponde publicarlo.

PERFORMANCE
Página liviana, imágenes de producto optimizadas, sin librerías de countdown/urgencia falsa que además de ser deshonestas suman peso innecesario.

TECHNICAL REQUIREMENTS
Botón de compra conectado al sistema de pago que corresponda (Mercado Pago, Stripe, etc.), marcado como [FALTA: conectar pago] si todavía no está.

FINAL QA
¿Cada objeción real tiene su respuesta en la página? ¿El CTA se repite lo suficiente sin ser invasivo? ¿Hay algún claim sin sustento (testimonio inventado, garantía que no existe)?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el color de CTA sin perder consistencia entre secciones.",
      content: `Ajustá SOLO la identidad de Spark:
1. Color de CTA: reemplazá por [COLOR_DE_MARCA], usándolo EXACTAMENTE igual en todos los botones de la página — la consistencia es lo que le enseña al ojo dónde hacer clic.
2. Logo/marca: chico, arriba, sin competir con el headline.
No toques: la repetición del CTA cada 2-3 secciones ni el orden de objeciones resueltas.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá tu producto real, precio real, sin testimonios inventados.",
      content: `Reescribí el copy de Spark con mi información real:

Producto: [PRODUCT_NAME]
Beneficio central: [BENEFICIO]
Para quién es / no es: [AUDIENCIA]
Qué incluye: [INCLUYE]
Precio y garantía real: [PRECIO_GARANTIA]
Testimonios reales si existen: [TESTIMONIOS]
Objeciones frecuentes (FAQ): [FAQ]

Reglas:
- Nunca inventar un testimonio, un precio ni una garantía — si falta, dejar [FALTA: dato real] o sacar la sección.
- Cada objeción del FAQ tiene que ser una pregunta real que la gente hace, no una inventada para rellenar.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "El movimiento dirige la atención al CTA, sin ser invasivo.",
      content: `Sumá estas animaciones a Spark:
1. Fade-up de 16px al entrar cada sección.
2. El botón de CTA principal puede tener un pulso muy sutil (scale 1 a 1.02, 2s, loop) SOLO en el hero, para dirigir la primera atención — no lo repitas en cada CTA de la página, sería demasiado.
3. El acordeón de FAQ con transición suave de altura al abrir/cerrar.
No agregues countdown timers ni popups de urgencia falsa.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO orientado a conversión desde búsqueda o anuncio.",
      content: `Optimizá el SEO de [PRODUCT_NAME]:
1. Title: "[PRODUCT_NAME] — [BENEFICIO_EN_6_PALABRAS]".
2. Meta description con el beneficio central + para quién es.
3. Schema.org Product con price si es público.
4. Open Graph con la imagen del producto o mockup principal.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "El CTA sticky en mobile es lo más importante de este template.",
      content: `Revisá el responsive de Spark en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Considerar un CTA sticky en la parte inferior en mobile con el precio y el botón de compra, visible en todo momento sin tapar contenido importante.
2. Las 2 columnas de "para quién es / no es" se apilan en mobile.
3. El FAQ en acordeón se mantiene legible sin texto cortado.
4. Verificar que el botón de compra tenga mínimo 44px de alto para uso táctil cómodo.`,
    },
  ],
};
