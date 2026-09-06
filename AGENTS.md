<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# TAQTios Web AI — MVP de fin de semana

Biblioteca premium de templates web + prompts para pegar en Claude/Qwen/Lovable/
Cursor/Gemini. NO es un generador de webs propio (ver "SiteSpring" más abajo
para la idea de automatizarlo — evaluada, no construida). Línea de producto
separada de **TAQTIOS** (la agencia de marketing/automatización en
`taqtios.online`) — misma familia de marca, mismo dueño, público y producto
distintos.

## Cómo trabajar
- El dueño no es programador: explicar simple, tomar las decisiones técnicas
  menores sin preguntar.
- **Para cualquier paso en un panel externo (Vercel, Supabase, Mercado Pago,
  etc.): nunca asumir que sabe dónde está un botón o una pantalla.** Decir
  exactamente qué tocar, con el nombre del botón/campo tal cual aparece.
  No dar por sentado que ya vio esa pantalla antes, aunque sea la segunda vez
  en la sesión. Pedido explícito del dueño el 6/9, con bastante enojo — no
  repetir el error de dar un paso por "obvio".
- Frenar a preguntar solo si es irreversible, de alto costo, de seguridad, o
  cambia el producto radicalmente.
- **`no deployes` hasta que lo pida explícitamente** — viene repitiéndolo
  mientras itera diseño. Cuando el dueño quiera deployar necesita pasar un
  personal access token de Vercel (vercel.com/account/tokens); nada más lo
  bloquea.
- Al referenciar un CodePen/demo de un autor puntual (no una librería
  instalable): mirar solo el resultado renderizado y reimplementar la técnica
  con CSS/JS 100% propio, nunca copiar su código. Distinto de librerías con
  código pensado para copiar/instalar (React Bits, shadcn) — eso sí se usa
  directo. Regla seguida toda la sesión (glassmorphism, vidrio líquido,
  FoldText), no aflojarla si se sigue iterando el diseño.

## Estado actual
- Landing, galería, ficha de template, checkout con Mercado Pago, login/signup
  (email + "Continuar con Google" — código listo, faltan credenciales),
  dashboard: todo construido. Build de producción limpio. **No deployado
  todavía** (falta el token de Vercel).
- **Los 20 templates están completos**: metadata + 6 prompts cada uno
  (`src/content/templates/`, `nova-ai.ts` es el patrón de referencia) y su
  propia página de preview real y animada (`src/app/preview/<slug>/`), cada
  una con los efectos que pide su propio prompt de "Animaciones". Cada
  preview es su propio mundo visual (colores/fuente propios, sin los tokens
  del marketplace) — a propósito: son 20 estéticas distintas, no 20 variantes
  de una paleta.
