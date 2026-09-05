import type { Template } from "./types";

export const cimiento: Template = {
  slug: "cimiento",
  name: "Cimiento",
  category: "Construcción",
  style: "Industrial / Robusto",
  tags: ["Construcción", "Industrial", "Robusto"],
  status: "ready",
  featured: false,
  previewImage: "/templates/cimiento/cover.jpg",
  description:
    "Landing robusta para empresas de construcción y contratistas: obra real como prueba, presupuesto claro y una estética utilitaria que transmite solidez, no un template genérico de agencia.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Cimiento",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en landings de empresas de construcción, contratistas y estudios de arquitectura de obra, con criterio industrial/utilitario.

CONTEXTO
Voy a construir la landing de [COMPANY_NAME], una empresa de [DESCRIBIR: construcción, remodelación, contratista general]. Reemplazá cada corchete con mi información real; nunca inventes obras, plazos ni certificaciones.

OBJETIVO
Que un cliente potencial (particular o empresa) confíe en la solidez de la empresa viendo obra real terminada, y pida presupuesto sin fricción.

AUDIENCIA
Gente evaluando contratar una obra, generalmente con presupuesto y plazo como las dos preguntas centrales — quieren ver trabajo real antes que discurso de marca.

MARCA
Nombre: [COMPANY_NAME]. Tono: directo, técnico, confiable — nada de metáforas de "construimos sueños". Paleta: gris hormigón, naranja de seguridad como acento (o el color de la marca si difiere), tipografía utilitaria de trazo grueso.

DIRECCIÓN DE DISEÑO
Estética industrial intencional: líneas rectas, tipografía condensada tipo señalética de obra, fotografía real de obra terminada (nunca renders genéricos de stock si hay fotos reales disponibles). El acento naranja se usa como en una obra real — para señalar lo importante, no como decoración.

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Obras + Servicios + Presupuesto) → Hero con foto de obra + propuesta → Servicios (tipos de obra que se hacen) → Obras realizadas (galería con antes/después si aplica) → Proceso de trabajo (pasos, plazos típicos) → Presupuesto (formulario o contacto directo) → Certificaciones/matrícula si aplica.

ESTRUCTURA DE PÁGINA
1. Hero: foto de obra real terminada, propuesta clara ("Construimos en tiempo y forma, con presupuesto cerrado"), CTA "Pedir presupuesto".
2. Servicios: tipos de obra (ampliación, remodelación, obra nueva, etc.), cada uno con una línea concreta.
3. Obras realizadas: galería de fotos reales, con antes/después si hay.
4. Proceso: pasos numerados de cómo se trabaja, con plazos típicos reales.
5. Presupuesto: formulario corto (tipo de obra, ubicación, contacto) o link directo a WhatsApp.

COMPONENTES
Botón CTA: sólido, esquinas rectas (nada de redondeado — coherente con la estética utilitaria), color naranja de seguridad o el de marca. Cards de servicio con borde grueso, sin decoración innecesaria.

DIRECCIÓN DE COPY
Directo y concreto: plazos reales, tipos de obra reales, sin metáforas. "Reformamos tu cocina en 3 semanas" en vez de "Transformamos espacios".

REGLAS RESPONSIVE
Las fotos de obra mantienen su encuadre en mobile. El formulario de presupuesto con inputs grandes y claros (el usuario puede estar completándolo desde el celular, en la obra).

ANIMACIONES
Fade-up simple al entrar cada sección. Nada de movimiento elaborado — la estética industrial pide solidez visual, no efectos.

ACCESIBILIDAD
Contraste alto (crítico si se usa en celular con luz de sol directa, contexto real de obra). Formulario de presupuesto accesible por teclado.

SEO
Title: "[COMPANY_NAME] — [SERVICIO] en [CIUDAD/ZONA]". Schema.org GeneralContractor o LocalBusiness con dirección y servicios.

RENDIMIENTO
Fotos de obra optimizadas en WebP/AVIF, dimensiones explícitas — pueden ser el contenido más pesado de la página.

REQUISITOS TÉCNICOS
Schema.org GeneralContractor/LocalBusiness en JSON-LD con datos reales.

CONTROL DE CALIDAD FINAL
¿Las fotos de obra son reales o genéricas de stock? ¿Los plazos y tipos de obra son concretos? ¿Se puede pedir presupuesto en pocos clics desde el celular?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá el acento manteniendo la estética industrial.",
      content: `Ajustá SOLO la identidad de Cimiento:
1. Acento: reemplazá el naranja de seguridad por [COLOR_DE_MARCA] si tu empresa tiene un color propio, manteniendo alto contraste sobre el gris hormigón.
2. Logo: en el nav, con presencia sólida — este rubro tolera un logo más grande que uno editorial.
No toques: la tipografía condensada utilitaria ni el criterio de mostrar obra real por sobre ilustración.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá obras, servicios y plazos reales.",
      content: `Reescribí el copy de Cimiento con mi información real:

Empresa: [COMPANY_NAME]
Servicios (tipos de obra): [SERVICIOS]
Obras realizadas (descripción breve, con foto real): [OBRAS]
Proceso de trabajo (pasos, plazos reales): [PROCESO]
Zona de trabajo: [ZONA]
Contacto: [CONTACTO]

Reglas:
- Nunca inventar una obra ni un plazo — si falta el dato, dejar [FALTA: dato real].
- Los plazos siempre en rangos realistas, no promesas genéricas de "rapidez".`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento mínimo, la solidez se transmite con quietud.",
      content: `Sumá esta animación a Cimiento:
1. Fade-up de 16px al entrar cada sección en viewport, una sola vez.
No agregues nada más — la estética industrial/utilitaria de este template depende de la solidez visual, no del movimiento.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "SEO local, clave para que aparezcas en búsquedas de la zona.",
      content: `Optimizá el SEO de [COMPANY_NAME]:
1. Title: "[COMPANY_NAME] — [SERVICIO] en [CIUDAD/ZONA]".
2. JSON-LD Schema.org GeneralContractor o LocalBusiness con address y areaServed.
3. Open Graph con la mejor foto de obra terminada.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "El formulario de presupuesto tiene que usarse bien desde una obra.",
      content: `Revisá el responsive de Cimiento en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. Formulario de presupuesto con inputs de mínimo 44px de alto, pensado para uso en condiciones reales (con guantes, con poca conexión).
2. Fotos de obra a ancho completo en mobile, sin recortes que pierdan el antes/después.
3. Botón de WhatsApp/contacto siempre alcanzable.`,
    },
  ],
};
