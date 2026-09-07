import type { Template } from "./types";

/**
 * Prompts reescritos el 7/9 para reflejar la versión FINAL construida y
 * aprobada en /preview/dominio (home + ficha de propiedad + tasaciones),
 * después de la ronda de polish (buscador animado, lightbox, FAQ, footer
 * con contacto/redes, mapa real) y la migración de assets a
 * public/templates/inmobiliaria/. No son el prompt original del primer
 * borrador — están corregidos contra el código real.
 */
export const dominio: Template = {
  slug: "dominio",
  name: "Dominio",
  category: "Inmobiliarias",
  style: "Editorial / Premium / Marketplace",
  tags: ["Inmobiliaria", "Editorial", "Buscador", "Catálogo"],
  status: "ready",
  featured: true,
  previewImage: "/templates/inmobiliaria/hero-villa.webp",
  description:
    "El template inmobiliario insignia: no una propiedad, un catálogo entero. Buscador venta/alquiler/temporario con pestaña animada, propiedades destacadas en bento editorial, galería a la Behance, ficha de propiedad con lightbox y mapa real, y un formulario de tasación propio. Fotografía real a página completa, tipografía sans + serif, glassmorphism solo en el buscador.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Dominio",
      description:
        "El prompt principal: genera el sitio inmobiliario completo (home + ficha de propiedad + tasaciones). Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en plataformas de real estate premium, con el nivel de los mejores sitios editoriales de arquitectura y las mejores inmobiliarias boutique internacionales — no un portal de clasificados genérico. Sabés construir micro-interacciones en React/Next.js (estados animados, lightbox, acordeones), no solo maquetar.

CONTEXTO
Voy a construir el sitio de [INMOBILIARIA_NOMBRE], para [DESCRIBIR: una inmobiliaria con catálogo propio / un desarrollador / un agente independiente]. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...] — nunca inventes precios, metros cuadrados, direcciones ni ubicaciones.

OBJETIVO
Que quien entra sienta en tres segundos "esta inmobiliaria podría cobrar mucho por sus propiedades", encuentre lo que busca en menos de dos clics (el buscador manda), pueda explorar el catálogo completo — no una sola propiedad — y termine escribiendo por WhatsApp, agendando una visita o pidiendo una tasación desde un formulario corto. Nunca perdido en un formulario de 15 campos.

AUDIENCIA
Compradores, inquilinos y quien busca temporario en zonas residenciales de nivel medio-alto a alto. Desconfían de sitios que se sienten un portal de clasificados o un WordPress genérico de agencia chica.

