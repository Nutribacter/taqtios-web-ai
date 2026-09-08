TEMPLATE:
Constructora

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: documentar TODOS los componentes realmente usados en `/preview/constructora` — función, ubicación, interacción, adaptación visual, responsive y motion — con las referencias originales de 21st.dev/React Bits cuando corresponde. Ninguno de estos componentes contiene código copiado de terceros: cada uno es una reimplementación propia, a mano, con `motion` (ya instalado en el proyecto) o CSS puro.

---

## Componentes compartidos (`src/components/`) — ya existían de rubros anteriores

### `ScrollReveal.tsx`
Fade + `translateY(16px)` al entrar en viewport, una sola vez (`viewport={{ once: true }}`). Envuelve casi cada bloque de contenido de la página. Sin cambios respecto a Odontología/Abogado.

### `CountUp.tsx`
Cuenta desde 0 hasta el valor real al entrar en viewport. Usado en la franja de Números (Proyectos, M² construidos, Años, Provincias). Nota técnica real: **no soporta el punto como separador de miles** (lo interpreta como decimal) — por eso "85.000" se convirtió en contenido `{ value: "85", suffix: " mil" }` en vez de forzar el componente.

### `TextRoll.tsx`
Efecto "cartelera de aeropuerto" letra por letra, en loop. Usado en el eyebrow del hero ("ARQUITECTURA · CONSTRUCCIÓN · DESARROLLO"). El loop se apaga (`loop={!reducedMotion}`) bajo `prefers-reduced-motion`.

### `LiquidText.tsx`
Degradado animado con `background-clip: text`, sin shaders ni dependencia nueva. Usado en la palabra "PERMANECE." del H1, con colores propios del rubro (`["#8A6A4B", "#D6D0C4", "#ECE8DF", "#8A6A4B"]`) en vez de la paleta verde de Odontología.

### `FlippingCard.tsx`
Tarjeta de dos caras que gira 180° en `rotateY` al hover (`perspective` + `backface-visibility: hidden`). Usado en las 4 tarjetas de equipo: frente con iniciales + rol, reverso con la bio.

## Componentes nuevos y reutilizables (`src/components/`) — creados para este rubro

### `ScrollVelocity.tsx`
**Referencia**: React Bits, `@davidhdev` — https://reactbits.dev/text-animations/scroll-velocity
**Función**: marquee de texto horizontal que acelera con la velocidad REAL de scroll del usuario (usa `useScroll` + `useVelocity` + `useSpring` + `useTransform` de `motion`, más `useAnimationFrame` para el desplazamiento continuo). Scrollear rápido acelera el texto; scrollear para arriba invierte el sentido de esa fila.
**Ubicación**: debajo de la franja de Números, dos líneas en sentidos opuestos ("NIVEL — ARQUITECTURA — CONSTRUCCIÓN —" / "DESARROLLO — DIRECCIÓN DE OBRA — REFORMAS —").
**Ajustes de calidad reales**: la primera versión (velocidad base 30, multiplicador de velocidad sin clamp) resultaba ilegible — se bajó la velocidad base a `8`, se clampeó el multiplicador de scroll a un máximo de `0.6x` y se suavizó el spring (`damping: 70, stiffness: 300`) para que el texto siempre se pueda leer, incluso durante un scroll rápido.
**Responsive**: mismo comportamiento en mobile; el texto se repite tantas veces como haga falta para cubrir el ancho del contenedor (`ResizeObserver` + cálculo de copias).
**Reutilizable para**: cualquier rubro que quiera una franja de marca en movimiento (frases, servicios, nombres de clientes).

### `OnboardingStepper.tsx`
**Referencia**: 21st.dev, `@patrick-xin` — https://21st.dev/@patrick-xin/components/onboarding-dialog
**Función**: la mecánica de "un paso a la vez, con transición deslizante y puntos de progreso" de un onboarding modal, adaptada IN-LINE a un contenido de la página (sin overlay ni backdrop — acá no hace falta el modal, solo el mecanismo de navegación paso a paso).
**Ubicación**: sección Proceso (reemplaza lo que originalmente iba a ser una grilla estática de 6 tarjetas — la primera versión se veía "estática y aburrida" en la revisión, y se reemplazó por este componente).
**Interacción**: avanza automáticamente cada 5 segundos, se pausa al pasar el mouse (o al tocar en mobile); además tiene flechas prev/next y puntos de progreso clickeables para saltar a cualquier paso. Transición con `AnimatePresence` de `motion`: el paso nuevo entra deslizando desde la derecha (o izquierda, si se retrocede) mientras el anterior sale hacia el lado opuesto.
**Ajustes de calidad reales**: la primera versión tenía el número del paso duplicado (arriba como fracción "01/06" y otra vez como número suelto antes del título), demasiado padding y una tarjeta del tamaño de una foto. Se sacó el número duplicado, el título pasó a mayúscula, y se recortó el padding (`p-8/p-12` → `p-5/p-6`, altura mínima del contenido `150px/120px` → `64px/52px`) hasta que la tarjeta quedó compacta.
**Reutilizable para**: cualquier proceso de varios pasos (checkout, onboarding real de producto, timeline de un servicio).

