TEMPLATE:
Odontología

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: un prompt autocontenido para que otro agente (Claude Code u otro) recree un template de odontología con el mismo nivel visual y estructural que `/preview/odontologia`. Describe el RESULTADO FINAL real — no agrega secciones que no se construyeron ni omite detalles que sí se implementaron.

---

# PROMPT MAESTRO — Template de Odontología Premium

Vas a construir la página completa de un template de odontología premium para una clínica dental, en Next.js (App Router) + TypeScript + Tailwind CSS. El resultado tiene que sentirse como un producto de diseño, no como una plantilla genérica de odontología con azul celeste.

## 1. Identidad visual

**Concepto**: "premium dental / calma técnica" — tecnología y precisión, presentadas con calidez, no con frialdad de hospital.

**Paleta** (fondo claro, un solo acento):
- Fondo: `#F2F1EC` · Superficie secundaria: `#F7F7F3` · Superficie de tarjeta: `#FAFAF7`
- Texto principal: `#20221F` · Texto secundario: `#5C6159` (verificar que pase 4.5:1 sobre los fondos claros)
- Borde sutil: `rgba(40,40,35,0.06–0.15)`
- **Acento: un verde salvia desaturado** — `#46615A` para texto/links/CTA sólido, `#8FB3A6` para cifras/iconos sobre fondo oscuro, `#DCE7E1` para chips activos. Nada de azul celeste típico de odontología.
- Banda de contraste oscura: `#1B211F` (footer un poco más oscuro, `#171b19`)
- Vidrio: `rgba(255,255,255,0.55)` + `backdrop-filter: blur(14px)`

No uses una paleta de piedra/bronce ni marfil/dorado (esas ya las tienen otros rubros del catálogo) — el acento tiene que salir de algo propio de la fotografía elegida (por ejemplo, el color real de los guantes de la foto principal), no de una elección arbitraria.

**Tipografía**: una sola familia sans geométrica y neutra (Manrope o equivalente), cargada con `next/font/google` directamente en el archivo de la página (no toques el layout global ni la tipografía de otros templates). Pesos 400 a 800. Nada de serif para los títulos — eso diferencia este rubro de otros que sí la usan.

**Material — tres superficies, no una sola**:
1. **Elevada** (`.raised`): fondo casi blanco, borde de 1px casi invisible, doble sombra (una oscura hacia abajo-derecha, una clara hacia arriba-izquierda) simulando luz real. Es la base de casi todas las tarjetas.
2. **Hundida** (`.well`): fondo un poco más oscuro que el general, sombras `inset`. Se usa donde van datos cortos (chips, tags), nunca donde va una foto.
3. **Vidrio** (`.glass`): fondo blanco muy translúcido + blur. Se usa en elementos flotantes sobre imágenes o sobre el fondo al hacer scroll (navbar, chips del hero, botón de WhatsApp).

**CTA principal refractivo**: el botón de conversión (reservar/agendar) no es un botón sólido — es una superficie de vidrio perlado: gradiente de 4-5 paradas mezclando blanco, el acento muy clareado, y dos tonos casi imperceptibles más (celeste y lavanda pálidos) — nunca colores puros ni un arcoíris visible. Backdrop-blur, borde blanco translúcido, sombra del color de acento. Un brillo diagonal barre el botón cada 4-5 segundos vía un pseudo-elemento `::before` animado. Se apaga con `prefers-reduced-motion`.

**Iconografía**: una sola librería de iconos de trazo fino (Lucide o equivalente), sin relleno. Cero emojis.

**Fotografía**: fotos de stock reales, curadas a mano — revisá cada una antes de usarla por si tiene el logo, nombre o marca de un tercero real visible (otra clínica, un profesional identificable) y recortala si hace falta. Todas dentro de contenedores con `aspect-ratio` fijo + `object-cover`, nunca deformadas.

**Motion — con propósito, no decoración permanente**:
- Fade-up al entrar en viewport para casi todo el contenido (una sola vez, no en loop).
- Contadores animados en la franja de números (de 0 al valor real, una sola vez).
- Al menos una palabra del H1 con un tratamiento de texto especial (degradado animado tipo "líquido", vía `background-clip: text`).
- Un badge o dato destacado con una animación de texto que se repite cada pocos segundos (no solo al cargar la página, si no nadie llega a verla).
- Marquees horizontales infinitos para testimonios y/o coberturas, con pausa al hover.
- Un elemento de navegación (flechas de un riel) con efecto "dock": crece y se levanta al hover, y contagia un poco al vecino.
- Todo lo puramente decorativo se apaga bajo `prefers-reduced-motion: reduce`; lo que el usuario dispara a propósito (hover de tarjetas, flujos de formulario) no se apaga.

