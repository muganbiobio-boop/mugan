# Skill: Diseño web Mugan Academia Taekwon-Do ITF

> Instrucciones persistentes para CUALQUIER página o material futuro de Mugan.
> Seguir este sistema visual al pie de la letra — es la identidad de la marca.

## Marca
- **Nombre:** Mugan Academia Taekwon-Do ITF (Mugan Bío Bío) — sedes en Concepción y Talcahuano, Chile.
- **Logo:** `img/logo-mugan.png` (zorro naranjo sobre círculo negro, montañas azules, texto coreano amarillo).
- **Tono:** cinematográfico, oscuro, alto contraste, marcial y deportivo. Idioma: español de Chile. Sin emojis en la UI (solo en mensajes de WhatsApp).

## Paleta (tokens CSS en `css/mugan.css`)
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0A0A0A` | fondo principal |
| `--surface` | `#1A1A1A` | tarjetas / secciones alternas |
| `--surface-2` | `#242424` | superficies internas |
| `--naranjo` | `#FF6B00` | acento institucional (glow, CTAs, kickers) |
| `--txt` / `--txt-2` / `--txt-3` | `#FFF` / `#B8B8B8` / `#7a7a7a` | jerarquía de texto |
| `--glow-alpha` | `0.45` | intensidad del glow naranjo |

Verde WhatsApp: `#1fb355`. Nunca usar otros colores de acento.

## Tipografía
- **Títulos:** Barlow Condensed 800, MAYÚSCULAS, line-height 0.95 (`--font-display`). Alternativas aprobadas: Khand, Staatliches.
- **Cuerpo:** Barlow 400–700 (`--font-body`), 17px base.
- Kickers de sección: 14px, letter-spacing 0.28em, naranjo, con trazo diagonal `skewX(-30deg)` antes.

## Lenguaje visual
- Trazos diagonales naranjos (skew -30°) como detalle de "energía/movimiento".
- **Trama coreana de fondo:** `img/trama-hangul.svg` (principios ITF en hangul — 예의, 염치, 인내, 극기, 백절불굴, 태권도, 무간 — blanco al 4.5%) aplicada en `body`, `.sec-alt` y `.za-bg` como patrón repetido de 480px. Usarla en toda página nueva.
- Los principios siempre se muestran con su hangul visible (campo `hangul` en `valores`).
- Botones con `clip-path` en paralelogramo, glow naranjo, escala 1.045 al hover, ripple al click.
- Tarjetas `--surface` con borde `rgba(255,255,255,0.08)`, barra naranja diagonal arriba-izquierda, hover con elevación + glow.
- Animaciones de entrada por scroll: clase `.reveal` (+`.reveal-d1..d4` para escalonar), IntersectionObserver agrega `.in`. Respetar `prefers-reduced-motion`.
- Navbar fija: transparente arriba → negra sólida con blur al hacer scroll (>40px).
- Divisores `.diag-divider` entre grupos de secciones.
- Cinturones ITF: renderizar con color real + punta (`BeltVisual` en `js/mugan-zona.jsx`), nudo central oscuro, número romano dorado para Danes.

## Arquitectura del sitio actual
- `Mugan Academia.html` — entrada; carga React 18.3.1 + Babel standalone + PDF.js 3.11.174.
- `js/mugan-data.js` — **ÚNICA fuente de contenido** (window.MUGAN): config, valores, instructores, horarios, planes, cinturones (tules/videos/audios/pdfs), social, noticias, galería. Campos vacíos `""` ⇒ placeholder elegante, nada se rompe.
- `js/mugan-ui.jsx` — Reveal, Btn (ripple), Icon, Navbar, Hero (parallax), QuienesSomos, Instructores (tilt 3D), Horarios.
- `js/mugan-zona.jsx` — ZonaAlumnos: franja de cinturones, pestañas Tules/Videos/Audios/PDF, visor PDF.js con zoom y paginación.
- `js/mugan-app.jsx` — MuroSocial, Galeria (lightbox), Contacto, Footer, WspFloat, App + Tweaks.
- Carpetas de assets: `/img`, `/video`, `/audio`, `/pdfs` (todo estático, pensado para Netlify; videoteca grande en YouTube no listado).

## Reglas para páginas futuras
1. Reutilizar `css/mugan.css` y los componentes existentes antes de crear nuevos.
2. Mobile-first: la mayoría de los alumnos entra por celular; hit targets ≥44px.
3. Todo contenido editable va a `js/mugan-data.js` (o un data.js equivalente), nunca hardcodeado en componentes, con comentarios `✏️ REEMPLAZAR`.
4. WhatsApp como canal principal de conversión (botón flotante siempre visible).
5. No usar Google Drive ni servicios externos para servir archivos; todo en el propio hosting salvo videos (YouTube no listado).