- Identidad visual del MARKETPLACE (no la de cada template individual) pasó
  por varias vueltas esta sesión: neumorfismo (`.neu-raised`/`.neu-pressed`)
  → glassmorphism (`.glass`/`.glass-tint`) → "vidrio líquido"
  (`.glass-liquid`, más volumen, brillo curvo en una esquina). Fraunces
  reemplazó a Sora como fuente de título (pedido explícito: "letras
  diferentes, todo bien épico"; Inter sigue de cuerpo). Todo vive en
  `globals.css`.
- `StepsShowcase.tsx` (sección "Cómo funciona" de la home): retícula de
  esquinas violeta que recorre sola los 4 pasos en loop (misma idea visual
  del "Target Cursor" de React Bits, reimplementada — no sigue al mouse,
  sigue un timer).
- Botón "Continuar con Google" en login/signup (`GoogleSignInButton.tsx` +
  `src/app/auth/callback/route.ts`) — falta cargar las credenciales (ver
  Pendiente).

## Precio y estrategia de lanzamiento — decisión de esta sesión, importante
Lo construido este finde es el **"Producto 2" de la escalera**: kit
self-service, comprás acceso a la biblioteca y VOS pegás el prompt en tu
propia cuenta de IA. Tiene la misma fricción que competidores tipo
MotionSites ($60-150 USD + armarlo vos + dudas de dominio/hosting).

La oferta que de verdad vende por impulso es el **"Producto 1"**: "elegí
diseño → pasanos tus datos → $14.900 ARS → web lista por 30 días", donde
TAQTios entrega la web armada, no un prompt.

🔴 **Producto 1 NO está construido, y se decidió NO construirlo antes de
vender.** Plan: fulfillment 100% manual — un form externo (Google
Form/Tally, gratis) + el Mercado Pago que ya existe + el dueño arma cada web
a mano (toma el prompt del template, lo personaliza con los datos del
formulario, lo pega en su propia IA, deploya gratis en Vercel/Netlify, manda
el link). Cero código nuevo hace falta para arrancar a vender. Esto ES el
test de "vendé 10 webs reales" que se veía necesario, con la oferta correcta
detrás — sirve para juntar la primera plata y confirmar demanda antes de
automatizar nada.

⚠️ **Falta escribir la landing/copy del Producto 1** — no se tocó código
todavía. La landing actual (`src/app/page.tsx`) vende el Producto 2
(biblioteca). Si se lanza el Producto 1, necesita su propia página que
prometa exactamente lo que se entrega a mano (no "instantáneo con un click"
si en la práctica lo arma una persona — riesgo de reclamos si no coincide).

Escalera completa acordada (no construir los niveles de arriba todavía):
Producto 1 $14.900 (consumidor, entrega manual) → Producto 2 $49.000 (el kit
self-service que YA existe, para freelancers/agencias chicas) → Servicio
$150k-500k (a medida) → SiteSpring automatizado (ver abajo).

## Auditoría "SiteSpring" (formulario → web automática → publicar) — hecha, NO construir todavía
Se le pidió a Claude auditar en modo lectura (cero cambios de código) si las
20 preview pages se pueden convertir en plantillas parametrizadas por
formulario, para evaluar si algún día conviene automatizar el Producto 1.
Hallazgos, para no volver a derivarlos:
- Las 20 comparten `ScrollReveal` (fade-up) y `CountUp` (contador animado);
  todo lo demás (textos, "fotos" que hoy son divs de color CSS, precios,
  horarios) está escrito a mano adentro de cada archivo de preview.
- **Un esquema de datos común cubre bien ~16-17 de los 20** (nombre,
  headline, CTA, servicios[], fotos[], footer). Los otros 4-5 tienen
  elementos que son identidad de diseño, no datos de negocio, y conviene
  dejarlos fijos en vez de forzarlos a un formulario: el gráfico SVG
  inventado a mano de Ledger, los colores por proyecto de Prisma, los
  colores de marca de terceros (Slack/Notion) en Flow, el booleano de
  tamaño de grilla de Velvet.
- 🔴 Bug de paso encontrado (no arreglado, no urgente): **Orbit y Aula
  repiten el mismo texto de descripción en sus 3-4 ítems** en vez de tener
  uno distinto por ítem — se corrige solo el día que se parametricen.
- Estimación con 5 templates fáciles (Vital, Cimiento, Casa Nova, Mono,
  Orbit) + subdominio propio (`*.taqtios.online`, sin dominio del cliente
  automatizado): **3-4 semanas**. No es una pared arquitectónica, pero
  tampoco es "3-5 módulos" — es un producto aparte que reutiliza el diseño
  de los templates, no un agregado chico al MVP actual.
- Hoy no existe nada de esto: `purchases` es la única tabla en Supabase, no
  hay tabla `sites`, y `src/middleware.ts` solo refresca la sesión (sin
  ruteo por subdominio/host).
- **No tocar esto hasta que el Producto 1 manual muestre demanda real** —
  los primeros clientes van a decir solos qué parte automatizar primero.

## Stack
- **Next.js 16 (App Router) + TypeScript + Tailwind v4** (tokens CSS-first en
  `src/app/globals.css`, no hay `tailwind.config.js`).
- **Supabase**: Postgres + Auth (email/password + Google OAuth, código listo
  sin credenciales todavía). Clientes en `src/lib/supabase/` (`client.ts`
  browser, `server.ts` server components/actions con RLS, `admin.ts` service
  role — solo para webhooks/checkout, nunca en el cliente).
- **Mercado Pago** (Checkout Pro, modo invitado — el comprador NO necesita
  cuenta de MP) para el pago real. `src/lib/mercadopago.ts`, checkout en
  `src/app/api/checkout/route.ts`, webhook en
  `src/app/api/webhooks/mercadopago/route.ts`.
- **Resend** para el mail de "tu acceso ya está listo" (`src/lib/email.ts`).
- Hosting: Vercel. Cloudflare solo para DNS/CDN delante del dominio de
  Hostinger.

## Identidad visual
Ver "Estado actual" arriba (glassmorphism/vidrio líquido + Fraunces). La
paleta de **cada template individual** (ej. Nova AI en `/preview/nova-ai`)
sigue siendo su propio mundo visual, definido en su propio Master Prompt —
no tiene que coincidir con los tokens del marketplace ni entre sí.

## Contenido: templates y prompts
`src/content/templates/` — un archivo por template, registrados en
`index.ts`. Cada uno tiene 6 prompts (master/branding/copy/animation/seo/
responsive) con contenido real y específico — nunca genérico. `status:
"ready"` en los 20 (ya visibles en `/templates` e indexables).

## Precio y comisión (Producto 2 — biblioteca)
`src/lib/pricing.ts`. Objetivo cerrado: ARS 14.900 **netos** para TAQTios
después de la comisión de Mercado Pago. Como MP no expone la comisión exacta
antes de que el comprador elija medio de pago, `mpFeeRate` es una tasa
ESTIMADA y editable — no una garantía matemática. Verificar la tasa real en
el panel de MP (Tu negocio → Costos y tarifas) y ajustar esa única constante
si difiere. (El Producto 1 manual usa el mismo número $14.900 pero es una
decisión de pricing aparte, no atada a esta lógica de comisión neta.)

## Pago (Mercado Pago)
Regla dura del proyecto: **nunca dar acceso solo porque el navegador volvió a
la URL de éxito.** El webhook siempre vuelve a consultar el pago real contra
la API de MP (`Payment.get`) antes de tocar `purchases.status`. Estados:
`pending` / `approved` / `rejected` / `cancelled`. Idempotente: reprocesar la
misma notificación no reenvía el mail de acceso.
⚠️ La verificación de firma (`x-signature`, HMAC con `MERCADOPAGO_WEBHOOK_SECRET`)
sigue el formato documentado de MP pero **no se probó contra un webhook real
todavía** (sin cuenta de MP conectada) — retestear en cuanto haya credenciales
reales, especialmente el manifest `id:...;request-id:...;ts:...;`.

## Cuentas y acceso
`src/lib/access.ts` → `getAccessStatus()`: si Supabase no está configurado
(env vars vacías) devuelve "sin acceso" en vez de romper la página — así el
sitio se puede seguir viendo mientras se termina de conectar Supabase.
Flujo: comprar exige cuenta creada ANTES (signup → volver a /pricing →
checkout), no hay "compra como invitado" — decisión a propósito para no
tener que reconciliar un email de invitado contra un usuario después; es
la parte del flujo que maneja plata, así que se priorizó simple y robusto
sobre frictionless.
`purchases` (Postgres, `supabase/migrations/0001_init.sql`) tiene RLS: el
usuario solo puede LEER sus propias compras; insert/update solo con la
service role key (checkout y webhook).

## ✅ ESTADO AL 6/9 — deployado y con credenciales reales, todo probado en producción

**Landing del Producto 1**: hecha. Salió de `/` (antes tenía la landing del
Producto 2) — el Producto 2 (biblioteca) se movió a `/biblioteca`, intacto.
La home nueva vende la entrega manual por WhatsApp, con galería de los 20
diseños y CTAs a `wa.me/549313021100`. Sin credenciales necesarias para esa
parte.

**Repo en GitHub**: `github.com/Nutribacter/taqtios-web-ai` (privado). Esto
corrige la nota vieja de "no hay remoto" en Issue tracker más abajo.
⚠️ El proyecto de Vercel (`nutri-of-claude/taqtios-web-ai`) **no quedó
conectado a GitHub para auto-deploy** — la cuenta de Vercel del dueño no
tiene enlazado GitHub como "login connection" (error: *"You need to add a
Login Connection to your GitHub account first"* / *"No Origin namespace is
available to install this app"*). Se deployó igual con `vercel deploy --prod`
desde acá. Si se quiere auto-deploy en cada push, hay que resolver esa
conexión desde la cuenta de Vercel del dueño primero (Account Settings →
Login Connections), no es algo que se arregle desde el código.

**Producción real, live en `taqtios-web-ai.vercel.app`**, con las 8 variables
de entorno cargadas en Vercel y probadas de punta a punta:
- Supabase (`rcuyaosfvwcylckemtgq`): registro, login y dashboard funcionando.
  ⚠️ **"Confirm email" está APAGADO a propósito** (se apagó para poder probar
  sin esperar mails) — decidir con el dueño si se vuelve a prender antes de
  abrir a usuarios reales, o si se deja así (menos fricción, más riesgo de
  mails inventados).
- Mercado Pago con credenciales de **prueba** (`TEST-...`): checkout probado
  end-to-end (registro → obtener acceso → redirect a MP → tarjeta de prueba
  `5031 7557 3453 0604` / titular `APRO` / venc `11/30` / CVV `123` / DNI
  `12345678` → aprobado). Cuando el dueño quiera cobrar de verdad: editar
  (no agregar) `MERCADOPAGO_ACCESS_TOKEN` y `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY`
  en Vercel con las credenciales de producción de MP.
  ⚠️ `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` quedó cargada con la de
  **producción** por error de tipeo del dueño — no importa, el código todavía
  no usa esa variable en ningún lado (Checkout Pro solo necesita el Access
  Token del lado del servidor).
- Resend: configurado con `onboarding@resend.dev` (el remitente de prueba
  gratis) — cambiar por un mail del dominio propio cuando haya uno verificado
  en Resend.
- **Google Sign-In: funcionando en producción**, probado por el dueño en
  Safari real. Dos trampas que costaron una vuelta cada una:
  1. El toggle "Enable Sign in with Google" en Supabase puede quedar
     apagado aunque los campos de Client ID/Secret estén completos y
     guardados — hay que verificar el interruptor en sí, no solo los campos.
  2. **Supabase Auth → URL Configuration tenía `Site URL` en
     `http://localhost:3000`** (el default de cuando no había proyecto real
     todavía). Sin arreglar eso, Google autenticaba bien pero el redirect
     final volvía a localhost en la máquina del dueño ("Safari no puede
     conectarse al servidor"). Se corrigió a `https://taqtios-web-ai.vercel.app`
     + se agregó `https://taqtios-web-ai.vercel.app/**` a "Redirect URLs".
     **Si se cambia de dominio en el futuro, este es el primer lugar a
     revisar** si Google deja de funcionar.

**Lo que queda, sin urgencia:**
1. `MERCADOPAGO_WEBHOOK_SECRET`: candado extra para el webhook de MP. Hoy
   funciona sin él (`isSignatureValid` deja pasar si no hay secret cargado,
   ver `src/app/api/webhooks/mercadopago/route.ts`). Cargarlo cuando el dueño
   configure el webhook en el panel de MP.
2. Pasar Mercado Pago a producción cuando el dueño decida empezar a cobrar.
3. Decidir si "Confirm email" de Supabase vuelve a prenderse antes de abrir
   a usuarios reales (ver nota arriba).
4. Resolver la conexión GitHub↔Vercel si se quiere auto-deploy (ver nota
   arriba) — hoy cada deploy nuevo lo corre el asistente a mano con
   `vercel deploy --prod`.
5. Dominio: el dueño ya tiene uno en Hostinger, lo conecta él mismo en
   Vercel cuando esté listo.
6. No se armó `/api/checkout` con reintentos ni cola — no hace falta para
   las primeras ventas, no construir esto sin medir un problema real primero.
7. SiteSpring: ver auditoría arriba — no empezar sin señal de demanda real
   del Producto 1.

**Credenciales usadas esta sesión — NUNCA pasadas por el chat**: todo se cargó
directo en los paneles de Vercel/Supabase/Google/Mercado Pago/Resend por el
dueño, siguiendo pasos explícitos del asistente (nombre exacto de cada botón/
campo — el dueño lo pidió así explícitamente el 6/9, ver feedback en memoria).
Verificar en Vercel → Settings → Environment Variables si hace falta
confirmar qué hay cargado; no está escrito en ningún archivo de este repo.

## Agent skills

### Issue tracker

Los tickets y specs viven como archivos markdown en `.scratch/<feature>/` de este repo (no hay remoto de GitHub). Ver `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: un `CONTEXT.md` en la raíz y los ADR en `docs/adr/`. Ninguno existe todavía — se crean recién cuando hagan falta. Ver `docs/agents/domain.md`.
