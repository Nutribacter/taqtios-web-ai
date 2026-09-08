TEMPLATE:
Constructora

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: un prompt autocontenido para que otro agente (Claude Code u otro) recree un template de constructora/arquitectura con el mismo nivel visual y estructural que `/preview/constructora`. Describe el RESULTADO FINAL real — no agrega secciones que no se construyeron ni omite detalles que sí se implementaron.

---

# PROMPT MAESTRO — Template de Constructora / Arquitectura Premium

Vas a construir la página completa de un template de constructora/estudio de arquitectura premium, en Next.js (App Router) + TypeScript + Tailwind CSS. El resultado tiene que sentirse como una experiencia editorial y cinematográfica — video como cámara, scroll como dirección, tipografía gigante como estructura — no como una web corporativa genérica de constructora.

## 1. Identidad visual

**Concepto**: "Architecture in Motion" — arquitectura, video y materia real (piedra, madera, vidrio, metal) por encima de cualquier color de marca.

**Paleta** (fondo oscuro mate, acento cálido, sin colores fríos):
- Fondo principal: `#11110F` · Fondo secundario (tiles, reversos): `#181815` · Fondo del hero: `#0b0b09`
- Texto principal: `#F3F0E8` sobre el fondo oscuro; texto secundario en opacidades de blanco (70/50/45/40/35/30%), no grises propios
- Acento piedra: `#D6D0C4` (eyebrows, subrayado activo del nav) · Acento cálido/madera: `#8A6A4B` (íconos de contacto, un extremo del degradado del H1) · Blanco cálido: `#ECE8DF` (botón sólido principal, handle del comparador)
- Vidrio (`.niv-glass` o equivalente): `rgba(255,255,255,0.07)` + `backdrop-filter: blur(16px)` — usado en el nav al scrollear, CTAs con borde, el panel del formulario de contacto y el frente de las tarjetas de equipo. NUNCA como fondo de una sección completa.
- Ruido de fondo sutil: una capa fija (`position: fixed; inset: 0; z-index: 0; pointer-events: none`) con un SVG `feTurbulence` embebido como `background-image`, opacity ~0.05, `mix-blend-mode: overlay` — le da profundidad al negro sin que se note como textura. Se apaga bajo `prefers-reduced-motion`.

No uses piedra/bronce, marfil/dorado, ni verde salvia/perla — esos ya están tomados por otros rubros del catálogo. El acento tiene que salir de materiales reales (madera, piedra clara), nunca de azul o violeta corporativo.

**Tipografía**: una sola familia sans geométrica (Plus Jakarta Sans o equivalente), cargada con `next/font/google` directamente en cada archivo de página que la necesite (no toques el layout global ni la tipografía de otros templates). Pesos 400 a 800.
- H1 del hero: gigante y responsive con `vw` puro (aprox. `11-12vw` en mobile, bajando a `6-7vw` en desktop) — **calibralo contra la palabra más larga del headline en el viewport más chico que vayas a soportar (375px)**, no un valor arbitrario: un `vw` demasiado grande corta el texto contra el borde de la pantalla.
- H2 de sección: `text-4xl sm:text-5xl font-bold tracking-tight`. Eyebrow: `text-xs uppercase tracking-[0.3em]`.
- Nada de serif — la escala tipográfica sostiene la jerarquía, no una segunda familia.

**Hero como cámara**: un `<video>` nativo a pantalla completa (`h-[100svh]`, `object-cover`), `autoPlay muted loop playsInline preload="auto"`, con `poster` (frame extraído del propio video, no una imagen distinta) para que no haya salto de layout mientras carga. Overlay con `gradient-to-t` del color de fondo hacia transparente para que el texto siempre tenga contraste. Con `prefers-reduced-motion: reduce`, reemplazá el `<video>` entero por una `<Image priority>` del mismo poster — nunca fuerces autoplay a quien lo pidió apagado.

