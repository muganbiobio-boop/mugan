/* ============================================================
   MUGAN — Muro social, Galería, Contacto, Footer y App principal
   (el panel de Tweaks del prototipo quedó fuera de producción;
   los valores elegidos viven como defaults en css/mugan.css)
   ============================================================ */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Reveal, Btn, waLink, Icon, ytId, Navbar, Hero, QuienesSomos, Valores, Instructores, Horarios, Planes } from "./mugan-ui.jsx";
import { ZonaAlumnos } from "./mugan-zona.jsx";
import { img } from "./webp.js";

/* ---------- Muro social en vivo ---------- */
function SocialWindow({ tipo, titulo, usuario, url, embedHtml, youtubeId }) {
  return (
    <article className="social-win">
      <div className="social-win-head">
        <span className="ic">{Icon[tipo]}</span>
        {titulo}
        <a href={url} target="_blank" rel="noopener">
          {usuario} ↗
        </a>
      </div>
      <div className="social-embed">
        {embedHtml ? (
          <div style={{ width: "100%", height: "100%", overflow: "auto" }} dangerouslySetInnerHTML={{ __html: embedHtml }}></div>
        ) : youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${ytId(youtubeId)}`}
            title={`Último video de ${titulo}`}
            allowFullScreen
          ></iframe>
        ) : (
          <React.Fragment>
            <span style={{ width: "44px", height: "44px", color: "var(--naranjo)", opacity: 0.7 }}>{Icon[tipo]}</span>
            <span>
              Últimos posts de {titulo}
              <br />
              <small>✏️ pega el código de inserción oficial en mugan-data.js → social</small>
            </span>
            <a href={url} target="_blank" rel="noopener" style={{ color: "var(--naranjo)", fontWeight: 600, fontSize: "14px" }}>
              Ver perfil →
            </a>
          </React.Fragment>
        )}
      </div>
    </article>
  );
}

function MuroSocial() {
  const s = window.MUGAN.social;
  const r = window.MUGAN.config.redes;
  const muroFoto = s.muroFoto;
  return (
    <section id="noticias" data-screen-label="Comunidad — Muro en vivo" className="sec-alt">
      <div className="wrap">
        <div className={`muro-intro${muroFoto ? "" : " no-foto"}`}>
          <Reveal>
            <div className="sec-kicker">Comunidad</div>
            <h2 className="sec-title">
              Muro <em>en vivo</em>
            </h2>
            <p style={{ color: "var(--txt-2)", maxWidth: "560px" }}>
              Síguenos en redes y revisa lo último de la academia: clases, exámenes,
              torneos y la vida del dojang.
            </p>
          </Reveal>
          {muroFoto ? (
            <Reveal className="muro-foto" delay={1}>
              <img src={img(muroFoto)} alt="Comunidad Mugan" loading="lazy" />
            </Reveal>
          ) : null}
        </div>
        <div className="social-grid">
          <Reveal delay={1}>
            <SocialWindow tipo="instagram" titulo="Instagram" usuario={s.instagram.usuario} url={r.instagram} embedHtml={s.instagram.embedHtml} />
          </Reveal>
          <Reveal delay={2}>
            <SocialWindow tipo="tiktok" titulo="TikTok" usuario={s.tiktok.usuario} url={r.tiktok} embedHtml={s.tiktok.embedHtml} />
          </Reveal>
          <Reveal delay={3}>
            <SocialWindow tipo="youtube" titulo="YouTube" usuario={s.youtube.usuario} url={r.youtube} youtubeId={s.youtube.youtubeId} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Galería: carrusel horizontal + lightbox navegable ---------- */
function Galeria() {
  const fotos = window.MUGAN.galeria.filter((f) => f.src); // solo slots con imagen
  const [idx, setIdx] = useState(null); // índice activo en el lightbox (null = cerrado)
  const trackRef = useRef(null);

  const close = () => setIdx(null);
  const prev = useCallback(
    () => setIdx((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length)),
    [fotos.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i === null ? i : (i + 1) % fotos.length)),
    [fotos.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const scrollByDir = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="galeria" data-screen-label="Galería">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Galería</div>
          <h2 className="sec-title">
            El dojang <em>en acción</em>
          </h2>
        </Reveal>
      </div>

      <Reveal className="galeria-carrusel-wrap" delay={1}>
        <button className="car-nav prev" onClick={() => scrollByDir(-1)} aria-label="Anterior">‹</button>
        <div className="galeria-carrusel" ref={trackRef}>
          {fotos.map((f, i) => (
            <button
              key={i}
              className="galeria-slide"
              onClick={() => setIdx(i)}
              aria-label={`Ver foto ${i + 1}: ${f.alt}`}
            >
              <img src={img(f.src)} alt={f.alt} loading="lazy" />
            </button>
          ))}
        </div>
        <button className="car-nav next" onClick={() => scrollByDir(1)} aria-label="Siguiente">›</button>
      </Reveal>

      {idx !== null ? (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" aria-label="Cerrar">×</button>
          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <img src={img(fotos[idx].src)} alt={fotos[idx].alt} onClick={(e) => e.stopPropagation()} />
          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Foto siguiente"
          >
            ›
          </button>
          <div className="lightbox-count">{idx + 1} / {fotos.length}</div>
        </div>
      ) : null}
    </section>
  );
}

/* ---------- Ubicación y contacto (sedes Concepción y Talcahuano) ---------- */
function Contacto() {
  const c = window.MUGAN.config;
  const [sedeIdx, setSedeIdx] = useState(0);
  const sede = c.sedes[sedeIdx];
  return (
    <section id="contacto" data-screen-label="Ubicación y contacto" className="sec-alt">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Visítanos</div>
          <h2 className="sec-title">
            Ubicación y <em>contacto</em>
          </h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" }}>
            {c.sedes.map((s, i) => (
              <button
                key={s.nombre}
                className={`chip${i === sedeIdx ? " active" : ""}`}
                onClick={() => setSedeIdx(i)}
              >
                {s.nombre}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="contacto-grid">
          <Reveal className="mapa-wrap" delay={1}>
            <iframe
              key={sede.nombre}
              src={sede.mapaEmbed}
              title={`Mapa ${sede.nombre}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>
          <Reveal className="contacto-datos" delay={2}>
            <div className="card" style={{ display: "grid", gap: "20px", height: "100%", alignContent: "start" }}>
              {c.sedes.map((s) => (
                <div className="contacto-item" key={s.nombre}>
                  <span className="ic">{Icon.pin}</span>
                  <div>
                    <div className="lbl">{s.nombre}</div>
                    <div className="val">{s.direccion}</div>
                  </div>
                </div>
              ))}
              <div className="contacto-item">
                <span className="ic">{Icon.phone}</span>
                <div>
                  <div className="lbl">Teléfono</div>
                  <div className="val">{c.telefono}</div>
                </div>
              </div>
              <div className="contacto-item">
                <span className="ic">{Icon.mail}</span>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">{c.email}</div>
                </div>
              </div>
              <Btn variant="wsp" href={waLink()} target="_blank" rel="noopener" style={{ justifySelf: "start" }}>
                <span style={{ width: "20px", height: "20px", display: "inline-flex" }}>{Icon.whatsapp}</span>
                Escríbenos por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const c = window.MUGAN.config;
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-logo">
          <img src={c.logo} alt="Logo Mugan" loading="lazy" />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", fontSize: "20px" }}>
              Mugan <em style={{ fontStyle: "normal", color: "var(--naranjo)" }}>ITF</em>
            </div>
            <div style={{ fontSize: "13px", color: "var(--txt-3)" }}>Concepción · Talcahuano · Chile</div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#academia">Academia</a>
          <a href="#horarios">Horarios</a>
          <a href="#zona-alumnos">Zona Alumnos</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-social">
          <a href={c.redes.instagram} target="_blank" rel="noopener" aria-label="Instagram">
            <span style={{ width: "22px", height: "22px", display: "inline-flex" }}>{Icon.instagram}</span>
          </a>
          <a href={c.redes.tiktok} target="_blank" rel="noopener" aria-label="TikTok">
            <span style={{ width: "22px", height: "22px", display: "inline-flex" }}>{Icon.tiktok}</span>
          </a>
          <a href={c.redes.youtube} target="_blank" rel="noopener" aria-label="YouTube">
            <span style={{ width: "22px", height: "22px", display: "inline-flex" }}>{Icon.youtube}</span>
          </a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} {c.nombreCompleto} — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Botón flotante WhatsApp ---------- */
function WspFloat() {
  return (
    <a className="wsp-float" href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp">
      {Icon.whatsapp}
    </a>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Valores />
      <div className="diag-divider"></div>
      <MuroSocial />
      <div className="diag-divider"></div>
      <ZonaAlumnos />
      <Galeria />
      <div className="diag-divider"></div>
      <Instructores />
      <Horarios />
      <Planes />
      <div className="diag-divider"></div>
      <Contacto />
      <Footer />
      <WspFloat />
    </React.Fragment>
  );
}