**Densidad y spacing**: secciones con padding vertical moderado (no huecos de 200-300px entre secciones). El ritmo lo dan los cambios de fondo claro/oscuro/claro, no el espacio en blanco. Contenido que sea largo (8+ ítems) se resuelve con grid+scroll horizontal en mobile o con expand/collapse, nunca con una lista vertical interminable.

## 2. Arquitectura de la página (orden real)

1. **Navbar** — sticky, transparente sobre el hero, pasa a vidrio al hacer scroll. Logo + links de ancla + CTA refractivo (desktop); botón hamburguesa con panel en vidrio (mobile).
2. **Hero** — composición editorial asimétrica (no "texto izquierda / foto horizontal derecha" genérico): columna de texto (eyebrow + H1 de 2 líneas con la última palabra en efecto líquido + subtítulo + CTA primario y secundario) junto a una foto (relación de aspecto respetada tal cual viene, sin forzarla a horizontal) sobre superficie elevada, con 1-2 chips flotantes en vidrio alrededor (un dato de confianza, un badge de experiencia). La foto del hero lleva prioridad de carga.
3. **Servicios** — grid de 6-8 categorías amplias (no un servicio por tarjeta): foto + número + título + teaser de una línea, que se expande al click mostrando 3-5 sub-ítems. En mobile pasa a scroll horizontal, nunca se apilan las 8 verticalmente.
4. **Motivos/razones de consulta** — riel horizontal de ícono + palabra corta sobre superficie hundida (sin fotos), con navegación prev/next centrada debajo con efecto dock (solo en desktop).
5. **Franja de números** — banda de contraste oscura con 3-4 cifras clave animadas (años de experiencia, especialidades, pacientes atendidos, valoración).
6. **Diferencial técnico** — carrusel horizontal de 4-6 tarjetas (foto + número + título + una oración de beneficio, no ficha técnica).
7. **Equipo** — 2 o más tarjetas que giran al hover: adelante foto + nombre + rol; atrás nombre + rol + credencial demo + bio corta.
8. **Resultados / antes-después** — una imagen (o comparador, si de verdad hay dos fotos reales del mismo caso) con una etiqueta aclarando que es ilustrativo, y texto explícito de que no es una promesa de resultado.
9. **Galería** — grid de 8-10 fotos (una destacada más grande) con lightbox: overlay oscuro, navegación con flechas y teclado, cierre con Escape/click afuera, scroll del body bloqueado mientras está abierto.
10. **Opiniones** — marquee horizontal infinito de testimonios cortos, pausa al hover.
11. **Coberturas** — segunda franja, más angosta, con nombres genéricos de coberturas (nunca marcas reales de obras sociales/prepagas) en formato píldora.
12. **Reservar turno** — wizard de pasos cortos (motivo → cuándo/horario → datos de contacto) que arma un mensaje de WhatsApp prellenado y lo abre en pestaña nueva. Nunca simules un calendario con disponibilidad real si no existe.
13. **FAQ** — acordeón de 6-8 preguntas reales (costo, cobertura, urgencias, qué llevar), una abierta por defecto.
14. **Contacto** — dirección, horario, WhatsApp + mapa embebido, junto a los botones "Cómo llegar" y "Escribir por WhatsApp".
15. **Footer** — 3 columnas (marca + redes, contacto, navegación) sobre fondo oscuro.
16. **WhatsApp flotante** — burbuja fija en vidrio, esquina inferior derecha, con tooltip al hover, mensaje prellenado genérico (distinto al del wizard).

## 3. Componentes a construir

Reutilizables (van en una carpeta de componentes compartidos, no atados a este rubro):
- **Scroll-reveal** genérico (fade + translateY al entrar en viewport).
- **Contador animado** (cuenta de 0 al valor real una sola vez).
- **Texto "roll"**: cada letra de un texto corto gira como cartelera aeropuerto al aparecer, **y se repite cada 3-5 segundos** (no una sola pasada al montar).
- **Texto líquido**: degradado animado clip-eado al texto (`background-clip:text` + `background-position` en loop) — NO uses una librería de shaders WebGL para esto, es una sola palabra decorativa, no lo justifica.
- **Tarjeta que gira** (flip 3D en Y, `perspective` + `backface-visibility:hidden`), con contenido de frente y de dorso definido desde afuera.