**Reveal del H1**: cada línea del titular entra con un `overflow-hidden` envolviendo un `translateY(110% → 0%)` animado al montar, con `animation-delay` escalonado por línea (0s, 0.1s, 0.2s...) — es reveal al cargar la página, no un efecto de scroll. Al menos una palabra del titular lleva un degradado animado tipo "líquido" (`background-clip: text`, colores del acento cálido, sin dependencias de shaders).

**Motion — con propósito, nunca decoración permanente**:
- Fade + `translateY` al entrar en viewport para casi todo el contenido, una sola vez.
- Contador animado (de 0 al valor real, una sola vez) en una franja de 4 cifras clave.
- Un badge/eyebrow con efecto de texto tipo "cartelera de aeropuerto" (letra por letra, en loop) — sin que canse, en loop cada 3-4 segundos.
- Tarjetas que giran 180° al hover para mostrar más información atrás (equipo).
- Un marquee de texto horizontal cuya velocidad reacciona a la velocidad REAL de scroll del usuario (no un marquee de velocidad fija) — **calibrá la velocidad base y el multiplicador de scroll para que el texto SIEMPRE se pueda leer**, incluso durante un scroll rápido; clampeá el multiplicador, no lo dejes sin techo.
- Un bloque de proceso/pasos resuelto como "un paso a la vez" con transición deslizante y puntos de progreso, con avance automático que se pausa al interactuar — no una grilla estática de tarjetas iguales.
- Un comparador de dos imágenes con divisor arrastrable (mouse/touch/teclado) para mostrar una transformación (obra en proceso → terminada), aclarando en el texto que las dos imágenes no son necesariamente del mismo caso si no lo son.
- Un video protagonista NO se reproduce fuera de pantalla: usá `IntersectionObserver` para pausar/reproducir tiles de video en una grilla, y `preload="none"` en los que no son el hero.
- Todo lo decorativo se apaga bajo `prefers-reduced-motion: reduce`.

**Densidad y spacing**: secciones con padding vertical entre `py-10` y `py-28` según el peso de cada bloque — una franja de números/marquee es una pausa rítmica y va MÁS BAJA (`py-10/py-14`) que una sección de contenido real. Evitá que un bloque de pocos elementos (ej. 4 números) quede forzado a ocupar todo el ancho del contenedor: si el contenido es corto, centralo con un ancho ajustado a su propio tamaño (`w-fit`), no una grilla que lo estire.

## 2. Arquitectura de la página (orden real)

1. **Navbar** — sticky, transparente sobre el video del hero, pasa a vidrio oscuro al hacer scroll. Logo + 5 links de ancla + CTA (desktop); botón hamburguesa con panel en vidrio (mobile).
2. **Hero** — video a pantalla completa + eyebrow con efecto cartelera + H1 de 3 líneas (última palabra en degradado animado) + 2 CTAs (uno en vidrio, uno en texto) + indicador de scroll animado.
3. **Proyectos** — lista editorial vertical (NO una grilla de cards chicas ni un carrusel): cada proyecto es una fila con imagen grande (2/3 del ancho en desktop) + ficha de datos (número, categoría, nombre, ubicación, m², año, estado) al lado. Hover: zoom de imagen + CTA que aparece deslizando. Cada fila linkea a una ficha de proyecto en una ruta dinámica.
4. **Transformación (antes/después)** — el comparador de imágenes con divisor arrastrable, centrado, con su nota de honestidad si las fotos no son del mismo caso.
5. **Números + marquee** — franja baja con 3-5 cifras animadas (aclarando que son de ejemplo si no son reales) + un marquee de dos líneas en sentidos opuestos con texto de marca/servicios, justo debajo, separado por bordes horizontales.
6. **Servicios** — filas full-width (no cards): número + título grande + descripción, con una foto de fondo que aparece al hover (overlay oscuro encima). En mobile la descripción se muestra siempre, no depende de hover.
7. **Materiales** — grilla de 4 tarjetas con imagen, título y descripción que se revela al hover, ligadas a las fotos de detalle realmente disponibles (piedra, madera/vidrio, superficies, metal/fachada) — no un listado universal inventado.
8. **Video / galería en movimiento** — bento con los videos disponibles: uno grande + el resto chicos, cada uno en loop mientras está en viewport, con lightbox al click (controles + sonido).
9. **Proceso** — el stepper de "un paso a la vez" descripto arriba, con 5-6 pasos (idea → proyecto → presupuesto → planificación → construcción → entrega o equivalente).
10. **Equipo** — banner panorámico (foto de oficina/equipo trabajando) + 3-4 tarjetas que giran al hover (frente: iniciales sobre vidrio + nombre + rol; atrás: bio corta).
11. **Testimonio** — UNA cita grande centrada con autor y proyecto, aclarando si es de ejemplo. No un carrusel si solo hay un testimonio real disponible.
12. **CTA** — imagen de fondo con overlay oscuro + titular gigante en forma de pregunta + CTA hacia contacto.
13. **Contacto** — dos columnas: info + WhatsApp a un lado, formulario (nombre, email, whatsapp, tipo de proyecto, ubicación, mensaje) en panel de vidrio al otro. Al enviar, reemplazar el formulario por una confirmación (sin necesidad de backend real para el preview).
14. **Footer** — minimalista: marca + descripción corta, contacto, navegación de anclas, línea legal. Sin colores de acento fuertes.
15. **WhatsApp flotante** — burbuja fija verde, esquina inferior derecha, en TODA la página, mensaje pre-armado.

