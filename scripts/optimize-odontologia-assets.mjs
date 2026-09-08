// Auditoría + conversión de assets del template Odontología (rubro #3).
// Uso: node scripts/optimize-odontologia-assets.mjs
// Lee de raw-fotos/odontologia (fuera de git, carpeta de trabajo) y escribe
// en public/templates/odontologia — mismo patrón que optimize-dominio-assets.mjs.
//
// Dos fotos necesitaron recorte ANTES de convertir, no solo resize:
// - "IMAGEN HERO.jpg" traía el logo "Mentha Dent" pisado en la esquina
//   inferior — se recorta esa franja (queda igual de cuadrada, el logo cae
//   fuera del cuadro).
// - "ANTES Y DESPUES SONRISA.jpg" era en realidad una pieza publicitaria
//   completa de OTRA clínica real ("Equilibrio Dental & Facial", con su
//   logo y su propio call-to-action superpuestos) — se recorta a la boca +
//   el efecto de hoja pelándose, que es la única parte reutilizable sin
//   mostrar la marca de un tercero.
// - Los dos retratos de equipo ("ODONTOLOGA MUJER" / "ODONTOLOGO HOMBRE")
//   son fotos reales de profesionales reales, con su nombre y (en el caso
//   del hombre) el logo de una clínica real bordado en la ropa. Se recorta
//   a busto/rostro, fuera del área del bordado — se usan como retrato
//   genérico, igual que cualquier foto de stock de una persona, sin exponer
//   la identidad de marca de ninguna clínica ajena.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = "raw-fotos/odontologia";
const OUT_DIR = "public/templates/odontologia";

fs.mkdirSync(OUT_DIR, { recursive: true });

// file: nombre de salida (sin extensión)
// width: ancho máximo real de uso, con margen para pantallas retina (2x) —
// auditoría del 8/9 sobre el `sizes` real de cada <Image> en page.tsx,
// OdontologiaGallery.tsx y content.ts. No es "achicar todo": las que ya
// estaban justas quedan igual, las que sobraban bajan, y las dos fotos de
// equipo SUBEN porque 700px salía borroso en la tarjeta de retrato a 2x.
// crop: { left, top, width, height } opcional, ANTES de convertir/resize
const JOBS = [
  {
    // Hero, prioridad de carga. El recorte (864px) ya es el techo real de
    // la foto — pedirle más de acá arriba solo la agrandaría sin nitidez.
    file: "IMAGEN HERO.jpg",
    out: "hero-sonrisa",
    width: 1000,
    crop: { left: 0, top: 0, width: 864, height: 940 },
  },
  {
    // Antes/después: tarjeta max-w-sm (384px) → 768px a 2x.
    file: "ANTES Y DESPUES SONRISA.jpg",
    out: "antes-despues",
    width: 800,
    crop: { left: 0, top: 260, width: 1080, height: 900 },
  },
  {
    // Retrato de equipo, tarjeta ~50% de max-w-5xl → ~1024px a 2x. Antes
    // 700px quedaba corta (se veía blanda en pantallas retina).
    file: "ODONTOLOGA MUJER.jpg",
    out: "equipo-dra",
    width: 1100,
    crop: { left: 250, top: 250, width: 2200, height: 2200 },
  },
  {
    file: "ODONTOLOGO HOMBRE.jpg",
    out: "equipo-dr",
    width: 1100,
    crop: { left: 1150, top: 1650, width: 1800, height: 1350 },
  },
  // Card de Implantes (25vw) + tile de galería (33vw): 900 cubre las dos a 2x.
  { file: "IMPLANTE DENTAL 02.jpg", out: "implante-corona", width: 900 },
  // Carrusel de Tecnología (tarjeta fija 340px) + tile de galería: 800 alcanza a 2x.
  { file: "IMPLANTE DENTAL.jpg", out: "tech-diagnostico-digital", width: 800 },
  // Solo carrusel de Tecnología (340px) — antes 1000, sobraba.
  { file: "TECNOLOGIA DENTAL 02.jpg", out: "tech-radiografia", width: 800 },
  // Ídem — este era el archivo más pesado (150 KB) sirviendo una tarjeta de 340px.
  { file: "TECNOLOGIA DENTAL 01.jpg", out: "tech-sala", width: 800 },
  { file: "ORTODONCIA 01.jpg", out: "ortodoncia-brackets", width: 900 },
  { file: "ORTODONCIA 02.jpg", out: "general-control", width: 900 },
  { file: "ESTETICA DENTAL 01.jpg", out: "estetica-guia-color", width: 900 },
  { file: "ESTETICA DENTAL 02.jpg", out: "moldes-yeso", width: 900 },
  // Solo tile chico de galería (33vw) → 850 a 2x.
  { file: "CLINICA ODONTOLOGICA.jpg", out: "clinica-detalle", width: 850 },
  // Tile GRANDE (2x2) de la galería + vista de lightbox (hasta max-w-3xl a 2x) — la única que se queda arriba de 1000.
  { file: "CLINICA ODONTOLOGICA 02.jpg", out: "clinica-sala", width: 1400 },
  { file: "EQUIPO ODONTOLOGIA.jpg", out: "equipo-procedimiento", width: 850 },
  { file: "odontologo equipo 01.jpg", out: "equipo-cirugia", width: 850 },
  { file: "historia clinica digital.jpg", out: "tech-historia-clinica", width: 800 },
  { file: "fotografia clinica digital.jpg", out: "tech-fotografia-clinica", width: 800 },
];

const rows = [];

for (const job of JOBS) {
  const srcPath = path.join(SRC_DIR, job.file);
  const originalBytes = fs.statSync(srcPath).size;
  const meta = await sharp(srcPath).metadata();

  let pipeline = sharp(srcPath);
  if (job.crop) pipeline = pipeline.extract(job.crop);
  pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });

  const outBuffer = await pipeline.webp({ quality: 82 }).toBuffer();
  const outPath = path.join(OUT_DIR, `${job.out}.webp`);
  fs.writeFileSync(outPath, outBuffer);
  const outMeta = await sharp(outBuffer).metadata();

  rows.push({
    file: job.file,
    out: `${job.out}.webp`,
    originalKB: (originalBytes / 1024).toFixed(0),
    optimizedKB: (outBuffer.length / 1024).toFixed(0),
    srcDims: `${meta.width}x${meta.height}`,
    cropped: job.crop ? "sí" : "-",
    outDims: `${outMeta.width}x${outMeta.height}`,
  });
}

console.table(rows);

const totalOriginal = rows.reduce((a, r) => a + parseFloat(r.originalKB), 0);
const totalOptimized = rows.reduce((a, r) => a + parseFloat(r.optimizedKB), 0);
console.log(
  `\nTotal original: ${(totalOriginal / 1024).toFixed(2)} MB → optimizado: ${(totalOptimized / 1024).toFixed(2)} MB (${rows.length} archivos)`
);
