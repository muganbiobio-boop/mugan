# Handoff: Sitio web Mugan Academia Taekwon-Do ITF

## Overview
Sitio single-page para **Mugan Academia Taekwon-Do ITF** (Concepción, Chile), pensado para desplegarse como archivos estáticos en **Netlify**. Incluye: hero cinematográfico con parallax, presentación + valores ITF, instructores, horarios y planes con conversión vía WhatsApp, **Zona Alumnos** con materia por cinturón (tules, videos, audios, PDFs con visor integrado), muro social, noticias, galería con lightbox, mapa y footer.

## About the Design Files
Los archivos de este paquete son **referencias de diseño creadas en HTML** — un prototipo funcional que muestra el look & feel y el comportamiento esperado, no código de producción para copiar tal cual. La tarea es **recrear este diseño en el entorno final**. Recomendación para este proyecto (no existe codebase previa): **mantenerlo como sitio estático** — Vite + React (build estático) o incluso los mismos archivos refactorizados con JSX precompilado. Requisitos duros del cliente:
- Hosting 100% estático en Netlify (sin backend).
- Babel standalone del prototipo debe reemplazarse por **build precompilado** en producción.
- La videoteca pesada vive en **YouTube no listado**; mp3/PDF/fotos/video-hero en el propio Netlify (`/audio`, `/pdfs`, `/img`, `/video`). **No usar Google Drive.**

## Fidelity
**High-fidelity (hifi).** Colores, tipografía, espaciados e interacciones son finales. Recrear pixel-perfect.

## Screens / Views
Una sola página con anclas (`#inicio`, `#academia`, `#instructores`, `#horarios`, `#zona-alumnos`, `#noticias`, `#galeria`, `#contacto`).

### 1. Navbar (fija)
- Transparente sobre el hero; al hacer scroll >40px pasa a `rgba(10,10,10,0.92)` + `backdrop-filter: blur(12px)` + sombra, padding reducido (14px→8px).
- Logo 46px + wordmark "MUGAN ITF" (ITF en naranjo). Links en Barlow Condensed 600, 15px, uppercase, letter-spacing 0.1em, subrayado naranjo animado (scaleX) al hover.
- Móvil (≤880px): menú hamburguesa de pantalla completa, links a 26px.

### 2. Hero (100svh)
- Capa de medios con parallax: fondo se traslada `scrollY * 0.38`, contenido `scrollY * 0.16` y pierde opacidad (`1 − progreso*1.4`); el degradado oscurece progresivamente hasta fundirse con `#0A0A0A`.
- Video `video/hero.mp4` (autoplay/muted/loop/playsinline); si no existe, fallback de foto con Ken Burns (scale 1→1.12, 18s alternate).
- Contenido centrado: logo (clamp 120–190px, drop-shadow naranjo), H1 dos líneas "MUGAN / TAEKWON-DO ITF" (línea 2 naranja, clamp 52–110px), lema, 2 CTAs: "Conoce la Academia" (primario) y "Zona Alumnos" (ghost). Hint "DESLIZA" con animación bob.

### 3. Quiénes somos (`#academia`)
- Kicker + título "LA ACADEMIA *MUGAN*". Grid 2 col (texto + foto 16/10 redondeada).
- 5 tarjetas de valores (grid auto-fit minmax 190px): número fantasma 54px al 5% blanco, nombre coreano en naranjo 13px ls 0.18em, título 22px condensed, descripción 14.5px gris.

### 4. Instructores (fondo `--surface`)
- Tarjetas con **tilt 3D** al mover el mouse (rotateX/Y ±10° desde el centro, translateZ 6px; reset al salir). Foto 4/4.6 con degradado inferior, nombre 24px condensed, chip de grado (borde naranjo 40%), rol naranjo, bio gris.

