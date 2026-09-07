// Auditoría + conversión de assets del template Dominio (inmobiliaria).
// Uso: node scripts/optimize-dominio-assets.mjs
// Convierte cada .jpg de public/templates/dominio a .webp, redimensionado a
// su ancho máximo real de uso, y lo deja en public/templates/inmobiliaria.
// No toca el original (público en /dominio) hasta que el código apunte a
// la carpeta nueva — correrlo primero, migrar el código después.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = "public/templates/dominio";
const OUT_DIR = "public/templates/inmobiliaria";

// Ancho máximo real de uso en la página (ver auditoría), no un número al azar.
const MAX_WIDTH = {
  "hero-villa.jpg": 2400, // hero 100vw + cover
  "fachada-bosque.jpg": 2400, // fondo full-bleed de la sección de marca
  "fachada-ibiza.jpg": 1400, // solo tile chico de la galería
  "bano.jpg": 1600,
  "cocina-oscura.jpg": 1400,
  "dormitorio-calido.jpg": 1600,
  "dormitorio-rojo.jpg": 1600,
  "alquiler-1.jpg": 1400,
  "alquiler-2.jpg": 1400,
  "alquiler-3.jpg": 1400,
  "temporario-1.jpg": 1400,
  "temporario-2.jpg": 1400,
  "temporario-3.jpg": 1400,
};

// No se usa en ningún lado (se reemplazó por alquiler-1/2/3 en una ronda
// anterior) — se audita pero no se convierte, queda para borrar.
const UNUSED = ["cocina-comedor.jpg"];

fs.mkdirSync(OUT_DIR, { recursive: true });

const rows = [];
const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".jpg"));

for (const file of files) {
  const srcPath = path.join(SRC_DIR, file);
  const originalBytes = fs.statSync(srcPath).size;
  const meta = await sharp(srcPath).metadata();

  if (UNUSED.includes(file)) {
    rows.push({
      file,
      status: "sin usar — no convertido",
      originalKB: (originalBytes / 1024).toFixed(0),
      optimizedKB: "-",
      format: meta.format,
      dims: `${meta.width}x${meta.height}`,
      outDims: "-",
    });
    continue;
  }

  const maxWidth = MAX_WIDTH[file] ?? 1600;
  const outName = file.replace(/\.jpg$/, ".webp");
  const outPath = path.join(OUT_DIR, outName);

  const pipeline = sharp(srcPath).resize({
    width: maxWidth,
    withoutEnlargement: true,
  });
  const outBuffer = await pipeline.webp({ quality: 82 }).toBuffer();
  fs.writeFileSync(outPath, outBuffer);
  const outMeta = await sharp(outBuffer).metadata();

  rows.push({
    file: outName,
    status: "ok",
    originalKB: (originalBytes / 1024).toFixed(0),
    optimizedKB: (outBuffer.length / 1024).toFixed(0),
    format: "webp",
    dims: `${meta.width}x${meta.height}`,
    outDims: `${outMeta.width}x${outMeta.height}`,
  });
}

console.table(rows);

const totalOriginal = rows.reduce((a, r) => a + (parseFloat(r.originalKB) || 0), 0);
const totalOptimized = rows.reduce((a, r) => a + (parseFloat(r.optimizedKB) || 0), 0);
console.log(
  `\nTotal original: ${(totalOriginal / 1024).toFixed(2)} MB → optimizado: ${(totalOptimized / 1024).toFixed(2)} MB`
);
