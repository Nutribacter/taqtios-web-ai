TEMPLATE:
Odontología

STATUS:
LOCKED / FINAL

**Objetivo de este documento**: la ficha técnica real del template — estructura de archivos, cómo maneja imágenes y performance, accesibilidad, y qué hace falta tocar para reutilizarlo. Pensado para quien vaya a mantenerlo o convertirlo en producto, no para quien solo lo mira desde el navegador.

---

## 1. Estructura de carpetas

```
src/app/preview/odontologia/
├── page.tsx                 # la página completa: navbar, hero y las 13 secciones
├── content.ts                # TODO el texto/datos — cero JSX acá
├── OdontologiaGallery.tsx     # grid + lightbox de la galería
├── OdontologiaBooking.tsx     # wizard de 3 pasos → WhatsApp
└── OdontologiaFooter.tsx      # footer de 3 columnas

src/components/                # compartidos entre TODOS los templates del catálogo
├── ScrollReveal.tsx           # ya existía (fade-up al entrar en viewport)
├── CountUp.tsx                # ya existía (contador animado)
├── TextRoll.tsx               # NUEVO — texto que "flipea" letra por letra, en loop
├── LiquidText.tsx              # NUEVO — degradado animado clip-eado al texto
└── FlippingCard.tsx            # NUEVO — tarjeta de dos caras que gira al hover

public/templates/odontologia/  # 18 imágenes .webp, ya optimizadas
scripts/optimize-odontologia-assets.mjs  # script de conversión, fuente → public/
raw-fotos/odontologia/          # fotos ORIGINALES sin procesar (fuera de git, ver .gitignore)
```

**Ruta pública**: `/preview/odontologia`. No está registrado todavía en `src/content/templates/index.ts` ni tiene los 6 prompts de venta en `src/content/templates/odontologia.ts` — eso es intencional, corresponde al método del catálogo (primero se aprueba la web, después se redactan los prompts de venta) y es un paso posterior a esta documentación.

## 2. Componentes y su responsabilidad

| Archivo | Responsabilidad |
|---|---|
| `page.tsx` | Layout completo, estado de UI (nav mobile, servicio expandido, FAQ abierta, tooltip de WhatsApp), y **todo el CSS del template** en un único `<style>` al final (clases `.odo-*`) |
| `content.ts` | Un `export const` por sección — la única fuente de verdad del texto. Tipado con TypeScript (`ServiceCategory`, `TechSlide`) |
| `OdontologiaGallery.tsx` | Estado propio (`openIndex`) + su propio `useEffect` para teclado y bloqueo de scroll |
| `OdontologiaBooking.tsx` | Estado propio del wizard (paso, motivo, fecha, horario, nombre, teléfono) + construcción del link de WhatsApp |
| `OdontologiaFooter.tsx` | Sin estado, solo presentación — recibe todo de `content.ts` |

## 3. Content / config — qué es "configuración del cliente"

Todo lo que un cliente nuevo necesita cambiar vive en `content.ts`, en un solo lugar:

```ts
export const CLINIC = {
  name: "Cala",
  nameFull: "Cala Odontología",
  tagline: "Odontología integral · Córdoba",
  whatsappNumber: "5493511230000", // ⚠️ placeholder, va sin "+" ni espacios
  address: "Bv. Illia 240, Nueva Córdoba",
  hours: "Lun a Vie 9 a 19hs · Sáb 9 a 13hs",
  email: "hola@cala-odontologia.demo",
};
```

Más los arrays `SERVICES`, `PROBLEMS`, `TECHNOLOGY`, `TEAM`, `TESTIMONIALS`, `INSURANCE`, `FAQ`, `BOOKING_MOTIVOS`, `BOOKING_HORARIOS`, `GALLERY` y `NAV_LINKS` — todos en el mismo archivo, sin tocar ningún componente visual.

**Iconos por nombre, no por JSX**: `PROBLEMS` guarda el nombre del ícono como string (`"Zap"`, `"Snowflake"`, …) y `page.tsx` lo resuelve contra un diccionario (`PROBLEM_ICONS`) — así `content.ts` se puede editar sin tocar imports de React.

## 4. Assets — inventario final