### 5. Horarios y planes (`#horarios`)
- Fila 1: tarjetas por categoría (Infantil/Juvenil/Adultos) con edades en naranjo y filas día/hora con borde punteado.
- Fila 2: planes con precio display 38px; plan destacado con borde+glow naranjo y badge "POPULAR". Cada plan: botón WhatsApp verde `#1fb355` con mensaje precargado (`https://wa.me/<num>?text=...`).

### 6. Zona Alumnos (`#zona-alumnos`)
- **Franja de cinturones** scrolleable: 13 botones (10° Gup → III Dan). Cada cinturón se dibuja con su color real, nudo central oscuro skewX(-12°), punta de color cuando corresponde (16px a la derecha) y numeral romano dorado `#E8B64C` para Danes. Activo: anillo naranjo + glow + fondo `--naranjo-suave`.
- **Módulo del cinturón**: encabezado con título/significado + **barra de progreso** "Camino al cinturón negro" (fill degradado naranjo, transición 0.8s).
- **Pestañas** (Tules / Videos / Audios / PDF), subrayado naranjo con glow:
  - **Tules:** grid 1fr/1.2fr — diagrama (imagen o placeholder punteado con SVG) + nombre 30px, nº de movimientos en naranjo, significado en blockquote con borde naranjo, embed YouTube (`youtube-nocookie.com/embed/<id>`) si hay ID.
  - **Videos:** player 16/9 arriba (iframe YouTube, `<video>` mp4 local, o placeholder con botón play naranjo) + grid de miniaturas (thumbnail `i.ytimg.com/vi/<id>/hqdefault.jpg`).
  - **Audios:** lista de pistas con botón circular play/pause (borde naranjo → relleno al reproducir), un solo `<audio>` compartido; si el mp3 no existe muestra aviso inline sin romperse.
  - **PDF:** visor **PDF.js 3.11.174** en canvas: paginación ‹ ›, zoom −/+ (0.6–3.0), indicador "página / total", chips para múltiples documentos y botón naranjo "Descargar PDF" (atributo `download`). Carga desde `/pdfs/...` local. Probado con `pdfs/ejemplo-tutorial.pdf` (3 páginas).

### 7. Muro social + Noticias (`#noticias`, fondo `--surface`)
- 3 "ventanas" (Instagram/TikTok/YouTube): cabecera con ícono naranjo + usuario; cuerpo = embed oficial (`embedHtml` pegado por el cliente) o placeholder con link al perfil. YouTube usa iframe directo con `youtubeId`.
- Noticias: tarjetas con foto 16/9, fecha naranja uppercase, título condensed 22px, texto corto. Editables en data.js.

### 8. Galería (`#galeria`)
- Mosaico grid auto-fill minmax 220px, filas 200px, cada 4ª celda ocupa 2 filas. Hover scale 1.025 + glow. Click → **lightbox** (overlay `rgba(0,0,0,0.92)`, img max 92vw/86vh, cierre por click, botón × o Escape).

### 9. Ubicación y contacto (`#contacto`)
- Grid 1.2fr/1fr: iframe Google Maps (filtro grayscale 0.9 → color al hover) + tarjeta con dirección/teléfono/email (íconos en chips naranjos 42px) y botón WhatsApp.
- **Botón flotante WhatsApp** fijo (58px, verde, pulso de anillo cada 2.6s) visible en todo el sitio.

### 10. Footer
- Fondo `#070707`, logo 60px, links uppercase condensed, íconos sociales circulares (hover: fondo naranjo, texto negro, levitan 3px + glow), copyright centrado.

## Interactions & Behavior
- **Reveal por scroll:** elementos `.reveal` entran con fade + translateY(34px), 0.7s `cubic-bezier(0.22,1,0.36,1)`, escalonado con delays 0.08–0.32s (IntersectionObserver, threshold 0.12, una sola vez). Con `prefers-reduced-motion: reduce` se desactiva todo.
- **Botones:** hover scale 1.045, active 0.98; glow naranjo (`box-shadow 0 0 24px rgba(255,107,0,0.45)`, +0.2 al hover); **ripple** blanco al click (span inyectado, animación 0.55s).
- Parallax del hero vía `requestAnimationFrame` sobre `scroll` (passive).
- Navegación por anclas con `scroll-behavior: smooth`.
- Estados de error tolerantes: video hero ausente → foto; mp3 ausente → aviso; PDF ausente → mensaje; campos `""` → placeholders.

