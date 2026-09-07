/**
 * Datos de ejemplo (ficticios) para la preview del template Dominio.
 * Las fotos son reales (a diferencia de los otros 19 templates, que usan
 * divs de color): este es el flagship inmobiliario, la fotografía real es
 * parte de lo que se vende. Ubicaciones y precios son de ejemplo.
 */
export type Operation = "Venta" | "Alquiler" | "Temporario";

export interface Property {
  slug: string;
  title: string;
  operation: Operation;
  location: string;
  /** Dirección exacta para el mapa (ficha de propiedad). Opcional: si no se
   * carga, el mapa busca por `location`, que ya alcanza para ubicar el barrio. */
  address?: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  cover: string;
  images: { src: string; alt: string; orientation: "landscape" | "portrait" }[];
  description: string;
  amenities: string[];
  year: number;
}

export const PROPERTIES: Property[] = [
  {
    slug: "villa-cerro-de-las-rosas",
    title: "Villa con parque y pileta infinita",
    operation: "Venta",
    location: "Cerro de las Rosas, Córdoba",
    address: "Av. Rafael Núñez 4500, Cerro de las Rosas, Córdoba, Argentina",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 3,
    area: 420,
    price: "desde USD 480.000",
    cover: "/templates/inmobiliaria/hero-villa.webp",
    images: [
      { src: "/templates/inmobiliaria/hero-villa.webp", alt: "Fachada de noche con pileta infinita y cascada", orientation: "landscape" },
      { src: "/templates/inmobiliaria/cocina-oscura.webp", alt: "Cocina en madera oscura con isla y mesada de mármol", orientation: "landscape" },
      { src: "/templates/inmobiliaria/dormitorio-calido.webp", alt: "Dormitorio principal con paneles de madera y luz cálida", orientation: "landscape" },
      { src: "/templates/inmobiliaria/bano.webp", alt: "Baño en suite con ducha de piedra y madera", orientation: "portrait" },
    ],
    description:
      "Una villa de dos plantas orientada al norte, con parque propio, pileta infinita y una cascada que separa el living exterior del jardín. Cocina en madera y mármol integrada al comedor, cuatro dormitorios con placard empotrado y suite principal con vestidor.",
    amenities: ["Pileta infinita", "Parque propio", "Cochera cubierta x2", "Aire acondicionado central", "Seguridad 24hs"],
    year: 2019,
  },
  {
    slug: "departamento-nueva-cordoba",
    title: "Departamento luminoso con living integrado",
    operation: "Alquiler",
    location: "Nueva Córdoba, Córdoba",
    type: "Departamento",
    bedrooms: 2,
    bathrooms: 1,
    area: 62,
    price: "desde $420.000/mes",
    cover: "/templates/inmobiliaria/alquiler-1.webp",
    images: [
      { src: "/templates/inmobiliaria/alquiler-1.webp", alt: "Living comedor integrado a la cocina, con sillón y mesa redonda de madera", orientation: "landscape" },
      { src: "/templates/inmobiliaria/alquiler-2.webp", alt: "Cocina en tonos claros con isla y bacha de desayunador", orientation: "landscape" },
      { src: "/templates/inmobiliaria/alquiler-3.webp", alt: "Baño con espejo circular retroiluminado y mesada de mármol", orientation: "landscape" },
    ],
    description:
      "Dos ambientes a nuevo en el corazón de Nueva Córdoba, a media cuadra de la peatonal. Living comedor integrado a la cocina con isla y desayunador, y baño completo con mesada de mármol. Ideal para pareja o profesional que trabaja en el centro.",
    amenities: ["Balcón", "Cochera opcional", "Apto crédito", "A nuevo"],
    year: 2024,
  },
  {
    slug: "chalet-mendiolaza",
    title: "Chalet de piedra y madera en barrio cerrado",
    operation: "Venta",
    location: "Mendiolaza, Córdoba",
    type: "Chalet",
    bedrooms: 3,
    bathrooms: 2,
    area: 310,
    price: "desde USD 310.000",
    cover: "/templates/inmobiliaria/fachada-bosque.webp",
    images: [
      { src: "/templates/inmobiliaria/fachada-bosque.webp", alt: "Fachada de piedra, madera y ladrillo entre pinos", orientation: "landscape" },
      { src: "/templates/inmobiliaria/dormitorio-calido.webp", alt: "Dormitorio con paneles de madera y luz cálida", orientation: "landscape" },
      { src: "/templates/inmobiliaria/cocina-oscura.webp", alt: "Cocina en madera oscura con isla", orientation: "landscape" },
    ],
    description:
      "Chalet de una planta en barrio cerrado sobre las sierras, rodeado de pinos centenarios. Living con hogar a leña, cocina separada con isla y tres dormitorios con vista al bosque. Terreno de 1200 m² con césped natural.",
    amenities: ["Barrio cerrado", "Hogar a leña", "Terreno 1200 m²", "Seguridad perimetral"],
    year: 2016,
  },
  {
    slug: "loft-guemes-temporario",
    title: "Departamento de diseño para estadías cortas",
    operation: "Temporario",
    location: "Güemes, Córdoba",
    type: "Departamento",
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    price: "desde $38.000/noche",
    cover: "/templates/inmobiliaria/temporario-1.webp",
    images: [
      { src: "/templates/inmobiliaria/temporario-1.webp", alt: "Living comedor con cocina a la vista e isla en tono azul", orientation: "landscape" },
      { src: "/templates/inmobiliaria/temporario-2.webp", alt: "Baño con ducha de mármol, espejo circular y grifería negra", orientation: "landscape" },
      { src: "/templates/inmobiliaria/temporario-3.webp", alt: "Dormitorio con veladores colgantes y arte sobre la costa", orientation: "landscape" },
    ],
    description:
      "Departamento de líneas cálidas en Güemes, a metros de los bares y galerías del barrio. Disponible por noche o semana, con cocina totalmente equipada, living luminoso y dormitorio con cama queen. Check-in autónomo con caja de seguridad.",
    amenities: ["Wifi de alta velocidad", "Cocina equipada", "Check-in autónomo", "Ropa de cama incluida"],
    year: 2023,
  },
];

export function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug);
}
