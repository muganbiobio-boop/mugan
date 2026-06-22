/* ============================================================
   MUGAN — Zona Alumnos
   Selector de cinturones ITF + módulo con pestañas:
   Tules / Videos / Audios / Tutoriales (HTML embebido por cinturón)
   Contenido editable en public/js/mugan-data.js
   ============================================================ */

import React, { useState, useEffect, useRef } from "react";
import { Reveal, Btn, Icon } from "./mugan-ui.jsx";
import { img } from "./webp.js";

/* ---------- Visual de cinturón (franja con color real y punta) ---------- */
export function BeltVisual({ belt }) {
  return (
    <span className="belt-visual" style={{ background: belt.color }}>
      <span className="knot"></span>
      {belt.tip ? <span className="tip" style={{ background: belt.tip }}></span> : null}
      {belt.dan ? (
        <span
          style={{
            position: "absolute", right: "7px", top: "50%", transform: "translateY(-50%)",
            color: "#E8B64C", fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "13px", letterSpacing: "0.05em",
          }}
        >
          {belt.dan}
        </span>
      ) : null}
    </span>
  );
}

/* ---------- Pestaña: TULES ---------- */
function TabTules({ belt }) {
  return (
    <div style={{ display: "grid", gap: "34px" }}>
      {belt.tules.map((tul) => (
        <article className="tul-card" key={tul.nombre}>
          {tul.diagrama ? (
            <img
              src={img(tul.diagrama)}
              alt={`Diagrama de ${tul.nombre}`}
              loading="lazy"
              style={{ borderRadius: "10px", border: "1px solid var(--line)", width: "100%" }}
            />
          ) : (
            <div className="tul-diagrama">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M45 10v70M25 80h40M45 45H15M45 45h30M45 28l-12 8M45 28l12 8"></path>
                <circle cx="45" cy="10" r="4" fill="currentColor"></circle>
              </svg>
              <span>
                Diagrama del tul
                <br />
                <small>✏️ agrega la imagen en mugan-data.js → diagrama</small>
              </span>
            </div>
          )}
          <div className="tul-meta">
            <div className="movs">{tul.movimientos}</div>
            <h4>{tul.nombre}</h4>
            <blockquote>{tul.significado}</blockquote>
            {tul.youtubeId ? (
              <div className="video-player" style={{ marginTop: "18px" }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${tul.youtubeId}`}
                  title={`Video técnico ${tul.nombre}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p style={{ fontSize: "13.5px", color: "var(--txt-3)" }}>
                🎬 Video técnico pendiente — pega el ID de YouTube en mugan-data.js
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Pestaña: VIDEOS ---------- */
function TabVideos({ belt }) {
  const [sel, setSel] = useState(0);
  const v = belt.videos[sel];
  return (
    <div>
      {belt.videos.length === 0 ? (
        <p style={{ color: "var(--txt-3)" }}>Aún no hay videos para este nivel.</p>
      ) : (
        <React.Fragment>
          <div className="video-player">
            {v.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                title={v.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : v.mp4 ? (
              <video src={v.mp4} controls playsInline></video>
            ) : (
              <div
                style={{
                  height: "100%", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "12px",
                  color: "var(--txt-3)", fontSize: "14px", textAlign: "center", padding: "20px",
                }}
              >
                <div className="vt-play"></div>
                <span>
                  {v.titulo}
                  <br />
                  <small>✏️ pega el ID de YouTube (o ruta mp4) en mugan-data.js</small>
                </span>
              </div>
            )}
          </div>
          <div className="video-grid">
            {belt.videos.map((vid, i) => (
              <button
                key={i}
                className="video-thumb"
                onClick={() => setSel(i)}
                style={i === sel ? { borderColor: "var(--naranjo)" } : undefined}
              >
                <div
                  className="vt-img"
                  style={
                    vid.youtubeId
                      ? { backgroundImage: `url('https://i.ytimg.com/vi/${vid.youtubeId}/hqdefault.jpg')` }
                      : undefined
                  }
                >
                  {!vid.youtubeId ? <div className="vt-play" style={{ width: "40px", height: "40px" }}></div> : null}
                </div>
                <div className="vt-title">{vid.titulo}</div>
              </button>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

/* ---------- Pestaña: AUDIOS ---------- */
function TabAudios({ belt }) {
  const [playing, setPlaying] = useState(null); // índice de pista sonando
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // detener al cambiar de cinturón
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [belt.id]);

  const toggle = (i) => {
    const a = audioRef.current;
    if (!a) return;
    setError(null);
    if (playing === i) {
      a.pause();
      setPlaying(null);
    } else {
      a.src = belt.audios[i].src;
      a.play().then(() => setPlaying(i)).catch(() => {
        setPlaying(null);
        setError(i);
      });
    }
  };

  return (
    <div>
      <audio ref={audioRef} onEnded={() => setPlaying(null)}></audio>
      <div className="audio-list">
        {belt.audios.map((track, i) => (
          <div className={`audio-item${playing === i ? " playing" : ""}`} key={i}>
            <button
              className="audio-play-btn"
              aria-label={playing === i ? "Pausar" : "Reproducir"}
              onClick={() => toggle(i)}
            >
              {playing === i ? "❚❚" : "►"}
            </button>
            <div className="audio-meta">
              <div className="t">{track.titulo}</div>
              <div className="d">
                {error === i
                  ? "⚠️ Archivo no encontrado — sube el mp3 a /audio y revisa la ruta en mugan-data.js"
                  : track.desc}
              </div>
            </div>
            <span className="audio-dur">MP3</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pestaña: TUTORIALES (HTML embebido por cinturón) ---------- */
function TabTutoriales({ belt }) {
  const [docIdx, setDocIdx] = useState(0);
  const docs = belt.tutoriales || [];

  // Al cambiar de cinturón, volver al primer documento.
  useEffect(() => {
    setDocIdx(0);
  }, [belt.id]);

  if (docs.length === 0) {
    return (
      <p style={{ color: "var(--txt-3)", fontSize: "14px" }}>
        Aún no hay tutoriales para este nivel.
        <br />
        <small>✏️ agrega un HTML en /tutoriales y su ruta en mugan-data.js</small>
      </p>
    );
  }

  const docInfo = docs[docIdx] || docs[0];

  return (
    <div>
      {docs.length > 1 ? (
        <div className="pdf-doc-list">
          {docs.map((d, i) => (
            <button
              key={i}
              className={`pdf-doc-chip${i === docIdx ? " active" : ""}`}
              onClick={() => setDocIdx(i)}
            >
              📄 {d.titulo}
            </button>
          ))}
        </div>
      ) : null}

      <div className="tutorial-viewer">
        <div className="tutorial-toolbar">
          <span className="tutorial-title">{docInfo.titulo}</span>
          <span className="sp"></span>
          <Btn
            variant="primary"
            href={docInfo.src}
            target="_blank"
            rel="noopener"
            style={{ fontSize: "15px", padding: "10px 20px", minHeight: "42px" }}
          >
            Abrir en pestaña nueva
          </Btn>
        </div>
        <iframe
          key={docInfo.src}
          className="tutorial-frame"
          src={docInfo.src}
          title={docInfo.titulo}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

/* ---------- Módulo principal Zona Alumnos ---------- */
const ZA_TABS = [
  { id: "tules", label: "Tules" },
  { id: "videos", label: "Videos" },
  // { id: "audios", label: "Audios" },  // ⏸️ Audios: se implementará más adelante
  { id: "tutoriales", label: "Tutoriales" },
];

export function ZonaAlumnos() {
  const cinturones = window.MUGAN.cinturones;
  const zonaFoto = window.MUGAN.zonaAlumnosFoto;
  const [beltIdx, setBeltIdx] = useState(0);
  const [tab, setTab] = useState("tules");
  const belt = cinturones[beltIdx];

  return (
    <section id="zona-alumnos" className="za-bg" data-screen-label="Zona Alumnos">
      <div className="wrap">
        <div className={`za-intro${zonaFoto ? "" : " no-foto"}`}>
          <Reveal>
            <div className="sec-kicker">Zona Alumnos</div>
            <h2 className="sec-title">
              Materia por <em>cinturón</em>
            </h2>
            <p style={{ color: "var(--txt-2)", maxWidth: "620px" }}>
              Selecciona tu cinturón para ver los tules, videos técnicos y los
              tutoriales de materia de tu nivel.
            </p>
          </Reveal>
          {zonaFoto ? (
            <Reveal className="za-intro-foto" delay={1}>
              <img src={img(zonaFoto)} alt="Cinturones ITF de Mugan" loading="lazy" />
            </Reveal>
          ) : null}
        </div>

        {/* Franja de cinturones */}
        <Reveal delay={1}>
          <div className="belt-strip" role="tablist" aria-label="Cinturones">
            {cinturones.map((b, i) => (
              <button
                key={b.id}
                className={`belt-item${i === beltIdx ? " active" : ""}`}
                onClick={() => {
                  setBeltIdx(i);
                  setTab("tules");
                }}
                role="tab"
                aria-selected={i === beltIdx}
              >
                <BeltVisual belt={b} />
                <span className="belt-label">{b.nombre}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Módulo del cinturón seleccionado */}
        <Reveal delay={2}>
          <div className="za-modulo">
            <div className="za-head">
              <div>
                <h3>
                  {belt.titulo.split("·")[0]}
                  {belt.titulo.includes("·") ? <em>·{belt.titulo.split("·")[1]}</em> : null}
                </h3>
                <p style={{ color: "var(--txt-2)", fontSize: "14.5px", maxWidth: "520px", marginTop: "4px" }}>
                  {belt.significado}
                </p>
              </div>
              <div className="za-progress">
                <div className="lbl">
                  <span>Camino al cinturón negro</span>
                  <span>{belt.progreso}%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: `${belt.progreso}%` }}></div>
                </div>
              </div>
            </div>

            <div className="za-tabs" role="tablist" aria-label="Materia">
              {ZA_TABS.map((t) => (
                <button
                  key={t.id}
                  className={`za-tab${tab === t.id ? " active" : ""}`}
                  onClick={() => setTab(t.id)}
                  role="tab"
                  aria-selected={tab === t.id}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="za-body">
              {tab === "tules" ? <TabTules belt={belt} /> : null}
              {tab === "videos" ? <TabVideos belt={belt} /> : null}
              {/* {tab === "audios" ? <TabAudios belt={belt} /> : null} */}
              {tab === "tutoriales" ? <TabTutoriales belt={belt} /> : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