**Ficha de proyecto** (ruta dinámica, ej. `/proyecto/[slug]`): hero de imagen grande con `priority`, ficha técnica (superficie, año, estado), descripción, galería de 3+ imágenes, y un panel lateral sticky con CTA de WhatsApp contextual al proyecto + link de vuelta al formulario general.

## 3. Componentes a construir

Reutilizables entre rubros (si el catálogo ya tiene equivalentes, adaptalos en vez de reinventarlos):
- **Reveal al scroll** (fade + translateY, una vez).
- **Contador animado** (de 0 al valor real).
- **Texto tipo cartelera** letra por letra en loop.
- **Degradado animado sobre texto** (`background-clip: text`).
- **Tarjeta que gira 180° al hover** (`perspective` + `rotateY` + `backface-visibility: hidden`).
- **Marquee de texto con velocidad reactiva al scroll** (`useScroll` + `useVelocity` de tu librería de motion, con el multiplicador SIEMPRE clampeado).
- **Stepper "un paso a la vez"** con transición deslizante, avance automático pausable, y navegación manual (flechas + puntos de progreso).

Específicos de este rubro:
- **Comparador antes/después** con divisor arrastrable (`clip-path` + pointer events, sin librería).
- **Bento de video** con `IntersectionObserver` para play/pause automático + lightbox propio al click.
- **Footer** del rubro (contacto + redes + navegación).

No construyas: un cursor custom (no aporta sobre el nativo), múltiples sistemas de carrusel para mostrar el mismo contenido (un buen sistema de proyectos alcanza), ni un carrusel de testimonios si solo tenés uno de verdad.

## 4. Responsive

- Mobile-first, breakpoints por sección según su contenido, no un grid system único.
- El H1 del hero necesita su propio ajuste de `vw` por breakpoint — probalo en 375px antes de darlo por terminado, es el error más común de este tipo de hero.
- Nav de texto → hamburguesa + panel de vidrio bajo el breakpoint mobile.
- Toda fila horizontal (proyectos, contacto) pasa a columna apilada en mobile.
- Grillas de 4 columnas (equipo, materiales) bajan a 2 en mobile/tablet.
- Verificá que no haya overflow horizontal en 375px real (no solo "se ve bien" — medí `scrollWidth` vs `clientWidth`).

## 5. Imágenes y performance

