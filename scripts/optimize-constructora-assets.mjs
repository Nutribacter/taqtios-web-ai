// Auditoría + conversión de assets del template Constructora (rubro #4).
// Uso: node scripts/optimize-constructora-assets.mjs
// Lee fotos de raw-fotos/constructora/ (nombres ya normalizados,
// sin espacios/acentos) y los posters de video (extraídos con ffmpeg, quedan
// sueltos en public/templates/constructora/ como poster-*.jpg) y escribe los
// .webp finales en public/templates/constructora/ — mismo patrón que
// optimize-odontologia-assets.mjs.
//
// Los 4 videos NO pasan por este script: se comprimieron aparte con ffmpeg
// (H.264 1080p, sin audio, +faststart) directo a public/templates/constructora/*.mp4
// porque sharp no procesa video.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const RAW_DIR = "raw-fotos/constructora";
const POSTER_DIR = "public/templates/constructora"; // los poster-*.jpg viven acá, sueltos
const OUT_DIR = "public/templates/constructora";

fs.mkdirSync(OUT_DIR, { recursive: true });

// width: ancho máximo real de uso (hero full-bleed, project card, tile de
// bento, etc.), con margen para retina 2x. Ver src/app/preview/constructora/content.ts
// para dónde se usa cada uno.
const JOBS = [
  { dir: RAW_DIR, file: "hero.jpg", out: "hero-poster", width: 2400 },
  { dir: RAW_DIR, file: "edificio-en-obra.jpg", out: "proyecto-edificio-obra", width: 1600 },
  { dir: RAW_DIR, file: "edificio-vidrio-negro.jpg", out: "proyecto-edificio-terminado", width: 1600 },
  { dir: RAW_DIR, file: "casa-madera-vidrio.jpg", out: "proyecto-casa-madera-vidrio", width: 1400 },
  { dir: RAW_DIR, file: "casa-pileta.jpg", out: "proyecto-casa-pileta", width: 1400 },
  { dir: RAW_DIR, file: "detalle-piedra.jpg", out: "material-piedra", width: 1100 },
  { dir: RAW_DIR, file: "grua-altura.jpg", out: "proceso-obra-grua", width: 1600 },
  { dir: RAW_DIR, file: "living-en-obra.png", out: "antes-obra", width: 1400 },
  { dir: RAW_DIR, file: "living-lujo.png", out: "despues-terminado", width: 1400 },
  { dir: RAW_DIR, file: "living-lujo-02.jpg", out: "bento-living", width: 1200 },
  { dir: RAW_DIR, file: "bano-lujo.png", out: "material-bano", width: 1000 },
  { dir: RAW_DIR, file: "cocina-lujo.png", out: "bento-cocina", width: 1200 },
  { dir: RAW_DIR, file: "oficina-minimalista.jpg", out: "equipo-oficina", width: 1400 },
  { dir: RAW_DIR, file: "planos.jpg", out: "proceso-planos", width: 1000 },
  { dir: POSTER_DIR, file: "poster-dron-edificio.jpg", out: "poster-dron-edificio", width: 1920 },
  { dir: POSTER_DIR, file: "poster-dron-casa-lujo.jpg", out: "poster-dron-casa-lujo", width: 1920 },
  { dir: POSTER_DIR, file: "poster-casa-interior-02.jpg", out: "poster-casa-interior-02", width: 1920 },
  { dir: POSTER_DIR, file: "poster-casa-lujo-03.jpg", out: "poster-casa-lujo-03", width: 1920 },
];

const rows = [];

for (const job of JOBS) {
  const srcPath = path.join(job.dir, job.file);
  const originalBytes = fs.statSync(srcPath).size;
  const meta = await sharp(srcPath).metadata();

  const outBuffer = await sharp(srcPath)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  const outPath = path.join(OUT_DIR, `${job.out}.webp`);
  fs.writeFileSync(outPath, outBuffer);
  const outMeta = await sharp(outBuffer).metadata();

  rows.push({
    file: job.file,
    out: `${job.out}.webp`,
    originalKB: (originalBytes / 1024).toFixed(0),
    optimizedKB: (outBuffer.length / 1024).toFixed(0),
    srcDims: `${meta.width}x${meta.height}`,
    outDims: `${outMeta.width}x${outMeta.height}`,
  });
}

console.table(rows);

const totalOriginal = rows.reduce((a, r) => a + parseFloat(r.originalKB), 0);
const totalOptimized = rows.reduce((a, r) => a + parseFloat(r.optimizedKB), 0);
console.log(
  `\nTotal original: ${(totalOriginal / 1024).toFixed(2)} MB → optimizado: ${(totalOptimized / 1024).toFixed(2)} MB (${rows.length} archivos)`
);
