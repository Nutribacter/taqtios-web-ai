TEMPLATE:
Odontología

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: describir el sistema visual REAL de `/preview/odontologia` — la paleta, la tipografía, el material (neumorfismo + glass), el tratamiento fotográfico y el motion tal como quedaron implementados y aprobados. Sirve como referencia de diseño para reproducir el mismo nivel en otro rubro, y como base para el Prompt 06 (recreación).

---

## 1. Concepto creativo

**"Premium dental / calma técnica."** Una clínica que se apoya en tecnología y precisión, pero que se presenta con calidez — no con la estética clínica-fría de hospital ni con el celeste genérico de odontología de barrio.

Lo que la aleja de una web odontológica genérica:
- **Cero azul celeste típico.** El acento es un verde salvia desaturado, elegido a partir del color real de los guantes de nitrilo de la foto del hero — el mismo tono aparece en toda la interfaz (chips, bordes activos, iconos, CTA), dando la sensación de que el color "salió" de la propia clínica, no de una plantilla.
- **Superficies con volumen real** (neumorfismo suave) en vez de tarjetas planas con `box-shadow` genérico.
- **Un CTA "refractivo"** (vidrio perlado con brillo animado) como firma visual del botón principal — no existe en Inmobiliaria (piedra/bronce) ni en Abogado (marfil/dorado).
- **Tipografía Manrope**, geométrica y neutra — corta cualquier parecido con Fraunces (Abogado, Inmobiliaria) o con una sans genérica tipo Inter.
- **Microinteracciones con identidad propia**: el texto líquido del hero, el "text-roll" del badge de experiencia, el efecto dock de las flechas, las tarjetas de equipo que giran — ningún otro rubro del catálogo las usa.

## 2. Paleta

Todos los valores están escritos como literales Tailwind arbitrarios directamente en `page.tsx` (no hay tokens CSS globales: cada preview de TAQTios es su propio mundo visual, ver `AGENTS.md`).

| Token conceptual | Valor | Uso |
|---|---|---|
| Fondo de página | `#F2F1EC` | body, la mayoría de las secciones |
| Superficie secundaria | `#F7F7F3` | banda de Opiniones/Coberturas |
| Superficie de tarjeta (`.odo-raised`) | `#FAFAF7` | cards de Servicios, Tecnología, Testimonios, contenedor del mapa |
| Texto principal | `#20221F` | headings, texto de cuerpo |
| Texto secundario | `#5C6159` | subtítulos, teasers, texto de apoyo |
| Borde sutil | `rgba(40,40,35,0.06–0.15)` | bordes de cards, inputs, chips |
| Acento (texto/links/CTA sólido) | `#46615A` | eyebrows, links activos, botón "Enviar por WhatsApp", números |
| Acento claro (chips activos) | `#DCE7E1` | fondo de motivo/horario seleccionado en el booking |
| Acento sobre fondo oscuro | `#8FB3A6` | cifras de la franja de números, iconos del footer |
| Banda oscura | `#1B211F` | franja de Números, reverso de las tarjetas de Equipo, footer (`#171b19`) |
| Vidrio (glass) | `rgba(255,255,255,0.55)` + blur 14px | navbar al hacer scroll, chips flotantes del hero, WhatsApp flotante |

⚠️ Ningún archivo de tokens compartido: si se reutiliza este sistema en otro rubro, estos valores se copian y se re-eligen a mano — es intencional, no un olvido.

## 3. Tipografía

- **Manrope** (`next/font/google`, pesos 400/500/600/700/800), cargada **localmente en `page.tsx`** con `Manrope({ subsets: ["latin"], weight: [...] })` y aplicada vía `manrope.className` en el `<div>` raíz de la página. No toca `layout.tsx` global ni los tokens `--font-inter`/`--font-fraunces` del resto del sitio.
- Jerarquía: H1 `text-5xl/6xl` `font-extrabold`, H2 de sección `text-3xl/4xl` `font-extrabold`, eyebrows en `text-xs font-bold uppercase tracking-[0.3em]` color de acento.
- No hay una segunda tipografía "display": a propósito, para diferenciarse de Abogado/Inmobiliaria, que usan una serif (Fraunces) para títulos.

## 4. Neumorfismo — las tres superficies

Tres clases utilitarias definidas en el `<style>` de `page.tsx` (aplican a toda la página, incluidos los componentes hijos, porque un `<style>` sin scope es global al DOM):

- **`.odo-raised`** — superficie elevada: `background:#FAFAF7`, borde de 1px casi invisible, doble sombra (`10px 10px 26px` oscura + `-8px -8px 20px` clara) que simula luz viniendo de arriba-izquierda. Es la base de: cards de Servicios, cards de Tecnología, tarjetas de Testimonios, contenedor del mapa, wrapper de cada tarjeta de Equipo.
- **`.odo-well`** — superficie hundida (el "hueco" donde van los datos, nunca una lámina apoyada): `background:#EBEAE3` + sombras `inset`. Se usa en las tarjetas de "Motivos frecuentes" y en las píldoras de "Coberturas".
- **`.odo-glass`** — vidrio esmerilado: `rgba(255,255,255,0.55)` + `backdrop-filter: blur(14px)`. Se usa en la navbar al scrollear, los dos chips flotantes del hero, el botón de WhatsApp flotante y su tooltip, y la etiqueta "Imagen ilustrativa" sobre el antes/después.

