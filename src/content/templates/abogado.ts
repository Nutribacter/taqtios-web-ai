import type { Template } from "./types";

/**
 * Prompts escritos el 7/9 contra la versión FINAL y aprobada de
 * /preview/abogado (home + /agendar), después de dos rondas de correcciones
 * sobre el rebuild v2 (paleta marfil/carbón/dorado — la v1 marino casi negro
 * con índice numerado fue rechazada por básica) y de la optimización de
 * assets. No son el mega prompt original: están corregidos contra el código
 * real, componente por componente.
 */
export const abogado: Template = {
  slug: "abogado",
  name: "Zafra & Celis",
  category: "Estudios Jurídicos",
  style: "Editorial / Marfil y Dorado / Premium",
  tags: ["Abogados", "Editorial", "Marfil y Dorado", "Institucional"],
  status: "ready",
  featured: false,
  previewImage: "/templates/abogado/mazo.webp",
  description:
    "Template para estudios jurídicos: paleta clara marfil/carbón con un único acento dorado, áreas de práctica en scroll horizontal, servicios filtrables por especialidad, equipo con panel seleccionable, proceso de trabajo en tarjetas de borde interactivo, casos de ejemplo y testimonios en marquee. Densidad editorial, sin grandes espacios vacíos entre secciones.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Zafra & Celis",
      description:
        "El prompt principal: genera el sitio completo del estudio jurídico (home + agendar consulta). Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en sitios institucionales premium para estudios profesionales (jurídicos, contables, consultoras) — con el nivel de una firma boutique de abogados de primer nivel, no un sitio de "abogado de guardia" genérico. Sabés construir micro-interacciones reales en React/Next.js (paneles que cambian de estado, bordes que reaccionan al mouse, marquees, contadores animados), no solo maquetar secciones estáticas.

CONTEXTO
Voy a construir el sitio de [ESTUDIO_NOMBRE], un estudio jurídico en [CIUDAD]. Reemplazá cada corchete con mi información real; si un dato falta, dejalo como [FALTA: ...] — nunca inventes número de matrícula, teléfono, dirección ni resultados de casos reales.

OBJETIVO
Que quien entra sienta en tres segundos "este estudio sabe lo que hace y cobra en serio", entienda en qué área de práctica encaja su problema sin leer un párrafo largo, conozca a los socios como personas (no como una lista de nombres) y termine agendando una consulta o escribiendo por WhatsApp. Nunca un sitio que se sienta un flyer o una plantilla de abogado genérica de stock.

AUDIENCIA
Particulares y pequeñas empresas con un problema legal concreto (un despido, un divorcio, un accidente, un contrato) que están comparando estudios y desconfían de sitios que se ven improvisados o todos iguales entre sí.

MARCA
Nombre: [ESTUDIO_NOMBRE]. Tono: seguro y claro, nunca amenazante ni de urgencia falsa ("¡actuá YA o perdés tu reclamo!"). Paleta EXACTA — clara, no oscura: fondo marfil \`#EFEAE0\`, texto principal carbón \`#221F1B\`, acento único dorado \`#B8873A\` (variantes \`#D4A65E\` para texto dorado sobre fondo oscuro y \`#948A79\` para las etiquetas discretas en mayúsculas). Las secciones de énfasis (servicios, números, proceso implícito en el CTA final) invierten a un carbón sólido casi negro \`#1B1A18\` con texto marfil — nunca un tercer color de fondo. El dorado se usa con moderación: el símbolo "&" del logo, el link activo del nav, un botón, el borde de una tarjeta seleccionada, los stats — nunca como color de fondo de una sección completa.

DIRECCIÓN DE DISEÑO
Combinar una tipografía serif para todo lo editorial (nombre de marca, headline del hero, títulos de sección, nombres de las personas del equipo, los números grandes de la franja de resultados) con una sans para todo lo funcional (nav, botones, cuerpo de texto, chips, formularios) — nunca una sola tipografía para todo. Nota técnica real: la serif que usa el sitio hoy es la pila serif del sistema operativo (\`ui-serif, Georgia, Cambria, Times New Roman, Times, serif\`, vía la utilidad \`font-serif\`) — funciona bien y no depende de cargar ninguna fuente, pero si el proyecto ya tiene una serif propia instalada (ej. Fraunces u otra), se puede reemplazar definiendo el token \`--font-serif\` sin tocar ni un componente. Cero glassmorphism en este template (eso es de otro rubro del catálogo, acá no aplica). Fotografía real de personas y de escenas de estudio (reuniones, documentos, un mazo, no iconografía de "balanza de la justicia" genérica) a proporción generosa en las tarjetas de área. Prohibido: gradientes de IA, iconos de adorno sin función, exceso de sombras, layouts simétricos en las seis secciones de contenido, y CUALQUIER espacio en blanco que exista solo para "dar aire" sin una razón de jerarquía.

SPACING — REGLA DURA, LEÉ ESTO ANTES DE MAQUETAR
Todas las secciones de contenido usan el MISMO ritmo vertical: \`py-10\` (40px arriba y abajo), sin excepción, salvo el CTA final que cierra el sitio con \`py-16\` (64px) — un único momento de más aire, a propósito, porque es la última palabra antes del footer. El hero no suma un padding extra, usa el mismo orden de magnitud (\`pt-10\`/\`pt-12\`, \`pb-10\`). Los gaps entre tarjetas son \`gap-4\` (16px) en grillas y \`gap-5\` (20px) en las filas de scroll horizontal — nunca \`gap-8\` o más. NO crear una sección artificialmente alta para que "respire": el objetivo es densidad editorial con jerarquía (títulos que se distinguen por tipografía y tamaño, no por metros de espacio vacío alrededor), ritmo continuo de sección a sección, y sensación premium por calidad de cada bloque, no por cuánto aire lo rodea. Si una sección se siente vacía, el arreglo es sumarle contenido real o achicar su ancho máximo — nunca estirar el padding.

ARQUITECTURA — HOME + UNA PANTALLA DE AGENDAR CONSULTA

NAV
Sticky, fondo marfil semitransparente con blur. Logo en serif ("[ESTUDIO_NOMBRE]", con un carácter de marca — un "&", un punto — en dorado). 4 links de ancla (a las secciones de Áreas, Equipo, Experiencia y Preguntas frecuentes) con un subrayado dorado que se despliega desde la izquierda al pasar el mouse (no un fondo tipo pill). A la derecha, un link de texto "Agendar consulta" con una flecha diagonal que se corre hacia arriba-derecha al hover — no un botón sólido en el nav.

HERO
Split de dos columnas en desktop (una sola columna en mobile, texto primero). Columna de texto: etiqueta chica en mayúsculas con tracking amplio ("Estudio Jurídico · [CIUDAD]"), headline gigante en serif (escala de 5xl en mobile a ~4.2rem en desktop, dos líneas, con la última palabra clave en dorado), párrafo de una oración con los años de trayectoria y las áreas principales, dos llamados a la acción (botón sólido carbón "Agendar una consulta" + link de texto con flecha "Conocer el estudio" que ancla a Áreas de práctica), y una línea chica de credencial (número de matrícula y colegio de abogados) al pie, separada por más espacio que el resto para que se lea como un dato de confianza, no como parte del párrafo. Columna de imagen: una foto real de una consulta o reunión de trabajo, proporción vertical (4:5), que se REVELA con un efecto de cortina al cargar la página (\`clip-path: inset()\` de 100% a 0% en el eje horizontal, ~1.1s, una sola vez, curva \`cubic-bezier(0.65,0,0.35,1)\`) — no un simple fade.

ÁREAS DE PRÁCTICA
Fila de scroll horizontal con snap (no una grilla fija): 5 a 6 tarjetas de ~280-320px de ancho, cada una con una foto real arriba (proporción 4:3, el número de la tarjeta superpuesto arriba a la izquierda) y debajo el título en serif, una descripción de una oración y un link "Consultar" con flecha. Al pasar el mouse: la tarjeta se eleva levemente y gana sombra, la foto hace zoom suave hacia adentro, el título pasa a dorado y la flecha del link se corre a la derecha — todo simultáneo, sin que se sienta una animación por separado de otra. Dos botones de flecha (anterior/siguiente) CENTRADOS DEBAJO de la fila, nunca arriba a la derecha ni como puntos de paginación. Cada tarjeta lleva al formulario de agendar consulta con esa área ya preseleccionada en el select — no a una página nueva por área.

SERVICIOS POR ESPECIALIDAD
Franja de ancho completo que invierte a fondo carbón. Título centrado, y debajo un sistema de dos niveles: primero pestañas de categoría (Laboral, Civil, Familia, Penal, Empresarial, Consumidor) con un subrayado dorado que indica la activa; al elegir una categoría aparecen sus servicios puntuales como chips seleccionables (ej. dentro de "Laboral": Despido sin causa, Accidentes de trabajo, Reclamos de ART); al tocar un chip, una tarjeta de información debajo muestra su descripción, con una transición de entrada suave cada vez que cambia la selección. Cambiar de categoría vuelve siempre al primer servicio de esa categoría. Todo sin recargar la página ni navegar — es un filtro en el cliente.

NÚMEROS
Franja de ancho completo, fondo carbón, una sola hilera con 3-4 estadísticas (años de trayectoria, casos resueltos, % de resolución favorable, clientes atendidos), cada número en dorado y grande, en serif, CONTANDO DESDE CERO la primera vez que la franja entra en la pantalla (no se repite si se vuelve a scrollear). Un detalle sutil de vida: un brillo diagonal dorado muy tenue (opacidad ~7%) cruza la franja en loop cada 7 segundos — es un efecto de fondo, casi imperceptible a propósito, no un elemento que compita con los números. Se apaga solo si el usuario tiene activado "reducir movimiento" en su sistema.

EQUIPO
Foto real panorámica del equipo (proporción ancha, 21:9) arriba de un bloque de dos paneles: a la izquierda, la lista de los socios/asociados (foto chica circular + nombre + cargo), seleccionable con un click — el seleccionado lleva una barra dorada a la izquierda y su nombre se pinta de dorado; a la derecha, un panel de detalle que muestra al seleccionado en grande (foto circular con anillo dorado, nombre, cargo · área, biografía de 2-3 líneas) y CAMBIA con una transición suave cada vez que se elige a otra persona de la lista — sin recargar, sin navegar a otra URL.

CÓMO TRABAJAMOS
Cuatro tarjetas en cuadrante (2 columnas × 2 filas en desktop, una columna en mobile), cada una con un número, un título en mayúsculas y una descripción corta del paso (consulta inicial, análisis y estrategia, gestión del caso, resolución). El detalle que las distingue: EL BORDE ES INTERACTIVO — un arco dorado que persigue al mouse en ángulo alrededor de la tarjeta cuando pasás por encima, y vuelve a su posición de reposo al salir. Es un efecto sutil de marca, no decorativo sin sentido: refuerza que el estudio "está atento" en cada paso.

EXPERIENCIA / CASOS DE EJEMPLO
Mismo patrón de scroll horizontal con snap que Áreas de práctica, pero con tarjetas oscuras (fondo carbón) de casos de ejemplo, CLARAMENTE MARCADOS COMO EJEMPLO (nunca presentados como casos reales verificables sin que el estudio los confirme). Cada tarjeta lleva una etiqueta de categoría con un color propio (un color distinto por área — laboral, daños, familia, consumidor — para que tarjetas consecutivas nunca se lean idénticas) y tres bloques con borde lateral de acento: problema, enfoque, resultado. Mismos botones de flecha centrados debajo que en Áreas de práctica.

TESTIMONIOS
Marquee horizontal infinito (loop continuo por transform, no un carrusel con flechas ni puntos), tarjetas de testimonio con la frase en serif y el nombre + tipo de caso abajo. Se PAUSA al pasar el mouse por encima de la fila completa (para poder leer sin que se mueva). Los bordes izquierdo y derecho de la franja se desvanecen con una máscara de degradado del mismo color de fondo, así las tarjetas parecen aparecer y disolverse en los extremos en vez de cortarse de golpe.

PREGUNTAS FRECUENTES
Acordeón clásico de una sola pregunta abierta a la vez (abrir una cierra cualquier otra que estuviera abierta). La pregunta activa se pinta de dorado y su ícono pasa de "+" a "−" dentro de un círculo con borde. La respuesta se despliega con una transición de altura máxima + opacidad — nunca deja contenido "recortado" a la mitad.

CTA FINAL
Franja oscura de cierre, statement corto en serif grande, y dos botones: uno sólido dorado ("Agendar una consulta") con un efecto MAGNÉTICO — se desplaza levemente hacia el cursor con física de resorte cuando el mouse está cerca, sin que haga falta tocarlo — y uno de borde ("Escribir por WhatsApp") que abre un link real de WhatsApp en pestaña nueva. Cierra con el footer institucional (contacto real, redes, navegación).

PANTALLA 2 — AGENDAR CONSULTA
Header simplificado con volver al inicio. Dos columnas: a la izquierda el pitch ("Contanos tu caso", la aclaración de que la primera consulta no tiene costo) + un MAPA DE GOOGLE REAL embebido por dirección de texto (sin necesitar ninguna API key) + la dirección y el horario de atención; a la derecha una tarjeta con el formulario (nombre y apellido, teléfono, email, área de consulta con las mismas áreas de práctica del home, mensaje) que al enviarse muestra una confirmación DENTRO DE LA MISMA TARJETA, sin recargar la página, con un link para "enviar otra consulta". El select de área LLEGA PRESELECCIONADO cuando se entra desde el botón "Consultar" de una tarjeta de área de práctica del home (vía un parámetro en la URL).

COMPONENTES REALES UTILIZADOS
- Revelado del hero: animación CSS propia (\`clip-path\` + \`@keyframes\`), sin librería.
- Contador de la franja de números: componente propio que anima desde 0 al entrar en viewport (\`IntersectionObserver\`), reutilizable en cualquier sección con estadísticas.
- Fade-up al hacer scroll: wrapper propio sobre \`motion\` (Framer Motion / \`motion/react\`) — no es de ninguna librería de terceros, se reimplementó a mano.
- Tarjeta de borde interactivo de "Cómo trabajamos": ADAPTADA de un componente real de 21st.dev — **"Info Card" de @maxim.bort.devel** (un componente de tarjeta con borde animado que persigue el mouse). Se tomó SOLO el mecanismo del borde (el ángulo del mouse controla un gradiente cónico detrás de la tarjeta) y se reimplementó a mano con la paleta propia del sitio (dorado sobre carbón translúcido) — nada del resto de ese componente (su imagen, su patrón de fondo multicolor, su efecto de color de título al hover) se usó. Si tu instancia de Cursor/Claude Code tiene el MCP de 21st.dev conectado, podés pedirle "buscá el componente Info Card de maxim.bort.devel" para ver la referencia original antes de adaptarlo — no redistribuyas su código tal cual, adaptalo.
- Brillo sutil de la franja de números: inspirado en el mecanismo de loop con máscara de desvanecido de **"Logo Cloud Marquee" (logo-cloud-3) de @7ovr** en 21st.dev, adaptado de un carrusel de logos a un barrido de luz de fondo sobre una franja de estadísticas fijas — no se usa ningún logo ni la estructura de carrusel de ese componente, solo la idea de movimiento en loop con máscara.
- Botón magnético del CTA final: adaptado de un componente de 21st.dev de la familia "Magnetic" (autor @ibelick), reimplementado a mano con \`motion/react\` (física de resorte, sin el paquete original).
- Marquee de testimonios y acordeón de FAQ: implementación propia en CSS/React, sin librería ni componente de terceros.

DIRECCIÓN DE COPY
Español rioplatense/argentino natural, tono seguro y cercano — nunca alarmista ni de urgencia falsa. Los casos de ejemplo van siempre etiquetados como demo/ejemplo. Nunca prometer un resultado de juicio como garantizado.

REGLAS RESPONSIVE
Mobile es su propia experiencia: el hero pasa a una sola columna (texto primero, imagen después), las filas de scroll horizontal (áreas, casos) siguen siendo scroll horizontal con snap (no se convierten en grilla apilada, es el mismo patrón en las dos resoluciones), la franja de servicios apila las pestañas de categoría en una fila que también se puede recorrer, el panel de equipo pasa de dos columnas a una sola (la lista arriba, el detalle debajo), la franja de números se envuelve en dos filas de dos si no entra una sola hilera, y el footer pasa de varias columnas a una. Ningún botón ni control baja de 44px de alto. Cero overflow horizontal en ninguna pantalla — las únicas franjas que se desplazan lateralmente son las que están diseñadas para eso (áreas, casos, marquee de testimonios).

ANIMACIONES
Fade-up estándar (16px, 500ms, ease-out, dispara una sola vez al entrar en viewport) en la mayoría de los títulos de sección. Revelado de cortina en la foto del hero (una sola vez al cargar). Zoom suave de foto + elevación de tarjeta al hover en Áreas de práctica. Subrayado deslizante en los links del nav y en las pestañas de categoría de Servicios. Conteo desde 0 en la franja de Números, una sola vez. Borde interactivo (conic-gradient que sigue al mouse) en las tarjetas de Cómo trabajamos. Marquee continuo de Testimonios, pausado al hover. Acordeón de FAQ por \`max-height\`+\`opacity\` (300ms) — evitar la técnica de animar \`grid-template-rows\`, dio problemas de renderizado en algunos motores. Botón magnético del CTA final (física de resorte, radio de ~110px). Brillo diagonal sutil en loop sobre la franja de Números (7s, opacidad muy baja). Respetar \`prefers-reduced-motion\`: apagar el revelado del hero, el brillo de Números y el marquee de Testimonios, dejando el resto del contenido totalmente funcional sin movimiento.

ACCESIBILIDAD
Contraste mínimo 4.5:1 en todo texto (medido sobre el fondo real, no solo sobre el panel — un texto secundario que aprueba sobre marfil puede no aprobar sobre carbón, y viceversa). El acordeón de FAQ lleva \`aria-expanded\` en cada pregunta. El mapa embebido lleva un \`title\` descriptivo. Alt text real y descriptivo en cada foto (nunca el nombre del archivo). Todos los controles interactivos (chips, pestañas, botones de flecha, lista de equipo) son navegables por teclado y tienen un estado de foco visible.

SEO
Home title: "[ESTUDIO_NOMBRE] — Estudio Jurídico en [CIUDAD]". Meta description con las áreas de práctica principales. La página de agendar consulta lleva su propio title y no debería indexar el estado de "formulario enviado".

RENDIMIENTO
Todas las fotos en WebP, servidas con el componente de imagen del framework (\`next/image\` o equivalente) para que genere los tamaños responsivos automáticamente — nunca un único archivo gigante. Ninguna imagen con prioridad de carga salvo la del hero: el resto carga en diferido (lazy) a medida que el usuario llega a esa sección, para no bajar todas las fotos del sitio de una sola vez. Como referencia de calidad ya validada en este mismo template: las fotos de tarjeta (áreas, equipo) pesan entre 5 KB y 65 KB cada una ya optimizadas, y la foto de hero (a pantalla casi completa) no debería superar los ~150 KB.

REQUISITOS TÉCNICOS
HTML semántico. Componente de imagen con \`sizes\` correcto por uso (no es lo mismo una foto de hero a media pantalla que el avatar circular de 36px de la lista de equipo). Formulario de agendar consulta con validación nativa de campos requeridos.

ASSETS — QUÉ TRAER VOS Y QUÉ YA RESUELVE EL CÓDIGO
Traer (fotos y datos reales del estudio), reemplazando cada archivo en \`public/templates/abogado/\` por uno propio CON EL MISMO NOMBRE (así no hay que tocar ninguna línea de código, solo el archivo):
- \`consulta.webp\` — la foto del hero (una consulta o reunión real, proporción vertical 4:5, ~1600×2400px es un buen tamaño de origen).
- Una foto por cada área de práctica que se muestre (\`entrega-documento.webp\`, \`area-comercial.webp\`, \`area-familia.webp\`, \`area-penal.webp\`, \`documentos-lupa.webp\`, \`area-danos.webp\`) — proporción horizontal, aproximada 4:3.
- \`equipo-reunion.webp\` — una foto panorámica real del equipo o del estudio (proporción bien ancha, 21:9).
- Una foto cuadrada por cada socio/asociado (\`mariana.webp\`, \`federico.webp\`, \`lucia.webp\`, \`julian.webp\` o los nombres que correspondan), recortada centrada en la cara — se muestran en círculo.
- Nombre del estudio, matrícula y colegio de abogados, dirección real (para el mapa y el footer), WhatsApp y mail, y links reales de redes sociales.
- Los casos de ejemplo, los testimonios y las preguntas frecuentes: si el estudio tiene casos y testimonios reales (con consentimiento), reemplazarlos; si no, se pueden dejar como ejemplo mientras se etiqueten como tal.
Ya resuelto por código, no hay que rediseñarlo:
- El mapa (se arma solo a partir de una dirección de texto, sin ninguna API key).
- El borde interactivo de las tarjetas de "Cómo trabajamos", el marquee de testimonios, el acordeón de FAQ y el botón magnético del CTA.
- El conteo animado de la franja de Números.
- El preseleccionado del área de consulta al llegar desde una tarjeta de "Áreas de práctica".

CONTROL DE CALIDAD FINAL
¿Se entiende en tres segundos en qué área encaja mi problema? ¿El equipo se siente gente real o una lista de nombres? ¿Las secciones tienen ritmo continuo o se sienten con espacios muertos entre bloque y bloque? ¿Alguien que lo mire pensaría "este estudio cobra en serio"?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá identidad y acento sin tocar la estructura de las secciones ni los componentes interactivos.",
      content: `Ajustá SOLO la identidad de Zafra & Celis:
1. Paleta base: mantené el fondo marfil claro y el texto carbón — el dorado no puede volverse protagonista. Si el estudio tiene un color propio, reemplazá el acento dorado (\`#B8873A\` / \`#D4A65E\` sobre fondo oscuro) por ese color, con la misma moderación: el "&" del logo, el link activo del nav, un botón, el borde de la tarjeta seleccionada, los números de la franja de resultados — nunca como fondo de una sección entera.
2. Las secciones de énfasis (servicios, números, CTA final) siguen siendo el mismo carbón sólido en las tres — no tres tonos oscuros distintos, y no el color de marca ahí.
3. Logo: wordmark discreto en el nav, en serif, con el detalle de marca (el "&", un punto, una inicial) en el color de acento.
4. Tipografía: hoy el "serif" es la pila serif del sistema operativo — si la marca pide una serif con más carácter (ej. una editorial o slab), definí el token \`--font-serif\` del proyecto apuntando a esa tipografía; no hace falta tocar ningún componente, todos usan la utilidad \`font-serif\`. Mantené el criterio de dos tipografías (una para UI, otra para lo editorial) — nunca una sola para todo.
5. No conviertas ninguna sección en oscura ni en glassmorphism aunque la marca pida "más moderno": este template es deliberadamente claro y sin vidrio — eso rompe la identidad "estudio jurídico serio" y lo acerca a una landing de producto tech.
No toques: el scroll horizontal de Áreas de práctica y Casos, el sistema de tabs+chips de Servicios, el panel seleccionable de Equipo, el borde interactivo de Cómo trabajamos, ni el ritmo de espaciado (\`py-10\` en todas las secciones salvo el CTA final).`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá los datos reales del estudio, sus áreas, su equipo y su información de contacto.",
      content: `Reescribí el copy de Zafra & Celis con datos reales:

Nombre del estudio: [ESTUDIO_NOMBRE]
Ciudad / zona donde opera: [CIUDAD]
Matrícula y colegio de abogados: [MATRÍCULA]
Años de trayectoria: [AÑOS]

Áreas de práctica a publicar (5 o 6, una por tarjeta): título, descripción de una oración, y una foto real por área: [LISTA_DE_ÁREAS]

Servicios puntuales por categoría (2-3 por cada área de práctica, para los chips de "Servicios por especialidad"): título + descripción corta de cada uno: [LISTA_DE_SERVICIOS]

Equipo (socios y asociados): nombre, cargo, área en la que se especializa, biografía de 2-3 líneas, y una foto cuadrada de cada uno: [LISTA_DE_EQUIPO]

Estadísticas reales para la franja de Números (años de trayectoria, casos resueltos, % de resolución favorable, clientes atendidos — usar solo las que se puedan sostener con un dato real): [ESTADÍSTICAS]

Casos de ejemplo o testimonios reales (con consentimiento de la persona), o dejar los de ejemplo claramente etiquetados como tal: [CASOS_Y_TESTIMONIOS]

Preguntas frecuentes (5 a 7): si tenés las tuyas, pasámelas; si no, usá estas como base y ajustalas a tu operatoria real — si la primera consulta tiene costo, cómo se cobran los honorarios, cuánto dura un juicio tipo, si atienden por videollamada, qué documentación llevar a la primera consulta, y en qué localidades trabajan.

Contacto (va en el footer, en el CTA final y en la pantalla de agendar consulta):
- WhatsApp: [WHATSAPP]
- Mail: [MAIL]
- Dirección del estudio: [DIRECCIÓN]
- Horario de atención: [HORARIO]
- Redes (las que tengan, el resto se ocultan): Instagram [LINK], Facebook [LINK], LinkedIn [LINK], X [LINK]

Reglas:
- Nunca prometer un resultado de juicio como garantizado ("ganás seguro") — hablar en términos de acompañamiento y estrategia.
- Los casos de ejemplo siempre quedan etiquetados como demo/ejemplo salvo que sean reales y confirmados por el estudio.
- Tono seguro y cercano, nunca alarmista ("¡tu reclamo prescribe HOY!") ni acartonado en exceso.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Todo el movimiento del sitio final: hero, scroll horizontal, servicios, números, equipo, proceso, marquee y FAQ.",
      content: `Sumá estas animaciones a Zafra & Celis, tal como quedaron en la versión aprobada:
1. Hero: la foto se revela con una cortina (\`clip-path: inset()\` de 100% a 0% en el eje horizontal, ~1.1s, curva \`cubic-bezier(0.65,0,0.35,1)\`, una sola vez al cargar).
2. Fade-up de 16px al entrar cada título de sección en viewport (500ms, ease-out, dispara una sola vez — no se repite si se vuelve a scrollear).
3. Áreas de práctica y Casos de ejemplo: al pasar el mouse por una tarjeta, la foto hace zoom suave (scale hacia 1.1, 700ms), la tarjeta se eleva levemente y gana sombra, el título pasa al color de acento y la flecha del link se corre a la derecha — todo a la vez, sin escalonarlo.
4. Servicios por especialidad: el subrayado de la pestaña de categoría activa se desliza; al tocar un chip de servicio, la tarjeta de información de abajo entra con una transición suave (no un cambio brusco de contenido).
5. Números: cada estadística cuenta desde 0 hasta su valor real, una sola vez, al entrar en viewport. Sumale un brillo diagonal MUY sutil (opacidad ~7%) que cruza la franja en loop cada 7 segundos — es decorativo de fondo, nunca debe competir visualmente con los números ni con su etiqueta.
6. Equipo: al elegir a otra persona de la lista, el panel de detalle de la derecha cambia con una transición de entrada suave (fade + leve desplazamiento), no un salto instantáneo.
7. Cómo trabajamos: el borde de cada tarjeta es un arco de color que sigue el ángulo del mouse mientras pasás por encima (actualizado en cada movimiento del mouse dentro de la tarjeta) y vuelve a su posición de reposo al salir — sin transición de por medio en el ángulo mismo, es instantáneo y directo (como un reflejo), la parte animada es el resto de la tarjeta (sombra al hover).
8. Testimonios: marquee horizontal continuo (loop por transform, ~34s, velocidad lineal), que se PAUSA por completo al pasar el mouse sobre la fila.
9. FAQ: acordeón de una pregunta abierta a la vez, animado por \`max-height\`+\`opacity\` (300ms) y el ícono +/− cambia al abrir. IMPORTANTE: no uses la técnica de animar \`grid-template-rows\` de 0fr a 1fr — dio contenido "sangrando" fuera de la caja cerrada en algunos motores de renderizado. \`max-height\`+\`opacity\` es más predecible acá.
10. CTA final: el botón principal se desplaza levemente hacia el cursor con física de resorte cuando el mouse está a menos de ~110px de distancia (efecto magnético), y vuelve a su posición al alejarse el cursor o al salir del botón.
No agregues: parallax con scroll-jacking, autoplay ni flechas de carrusel en el marquee de testimonios (es continuo, no paginado), ni más de dos animaciones ocurriendo a la vez sobre el mismo elemento. Respetar \`prefers-reduced-motion\`: apagar la cortina del hero, el brillo de Números y el marquee de Testimonios, sin desactivar ninguna funcionalidad (los chips, el acordeón y el panel de equipo se siguen usando igual, solo sin la transición).`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Dejá indexables la home y la página de agendar consulta.",
      content: `Optimizá el SEO de [ESTUDIO_NOMBRE]:
1. Home title: "[ESTUDIO_NOMBRE] — Estudio Jurídico en [CIUDAD]". Meta description con las áreas de práctica principales, bajo 155 caracteres.
2. La página de agendar consulta lleva su propio title ("Agendar consulta — [ESTUDIO_NOMBRE]") y no debería indexar el estado de "formulario enviado".
3. Open Graph con la foto de hero para la home.
4. Alt text real y descriptivo en cada foto (ej. "Reunión de trabajo entre abogados revisando un contrato"), nunca el nombre del archivo.
5. Si el estudio quiere aparecer en resultados locales, sumar JSON-LD Schema.org \`LegalService\` con nombre, dirección, teléfono y áreas de práctica como \`areaServed\` o \`knowsAbout\`.
6. Las anclas de sección (Áreas, Equipo, Experiencia, Preguntas) deberían tener un \`id\` estable y legible, no un identificador generado — ya sirven de navegación interna y podrían recibir tráfico directo desde un buscador.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "Scroll horizontal, servicios, equipo, números y FAQ en mobile — probado y corregido, no solo achicado.",
      content: `Revisá el responsive de Zafra & Celis en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Hero: pasa a una sola columna, texto primero y la foto debajo (nunca la foto arriba tapando el headline). Los dos CTA del hero se apilan si no entran en una fila.
2. Áreas de práctica y Casos de ejemplo: SIGUEN siendo scroll horizontal con snap en mobile (no se convierten en grilla apilada ni en un slider con puntos) — es el mismo patrón que en desktop, solo que las tarjetas quedan a un ancho fijo menor (~280px) para que se insinúe la siguiente.
3. Servicios por especialidad: las pestañas de categoría se envuelven o se recorren en su propia fila si no entran las 6 juntas; los chips de servicio se envuelven en varias filas, nunca se recortan ni desbordan.
4. Franja de Números: las 3-4 estadísticas se envuelven en dos filas de dos si no entra una sola hilera, manteniendo el mismo tamaño de número (no lo achiques al punto de perder impacto).
5. Equipo: el panel de dos columnas (lista + detalle) pasa a una sola columna, la lista de personas arriba y el panel de detalle de la persona seleccionada debajo.
6. Cómo trabajamos: el cuadrante de 2×2 pasa a una sola columna, el efecto de borde interactivo se mantiene igual (en mobile reacciona al toque en vez de al mouse, o simplemente queda en su posición de reposo — no debe romper el layout si no hay evento de mouse).
7. Testimonios: el marquee sigue funcionando igual, con las máscaras de desvanecido en los bordes ajustadas a un ancho menor.
8. FAQ: el acordeón se comporta igual, con el texto de la pregunta sin cortarse en dos líneas de forma incómoda.
9. Agendar consulta: las dos columnas (pitch + mapa / formulario) se apilan, el mapa queda arriba o el formulario primero según cuál sea la prioridad de conversión, y el botón de envío queda accesible con el pulgar.
10. Footer: de varias columnas a una, con los íconos de redes y de contacto manteniendo 44px de superficie táctil.
Cero overflow horizontal en ninguna pantalla, salvo en las franjas diseñadas para desplazarse (Áreas, Casos, marquee de Testimonios).`,
    },
  ],
};