## State Management
- React 18 (en producción puede ser vanilla o React compilado): `beltIdx` + `tab` (Zona Alumnos), `sel` (video activo), `playing/error` (audio), `page/numPages/scale/status/docIdx` (PDF), `solid/open` (navbar), `lightbox` (galería).
- Sin persistencia ni backend. Todo el contenido viene de `window.MUGAN` (`js/mugan-data.js`).

## Design Tokens
- Colores: `#0A0A0A` fondo · `#1A1A1A` surface · `#242424` surface-2 · `#FF6B00` naranjo · `rgba(255,255,255,0.08)` líneas · texto `#FFFFFF / #B8B8B8 / #7a7a7a` · WhatsApp `#1fb355` · dorado Dan `#E8B64C`.
- Cinturones: blanco `#f4f4f4`, amarillo `#FFD400`, verde `#1C9C45`, azul `#1769FF`, rojo `#E11D2E`, negro `#111111`.
- Tipografía: Barlow Condensed 800 títulos (clamp 38–64px secciones, 52–110px hero), Barlow 400–700 cuerpo 17px. Google Fonts.
- Radios: 14px tarjetas, 10px internos, 4px botones (con clip-path paralelogramo 8px). Secciones: `clamp(72px, 10vw, 130px)` vertical. Contenedor 1180px.

## Assets
- `img/logo-mugan.png` — logo oficial (provisto por el cliente).
- `img/entrenamiento-instructor.jpg`, `img/entrenamiento-paletas.jpg`, `img/clase-teoria.jpg` — fotos reales provistas (optimizar a WebP en producción).
- `pdfs/ejemplo-tutorial.pdf` — PDF de prueba del visor (reemplazar).
- Pendientes del cliente: `video/hero.mp4` (10–15s comprimido), mp3 de terminología (`/audio`), PDFs reales (`/pdfs`), diagramas de tules, retratos de instructores, IDs de YouTube no listados, número de WhatsApp, dirección, precios y horarios reales (todos marcados con `✏️ REEMPLAZAR` en `js/mugan-data.js`).

## Files
- `Mugan Academia.html` — entrada (carga fuentes, React, PDF.js y scripts).
- `css/mugan.css` — todos los estilos y tokens.
- `js/mugan-data.js` — **contenido editable** (la estructura de datos que pidió el cliente).
- `js/mugan-ui.jsx` — Navbar, Hero, Quiénes somos, Instructores, Horarios + helpers (Reveal, Btn, Icon).
- `js/mugan-zona.jsx` — Zona Alumnos completa (cinturones, pestañas, visor PDF).
- `js/mugan-app.jsx` — Muro social, Galería, Contacto, Footer, App.
- `js/tweaks-panel.jsx` — panel de ajustes del prototipo (NO llevar a producción).
- `CLAUDE.md` (raíz del proyecto) — skill/sistema de diseño Mugan para futuras páginas.

## Notas de implementación para Claude Code
1. Precompilar JSX (Vite/esbuild) — eliminar Babel standalone.
2. Convertir fotos a WebP con fallback (`<picture>`) y `loading="lazy"` fuera del hero.
3. Mantener PDF.js con worker correcto para iOS/Android (ya configurado con CDN 3.11.174; ideal: servirlo localmente).
4. Netlify: publicar carpeta build; `/audio`, `/pdfs`, `/video`, `/img` como assets estáticos copiados tal cual.
5. SEO básico: meta description ya incluida; agregar Open Graph con el logo.
