TEMPLATE:
Constructora

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: describir el sistema visual REAL de `/preview/constructora` ("NIVEL") — concepto, paleta, tipografía, material, tratamiento de foto/video y motion tal como quedaron implementados y aprobados. Sirve de referencia de diseño para reproducir el mismo nivel en otro rubro cinematográfico/audiovisual, y como base del Prompt 06.

---

## 1. Concepto creativo

**"Architecture in Motion."** No es una web corporativa de constructora: es una experiencia editorial y cinematográfica donde el video hace de cámara, el scroll hace de dirección, y la tipografía enorme funciona como estructura. El material (piedra, madera, vidrio ahumado, metal negro) es la identidad — no un color de marca.

Qué la hace distinta de los otros tres templates del catálogo:
- **Negro mate con profundidad**, no negro plano — capa de ruido sutil (SVG `feTurbulence` embebido, `mix-blend-mode: overlay`, opacity 0.05) fija sobre toda la página, se apaga con `prefers-reduced-motion`.
- **Video real como protagonista**, no decorativo: 4 clips (dron + interiores) provistos por el cliente, jamás reemplazados. Ningún otro rubro del catálogo usa `<video>`.
- **Tipografía gigantesca en el hero** (`11.5vw` mobile → `6.6vw` desktop) con reveal por línea (clip + `translateY`) y una palabra en degradado animado (`LiquidText`) — distinto del serif editorial de Abogado/Inmobiliaria y del Manrope cálido de Odontología.
- **Vidrio ahumado con criterio**: `.niv-glass` (`rgba(255,255,255,0.07)` + `blur(16px)`) solo en nav al scrollear, CTAs, panel de contacto y tarjetas de equipo — nunca como fondo de sección completo.
- **Acento cálido, no frío**: madera/bronce (`#8A6A4B`) y piedra clara (`#D6D0C4`) en vez de cualquier azul o violeta corporativo.

## 2. Paleta

Todos los valores son literales Tailwind arbitrarios directamente en los archivos del rubro (no hay tokens CSS globales — cada preview de TAQTios es su propio mundo visual).

| Token conceptual | Valor | Uso |
|---|---|---|
| Fondo principal | `#11110F` | body, la mayoría de las secciones |
| Fondo secundario | `#181815` | tiles de video, tarjetas de equipo (reverso) |
| Fondo de hero (letterbox) | `#0b0b09` | detrás del video del hero, overlay de gradiente |
| Piedra / stone | `#D6D0C4` | eyebrows, subrayado del nav activo, texto de acento |
| Blanco cálido | `#ECE8DF` | botón sólido de "Enviar proyecto", handle del comparador antes/después |
| Texto principal | `#F3F0E8` | headings, texto de cuerpo |
| Texto secundario | `white/70`, `white/50`, `white/45`, `white/40`, `white/35`, `white/30` (opacidades de blanco, no grises propios) | jerarquía de texto de apoyo, de más a menos énfasis |
| Madera / acento cálido | `#8A6A4B` | íconos de contacto (`MapPin`, `Clock`, `Mail`), un extremo del degradado de `LiquidText` |
| Vidrio (`.niv-glass`) | `rgba(255,255,255,0.07)` + `backdrop-filter: blur(16px)` | nav al scrollear, CTAs con borde, panel de contacto, frente de las tarjetas de equipo |
| Fila hundida (`.niv-row`) | `rgba(255,255,255,0.03)` + borde `rgba(255,255,255,0.08)` + `box-shadow` inset | tarjetas del proceso (ya no se usa desde el rediseño del stepper, ver Prompt 03) |
| Bordes sutiles | `border-white/[0.06]` a `border-white/[0.12]` | separadores entre secciones, bordes de card |

⚠️ No existe archivo de tokens compartido: si se reutiliza esta paleta en otro rubro, se copia y se re-elige a mano — es intencional.

## 3. Tipografía

- **Plus Jakarta Sans** (`next/font/google`, pesos 400/500/600/700/800), cargada localmente en `page.tsx` y en la ficha de proyecto (`proyecto/[slug]/page.tsx`) — cada una la importa por separado, no hay un layout compartido entre ambas.
- Jerarquía: eyebrow `text-xs font-medium uppercase tracking-[0.3em]` color piedra; H2 de sección `text-4xl sm:text-5xl font-bold tracking-tight`; H1 del hero `text-[11.5vw] sm:text-[9vw] lg:text-[6.6vw] font-extrabold leading-[0.94]`; CTA grande `text-5xl sm:text-7xl font-extrabold` (sección "¿Tenés un proyecto?").
- Sin segunda tipografía "display": una sola familia sostiene tanto los títulos gigantes del hero como el cuerpo de texto — la escala hace el trabajo, no una serif adicional.

## 4. El hero: video como cámara

