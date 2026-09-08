TEMPLATE:
Odontología

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: catalogar cada componente/patrón de interacción realmente implementado en `/preview/odontologia`, dónde vive el código, y de dónde salió la técnica. Ningún código de terceros fue copiado — donde se usó una referencia real de 21st.dev, se pidió el componente, se entendió el mecanismo, y se reescribió a mano con la paleta y las clases propias del template (mismo criterio que ya regía para Abogado con CodePens).

---

## Componentes nuevos y reutilizables (`src/components/`)

Estos tres se crearon PARA este rubro pero quedan disponibles para cualquier template futuro — no son código específico de odontología.

### `TextRoll.tsx`
- **Referencia real**: [21st.dev — Text Roll, @ibelick](https://21st.dev/@ibelick/components/text-roll). Se pidió el código fuente del componente para entender el mecanismo (dos copias de cada letra, una gira 0°→90° mientras la otra gira 90°→0°, como una cartelera aeropuerto) y se reescribió con las mismas clases de Tailwind pero sin el paquete `motion-primitives`, usando `motion/react` (ya instalado en el proyecto).
- **Dónde se usa**: el badge "+ de 12 años de experiencia" del hero.
- **Adaptación**: el original de 21st.dev anima una sola vez al montar. Se le agregó un `loop` con `setInterval` que remonta el bloque (cambiando su `key`) cada 4 segundos — sin esto, el efecto pasaba una sola vez al cargar la página y casi nadie llegaba a verlo.
- **Comportamiento**: igual en desktop y mobile (es un badge que ya estaba oculto en mobile por espacio, `hidden sm:block`).
- **Bug encontrado y corregido**: los espacios entre palabras usaban un espacio normal, que el navegador colapsa dentro de spans `inline-block` consecutivos — se cambió a espacio irrompible (` `), igual que en el componente original.

### `LiquidText.tsx`
- **Referencia real**: [21st.dev — Liquid Text, @glasscn](https://21st.dev/@glasscn/components/liquid-text). El original usa `@paper-design/shaders-react` (un shader WebGL de pago) para rellenar la letra con humo animado. Se decidió **no** sumar esa dependencia solo para una palabra del hero — se reimplementó el mismo resultado visual (color fluyendo dentro de la letra) con `background-clip: text` + un gradiente de 6 paradas en la paleta salvia/perla del template, animado con `background-position` en loop.
- **Dónde se usa**: la palabra "expertas." al final del H1 del hero.
- **Adaptación**: cero dependencias nuevas; recibe `colors` y `duration` como props para poder reusarse con otra paleta en otro rubro.

### `FlippingCard.tsx`
- **Referencia real**: [21st.dev — Flipping Card, @aghasisahakyan1](https://21st.dev/@aghasisahakyan1/components/flipping-card). CSS puro (perspective + `rotateY(180deg)` + `backface-visibility:hidden`), sin dependencias — se copió el mecanismo casi tal cual porque ya era mínimo, pero con las clases y las dos caras (`frontContent`/`backContent`) definidas desde afuera, no hardcodeadas.
- **Dónde se usa**: las 2 tarjetas de Equipo (adelante: foto + nombre + especialidad; atrás: nombre + especialidad + MP demo + bio).
- **Comportamiento desktop**: gira con el hover del mouse.
- **Comportamiento mobile**: no hay hover — gira al tocar (el navegador interpreta el primer tap como estado "hover" en la mayoría de los casos); se agregó un texto de ayuda arriba de la sección ("Tocá una tarjeta para conocerlos") para que no quede como un hallazgo accidental.

## El efecto "dock" (CSS puro, sin componente separado)

- **Referencia real**: [21st.dev — dock, @badtzx0](https://21st.dev/@badtzx0/components/dock). El original usa `<style jsx>` con selectores de hermanos (`:hover + li`, `:has(+ li:hover)`) para que los íconos vecinos al que tiene el mouse encima también crezcan, imitando el dock de macOS.
- **Dónde se usa**: las 2 flechas de navegación del riel "Motivos frecuentes de consulta" — **no** en el carrusel de Tecnología, a propósito, para no repetir la misma firma visual dos veces seguidas en seguido.
- **Adaptación**: con solo 2 botones no hacía falta el componente completo (`Dock`/`DockIcon`) ni `styled-jsx` — se escribieron 4 reglas CSS directas en el `<style>` de la página, usando `:has()` (soportado en todos los navegadores modernos): el botón hovereado escala 1.6 y sube 6px, el vecino escala 1.25 y sube 3px.
- **Comportamiento mobile**: los botones están ocultos (`hidden sm:flex`) — en mobile el riel se recorre con scroll táctil nativo, un dock no tiene sentido sin cursor.

## Componentes construidos a medida (sin referencia externa puntual)

Estos siguen patrones que **ya existían en el catálogo de TAQTios** (mismo mecanismo que Abogado usa en "Áreas de práctica" y "Casos de ejemplo"), no una referencia nueva de 21st.dev:

### Service Grid (Servicios)
Grid de 8 tarjetas con imagen + número + título + teaser, expandibles al click (acordeón independiente por tarjeta, con `grid-template-rows` animado de `0fr` a `1fr` para el reveal del contenido — sin librería de acordeón). En mobile se convierte en un riel de scroll horizontal con tarjetas de ancho fijo, en vez de apilarse verticalmente.

### Feature Carousel (Tecnología) y Horizontal Scroll (Motivos frecuentes)
Mismo patrón: `overflow-x-auto` con `[scrollbar-width:none]` para ocultar la barra nativa, tarjetas `shrink-0`, y botones prev/next que llaman `scrollBy({ left, behavior: "smooth" })` sobre una `ref`. Es exactamente el mecanismo que ya usa Abogado en su riel de Áreas de práctica.

### Marquee Cards (Opiniones y Coberturas)
Dos listas duplicadas (`[...ARRAY, ...ARRAY]`) dentro de un contenedor `w-max` con `animation: translateX(0) → translateX(-50%)` en loop infinito, pausada al hover. Mismo mecanismo que el marquee de testimonios de Abogado, reusado dos veces con distinta velocidad (36s para Opiniones, 26s para Coberturas) y distinto tratamiento visual (tarjetas `.odo-raised` vs. píldoras `.odo-well`).

### Expandable Gallery + lightbox (`OdontologiaGallery.tsx`)
Grid de 9 fotos (la primera destacada en 2×2) que abre un lightbox a pantalla completa al click: overlay oscuro con blur, imagen central `object-contain`, navegación con flechas (mouse) y con las teclas ←/→, cierre con Escape, click afuera o el botón ✕. El scroll del body se bloquea mientras está abierto (`document.body.style.overflow = "hidden"`) y se restaura al cerrar.
Se armó a medida siguiendo la idea general de una galería expandible (referencia conceptual: [21st.dev — Expandable Gallery, @0xUrvish](https://21st.dev/@0xUrvish/components/expandable-gallery)) — no se llegó a pedir su código fuente; el mecanismo final (estado de índice abierto + navegación por teclado) es una implementación propia.

### Hover-zoom (fotos de la Galería)
Clase `.odo-hover-zoom` / `.odo-hover-zoom-img`: al pasar el mouse sobre una foto de la galería, la imagen interna escala `1.06` con una transición de 500ms — un efecto de zoom sutil y genérico, no atado a ninguna referencia puntual.

## CTA refractivo (`.odo-cta-refractive`)

No es un componente de 21st.dev — es CSS propio inspirado en la idea general de "botón de vidrio con brillo" (mencionada como referencia visual, no como componente puntual, en el pedido original). Gradiente perlado de 5 paradas + `backdrop-filter` + un pseudo-elemento `::before` que barre un brillo diagonal cada 5 segundos. Ver el detalle completo de valores en el Prompt 01.

## Before/After (sección "Resultados que se pueden ver")

**No es un slider drag de dos imágenes.** Es una sola foto (con un efecto de "hoja de papel pelándose" que revela dientes más blancos) presentada con una etiqueta "Imagen ilustrativa" en vidrio. Se documenta explícitamente para que quede claro que la ausencia de un comparador interactivo es una decisión, no un componente faltante: la fuente original era una sola pieza compuesta, no dos fotos reales del mismo paciente en momentos distintos — construir un slider falso hubiera sido menos honesto que mostrar la imagen tal cual.

## FAQ accordion

Acordeón simple con estado `openFaq` (un solo índice abierto por vez, `-1` para "todo cerrado"), transición de `max-height` + `opacity`, ícono `Plus`/`Minus` de Lucide que rota según el estado. Primera pregunta abierta por defecto. Sin librería — mismo patrón que el FAQ de Abogado.

## Booking flow → WhatsApp (`OdontologiaBooking.tsx`)

- **Qué es**: wizard de 3 pasos (Motivo → Cuándo/Horario → Nombre/WhatsApp) con indicador de progreso circular arriba.
- **Qué NO es**: no hay calendario, no hay disponibilidad simulada, no hay backend. Es explícitamente una **preferencia**, aclarada en el propio formulario ("Es una preferencia, no una reserva confirmada").
- **Comportamiento**: cada paso valida antes de habilitar "Siguiente" (motivo elegido, horario elegido, nombre + teléfono completos). Al llegar al último paso, el botón arma un mensaje de texto con el formato:
  ```
  Hola, quisiera solicitar un turno.

  Nombre: {nombre}
  Motivo: {motivo}
  Día preferido: {fecha, si se cargó}
  Horario preferido: {horario}

  Quedo atento/a.
  ```
  y abre `https://wa.me/{numero}?text={mensaje codificado}` en una pestaña nueva.
- **Responsive**: mismo flujo, los botones de motivo pasan de 3 a 2 columnas en mobile.

## WhatsApp flotante

Burbuja fija (`fixed bottom-5 right-5`) en vidrio, con un ícono de chat dibujado a mano en SVG (no un ícono de Lucide, para que se lea inequívocamente como WhatsApp sin usar su logo registrado). Tooltip en vidrio que aparece con `onMouseEnter`/`onMouseLeave`. Mensaje prellenado genérico, distinto al del wizard de turno (no repite el mismo texto en los dos canales).
