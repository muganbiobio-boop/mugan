/* ============================================================
   MUGAN — Zona Alumnos
   Selector de cinturones ITF + módulo con pestañas:
   Tules / Videos / Audios / PDF (visor integrado con PDF.js)
   Contenido editable en js/mugan-data.js
   ============================================================ */

const { useState: zaState, useEffect: zaEffect, useRef: zaRef } = React;

/* ---------- Visual de cinturón (franja con color real y punta) ---------- */
function BeltVisual({ belt }) {
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
              src={tul.diagrama}
              alt={`Diagrama de ${tul.nombre}`}
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
  const [sel, setSel] = zaState(0);
  const v = belt.videos[sel];
  const hasMedia = v && (v.youtubeId || v.mp4);
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
  const [playing, setPlaying] = zaState(null); // índice de pista sonando
  const [error, setError] = zaState(null);
  const audioRef = zaRef(null);

  zaEffect(() => {
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

/* ---------- Pestaña: PDF (visor integrado con PDF.js) ---------- */
function TabPdf({ belt }) {
  const [docIdx, setDocIdx] = zaState(0);
  const [page, setPage] = zaState(1);
  const [numPages, setNumPages] = zaState(0);
  const [scale, setScale] = zaState(1.1);
  const [status, setStatus] = zaState("loading"); // loading | ok | error
  const canvasRef = zaRef(null);
  const pdfRef = zaRef(null);
  const renderTask = zaRef(null);

  const docInfo = belt.pdfs[docIdx];

  // Cargar documento
  zaEffect(() => {
    if (!docInfo || !window.pdfjsLib) {
      setStatus("error");
      return;
    }
    let cancelled = false;
    setStatus("loading");
    setPage(1);
    window.pdfjsLib
      .getDocument(docInfo.src)
      .promise.then((pdf) => {
        if (cancelled) return;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setStatus("ok");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [belt.id, docIdx]);

  // Renderizar página
  zaEffect(() => {
    const pdf = pdfRef.current;
    if (status !== "ok" || !pdf || !canvasRef.current) return;
    let cancelled = false;
    pdf.getPage(page).then((p) => {
      if (cancelled) return;
      const viewport = p.getViewport({ scale: scale * (window.devicePixelRatio > 1 ? 1.5 : 1) });
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = viewport.width / (window.devicePixelRatio > 1 ? 1.5 : 1) + "px";
      if (renderTask.current) renderTask.current.cancel();
      renderTask.current = p.render({ canvasContext: ctx, viewport });
      renderTask.current.promise.catch(() => {});
    });
    return () => {
      cancelled = true;
    };
  }, [status, page, scale]);

  return (
    <div>
      {belt.pdfs.length > 1 ? (
        <div className="pdf-doc-list">
          {belt.pdfs.map((d, i) => (
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

      <div className="pdf-viewer">
        <div className="pdf-toolbar">
          <button className="pdf-tool-btn" disabled={page <= 1} onClick={() => setPage(page - 1)} aria-label="Página anterior">‹</button>
          <span className="pdf-pageinfo">
            {status === "ok" ? `${page} / ${numPages}` : "– / –"}
          </span>
          <button className="pdf-tool-btn" disabled={page >= numPages} onClick={() => setPage(page + 1)} aria-label="Página siguiente">›</button>
          <span style={{ width: "10px" }}></span>
          <button className="pdf-tool-btn" disabled={scale <= 0.6} onClick={() => setScale(+(scale - 0.2).toFixed(2))} aria-label="Alejar">−</button>
          <button className="pdf-tool-btn" disabled={scale >= 3} onClick={() => setScale(+(scale + 0.2).toFixed(2))} aria-label="Acercar">+</button>
          <span className="sp"></span>
          {docInfo ? (
            <Btn variant="primary" href={docInfo.src} download style={{ fontSize: "15px", padding: "10px 20px", minHeight: "42px" }}>
              {Icon.download} Descargar PDF
            </Btn>
          ) : null}
        </div>
        <div className="pdf-canvas-wrap">
          {status === "error" ? (
            <div style={{ padding: "60px 20px", color: "var(--txt-3)", fontSize: "14px", textAlign: "center" }}>
              ⚠️ No se pudo cargar el PDF.
              <br />
              <small>Sube el archivo a /pdfs y revisa la ruta en mugan-data.js</small>
            </div>
          ) : (
            <canvas ref={canvasRef}></canvas>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Módulo principal Zona Alumnos ---------- */
const ZA_TABS = [
  { id: "tules", label: "Tules" },
  { id: "videos", label: "Videos" },
  { id: "audios", label: "Audios" },
  { id: "pdf", label: "PDF" },
];

function ZonaAlumnos() {
  const cinturones = window.MUGAN.cinturones;
  const [beltIdx, setBeltIdx] = zaState(0);
  const [tab, setTab] = zaState("tules");
  const belt = cinturones[beltIdx];

  return (
    <section id="zona-alumnos" className="za-bg" data-screen-label="Zona Alumnos">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Zona Alumnos</div>
          <h2 className="sec-title">
            Materia por <em>cinturón</em>
          </h2>
          <p style={{ color: "var(--txt-2)", maxWidth: "620px" }}>
            Selecciona tu cinturón para ver los tules, videos técnicos, audios de
            terminología coreana y manuales en PDF de tu nivel.
          </p>
        </Reveal>

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
              {tab === "audios" ? <TabAudios belt={belt} /> : null}
              {tab === "pdf" ? <TabPdf belt={belt} /> : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { ZonaAlumnos, BeltVisual });
