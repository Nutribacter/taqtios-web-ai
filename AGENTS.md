<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# TAQTios Web AI — MVP de fin de semana

Biblioteca premium de templates web + prompts para pegar en Claude/Qwen/Lovable/
Cursor/Gemini. NO es un generador de webs propio. Pago único, acceso a la
biblioteca completa. Línea de producto separada de **TAQTIOS** (la agencia de
marketing/automatización en `taqtios.online`) — misma familia de marca, mismo
dueño, público y producto distintos.

## Cómo trabajar
- El dueño no es programador: explicar simple, tomar las decisiones técnicas
  menores sin preguntar (ver "Regla de ejecución" del master prompt original).
- Frenar a preguntar solo si es irreversible, de alto costo, de seguridad, o
  cambia el producto radicalmente.
- Objetivo del finde: landing → templates → checkout real con Mercado Pago →
  acceso → dashboard → prompts. Las primeras 10 ventas, no miles de usuarios.

## Stack
- **Next.js 16 (App Router) + TypeScript + Tailwind v4** (tokens CSS-first en
  `src/app/globals.css`, no hay `tailwind.config.js`).
- **Supabase**: Postgres + Auth (email/password). El dueño ya tenía cuenta —
  por eso no se hand-rolleó login propio. Clientes en `src/lib/supabase/`
  (`client.ts` browser, `server.ts` server components/actions con RLS,
  `admin.ts` service role — solo para webhooks/checkout, nunca en el cliente).
- **Mercado Pago** (Checkout Pro) para el pago real. `src/lib/mercadopago.ts`,
  checkout en `src/app/api/checkout/route.ts`, webhook en
  `src/app/api/webhooks/mercadopago/route.ts`.
- **Resend** para el mail de "tu acceso ya está listo" (`src/lib/email.ts`).
- Hosting: Vercel. Cloudflare solo para DNS/CDN delante del dominio de
  Hostinger (no se usa Cloudflare Workers acá: este producto no llama a
  ninguna IA del lado del servidor, así que Workers AI no aplica).

## Identidad visual
Hereda la paleta de la agencia (violeta/celeste) pero **desaturada y con base
clara/neutra por defecto** — el dueño pidió explícitamente "no tan oscuro, no
tan violeta chillón, tope de gama" (no la estética neon/fondo-oscuro-cargado
de la landing de la agencia). Tokens en `globals.css`:
`--accent` (violeta apagado), `--accent-2` (celeste apagado), fondos neutros
(no tintados de violeta) en claro y oscuro. Tipografía: Sora (headings) +
Inter (cuerpo) — igual que la agencia, no se cambió.

⚠️ La paleta de **cada template individual** (ej. Nova AI en
`/preview/nova-ai`) es su propio mundo visual, definido en su propio Master
Prompt — no tiene que coincidir con los tokens del marketplace. El marketplace
vende 20 estéticas distintas; no puede tener una sola.

## Contenido: templates y prompts
`src/content/templates/` — un archivo por template (`nova-ai.ts` es el
patrón de referencia), registrados en `index.ts`. Cada uno tiene 6 prompts
(master/branding/copy/animation/seo/responsive) con contenido real y
específico — nunca genérico ("hacelo moderno"). `status: "draft"` lo oculta
de `/templates` y de indexación hasta que esté completo; recién ahí pasa a
`"ready"`. **Falta escribir 19 de los 20 templates** — ver sección de
pendientes más abajo.

## Precio y comisión
`src/lib/pricing.ts`. Objetivo cerrado: ARS 14.900 **netos** para TAQTios
después de la comisión de Mercado Pago. Como MP no expone la comisión exacta
antes de que el comprador elija medio de pago, `mpFeeRate` es una tasa
ESTIMADA y editable — no una garantía matemática. Verificar la tasa real en
el panel de MP (Tu negocio → Costos y tarifas) y ajustar esa única constante
si difiere.

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

## Pendiente — de acá para adelante
1. **Escribir los 19 templates que faltan** (Nova AI es el único completo).
   Nombres/categorías ya definidos por el dueño: Black Studio, Casa, Prime
   Estate, Mono, Flow, Velvet, Pulse, Casa Nova, Orbit + 10 más a definir
   (categorías sugeridas: Startups, Landing Pages, Healthcare, Education,
   Personal Brand, Finance, Beauty, Automotive, Construction, Creative
   Studios). Cada uno necesita también su propio `/preview/[slug]` real.
2. **Credenciales que faltan cargar en `.env.local`** (ver `.env.example`):
   Supabase (URL + anon key + service role key — el dueño ya tiene cuenta),
   Mercado Pago (arrancar con las de TEST), Resend, `NEXT_PUBLIC_SITE_URL`.
3. Correr `supabase/migrations/0001_init.sql` en el SQL Editor del proyecto
   de Supabase real.
4. Dominio: el dueño ya tiene uno comprado en Hostinger, lo conecta él mismo
   en Vercel cuando esté listo (queda como env var mientras tanto).
5. No se armó `/api/checkout` con reintentos ni cola — para este volumen
   (primeras 10 ventas) un `await` directo alcanza. No sobre-construir esto
   sin medir un problema real primero.

## Agent skills

### Issue tracker

Los tickets y specs viven como archivos markdown en `.scratch/<feature>/` de este repo (no hay remoto de GitHub). Ver `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: un `CONTEXT.md` en la raíz y los ADR en `docs/adr/`. Ninguno existe todavía — se crean recién cuando hagan falta. Ver `docs/agents/domain.md`.