18 archivos WebP en `public/templates/odontologia/`, **~784 KB en total** (bajaron de 28,4 MB de las fotos originales). Ninguno supera 900px de ancho salvo `clinica-sala.webp` (1400px, es la foto destacada de la Galería + la que más se agranda en el lightbox) y `hero-sonrisa.webp` (864px, es el techo real de esa foto recortada).

| Archivo | Dimensiones | Peso | Uso principal |
|---|---|---|---|
| `hero-sonrisa.webp` | 864×940 | 37 KB | Hero (priority) |
| `antes-despues.webp` | 800×667 | 24 KB | Antes/Después |
| `equipo-dra.webp` | 1100×1100 | 66 KB | Equipo (frente + reverso) |
| `equipo-dr.webp` | 1100×825 | 26 KB | Equipo (frente + reverso) |
| `general-control.webp` | 900×1350 | 30 KB | Servicio 01 |
| `estetica-guia-color.webp` | 900×1350 | 68 KB | Servicio 02 + Galería |
| `ortodoncia-brackets.webp` | 900×1350 | 31 KB | Servicio 03 + Galería |
| `implante-corona.webp` | 900×1350 | 29 KB | Servicio 04 + Galería |
| `tech-radiografia.webp` | 800×1200 | 36 KB | Servicio 05 + Tecnología |
| `moldes-yeso.webp` | 900×1350 | 42 KB | Servicio 06 + Galería |
| `equipo-cirugia.webp` | 850×567 | 37 KB | Servicio 07 + Galería |
| `equipo-procedimiento.webp` | 850×1275 | 53 KB | Servicio 08 + Galería |
| `tech-diagnostico-digital.webp` | 800×533 | 42 KB | Tecnología + Galería |
| `tech-historia-clinica.webp` | 800×1200 | 36 KB | Tecnología |
| `tech-fotografia-clinica.webp` | 800×533 | 27 KB | Tecnología |
| `tech-sala.webp` | 800×1198 | 73 KB | Tecnología |
| `clinica-sala.webp` | 1400×933 | 70 KB | Galería (tile destacado 2×2) |
| `clinica-detalle.webp` | 850×1236 | 56 KB | Galería |

**Reproducibilidad**: `scripts/optimize-odontologia-assets.mjs` documenta, para cada archivo, de qué foto original sale, qué recorte se le aplicó (si corresponde) y por qué ese ancho — correrlo de nuevo regenera exactamente lo mismo a partir de `raw-fotos/odontologia/` (esa carpeta no está en git; ver `.gitignore`).

⚠️ **Dos fotos necesitaron recorte por privacidad de marca, no solo por composición**: la del hero traía el logo de otra clínica pisado en una esquina, y la de antes/después era en realidad una pieza publicitaria completa de otra clínica real. Los dos retratos de equipo se recortaron a busto/rostro porque las fotos originales mostraban el nombre bordado de un profesional real (y, en un caso, el logo de una clínica real). Está todo comentado en el script.

## 5. Next/Image — cómo se usa

- **Ninguna imagen usa `<img>` nativo** — todas pasan por `next/image`.
- **`fill` + contenedor con `aspect-*` o `aspect-[N/M]`** en vez de `width`/`height` fijos — así el layout nunca depende del tamaño real del archivo, y no hay layout shift.
- **`sizes` afinado por uso real**, no `100vw` genérico en todos lados:
  - Hero: `(max-width: 1024px) 90vw, 480px`
  - Cards de Servicios: `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw`
  - Cards de Tecnología: `340px` (ancho fijo del carrusel)
  - Equipo: `(max-width: 640px) 100vw, 50vw`
  - Galería (grid): `(max-width: 640px) 50vw, 33vw`
  - Galería (lightbox): `100vw`
- **Formato**: los archivos fuente son `.webp`; Next.js además re-sirve automáticamente en **AVIF** cuando el navegador lo soporta (`next.config.ts` no desactiva el optimizador, así que queda el comportamiento por defecto: AVIF primero, WebP como fallback) — no hizo falta generar archivos AVIF a mano.

## 6. Prioridad de carga y lazy loading

- **Una sola imagen con `priority`**: la del hero (`hero-sonrisa.webp`) — es la única que el usuario ve sin scrollear, así que se carga antes que nada.
- **Todo lo demás usa el lazy loading por defecto de `next/image`** (no se pasó `priority` en ningún otro lugar): Servicios, Tecnología, Equipo, Antes/Después, Galería y el mapa (`iframe loading="lazy"`) cargan solo cuando se acercan al viewport.
- **Excepción intencional**: la imagen del lightbox de la Galería sí lleva `priority` — cuando se abre, el usuario la necesita al instante, no tiene sentido que espere el lazy load estándar.

