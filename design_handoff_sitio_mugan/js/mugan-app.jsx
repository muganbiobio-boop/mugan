/* ============================================================
   MUGAN — Muro social, Galería, Contacto, Footer y App principal
   (incluye panel de Tweaks: tono naranjo, glow, tipografía, ritmo)
   ============================================================ */

const { useState: appState, useEffect: appEffect } = React;

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
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
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
  const noticias = window.MUGAN.noticias;
  return (
    <section id="noticias" data-screen-label="Muro social y noticias" className="sec-alt">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Comunidad</div>
          <h2 className="sec-title">
            Muro <em>en vivo</em>
          </h2>
        </Reveal>
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

        <Reveal style={{ marginTop: "64px" }}>
          <div className="sec-kicker">Noticias Mugan</div>
        </Reveal>
        <div className="noticias-grid">
          {noticias.map((n, i) => (
            <Reveal key={i} as="article" className="card noticia-card" delay={Math.min(i, 4)}>
              <div className="noticia-img" style={n.foto ? { backgroundImage: `url('${n.foto}')` } : undefined}></div>
              <div className="noticia-body">
                <div className="noticia-fecha">{n.fecha}</div>
                <h3>{n.titulo}</h3>
                <p>{n.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Galería con lightbox ---------- */
function Galeria() {
  const fotos = window.MUGAN.galeria;
  const [lightbox, setLightbox] = appState(null);

  appEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galeria" data-screen-label="Galería">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Galería</div>
          <h2 className="sec-title">
            El dojang <em>en acción</em>
          </h2>
        </Reveal>
        <div className="galeria-grid">
          {fotos.map((f, i) => (
            <Reveal
              key={i}
              as="button"
              className="galeria-item"
              delay={Math.min(i % 4, 4)}
              style={f.src ? { backgroundImage: `url('${f.src}')` } : undefined}
              onClick={() => f.src && setLightbox(f)}
              aria-label={f.alt}
            >
              {!f.src ? <span className="ph">📷 {f.alt}</span> : null}
            </Reveal>
          ))}
        </div>
      </div>
      {lightbox ? (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Cerrar">×</button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      ) : null}
    </section>
  );
}

/* ---------- Ubicación y contacto (sedes Concepción y Talcahuano) ---------- */
function Contacto() {
  const c = window.MUGAN.config;
  const [sedeIdx, setSedeIdx] = appState(0);
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
          <img src={c.logo} alt="Logo Mugan" />
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

/* ---------- App + Tweaks ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "naranjo": "#FF6B00",
  "glow": 0.45,
  "fuenteTitulos": "Barlow Condensed",
  "ritmo": 100
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  appEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--naranjo", t.naranjo);
    // derivar el tono suave desde el naranjo elegido
    const r = parseInt(t.naranjo.slice(1, 3), 16),
      g = parseInt(t.naranjo.slice(3, 5), 16),
      b = parseInt(t.naranjo.slice(5, 7), 16);
    root.style.setProperty("--naranjo-suave", `rgba(${r}, ${g}, ${b}, 0.14)`);
    root.style.setProperty("--glow-alpha", String(t.glow));
    root.style.setProperty("--font-display", `"${t.fuenteTitulos}", "Arial Narrow", sans-serif`);
    root.style.setProperty("--sec-pad", `clamp(${72 * t.ritmo / 100}px, ${10 * t.ritmo / 100}vw, ${130 * t.ritmo / 100}px)`);
  }, [t]);

  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <div className="diag-divider"></div>
      <Instructores />
      <Horarios />
      <div className="diag-divider"></div>
      <ZonaAlumnos />
      <MuroSocial />
      <Galeria />
      <div className="diag-divider"></div>
      <Contacto />
      <Footer />
      <WspFloat />

      <TweaksPanel>
        <TweakSection label="Color" />
        <TweakColor
          label="Naranjo institucional"
          value={t.naranjo}
          options={["#FF6B00", "#FF8A00", "#FF4D00", "#E85D26"]}
          onChange={(v) => setTweak("naranjo", v)}
        />
        <TweakSlider
          label="Intensidad del glow"
          value={t.glow}
          min={0}
          max={1}
          step={0.05}
          onChange={(v) => setTweak("glow", v)}
        />
        <TweakSection label="Tipografía y ritmo" />
        <TweakSelect
          label="Fuente de títulos"
          value={t.fuenteTitulos}
          options={["Barlow Condensed", "Khand", "Staatliches"]}
          onChange={(v) => setTweak("fuenteTitulos", v)}
        />
        <TweakSlider
          label="Espaciado de secciones"
          value={t.ritmo}
          min={70}
          max={140}
          step={5}
          unit="%"
          onChange={(v) => setTweak("ritmo", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