Específicos de esta página:
- **Grid de servicios expandible**: acordeón independiente por tarjeta (no exclusivo), con reveal animado del contenido extra.
- **Riel horizontal reutilizable** (Motivos, Tecnología): `overflow-x-auto` + scrollbar oculta + botones prev/next que llaman `scrollBy` sobre una ref.
- **Marquee duplicado**: la lista se concatena consigo misma dentro de un contenedor `w-max` animado en loop, pausa al hover.
- **Galería con lightbox**: estado de índice abierto, navegación por teclado (←/→/Escape), bloqueo de scroll del body mientras está abierto.
- **Wizard de reserva → WhatsApp**: 3 pasos con validación antes de avanzar, arma el mensaje de texto y abre `wa.me` — sin backend, sin calendario real.
- **Efecto "dock"** en un par de botones de navegación: CSS puro con selectores de hermanos (`:hover ~ button`, `:has(~ button:hover)`), sin necesidad de una librería completa para solo 2 elementos.

## 4. Responsive

No dupliques JSX para mobile/desktop — cambiá el patrón de layout por breakpoint sobre el MISMO markup:
- Grids que en mobile pasarían a una columna larguísima → conviértelas en scroll horizontal con tarjetas de ancho fijo.
- Elementos secundarios (chips flotantes, CTA de la navbar, botones de dock) → ocultos en mobile si no caben con dignidad, nunca aplastados.
- Antes de dar por cerrada una sección, revisala a 375px de ancho: cero scroll horizontal accidental, cero texto cortado.

## 5. Imágenes y performance

- Todas las imágenes por el componente de imagen del framework (nunca `<img>` plano), con `fill` + contenedor de `aspect-ratio` fijo — cero layout shift.
- `sizes` calculado por el ancho REAL que ocupa cada imagen en cada breakpoint, no `100vw` en todos lados.
- Solo la imagen del hero lleva prioridad de carga; todo lo demás usa lazy loading por defecto (excepto la imagen que se abre en el lightbox, que si necesita cargar al instante).
- Convertí todo a WebP (o dejá que el optimizador de imágenes del framework sirva AVIF automáticamente si ya lo hace por defecto — no dupliques el trabajo generando ambos formatos a mano si no hace falta).
- Ninguna imagen fuente debería superar por mucho el ancho real de su uso más grande a 2x retina — auditá esto al final, no solo al principio.

## 6. Accesibilidad

`aria-label` en todo botón que sea solo ícono, `aria-expanded` en acordeones/tarjetas expandibles, el lightbox como `role="dialog"` navegable 100% por teclado, contraste de texto secundario verificado sobre el fondo real (no asumido), y **todo lo puramente decorativo apagado bajo `prefers-reduced-motion`** (lo funcional/disparado por el usuario, no).

## 7. Reglas de contenido — no negociables

- **Todo nombre, testimonio, cifra, matrícula y dirección es contenido DEMO** — nunca lo presentes como si fuera real, y dejalo estructurado para que un cliente real lo reemplace campo por campo.
- **Coberturas médicas/obras sociales**: nombres genéricos ("Obra social A"), nunca marcas reales inventadas al voleo.
- **Antes/después**: si no tenés dos fotos reales del mismo caso, no fabriques un comparador falso — mostrá una sola imagen ilustrativa y aclaralo en el copy, con una frase que diga explícitamente que no es una promesa de resultado.
- **Booking**: si no hay un sistema de turnos real detrás, el copy tiene que decirlo ("es una preferencia, no una reserva confirmada") — nunca simules disponibilidad horaria inventada.
- **Fotografía de stock**: revisá cada foto por marcas/logos/nombres de terceros reales visibles antes de usarla. Si aparece uno, recortá o descartá — no lo dejes "porque total es de fondo".
- **Tono**: español natural y cercano (o el idioma que corresponda), nunca corporativo genérico ni con superlativos vacíos ("la mejor", "resultados garantizados").

## 8. Reglas de calidad — checklist final antes de dar por terminado

- [ ] Ningún emoji en la interfaz.
- [ ] Ninguna sección con más de ~10 ítems apilados verticalmente sin resolver con scroll horizontal o expand/collapse.
- [ ] Build de producción sin errores ni warnings de tipos.
- [ ] Cero imágenes rotas, cero 404 de assets.
- [ ] Probado a 375px de ancho sin overflow horizontal.
- [ ] Cada animación decorativa tiene su contraparte apagada en `prefers-reduced-motion`.
- [ ] El botón de WhatsApp flotante y el wizard de reserva usan un número de contacto configurable en un solo lugar (no hardcodeado en 5 archivos distintos).
- [ ] La paleta de acento es propia de este rubro — no reutiliza el acento de otro template ya existente en el catálogo.