## 7. Responsive — el sistema

No hay un breakpoint "mobile" especial fuera de Tailwind (`sm:`, `lg:`). Tres patrones se repiten:
1. **Grid → scroll horizontal** en mobile (Servicios): el contenedor cambia de `grid` a `flex overflow-x-auto` por breakpoint, sin duplicar el JSX.
2. **Elementos que se esconden por espacio, no por lógica** (`hidden sm:block` / `hidden sm:flex`): los 2 chips flotantes del hero, el CTA de la navbar, los botones del dock de Motivos.
3. **Mismo componente, mismo comportamiento, distinto tamaño de tarjeta**: Tecnología y Galería no cambian de patrón entre mobile y desktop, solo el ancho de cada tarjeta/columna.

## 8. Performance

- Peso total de imágenes de la página: **~784 KB** (ver inventario arriba), repartido en 18 archivos livianos en vez de pocos archivos pesados.
- `sizes` ajustado por sección evita que Next.js genere/sirva variantes más grandes de las necesarias.
- Ninguna librería nueva de peso (no se sumó ninguna dependencia de npm para lograr los efectos de motion — todo corre sobre `motion/react`, que ya estaba instalado).
- Build de producción verificado (`next build`) sin errores — `/preview/odontologia` sale como página estática (prerenderizada).

## 9. Accesibilidad

- Botones e íconos interactivos con `aria-label` (flechas de los carruseles, botones de la galería, "Abrir menú", "Cerrar", WhatsApp flotante).
- `aria-expanded` en las tarjetas de Servicios y en las preguntas del FAQ.
- El lightbox de la Galería es un `role="dialog"` con `aria-modal="true"` y se puede cerrar y navegar 100% por teclado (Escape, ← →).
- Contraste: la paleta se calculó para que el texto secundario (`#5C6159`) pase 4.5:1+ sobre los fondos claros del template (`#F2F1EC`/`#FAFAF7`) — mismo criterio de contraste que ya se aplica en el resto del catálogo.
- El botón de WhatsApp flotante tiene `aria-label` propio, no depende del ícono para ser entendido por un lector de pantalla.

## 10. `prefers-reduced-motion`

Todas las animaciones puramente decorativas se desactivan bajo esta media query (bloque al final del `<style>` de `page.tsx`):
- El brillo del CTA refractivo y de la franja de números.
- Los marquees de Opiniones y Coberturas (quedan estáticos en vez de animar).
- La transición de zoom de la Galería.
- La transición de escala del efecto dock.

Lo que **no** se apaga (y está bien que no se apague, porque no es decorativo sino funcional): el giro de las tarjetas de Equipo al hover, el flip de `TextRoll` y el flujo del wizard de reserva — son interacciones que el usuario dispara a propósito, no animaciones ambientales.

## 11. Booking → WhatsApp (resumen técnico)

Ver el detalle funcional completo en el Prompt 03. Del lado técnico: no hay ningún endpoint de backend ni estado persistente — todo el wizard vive en `useState` de React dentro de `OdontologiaBooking.tsx`, y el "envío" es simplemente construir una URL `https://wa.me/{numero}?text={mensaje}` con `encodeURIComponent` y abrirla con un `<a target="_blank">`. Cero infraestructura nueva.

## 12. Variables configurables — checklist para un cliente nuevo

Para adaptar este template a una clínica real, lo mínimo indispensable a tocar en `content.ts`:
- [ ] `CLINIC` completo (nombre, WhatsApp, dirección, horario, email)
- [ ] `TEAM` (nombres, roles, matrículas reales, bios, fotos)
- [ ] `SERVICES` (fotos y textos si cambian las especialidades)
- [ ] `INSURANCE` (coberturas reales que acepta)
- [ ] `TESTIMONIALS` (reemplazar por testimonios reales, con consentimiento)
- [ ] La query del mapa embebido en `page.tsx` (sección Contacto)
- [ ] Las 18 imágenes de `public/templates/odontologia/` por fotos propias del cliente (respetando los mismos `aspect-ratio` para no romper el layout)