## 5. El CTA refractivo (`.odo-cta-refractive`)

El botón principal ("Reservar turno" / "Enviar por WhatsApp" del contacto) usa una superficie de vidrio perlado:
- Gradiente de 5 paradas mezclando blanco, verde salvia clarísimo, celeste y lavanda casi imperceptibles (`rgba(216,231,225,·)`, `rgba(210,224,235,·)`, `rgba(226,220,235,·)`), nunca un color puro — evita el "arcoíris chillón".
- `backdrop-filter: blur(6px)`, borde blanco translúcido, sombra verde suave.
- Un pseudo-elemento `::before` con un gradiente diagonal barre el botón cada 5s (`odo-cta-shine`), dándole el brillo "vivo" sin animación permanente agresiva.
- Hover: `translateY(-1px)` + sombra más marcada.
- Se apaga con `prefers-reduced-motion` (el brillo deja de animar, el resto del estilo queda igual).

## 6. Iconografía

- **Lucide React** en toda la interfaz (ya era la librería de iconos del proyecto). Trazo fino, sin relleno — consistente con Abogado/Inmobiliaria.
- Los 8 íconos de "Motivos frecuentes" (`Zap`, `Snowflake`, `Moon`, `AlertTriangle`, `Flame`, `XCircle`, `Droplet`, `Wind`) están mapeados por nombre desde `content.ts` a componentes reales en `page.tsx` — el archivo de datos no importa JSX.
- El ícono de WhatsApp (burbuja de chat) es un SVG a mano (`ChatBubbleIcon`), no un ícono de Lucide, para que se lea inequívocamente como WhatsApp.

## 7. Fotografía y tratamiento de imagen

- Fotografía de stock real (no generada), curada a mano: se revisaron las 16 fotos originales una por una antes de usarlas — dos tuvieron que recortarse porque mostraban el logo de OTRA clínica real de fondo, y dos retratos de equipo se recortaron a busto/rostro para no exponer el bordado con marca/nombre de un profesional real. Ver el detalle completo en el Prompt 05, sección de assets.
- Todas las fotos pasan por `object-cover` dentro de contenedores con `aspect-ratio` fijo — nunca se deforma una imagen.
- Paleta fotográfica dominante: guantes de nitrilo verde salvia, batas claras, superficies blancas — es lo que hizo que la paleta de marca terminara siendo salvia/perla en vez de la celeste típica.

## 8. Motion y microinteracciones

Filosofía: **motion con propósito, nunca decorativo permanente.**

- **`ScrollReveal`** (componente compartido, `motion/react`): fade + `translateY(16px)`, dispara una sola vez al entrar en viewport. Envuelve casi cada bloque de contenido.
- **`CountUp`** (compartido): anima los 4 números de la franja oscura desde 0 al valor real, una sola vez.
- **`LiquidText`** (nuevo, compartido): la palabra "expertas." del H1 tiene un degradado animado (`background-clip:text`) que fluye en loop infinito — la reinterpretación en CSS puro de un efecto de shader de 21st.dev.
- **`TextRoll`** (nuevo, compartido): el badge "+ de 12 años de experiencia" hace un flip tipo cartelera aeropuerto letra por letra, y **se repite cada 4 segundos** (remonta el bloque con una `key` que cambia por `setInterval`) para que no sea un efecto de una sola pasada que nadie llega a ver.
- **`FlippingCard`** (nuevo, compartido): las tarjetas de Equipo giran 180° en el eje Y al hover (`perspective` + `rotateY` + `backface-visibility:hidden`).
- **Dock hover** (`.odo-dock`, CSS puro con selectores `:has()`): las flechas de "Motivos frecuentes" se agrandan y levantan al pasar el mouse, y la flecha vecina las acompaña un poco — inspirado en el dock de macOS.
- **Marquees** (`.odo-marquee-track` / `-slow`): Opiniones y Coberturas se desplazan en loop horizontal infinito, con pausa al hover.
- **Hover-zoom** (`.odo-hover-zoom`): las fotos de la Galería hacen un zoom sutil (`scale(1.06)`) al pasar el mouse.
- **Reduced motion**: todas las animaciones anteriores (shine del CTA, shine de la franja de números, marquees, hover-zoom, transición del dock) se desactivan bajo `prefers-reduced-motion: reduce`.

## 9. Densidad visual y spacing

- Secciones con `py-10` a `py-16` — nunca los huecos de 300px que pide evitar la regla del proyecto. El ritmo lo dan los cambios de fondo (claro → oscuro → claro) más que el espacio en blanco.
- Grillas y rieles horizontales (Servicios, Motivos, Tecnología, Galería, Marquees) resuelven "mucho contenido, poco scroll vertical" — la misma lógica que ya usa Abogado para Áreas de práctica y Casos.
- En mobile, dos secciones que en desktop son grillas (Servicios) pasan a scroll horizontal en vez de apilarse 8 tarjetas una debajo de la otra — decisión tomada después de revisión, documentada en el Prompt 02.
