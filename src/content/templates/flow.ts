import type { Template } from "./types";

export const flow: Template = {
  slug: "flow",
  name: "Flow",
  category: "SaaS",
  style: "Clean / Modern",
  tags: ["SaaS", "Clean", "Modern"],
  status: "ready",
  featured: false,
  previewImage: "/templates/flow/cover.jpg",
  description:
    "Landing clara y luminosa para SaaS de productividad: mucho blanco, ilustraciones de producto en vez de screenshots crudos, y un flujo de onboarding contado en 3 pasos.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Flow",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROLE
Sos un Senior Product Designer + Frontend Engineer especializado en landings de SaaS de productividad, con el nivel de Notion, Linear o Superhuman.

CONTEXT
Voy a construir la landing de [PRODUCT_NAME], un producto de [DESCRIBIR: gestión de proyectos / CRM / notas de equipo / lo que corresponda]. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...] en vez de inventarlo.

OBJECTIVE
Que un equipo que hoy usa 3 herramientas distintas para lo que hace [PRODUCT_NAME] entienda por qué consolidar ahí, y arranque una prueba gratis sin fricción.

TARGET AUDIENCE
Managers de equipos chicos/medianos (5-50 personas) cansados de que la info esté repartida entre Slack, planillas y otra herramienta a medio usar.

BRAND
Nombre: [PRODUCT_NAME]. Tono: claro, amable, sin jerga técnica. Paleta: fondo blanco o casi blanco, UN color de marca vivo pero no chillón, mucho aire entre secciones — la sensación es de orden, que es literalmente lo que vende el producto.

DESIGN DIRECTION
Nada de screenshots de producto crudos y comprimidos: usar mockups limpios (browser frame simple, o ilustraciones planas del flujo) que se vean nítidos a cualquier tamaño. Composición con mucho espacio en blanco — el ritmo visual tiene que transmitir la misma calma que promete el producto.

INFORMATION ARCHITECTURE
Nav (logo + Producto + Precios + CTA) → Hero con mockup de producto + propuesta clara → Barra de logos de clientes → El problema en 3 viñetas breves → Cómo funciona en 3 pasos con mockup por paso → Integraciones (logos de herramientas con las que conecta) → Testimonio o caso breve → Precios → FAQ → CTA final.

PAGE STRUCTURE
1. Hero: headline que nombra el resultado ("Todo tu equipo, un solo lugar"), subheadline de una oración, CTA "Empezar gratis" + "Ver demo", mockup de producto limpio al lado o abajo.
2. El problema: 3 viñetas cortas sobre lo que hoy duele (info dispersa, reuniones de status, nadie sabe en qué está el otro).
3. Cómo funciona: 3 pasos, cada uno con su propio mockup chico mostrando esa parte del producto.
4. Integraciones: logos de las herramientas con las que conecta (Slack, Google Calendar, etc.), en gris con color al hover.
5. Precios: 2-3 planes simples, sin letra chica escondida.
6. FAQ: preguntas reales sobre seguridad, migración de datos, cancelación.

COMPONENTS
Botón primario: color de marca sólido, radio de 8-10px, sombra muy sutil. Cards de "el problema" con ícono lineal simple + texto, sin bordes duros. Mockups dentro de un frame de navegador simplificado (barra superior con 3 puntos, sin URL real).

COPY DIRECTION
Cada beneficio se nombra por el resultado, no por la feature ("Dejá de perseguir gente por Slack" en vez de "Notificaciones automáticas"). CTA en imperativo corto.

RESPONSIVE RULES
En mobile el mockup del hero baja debajo del texto. Los 3 pasos de "cómo funciona" se apilan verticalmente, cada mockup mantiene su nitidez (nunca comprimido a un tamaño ilegible).

ANIMATIONS
Fade-up sutil al entrar cada sección. Los mockups pueden tener una animación muy leve de "datos que se actualizan" (un número que cambia, una barra que se completa) para dar sensación de producto vivo, sin exagerar.

ACCESSIBILITY
Contraste 4.5:1 mínimo en todo texto, especialmente el color de marca sobre blanco si es un tono claro (verificar, ajustar a un tono más oscuro para texto si hace falta).

SEO
Title y meta description específicos del producto. Open Graph con el mockup del hero. Schema.org SoftwareApplication si corresponde publicar precio.

PERFORMANCE
Los mockups como SVG o imágenes livianas optimizadas — nunca screenshots reales pesados sin comprimir. Lazy loading debajo del fold.

TECHNICAL REQUIREMENTS
HTML semántico, CSS con custom properties para el color de marca (fácil de recolorear).

FINAL QA
¿El headline nombra un resultado o solo una feature? ¿Los mockups se ven nítidos y profesionales? ¿La sensación general es de calma y orden, coherente con lo que vende el producto?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el color de marca y el mockup sin tocar la estructura.",
      content: `Ajustá SOLO la identidad de Flow:
1. Color de marca: reemplazá el acento por [COLOR_DE_MARCA], verificando 4.5:1 de contraste en texto y en el botón primario.
2. Logo: integralo en el nav; si tenés un ícono de producto, puede aparecer chico dentro de los mockups del frame de navegador.
3. Mantené el fondo blanco/casi blanco — es parte de la identidad de "orden" del template, no lo oscurezcas.
No toques: la estructura de 3 pasos ni el estilo de mockup en frame de navegador.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá tu producto real, sin inventar features.",
      content: `Reescribí el copy de Flow con mi información real:

Producto: [PRODUCT_NAME]
Qué hace en una oración: [QUE_HACE]
El problema que resuelve (3 viñetas): [PROBLEMA]
Cómo funciona (3 pasos): [PASOS]
Integraciones reales: [INTEGRACIONES]
Precios: [PRECIOS]

Reglas:
- Cada beneficio nombra un resultado, no una feature técnica.
- Nunca listar una integración que no existe todavía — si está "en camino", decirlo así.
- Si falta un testimonio real, dejar [FALTA: testimonio real] en vez de inventar uno.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento que transmite calma y producto vivo, sin ruido.",
      content: `Sumá estas animaciones a Flow:
1. Fade-up de 16px al entrar cada sección, una sola vez.
2. En el mockup del hero, una animación muy sutil de "dato que se actualiza" (ej. un check que aparece, una barra de progreso que avanza) en loop lento, para que no se sienta una imagen estática.
3. Los logos de integraciones pasan de gris a color al hover, transición de 200ms.
No agregues: parallax, ni mockups que se muevan de forma llamativa — el tono es calma, no energía.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO estándar de SaaS, con foco en el resultado que vende.",
      content: `Optimizá el SEO de [PRODUCT_NAME]:
1. Title: "[PRODUCT_NAME] — [RESULTADO_EN_6_PALABRAS]".
2. Meta description con el problema que resuelve + para quién.
3. Open Graph con el mockup del hero (1200x630).
4. Un solo <h1>. Schema.org SoftwareApplication con el precio si es público.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Los mockups tienen que verse nítidos en cualquier tamaño.",
      content: `Revisá el responsive de Flow en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. El mockup del hero baja debajo del texto en mobile, nunca lo tapa.
2. Los 3 pasos de "cómo funciona" se apilan, cada mockup se achica proporcionalmente sin perder legibilidad del texto interno.
3. La barra de logos de integraciones pasa a carrusel horizontal o grid de 2 columnas en mobile.
4. Verificar que ningún mockup se vea pixelado al achicarse (usar SVG cuando sea posible).`,
    },
  ],
};
