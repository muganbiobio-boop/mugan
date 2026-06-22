/* Genera variantes .webp de todas las fotos jpg/jpeg/png de public/img
   (incluidas subcarpetas como /img/galeria), excepto el logo, que se
   mantiene PNG nítido con transparencia.
   Corre antes de dev/build (predev/prebuild), también en Netlify.
   El runtime (src/webp.js) sirve la .webp solo si el navegador la soporta. */
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const IMG_DIR = new URL("../public/img/", import.meta.url).pathname;
// El logo se sirve siempre como PNG (transparencia + nitidez), no se convierte.
const SKIP = new Set(["logo-mugan.png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    if (SKIP.has(entry.name)) continue;
    if (!/\.(jpe?g|png)$/i.test(extname(entry.name))) continue;
    const out = full.replace(/\.(jpe?g|png)$/i, ".webp");
    const srcStat = await stat(full);
    const outStat = await stat(out).catch(() => null);
    if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) continue; // ya está al día
    await sharp(full).webp({ quality: 82 }).toFile(out);
  }
}

await walk(IMG_DIR);
console.log("WebP al día (public/img y subcarpetas).");