MARCA
Nombre: [INMOBILIARIA_NOMBRE]. Tono: seguro, cálido, nunca vendedor agresivo ("¡OPORTUNIDAD ÚNICA!"). Paleta EXACTA: fondo piedra clara \`#F5F3EE\`, texto principal negro cálido \`#1C1A16\`, un único acento bronce apagado \`#8A6A3F\` — usado con moderación extrema (la pestaña activa del buscador, el botón de búsqueda, los bullets, hovers de link, el ícono de cada servicio). El color NO es protagonista: la fotografía y la tipografía sí. Las secciones oscuras (la de marca, el footer) son el mismo \`#1C1A16\` sólido con texto blanco/70%, no un negro distinto.

DIRECCIÓN DE DISEÑO
Combinar una sans moderna (navegación, UI, textos funcionales, cuerpo) con una serif editorial fina (nombre de marca, el headline gigante del hero, títulos de sección, nombre de cada propiedad, el precio grande de la ficha) — nunca una sola tipografía para todo. El headline del hero es TIPOGRÁFICO GIGANTE (15vw en mobile, 9vw en tablet, ~7.5rem en desktop), no un título normal. Glassmorphism reservado EXCLUSIVAMENTE al buscador (blur + borde blanco al 40% + sombra difusa) — en ningún otro lugar del sitio, ni siquiera en el nav. Fotografía arquitectónica y de interiores a enorme proporción del viewport, mucho espacio negativo, layouts asimétricos (nunca todo en grillas de 3 columnas idénticas). Prohibido: exceso de esquinas redondeadas, sombras genéricas, gradients de IA, iconos de adorno, cards repetitivas idénticas, layouts simétricos en todas las secciones. Esto tiene que sentirse diseñado a mano, no generado.

ARQUITECTURA — TRES PANTALLAS, NO UNA LANDING SUELTA

PANTALLA 1 — HOME
1. Nav sticky: logo en serif, 3 links (Propiedades, Temporarios, Preguntas frecuentes) + un link separado a Tasaciones + CTA "Hablar con un asesor" (botón con borde, se llena de acento al hover).
2. Hero: una fotografía real ocupando casi todo el viewport (82vh, mínimo 520px), con zoom lentísimo en loop (scale 1 → 1.035, 12s, ease-in-out) y overlay de gradiente oscuro para legibilidad. Encima: eyebrow chico en mayúsculas ("Córdoba · Sierras y ciudad"), el headline tipográfico gigante, y una frase corta. Todo entra con fade-up al cargar.
3. Buscador superpuesto al hero (tarjeta flotante con overlap negativo, la única zona con glassmorphism): pestañas Venta / Alquiler / Temporario con un INDICADOR QUE SE DESLIZA animado (spring, no un simple cambio de color) detrás de la pestaña activa, cada una con su ícono — y un cuarto ítem, Tasaciones, con otro estilo porque no filtra nada: lleva a su propia página. Debajo, 4 selects (Ubicación, Tipo de propiedad, Precio, Ambientes) en grilla de 2 columnas en mobile y 4 en desktop. Botón "Buscar propiedades" en el acento bronce, que ancla a la sección de abajo.
4. Propiedades destacadas: FILTRA EN VIVO según la pestaña de operación activa, sin recargar la página. Composición bento asimétrica: una propiedad protagonista grande + hasta tres secundarias más chicas — nunca cuatro cards idénticas en fila. Cada card: foto con zoom suave al hover, badge de operación semitransparente, nombre en serif, ubicación, y una fila con ambientes / m² / precio ("desde $X").
5. Galería editorial tipo bento (6 fotos con proporciones mezcladas — vertical, horizontal, cuadrada — nunca una grilla rígida pareja), zoom suave al hover.
6. Servicios: UNA FRANJA HORIZONTAL COMPACTA de 5 columnas (Comprar, Alquilar, Temporarios, Tasaciones, Administración), cada una con ícono + título en serif + una sola línea de descripción, separadas por líneas finas. NO es un acordeón ni una lista que se despliega: todo el contenido está visible de una, sin clicks.
7. Temporarios: bloque de dos columnas — foto grande + un mini-formulario de estilo "reserva" (llegada, salida, huéspedes) que lleva a la ficha del temporario destacado. Es de intención/UX, no calcula disponibilidad real.
8. Sección de marca: un statement tipográfico gigante ("No vendemos solo propiedades.") sobre una foto oscurecida a pantalla completa — rompe a propósito el patrón título + párrafo + iconos que usa el resto del sitio.
9. FAQ: acordeón con un solo ítem abierto a la vez (7 preguntas reales del rubro: requisitos de alquiler, cómo se tasa, cómo se reserva un temporario, costos de una compraventa, qué incluye la administración, si se puede pedir una visita, si trabajan fuera de la capital).
10. CTA final (dos botones: hablar con un asesor / pedir tasación) + footer completo.

PANTALLA 2 — FICHA DE PROPIEDAD (una por cada propiedad publicada, URL por su slug)
Header simplificado (logo + volver). GALERÍA CLICKEABLE: grilla de hasta 3 fotos (una grande + dos chicas), la última con un overlay "+N fotos" si la propiedad tiene más. Tocar cualquier foto ABRE UN LIGHTBOX FULLSCREEN con: imagen grande, flechas anterior/siguiente, tira de miniaturas abajo (la activa resaltada), zoom al tocar la imagen (alterna entre tamaño normal y ampliado), cerrar con la X, con Escape o tocando el fondo, swipe para cambiar de foto en mobile, y navegación completa por teclado. Debajo de la galería: badge de operación + título en serif + ubicación; una ficha técnica de 4 números (ambientes, baños, m², año) que CUENTAN desde 0 la primera vez que entran en pantalla; descripción; amenities en checklist de 2-3 columnas; y una sección de ubicación con un MAPA DE GOOGLE REAL embebido por dirección (sin necesitar ninguna API key), con carga diferida. Al costado, una tarjeta de contacto pegajosa en desktop (sticky): precio grande en serif, botón de WhatsApp real (con el número ya armado en el link) y botón "Solicitar visita".

PANTALLA 3 — TASACIONES
Dos columnas: a la izquierda el pitch (headline "¿Cuánto vale tu propiedad?" + tres bullets de confianza: respuesta en 24hs, informe con comparables reales, sin costo ni compromiso); a la derecha una tarjeta con el formulario (Nombre y apellido, WhatsApp, Email, Tipo de propiedad, Tipo de operación, Ubicación, Mensaje opcional) que al enviarse muestra una confirmación DENTRO DE LA MISMA TARJETA, sin recargar la página ("¡Listo! Te vamos a contactar a la brevedad" + un link para cargar otra solicitud).

COMPONENTES
Botón principal: sólido en \`#1C1A16\`, se oscurece a negro puro al hover. Botón secundario: borde fino transparente, se llena del acento bronce al hover — nunca un botón sólido gigante que grite "¡Comprá ahora!". Badge de operación: pill semitransparente con blur sobre la foto. Card de propiedad: la info va en una franja inferior con degradado sobre la foto, nunca tapándola por completo.

DIRECCIÓN DE COPY
Español rioplatense/argentino natural. Frases descriptivas y concretas (ubicación real, superficie real, orientación), nunca "una oportunidad que no podés dejar pasar". Precios como "desde $X" cuando corresponda — nunca inventar un precio cerrado si no lo tengo.

REGLAS RESPONSIVE
Mobile es su propia experiencia, no un desktop achicado: el buscador pasa a una interfaz vertical de un solo carril, el bento de propiedades destacadas se apila sin perder jerarquía (la protagonista sigue siendo la más grande), la galería editorial pasa de 4 a 2 columnas, la franja de servicios pasa de 5 columnas con líneas verticales a filas apiladas con líneas horizontales, el lightbox sigue funcionando igual (con gestos de swipe), la tarjeta de contacto de la ficha deja de ser sticky y pasa a estar en flujo normal, y el footer pasa de 3 columnas a 1. Ningún botón ni input baja de 44px de alto. Cero overflow horizontal en ninguna pantalla.

ANIMACIONES
Fade-up estándar (500-700ms, ease-out, dispara una sola vez al entrar en viewport) en casi todas las secciones. Zoom lentísimo en loop en la foto del hero. El indicador de pestaña del buscador se desliza con física de resorte (no un simple cambio de color). Zoom suave al hover en toda foto clickeable (scale 1.04 a 1.1, 400-700ms). El acordeón de FAQ anima por \`max-height\` + \`opacity\` (300ms) — evitar la técnica de animar \`grid-template-rows\`, da problemas de renderizado en algunos navegadores y herramientas de preview. Los números de la ficha técnica cuentan desde 0 una sola vez al entrar en viewport. El lightbox anima el zoom de la imagen con una transición suave. Respetar \`prefers-reduced-motion\`: apagar el zoom del hero y dejar solo cambios de opacidad instantáneos.

ACCESIBILIDAD
Contraste 4.5:1 en todo texto sobre foto (overlays de gradiente, nunca oscurecido parejo). El lightbox y el acordeón de FAQ totalmente navegables por teclado (Escape cierra, flechas cambian de foto, \`aria-expanded\` en cada pregunta). Alt text real y descriptivo en cada foto (ej. "Living con ventanales al jardín"), nunca el nombre del archivo. El mapa lleva un \`title\` descriptivo.

SEO
Home title: "[INMOBILIARIA_NOMBRE] — Propiedades en [ZONA]". Meta description con la propuesta de valor. Cada ficha de propiedad con su propio title/description y, si el precio es público, JSON-LD Schema.org RealEstateListing con price, address y floorSize. URLs de propiedad legibles por slug (\`/propiedades/[nombre-de-la-propiedad]\`, nunca un ID pelado).

RENDIMIENTO
Las fotos son pesadas por naturaleza: servilas en WebP, con el componente de imagen del framework (next/image o equivalente) generando los tamaños responsivos automáticamente — no subir un único archivo gigante y listo. El mapa carga diferido. Como referencia de calidad: ninguna foto FUENTE debería superar ~2,5 MB antes de optimizar (ver la nota de assets más abajo); bien comprimidas, cada foto ya usada en el sitio debería pesar entre 50 KB y 400 KB.

REQUISITOS TÉCNICOS
HTML semántico. Componente de imagen con \`sizes\` correcto por breakpoint en cada uso (hero a pantalla completa no es lo mismo que una miniatura de galería). Rutas dinámicas por slug de propiedad, pre-generadas en build (SSG) para que cada ficha sea indexable de una.

ASSETS — QUÉ TRAER VOS Y QUÉ YA RESUELVE EL CÓDIGO
Traer (fotos y datos reales, del cliente):
- Una foto de hero (la fachada o el espacio más impactante, apaisada).
- Entre 3 y 5 fotos por cada propiedad publicada — con 3 como mínimo el lightbox ya tiene sentido.
- Nombre, WhatsApp, mail y dirección real de la inmobiliaria (van en el footer y en los botones de contacto).
- La dirección de cada propiedad, si se quiere el pin exacto en el mapa (si no se carga, alcanza con el barrio para ubicarla igual).
- Los links reales de Instagram, Facebook, LinkedIn y X, para reemplazar los placeholders del footer.
Ya resuelto por código, no hay que rediseñarlo:
- El mapa (se arma solo a partir de una dirección de texto, sin ninguna API key).
- El lightbox completo (zoom, flechas, miniaturas, swipe, teclado).
- El acordeón de FAQ y el indicador animado de las pestañas del buscador.
- Los íconos de redes del footer (son íconos propios dibujados a mano, sin depender de ninguna librería de logos con licencia).
- El conteo animado de la ficha técnica de cada propiedad.

CONTROL DE CALIDAD FINAL
¿El buscador se entiende en dos segundos? ¿Las fotos venden la propiedad o se ven como cualquier portal de clasificados? ¿El lightbox se siente premium o se traba? ¿Alguien que lo mire pensaría "quién diseñó esto"?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá identidad y acento sin tocar el buscador, el lightbox ni la estructura de las tres pantallas.",
      content: `Ajustá SOLO la identidad de Dominio:
