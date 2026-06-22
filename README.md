# Sitio web — Mugan Academia Taekwon-Do ITF

Sitio estático (Vite + React) listo para Netlify, recreado pixel-perfect desde el
prototipo de `design_handoff_sitio_mugan/` (que se conserva solo como referencia
de diseño — no se sirve en producción).

## Editar contenidos

**Edita únicamente [`public/js/mugan-data.js`](public/js/mugan-data.js).** Ahí viven
textos, horarios, precios, IDs de YouTube, rutas de mp3/mp4/PDF, noticias y fotos.
Los campos pendientes están marcados con `✏️ REEMPLAZAR`; un campo vacío (`""`)
muestra un placeholder elegante, nada se rompe.

Los archivos van en las carpetas de `public/` y se copian tal cual al build:

| Carpeta | Contenido |
|---|---|
| `public/img/` | fotos y logo (`img/nombre.jpg` en mugan-data.js) |
| `public/audio/` | mp3 de terminología (`audio/nombre.mp3`) |
| `public/video/` | `hero.mp4` (10–15 s comprimido) y mp4 locales |
| `public/tutoriales/` | un HTML por cinturón (`tutoriales/nombre.html`) — la materia por cinturón |

La videoteca pesada va en **YouTube no listado** (solo se pega el ID en
mugan-data.js). No usar Google Drive.

## Desarrollo y build

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # previsualizar dist/ en http://localhost:4173
```

Antes de cada `dev`/`build`, `scripts/make-webp.mjs` genera automáticamente una
variante `.webp` de cada foto jpg/jpeg de `public/img/` (solo basta subir el jpg).
El sitio detecta soporte WebP en el navegador y sirve la variante liviana, con
fallback al jpg original.

## Deploy en Netlify

`netlify.toml` ya define todo: comando `npm run build`, carpeta `dist`.
Basta conectar el repo (o arrastrar `dist/` al panel de Netlify).

## Diferencias técnicas con el prototipo

- **JSX precompilado** con Vite — sin Babel standalone ni React por CDN.
- **`js/tweaks-panel.jsx` eliminado** (era solo del prototipo); los valores
  elegidos quedaron como defaults de `src/mugan.css`.
- **Materia por cinturón en HTML**: la pestaña "Tutoriales" de la Zona Alumnos
  embebe (vía `<iframe>`) un archivo HTML por cinturón desde `public/tutoriales/`.
  Plantilla de referencia: `public/tutoriales/ejemplo-tutorial.html`.
- **Fotos en WebP con fallback** + `loading="lazy"` fuera del hero.
- Open Graph básico agregado en `index.html`.

## Estructura

- `index.html` — entrada (fuentes, SEO, carga de mugan-data.js y el bundle).
- `src/mugan.css` — todos los estilos y tokens de marca.
- `src/mugan-ui.jsx` — Reveal, Btn (ripple), Icon, Navbar, Hero (parallax), Quiénes somos, Instructores (tilt 3D), Horarios.
- `src/mugan-zona.jsx` — Zona Alumnos: cinturones, pestañas Tules/Videos/Audios/Tutoriales (HTML embebido).
- `src/mugan-app.jsx` — Muro social, Galería (lightbox), Contacto, Footer, botón WhatsApp, App.
- `src/webp.js` — detección de soporte WebP y resolución de rutas de fotos.
- `design_handoff_sitio_mugan/CLAUDE.md` — sistema de diseño Mugan para páginas futuras.