- 100% `next/image` (o el equivalente del framework), nunca `<img>` nativa.
- `fill` + contenedor con `aspect-ratio`/altura fija SIEMPRE — cero layout shift, sin importar el tamaño real del archivo.
- `sizes` calculado contra el ancho REAL de renderizado de cada uso puntual — no `100vw` en una imagen que en realidad ocupa una columna angosta al lado de otro contenido.
- `priority` únicamente en las imágenes que son LCP real (el poster del hero en el fallback de reduced-motion, el hero de una ficha de detalle) — nunca en imágenes debajo del pliegue.
- Habilitá AVIF además de WebP a nivel de configuración del framework, con WebP como respaldo.
- Optimizá las fotos fuente a WebP calidad ~80-85, con un ancho máximo calculado por uso real (nunca "achicar todo por igual"), y guardá los originales fuera de la carpeta pública servida.
- Video: comprimí a H.264 1080p sin audio (`faststart`/equivalente para streaming progresivo), generá un poster (frame extraído) por cada clip. Hero con `preload="auto"`; videos secundarios con `preload="none"` + play/pause gatillado por `IntersectionObserver`, nunca los 4 reproduciendo fuera de pantalla a la vez.

## 6. Accesibilidad

- `<label htmlFor>` en cada campo de formulario, `required` nativo donde corresponda.
- El comparador antes/después necesita ser operable por teclado (un `<input type="range">` real, aunque esté visualmente oculto, sirve).
- `aria-label` en todo botón que sea solo un ícono (nav mobile, flechas del stepper, cerrar el lightbox, WhatsApp flotante) y `aria-current` en el paso/punto activo de cualquier stepper.
- Contraste: texto principal casi blanco sobre negro mate (~15:1); ningún texto secundario debería bajar de una opacidad de blanco ~30% sobre fondo oscuro puro.

## 7. Reglas de contenido — no negociables

- **Todo el contenido (proyectos, números, equipo, testimonio, datos de contacto) es DEMO y editable** — nunca lo presentes como si fuera de una empresa real, y dejá comentarios/aclaraciones visibles donde corresponda (ej. "Cifras de ejemplo", "Testimonio de ejemplo", nota de que antes/después no son necesariamente el mismo caso).
- El equipo se muestra con iniciales sobre vidrio o iconografía — nunca fotos de stock haciéndose pasar por personas reales.
- Los materiales y servicios mostrados tienen que corresponder a las fotos/información realmente disponibles, no a un listado universal copiado de otro rubro.
- El WhatsApp y los datos de contacto son placeholders documentados como tales en el código — nunca un número o mail que parezca real sin serlo.

## 8. Reglas de calidad — checklist final antes de dar por terminado

1. El hero impacta de inmediato: video + tipografía + espacio, sin llenar la pantalla de elementos.
2. El video es protagonista, no decorativo — se ve en el hero Y en una sección propia de galería/movimiento.
3. La tipografía gigante del hero NO se corta contra el borde en 375px.
4. El negro (o el color de fondo que elijas) tiene profundidad — no es un plano sin textura.
5. El vidrio se usa con criterio puntual, nunca como fondo de sección completo.
6. Los proyectos tienen protagonismo real (imágenes grandes, no thumbnails).
7. Las transiciones y el motion tienen un propósito — nada se mueve solo por moverse, y todo lo decorativo respeta `prefers-reduced-motion`.
8. El bloque de proceso/pasos no es una grilla estática — tiene alguna forma de interacción o cambio en el tiempo.
9. Un marquee de velocidad reactiva al scroll SIEMPRE se puede leer, en cualquier velocidad de scroll.
10. Ninguna sección corta queda forzada a ocupar un ancho mayor al de su propio contenido.
11. Mobile funciona sin overflow horizontal en ningún punto de la página.
12. Cero `<img>` nativas, cero imágenes sin `sizes` ajustado a su uso real, cero video autoplayando fuera de viewport.
13. No parece una web corporativa tradicional de constructora.
14. No parece una colección de componentes de terceros pegados uno al lado del otro — todo comparte tipografía, radios, sombras, vidrio y motion como un solo sistema.
15. Todo el contenido demo está claramente marcado como tal donde corresponde.