## Componentes locales del rubro (`src/app/preview/constructora/`)

### `ConstructoraBeforeAfter.tsx`
**Función**: comparador de dos imágenes con un divisor arrastrable (`clip-path` + pointer events), no una librería de terceros.
**Ubicación**: sección "Antes / Después" (De la obra al espacio habitado).
**Interacción**: arrastrar con mouse o touch (`onPointerDown/Move/Up` con `setPointerCapture`), o mover un `<input type="range">` invisible pero accesible por teclado (aparece al enfocar).
**Adaptación visual**: handle circular en vidrio (`.niv-glass` inline) con ícono de flechas dobles; etiquetas "En obra" / "Terminado" en las esquinas.

### `ConstructoraVideoBento.tsx`
**Función**: grilla bento de los 4 videos, cada tile con autoplay muted/loop SOLO mientras está en viewport (`IntersectionObserver`, ahorra CPU/batería con 4 videos a la vez), y un lightbox propio (no una librería) al hacer click, con controles y sonido.
**Ubicación**: sección "Architecture / In Motion".
**Responsive**: en mobile, el tile grande pasa de `aspect-auto` (ocupa 2 filas de la grilla) a `aspect-square` para no alargarse demasiado.

### `ConstructoraFooter.tsx`
**Función**: footer del rubro — mismo patrón funcional que los footers de Odontología/Abogado/Dominio (contacto + redes + navegación), repaletteado a negro mate sin color de acento fuerte (la identidad acá es material, no de color).

## Componentes/patrones que el pedido original mencionaba y su resolución REAL

Esta sección existe para que el Prompt 06 no repita pedidos que no se construyeron literalmente — la razón está documentada, no es una omisión.

| Pedido original | Resolución real | Por qué |
|---|---|---|
| Scroll Expansion Hero (21st.dev) | El reveal cinematográfico vive dentro del propio hero (video full-bleed + reveal de texto por línea), sin un mecanismo de "expansión" de video al hacer scroll | Mantener el hero simple y performante; el efecto de impacto ya lo dan el video + la tipografía |
| Spatial Product Showcase | `ConstructoraBeforeAfter` (comparador con divisor arrastrable) | Resuelve la misma necesidad (comparar dos estados) con una interacción más simple y accesible |
| Coverflow Carousel + Card 21 + Reveal Image Mask | Sección de Proyectos como lista editorial única (imagen grande + ficha, hover-reveal de CTA) | El propio pedido original pedía "menos elementos, más impacto" y "que no parezca una colección de componentes de 21st.dev" — construir 3 sistemas distintos para mostrar los mismos 4 proyectos iba en contra de esa regla |
| Interactive Bento Gallery | `ConstructoraVideoBento` | Implementado tal cual, con los 4 videos reales |
| Design Testimonial | Sección de Testimonio (una cita grande, sin carrusel) | Un solo testimonio de ejemplo no justificaba un carrusel; queda listo para sumar más si el cliente los tiene |
| Cursor interactivo custom | No implementado | No agregaba valor sobre el cursor nativo del navegador; se priorizó el resto del scope |

## Hover effects — resumen

- Proyectos: zoom de imagen (`scale-105`) + botón "Explorar proyecto" que aparece deslizando desde abajo.
- Servicios: foto de fondo que aparece con overlay oscuro (`opacity-0 → opacity-100`).
- Materiales: zoom de imagen (`scale-110`) + descripción que se despliega (`max-h-0 → max-h-16`).
- Equipo: flip 180° de la tarjeta completa.
- Bento de video: zoom sutil (`scale-105`) + ícono de play.

## Contador de números y WhatsApp

- Números: ver `CountUp` arriba.
- WhatsApp: un solo patrón reutilizado 3 veces (botón flotante fijo, CTA del bloque de Contacto, CTA de cada ficha de proyecto) — todos arman el link con `https://wa.me/${numero}?text=${mensaje pre-armado y contextual}`, sin librería.
