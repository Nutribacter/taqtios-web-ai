import type { Template } from "./types";

export const signature: Template = {
  slug: "signature",
  name: "Signature",
  category: "Marca Personal",
  style: "Editorial / Seguro",
  tags: ["Marca Personal", "Editorial", "Creador"],
  status: "ready",
  featured: false,
  previewImage: "/templates/signature/cover.jpg",
  description:
    "Landing personal para creadores, speakers y consultores individuales: una presentación segura, la prueba de autoridad (medios, charlas, clientes) y un único camino de contacto.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Signature",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en landings de marca personal para creadores, speakers y consultores independientes.

CONTEXTO
Voy a construir la landing personal de [NAME], [DESCRIBIR: speaker, creador de contenido, consultor independiente, autor]. Reemplazá cada corchete con mi información real; nunca inventes charlas, medios ni clientes.

OBJETIVO
Que quien visite el sitio (un organizador de eventos, un medio, un cliente potencial) entienda en segundos quién es [NAME] y por qué vale la pena contratarlo/invitarlo, y llegue a contactar.

AUDIENCIA
Organizadores de eventos, editores de medios o clientes que buscan a alguien con autoridad real en su tema — la prueba de autoridad (dónde habló, dónde salió publicado, con quién trabajó) es lo que convence, no los adjetivos.

MARCA
Nombre: [NAME]. Tono: seguro, en primera persona, sin falsa modestia ni arrogancia. Paleta: editorial, con foto personal de calidad como elemento central del hero (nunca un ícono genérico en lugar de una foto real).

DIRECCIÓN DE DISEÑO
Foto personal grande y de calidad en el hero — esta es una landing de PERSONA, la cara importa. Composición editorial, con la prueba de autoridad (logos de medios, charlas dadas, clientes) mostrada con la misma seriedad que un CV pero sin verse como un CV.

ARQUITECTURA DE INFORMACIÓN
Nav (nombre + Sobre mí + Contacto) → Hero con foto + una línea que define quién es → Prueba de autoridad (logos de medios/eventos/clientes) → Sobre mí (bio real, no genérica) → Lo que hago (charlas, consultoría, contenido — lo que aplique) → Contacto directo.

ESTRUCTURA DE PÁGINA
1. Hero: foto personal de calidad + nombre + una línea que define la propuesta ("Ayudo a empresas B2B a vender sin depender de publicidad paga").
2. Prueba de autoridad: logos de medios donde salió, eventos donde habló, clientes con los que trabajó — en texto plano o logos reales, nunca inventados.
3. Sobre mí: bio de 3-5 oraciones, concreta, con hechos reales (qué hizo, no solo cómo se siente al respecto).
4. Lo que hago: 2-3 líneas de servicios/formatos (charlas, consultoría, contenido).
5. Contacto: mail directo o formulario corto.

COMPONENTES
Sin cards con sombra ni decoración — la foto y la tipografía son el diseño. Los logos de prueba de autoridad en escala de grises, color al hover si se quiere ese detalle.

DIRECCIÓN DE COPY
Primera persona, directo, con hechos concretos ("Hablé en 30 conferencias en 5 países" en vez de "Soy un speaker reconocido internacionalmente"). Nunca inventar un logo de medio o cliente que no sea real.

REGLAS RESPONSIVE
La foto del hero mantiene calidad y encuadre en mobile (nunca recortada de forma que pierda la composición). Los logos de autoridad pasan a un carrusel horizontal o grid de 2 columnas en mobile.

ANIMACIONES
Fade-up sutil al entrar cada sección. Nada más — la seguridad del tono no necesita movimiento llamativo para transmitirse.

ACCESIBILIDAD
Contraste 4.5:1 en todo texto. Alt text real en la foto personal y en cada logo de prueba de autoridad.

SEO
Title: "[NAME] — [PROPUESTA_EN_6_PALABRAS]". Meta description con la propuesta. Schema.org Person con jobTitle y sameAs (redes) si corresponde.

RENDIMIENTO
La foto personal del hero es el elemento más pesado: WebP/AVIF optimizado, dimensiones explícitas, carga con prioridad alta (es lo primero que se ve).

REQUISITOS TÉCNICOS
Schema.org Person en JSON-LD si se quiere reforzar el SEO de nombre propio.

CONTROL DE CALIDAD FINAL
¿La foto transmite seguridad y calidad, o parece una selfie de perfil de red social? ¿La prueba de autoridad es 100% real? ¿Se entiende en segundos a qué se dedica esta persona?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta y tipografía sin restarle protagonismo a la foto.",
      content: `Ajustá SOLO la identidad de Signature:
1. Paleta: agregá [COLOR_DE_MARCA] con moderación (links, algún detalle), nunca compitiendo con la foto personal del hero.
2. Tipografía: si preferís otra, mantené el criterio editorial de buena legibilidad.
No toques: el tamaño y protagonismo de la foto del hero, ni el criterio de solo mostrar prueba de autoridad real.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá tu bio y tu prueba de autoridad reales.",
      content: `Reescribí el copy de Signature con mi información real:

Nombre: [NAME]
Propuesta (una línea): [PROPUESTA]
Prueba de autoridad (medios, eventos, clientes reales): [PRUEBA]
Bio (3-5 oraciones con hechos concretos): [BIO]
Lo que hago (servicios/formatos): [SERVICIOS]
Contacto: [CONTACTO]

Reglas:
- Nunca inventar un medio, evento o cliente — si falta, dejar [FALTA: dato real] o sacar la sección.
- La bio con hechos concretos (qué hiciste), no solo adjetivos sobre vos mismo.`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento mínimo, la foto y el copy hacen el trabajo.",
      content: `Sumá esta animación a Signature:
1. Fade-up de 16px al entrar cada sección en viewport, una sola vez.
No agregues nada más — sin efectos en la foto, sin parallax. La seguridad del tono se transmite con quietud, no con movimiento.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO de nombre propio, con Schema.org Person si aplica.",
      content: `Optimizá el SEO de [NAME]:
1. Title: "[NAME] — [PROPUESTA_EN_6_PALABRAS]".
2. Meta description con la propuesta concreta.
3. Schema.org Person con jobTitle, url y sameAs (links a redes/medios reales).
4. Open Graph con la foto personal del hero.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "La foto del hero y los logos de autoridad en mobile.",
      content: `Revisá el responsive de Signature en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. La foto del hero mantiene su encuadre y calidad en mobile, sin recortes que pierdan la composición.
2. Los logos de prueba de autoridad pasan a carrusel horizontal o grid de 2 columnas en mobile.
3. El contacto (mail o formulario) accesible sin scrollear demasiado.`,
    },
  ],
};
