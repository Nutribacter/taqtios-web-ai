import type { Template } from "./types";

export const vital: Template = {
  slug: "vital",
  name: "Vital",
  category: "Salud",
  style: "Limpio / Confiable",
  tags: ["Salud", "Limpio", "Confiable"],
  status: "ready",
  featured: false,
  previewImage: "/templates/vital/cover.jpg",
  description:
    "Landing para clínicas, consultorios y telemedicina: confianza y claridad primero, turnos fáciles de sacar y cero promesas médicas que no se puedan sostener.",
  prompts: [
    {
      type: "master",
      title: "Prompt Maestro — Vital",
      description: "El prompt principal: genera la landing completa. Pegalo primero, siempre.",
      content: `ROL
Sos un Senior Product Designer + Frontend Engineer especializado en sitios de salud (clínicas, consultorios, telemedicina), con criterio ético sobre qué se puede prometer y qué no en el rubro salud.

CONTEXTO
Voy a construir la landing de [PRACTICE_NAME], [DESCRIBIR: consultorio de una especialidad, clínica, servicio de telemedicina]. Reemplazá cada corchete con mi información real; nunca inventes especialidades, credenciales ni resultados médicos.

OBJETIVO
Que un paciente potencial entienda qué servicio se ofrece, confíe en la seriedad del lugar/profesional, y saque un turno sin fricción.

AUDIENCIA
Pacientes buscando atención en [ESPECIALIDAD], muchas veces con algo de ansiedad por el motivo de consulta — el diseño tiene que transmitir calma y profesionalismo, no venta agresiva.

MARCA
Nombre: [PRACTICE_NAME]. Tono: cálido pero profesional, nunca alarmista ni con promesas de cura. Paleta: colores claros y calmos (celestes, verdes suaves, blancos), nada de rojos alarmantes salvo en alertas reales de emergencia.

DIRECCIÓN DE DISEÑO
Claridad ante todo: tipografía muy legible, jerarquía simple, nada de elementos que compliquen encontrar el botón de sacar turno. Fotografía real del profesional/equipo si existe (nunca stock genérico de "doctor sonriendo con estetoscopio" si no es foto real).

ARQUITECTURA DE INFORMACIÓN
Nav (logo + Servicios + Turnos + Contacto) → Hero con propuesta + CTA de turno → Servicios/especialidades (lista clara) → Sobre el profesional/equipo (credenciales reales) → Cómo funciona la consulta (presencial/telemedicina, pasos) → Obra sociales/formas de pago aceptadas → Turnos (calendario o formulario) → Contacto y ubicación.

ESTRUCTURA DE PÁGINA
1. Hero: propuesta clara ("Atención en [ESPECIALIDAD], turnos en 48hs"), CTA "Sacar turno".
2. Servicios: lista de lo que se atiende, sin prometer resultados ("tratamos" en vez de "curamos").
3. Profesional/equipo: foto real, credenciales verificables (matrícula, especialización), sin exagerar experiencia.
4. Cómo funciona: pasos claros de qué esperar en la consulta.
5. Obra sociales/pagos: lista real de las que se aceptan.
6. Turnos: formulario o link a sistema de reserva externo.
7. Contacto: dirección, teléfono, horarios de atención.

COMPONENTES
Botón de "Sacar turno": el CTA más visible de toda la página, presente en el nav sticky. Cards de servicio simples, sin iconografía médica genérica de banco de imágenes (jeringas, cruces rojas) salvo que aporte claridad real.

DIRECCIÓN DE COPY
Lenguaje claro, sin jerga médica innecesaria. Nunca prometer resultados de tratamiento ("mejorá tu problema" en vez de "solucionamos tu problema para siempre"). Las credenciales (matrícula, título) siempre reales y verificables.

REGLAS RESPONSIVE
El botón de "Sacar turno" accesible sin scrollear en el hero, y como CTA sticky en mobile si la página es larga.

ANIMACIONES
Fade-up muy sutil al entrar cada sección — el tono calmo de salud no pide movimiento llamativo. Nada de animaciones agresivas o que se sientan "de venta".

ACCESIBILIDAD
Contraste alto (crítico en salud, donde puede haber pacientes con baja visión). Formulario de turnos completamente accesible por teclado y con lector de pantalla, labels claros en cada campo.

SEO
Title: "[PRACTICE_NAME] — [ESPECIALIDAD] en [CIUDAD]". Schema.org tipo MedicalBusiness o Physician con dirección, especialidad y horarios — esto es lo que hace aparecer en búsquedas locales de salud.

RENDIMIENTO
Página liviana, fotos del profesional/equipo optimizadas si existen.

REQUISITOS TÉCNICOS
Schema.org MedicalBusiness/Physician en JSON-LD. Si hay formulario de datos de salud, considerar que cualquier dato sensible no se guarde sin el consentimiento y la seguridad correspondiente — marcar esto como [FALTA: revisar cumplimiento de privacidad de datos de salud] si aplica en tu país.

CONTROL DE CALIDAD FINAL
¿Se puede sacar un turno en menos de 3 clics? ¿Hay alguna promesa de resultado médico que no se puede sostener? ¿El tono transmite calma y profesionalismo, no venta?`,
    },
    {
      type: "branding",
      title: "Prompt de Branding",
      description: "Ajustá paleta manteniendo la calma y la confianza del template.",
      content: `Ajustá SOLO la identidad de Vital:
1. Paleta: mantené tonos calmos (celestes, verdes suaves), ajustá el tono específico según [COLOR_DE_MARCA] — evitar colores muy saturados o alarmantes.
2. Logo: en el nav, sobrio, sin isotipos médicos genéricos si no son parte de tu identidad real.
No toques: la posición del CTA de "Sacar turno" ni la claridad tipográfica.`,
    },
    {
      type: "copy",
      title: "Prompt de Copy",
      description: "Cargá especialidad, credenciales y datos reales, sin prometer curas.",
      content: `Reescribí el copy de Vital con mi información real:

Consultorio/clínica: [PRACTICE_NAME]
Especialidad: [ESPECIALIDAD]
Ciudad y dirección: [DIRECCION]
Profesional/es (nombre, matrícula, especialización real): [PROFESIONALES]
Servicios: [SERVICIOS]
Obras sociales/pagos aceptados: [OBRAS_SOCIALES]
Horarios: [HORARIOS]

Reglas:
- Nunca prometer resultados de tratamiento ni usar lenguaje de cura garantizada.
- Las credenciales siempre reales y verificables — si falta un dato, dejar [FALTA: matrícula real].`,
    },
    {
      type: "animation",
      title: "Prompt de Animaciones",
      description: "Movimiento mínimo, coherente con el tono calmo de salud.",
      content: `Sumá esta animación a Vital:
1. Fade-up muy sutil (12px, 400ms) al entrar cada sección en viewport, una sola vez.
No agregues nada más: sin pulsos en el CTA, sin efectos llamativos — el tono de salud pide calma visual, no urgencia fabricada.`,
    },
    {
      type: "seo",
      title: "Prompt SEO",
      description: "Schema.org de salud con datos reales, clave para aparecer en búsquedas locales.",
      content: `Optimizá el SEO de [PRACTICE_NAME]:
1. Title: "[PRACTICE_NAME] — [ESPECIALIDAD] en [CIUDAD]".
2. JSON-LD Schema.org MedicalBusiness o Physician con address, medicalSpecialty y openingHours.
3. Meta description con la especialidad + ubicación.
4. Open Graph con foto real del profesional/consultorio si existe.`,
    },
    {
      type: "responsive",
      title: "Prompt Responsive",
      description: "El turno tiene que sacarse fácil incluso en mobile.",
      content: `Revisá el responsive de Vital en 375px, 390px, 430px, 768px, 1024px, 1440px:
1. CTA de "Sacar turno" sticky o siempre alcanzable en mobile.
2. Formulario de turnos con inputs de mínimo 44px de alto.
3. Las cards de servicio y credenciales en una columna en mobile, sin perder legibilidad.
4. Verificar contraste alto en todos los tamaños — crítico para accesibilidad en salud.`,
    },
  ],
};
