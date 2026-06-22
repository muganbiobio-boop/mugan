/* ============================================================
   MUGAN — Soporte WebP
   scripts/make-webp.mjs genera una .webp por cada foto jpg/jpeg
   de public/img. Aquí se detecta (una sola vez, antes de montar
   la app) si el navegador soporta WebP; si es así, img() entrega
   la variante .webp y si no, la foto original (fallback).
   ============================================================ */

let supported = false;

export function detectWebp() {
  return new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => {
      supported = probe.width > 0;
      resolve(supported);
    };
    probe.onerror = () => {
      supported = false;
      resolve(false);
    };
    // WebP lossy de 1×1 px
    probe.src =
      "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
  });
}

// Devuelve la ruta .webp para fotos jpg/jpeg/png cuando hay soporte.
// El logo (logo-mugan.png) NO se enruta por aquí, así que se sirve PNG
// nítido. SVG se sirve tal cual. Si el navegador no soporta WebP, se
// devuelve el archivo original (fallback).
export function img(src) {
  if (supported && /\.(jpe?g|png)$/i.test(src)) return src.replace(/\.(jpe?g|png)$/i, ".webp");
  return src;
}