1. Paleta base: mantené el fondo piedra clara y el texto negro cálido — el color no puede volverse protagonista. Si la inmobiliaria tiene un color propio, reemplazá el acento bronce (\`#8A6A3F\`) por ese color, pero seguí usándolo con la misma moderación: la pestaña activa del buscador, el botón de búsqueda, los bullets, los hovers de link y el ícono de cada servicio — nunca como fondo de una sección completa.
2. Las secciones oscuras (la de marca, el footer) siguen siendo el mismo negro cálido sólido en las dos puntas — no dos negros distintos, y no un color de marca ahí.
3. Logo: wordmark discreto en el nav, en la tipografía serif; si hay isotipo, puede ir como marca de agua sutil en el footer.
4. Tipografía: si la marca pide otra combinación a la sans+serif, mantené el criterio (una para UI, otra para impacto editorial en headlines/precios/nombres de propiedad) — nunca una sola tipografía para todo, le rompe el tono "editorial premium" al template.
5. Glassmorphism: queda reservado SOLO para la tarjeta del buscador. No lo extiendas al nav, a las cards de propiedad ni al footer aunque la marca pida "más moderno" — convierte el sitio en landing futurista, no en inmobiliaria premium.
No toques: la composición bento de propiedades destacadas, el comportamiento del lightbox, ni el layout de la ficha de propiedad o de tasaciones.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá los datos reales de la inmobiliaria, sus propiedades y su información de contacto.",
      content: `Reescribí el copy de Dominio con datos reales:

Nombre: [INMOBILIARIA_NOMBRE]
Zonas donde opera: [ZONAS]
Frase de marca/filosofía (1-2 líneas, la de la sección editorial oscura): [FRASE_DE_MARCA]

Propiedades a publicar, una por una:
- Título, operación (Venta/Alquiler/Temporario), ubicación (y dirección exacta si querés el pin preciso en el mapa), tipo, ambientes, baños, m², año, precio ("desde $X" o "consultar"), descripción de 2-3 oraciones, lista de amenities, y entre 3 y 5 fotos: [LISTA_DE_PROPIEDADES]

Contacto de la inmobiliaria (va en el footer y en los botones de "Escribir por WhatsApp"):
- WhatsApp: [WHATSAPP]
- Mail: [MAIL]
- Dirección de la oficina: [DIRECCION_OFICINA]
- Redes (las que tengan, el resto se ocultan): Instagram [LINK], Facebook [LINK], LinkedIn [LINK], X [LINK]

Preguntas frecuentes (5 a 7): si tenés las tuyas, pasámelas; si no, usá estas como base y ajustalas a tu operatoria real — requisitos para alquilar, cómo se tasa y publica una propiedad, cómo funciona la reserva de un temporario, qué costos tiene una compraventa, qué incluye la administración de alquileres, si se puede pedir una visita antes de decidir, y si trabajan fuera de la ciudad principal.

Reglas:
- Nunca inventar precio, superficie, dirección ni ubicación de una propiedad — si falta el dato, dejar [FALTA: precio real] y no publicar esa propiedad con un placeholder.
- Precios siempre como "desde $X" salvo que el dueño confirme que quiere el precio cerrado y público.
- Evitar superlativos sin sustento ("la mejor ubicación de la ciudad") salvo que sea un hecho verificable.
- El copy vende describiendo bien (orientación, luz, distancia a lo importante), nunca presionando ("¡última unidad!").`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Todo el movimiento del sitio final: hero, buscador, hover de fotos, FAQ, ficha técnica y lightbox.",
      content: `Sumá estas animaciones a Dominio, tal como quedaron en la versión aprobada:
1. Hero: zoom lentísimo en loop en la foto (scale 1 → 1.035, 12s, ease-in-out) + fade-up del texto al cargar (una sola vez).
2. Fade-up de 16-24px al entrar cada sección en viewport (500-700ms, ease-out, dispara una sola vez — no se repite si se vuelve a scrollear).
3. Buscador: el indicador detrás de la pestaña de operación activa (Venta/Alquiler/Temporario) se DESLIZA con física de resorte al cambiar de pestaña — no es un simple cambio de color de fondo.
4. Cards de propiedad y tiles de la galería: zoom fotográfico suave al hover (scale 1.04 a 1.1, 400-700ms).
5. FAQ: acordeón con un ítem abierto a la vez, animado por \`max-height\` + \`opacity\` (300ms) y el ícono +/− rota 180° al abrir. IMPORTANTE: no uses la técnica de animar \`grid-template-rows\` de 0fr a 1fr — en la práctica dio contenido que se veía "sangrando" fuera de la caja cerrada en algunos motores de renderizado, aunque el layout calculado fuera correcto. \`max-height\`+\`opacity\` es más predecible acá.
6. Ficha técnica de la propiedad (ambientes/baños/m²/año): cada número cuenta desde 0 hasta su valor real, una sola vez, al entrar en viewport.
7. Lightbox: transición de zoom suave al tocar la imagen (alterna tamaño normal ↔ ampliado), y las miniaturas cambian de opacidad al pasar de una foto a otra.
No agregues: parallax con scroll-jacking, carrusel automático en la galería principal, ni más de dos animaciones ocurriendo a la vez sobre el mismo elemento. Respetar \`prefers-reduced-motion\`: apagar el zoom del hero y dejar solo cambios de opacidad instantáneos, sin desactivar la funcionalidad (el lightbox y el acordeón se siguen abriendo, solo que sin la transición).`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Dejá indexables la home, cada ficha de propiedad y la página de tasaciones.",
      content: `Optimizá el SEO de [INMOBILIARIA_NOMBRE]:
1. Home title: "[INMOBILIARIA_NOMBRE] — Propiedades en [ZONA]". Meta description con la propuesta concreta (zonas + tipos de operación), bajo 155 caracteres.
2. Cada ficha de propiedad: title "[TÍTULO_PROPIEDAD] en [UBICACIÓN] — [INMOBILIARIA_NOMBRE]", con JSON-LD Schema.org RealEstateListing (price, address, floorSize, numberOfRooms) cuando esos datos sean públicos.
3. La página de Tasaciones lleva su propio title ("Tasación de propiedades — [INMOBILIARIA_NOMBRE]") y no debería indexar el estado de "formulario enviado".
4. Open Graph con la foto principal de cada propiedad y con la foto de hero para la home.
5. Alt text real y descriptivo en cada foto (ej. "Living con ventanales al jardín"), nunca el nombre del archivo ni "foto3.jpg".
6. URLs de propiedad legibles (\`/propiedades/[slug-de-la-propiedad]\`, no un ID numérico pelado), generadas de forma estática para que cada una sea rastreable de una.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Buscador, bento, lightbox, FAQ y footer en mobile — probado y corregido, no solo achicado.",
      content: `Revisá el responsive de Dominio en 375px, 390px, 430px, 768px, 1024px, 1440px, sobre las tres pantallas:
1. Buscador: de pestañas + filtros en fila a una interfaz vertical de un solo carril en mobile, con cada filtro en su propia fila y controles de mínimo 44px de alto.
2. Propiedades destacadas: el bento se apila verticalmente pero la propiedad protagonista sigue siendo visualmente más grande que las secundarias — nunca las cuatro del mismo tamaño en mobile.
3. Galería editorial: pasa de 4 a 2 columnas manteniendo los tiles de distinto tamaño (nunca los recorta todos a cuadrados iguales).
4. Franja de servicios: de 5 columnas con líneas divisorias verticales a filas apiladas con líneas horizontales — sin volverse un acordeón, sigue todo visible.
5. Ficha de propiedad: la galería sigue siendo lo primero (grilla que se convierte en columna), el lightbox agrega gestos de swipe para cambiar de foto, la ficha técnica pasa de fila a grilla de 2 columnas, y la tarjeta de contacto deja de ser \`sticky\` y pasa a estar en el flujo normal, debajo del contenido.
6. Tasaciones: las dos columnas (pitch + formulario) se apilan, el formulario pasa de 2 a 1 columna, y el botón de envío queda accesible con el pulgar.
7. FAQ: el acordeón se comporta igual, con el texto de la pregunta sin cortarse en dos líneas de forma incómoda.
8. Footer: de 3 columnas a 1, con los íconos de redes y de contacto manteniendo 44px de superficie táctil.
Cero overflow horizontal en ninguna de las tres pantallas.`,
    },
  ],
};