- `<video>` nativo (no un player de terceros) a pantalla completa (`h-[100svh]`), `autoPlay muted loop playsInline preload="auto"`, con `poster` (frame extraído del propio video) para evitar layout shift mientras carga.
- Overlay: `bg-gradient-to-t` del color de fondo (`#0b0b09`) hacia transparente, para que el texto blanco del hero siempre tenga contraste sin tapar el video.
- Con `prefers-reduced-motion: reduce`, el `<video>` se reemplaza por una `<Image priority>` del mismo poster — nunca se fuerza autoplay a quien lo pidió apagado.

## 5. Glassmorphism con criterio

Una sola clase, `.niv-glass`, reutilizada en:
- Nav al hacer scroll (antes es transparente sobre el video del hero).
- CTAs secundarios ("Ver proyectos", "Iniciar proyecto", "Hablar por WhatsApp").
- El panel del formulario de contacto.
- El frente de las 4 tarjetas de equipo (`FlippingCard`).

Nunca se usa como fondo de una sección completa ni se apila vidrio sobre vidrio — el criterio del mega prompt original ("el vidrio debe sentirse como arquitectura, no como UI de videojuego") se sostuvo reduciendo su uso a superficies puntuales.

## 6. Fotografía y tratamiento de imagen

- Fotografía real provista por el cliente (14 fotos + 4 posters de video extraídos con `ffmpeg`), nunca reemplazada ni generada. Optimizada a WebP (calidad 82) y servida también en AVIF automático vía Next/Image — ver Prompt 05.
- Todas las fotos van con `object-cover` dentro de contenedores de `aspect-ratio` fijo — nunca se deforma una imagen.
- El comparador antes/después (`ConstructoraBeforeAfter`) aclara explícitamente que las dos imágenes **no pertenecen necesariamente a la misma obra** — honestidad de contenido, no antes/después inventado de un mismo proyecto.

## 7. Video: los 4 clips y su narrativa

Los 4 videos provistos (dron edificio en obra, interior 02, interior/exterior casa lujo 03, dron casa de lujo terminada) se usan en DOS lugares con dos roles distintos:
1. **Hero**: el video del dron sobre el edificio en obra, en loop, como apertura cinematográfica.
2. **Bento "Architecture / In Motion"**: los 4 juntos, etiquetados Obra → Materia → Espacio → Resultado (ver Prompt 02 y 03), cada uno reproduciéndose solo mientras está en viewport.

Comprimidos con `ffmpeg` a H.264 1080p sin audio (`+faststart`), de 335 MB originales a ~41 MB — ver el detalle técnico completo en el Prompt 05.

## 8. Motion y microinteracciones

Filosofía: **motion con propósito, nunca decorativo permanente.**

- **`ScrollReveal`** (compartido): fade + `translateY(16px)` al entrar en viewport, una sola vez. Envuelve casi cada bloque de contenido.
- **`CountUp`** (compartido): anima los 4 números (Proyectos, M² construidos, Años, Provincias) desde 0, una sola vez.
- **`LiquidText`** (compartido): la palabra "PERMANECE." del H1 lleva un degradado animado madera→piedra→blanco cálido en loop infinito.
- **`TextRoll`** (compartido): el eyebrow del hero ("ARQUITECTURA · CONSTRUCCIÓN · DESARROLLO") hace un flip tipo cartelera aeropuerto en loop — se apaga con `prefers-reduced-motion`.
- **`FlippingCard`** (compartido): las 4 tarjetas de equipo giran 180° al hover, mostrando la bio en el reverso.
- **`ScrollVelocity`** (nuevo, compartido — ver Prompt 03): dos líneas de texto en marquee que aceleran con la velocidad real de scroll, debajo de la franja de números.
- **`OnboardingStepper`** (nuevo, compartido — ver Prompt 03): el bloque de Proceso es un paso a la vez con transición deslizante, no una grilla estática.
- **Reveal por línea del hero**: cada línea del H1 entra con `clip` (`overflow-hidden`) + `translateY(110%→0)`, con `animation-delay` escalonado por línea.
- **Reduced motion**: el ruido de fondo, el reveal del hero y el `TextRoll` se apagan bajo `prefers-reduced-motion: reduce`; el video del hero se reemplaza por su poster estático.

## 9. Densidad visual y spacing

- Secciones con `py-10` a `py-28` según su peso visual — el bloque de Números/marquee es deliberadamente el más bajo (`py-10 sm:py-14`) porque es una pausa rítmica, no un bloque de contenido pesado.
- La regla del mega prompt original ("no huecos artificiales") se sostuvo ajustando el padding de la sección de Números y de Proceso durante la revisión: ambas se redujeron después de la primera versión por quedar con demasiado espacio negro (ver historial de cambios, no repetido acá porque este documento describe solo el estado final).
- Los números van en una fila horizontal centrada de ancho ajustado al contenido (`w-fit`), no en una grilla forzada a ocupar todo el contenedor — evita la sensación de "caja cuadrada" que tuvo la primera versión.
