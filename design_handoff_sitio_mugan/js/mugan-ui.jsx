/* ============================================================
   MUGAN — Componentes UI generales
   (Navbar, Hero, Quiénes Somos, Instructores, Horarios)
   No necesitas editar este archivo para cambiar contenidos:
   todo el contenido vive en js/mugan-data.js
   ============================================================ */

const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Helpers ---------- */

// Animación de entrada por scroll (IntersectionObserver)
function Reveal({ as = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Chequeo inmediato: si el elemento ya está dentro del viewport al montar
    // (aunque aún mida 0px porque su imagen no cargó), se revela de inmediato.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom >= 0) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: [0, 0.12] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const dClass = delay ? ` reveal-d${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${dClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// Efecto ripple en botones
function addRipple(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const d = Math.max(rect.width, rect.height);
  const span = document.createElement("span");
  span.className = "ripple";
  span.style.width = span.style.height = d + "px";
  span.style.left = e.clientX - rect.left - d / 2 + "px";
  span.style.top = e.clientY - rect.top - d / 2 + "px";
  el.appendChild(span);
  setTimeout(() => span.remove(), 600);
}

// Botón con ripple (renderiza <a> si recibe href)
function Btn({ variant = "primary", href, onClick, children, ...rest }) {
  const cls = `btn btn-${variant}`;
  const handle = (e) => {
    addRipple(e);
    if (onClick) onClick(e);
  };
  if (href) {
    return (
      <a className={cls} href={href} onClick={handle} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={handle} {...rest}>
      {children}
    </button>
  );
}

// Link de WhatsApp
function waLink(msg) {
  const c = window.MUGAN.config;
  return `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(msg || c.whatsappMensaje)}`;
}

/* ---------- Iconos SVG ---------- */
const Icon = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4Zm-3.1 4.2c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6L9.7 8.6c-.2-.4-.4-.4-.6-.4h-.2Z"/></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="100%" height="100%"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"></circle></svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M16.6 3c.4 1.9 1.6 3.3 3.6 3.6V9c-1.5 0-2.7-.5-3.7-1.2v5.6a5.8 5.8 0 1 1-5.8-5.8c.3 0 .7 0 1 .1v2.8a2.9 2.9 0 1 0 2 2.8V3h2.9Z"/></svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3a2.6 2.6 0 0 0-1.8 1.9A27 27 0 0 0 2 12c0 1.6.1 3.2.4 4.8.2.9.9 1.6 1.8 1.9 1.6.3 7.8.3 7.8.3s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8ZM10 15.2V8.8l5.4 3.2-5.4 3.2Z"/></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"></path><circle cx="12" cy="10" r="2.6"></circle></svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M5 4h4l1.5 4L8 9.7a13 13 0 0 0 6.3 6.3l1.7-2.5 4 1.5v4a2 2 0 0 1-2.2 2A17.8 17.8 0 0 1 3 6.2 2 2 0 0 1 5 4Z"></path></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path></svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 4v11m0 0 4-4m-4 4-4-4"></path><path d="M4 19h16"></path></svg>
  ),
};

/* ---------- Navbar ---------- */
const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "academia", label: "Academia" },
  { id: "instructores", label: "Instructores" },
  { id: "horarios", label: "Horarios" },
  { id: "zona-alumnos", label: "Zona Alumnos" },
  { id: "noticias", label: "Noticias" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const c = window.MUGAN.config;
  return (
    <nav className={`nav${solid ? " solid" : ""}`}>
      <a className="nav-logo" href="#inicio" onClick={() => setOpen(false)}>
        <img src={c.logo} alt={`Logo ${c.nombre}`} />
        <span>
          {c.nombre} <em>ITF</em>
        </span>
      </a>
      <div className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
      <button
        className="nav-burger"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

/* ---------- Hero con parallax scroll-driven ---------- */
function Hero() {
  const c = window.MUGAN.config;
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const shadeRef = useRef(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const y = window.scrollY;
        const h = window.innerHeight;
        const p = Math.min(y / h, 1);
        if (mediaRef.current)
          mediaRef.current.style.transform = `translateY(${y * 0.38}px)`;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.16}px)`;
          contentRef.current.style.opacity = String(1 - p * 1.4);
        }
        if (shadeRef.current)
          shadeRef.current.style.background = `linear-gradient(180deg, rgba(10,10,10,${0.55 + p * 0.45}) 0%, rgba(10,10,10,${0.35 + p * 0.55}) 40%, #0A0A0A 96%)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="inicio" data-screen-label="Hero">
      <div className="hero-media" ref={mediaRef}>
        {/* Foto de respaldo con Ken Burns (se ve mientras no exista video/hero.mp4) */}
        <div
          className="hero-fallback"
          style={{ backgroundImage: `url('${c.heroFallback}')` }}
        ></div>
        {/* Video hero: sube tu mp4 a video/hero.mp4 y se activa solo */}
        {videoOk ? (
          <video
            src={c.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoOk(false)}
          ></video>
        ) : null}
        <div className="hero-shade" ref={shadeRef}></div>
      </div>
      <div className="hero-content" ref={contentRef}>
        <Reveal as="div">
          <img className="hero-logo" src={c.logo} alt="Logo Mugan" />
        </Reveal>
        <h1 className="display hero-title">
          <span>Mugan</span>
          <span className="line2">Taekwon-Do ITF</span>
        </h1>
        <p className="hero-lema">{c.lema}</p>
        <div className="hero-ctas">
          <Btn variant="primary" href="#academia">
            Conoce la Academia
          </Btn>
          <Btn variant="ghost" href="#zona-alumnos">
            Zona Alumnos
          </Btn>
        </div>
      </div>
      <div className="hero-scrollhint">Desliza</div>
    </section>
  );
}

/* ---------- Quiénes somos + valores ---------- */
function QuienesSomos() {
  const qs = window.MUGAN.quienesSomos;
  const valores = window.MUGAN.valores;
  return (
    <section id="academia" data-screen-label="Quiénes somos">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Quiénes somos</div>
          <h2 className="sec-title">
            La academia <em>Mugan</em>
          </h2>
        </Reveal>
        <Reveal
          delay={1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "grid", gap: "16px", color: "var(--txt-2)", fontSize: "17.5px" }}>
            {qs.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {qs.foto ? (
            <img
              src={qs.foto}
              alt="Clase en Mugan"
              style={{
                borderRadius: "var(--radius)",
                border: "1px solid var(--line)",
                aspectRatio: "16/10",
                objectFit: "cover",
                width: "100%",
              }}
            />
          ) : null}
        </Reveal>
        <div className="valores-grid">
          {valores.map((v, i) => (
            <Reveal key={v.es} as="article" className="card valor-card" delay={Math.min(i, 4)}>
              <div className="valor-num">{i + 1}</div>
              <div className="hangul">{v.hangul}</div>
              <div className="kr">{v.kr}</div>
              <h3>{v.es}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Instructores (hover 3D tilt) ---------- */
function InstructorCard({ inst }) {
  const innerRef = useRef(null);
  const onMove = (e) => {
    const el = innerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(6px)`;
  };
  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = "";
  };
  return (
    <div className="inst-card" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="inst-card-inner" ref={innerRef}>
        <div
          className="inst-photo"
          style={
            inst.foto
              ? { backgroundImage: `url('${inst.foto}')` }
              : { display: "flex", alignItems: "center", justifyContent: "center" }
          }
        >
          {!inst.foto ? (
            <span style={{ color: "var(--txt-3)", fontSize: "13px", position: "relative", zIndex: 1 }}>
              📷 Foto por agregar
            </span>
          ) : null}
        </div>
        <div className="inst-info">
          <h3>{inst.nombre}</h3>
          <div className="inst-grado">{inst.grado}</div>
          <p style={{ color: "var(--naranjo)", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
            {inst.rol}
          </p>
          <p>{inst.bio}</p>
        </div>
      </div>
    </div>
  );
}

function Instructores() {
  const list = window.MUGAN.instructores;
  return (
    <section id="instructores" data-screen-label="Instructores" className="sec-alt">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Equipo</div>
          <h2 className="sec-title">
            Nuestros <em>instructores</em>
          </h2>
        </Reveal>
        <div className="inst-grid">
          {list.map((inst, i) => (
            <Reveal key={i} delay={Math.min(i, 4)}>
              <InstructorCard inst={inst} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Horarios y planes ---------- */
function Horarios() {
  const horarios = window.MUGAN.horarios;
  const planes = window.MUGAN.planes;
  return (
    <section id="horarios" data-screen-label="Horarios y planes">
      <div className="wrap">
        <Reveal>
          <div className="sec-kicker">Entrena con nosotros</div>
          <h2 className="sec-title">
            Horarios y <em>planes</em>
          </h2>
        </Reveal>
        <div className="horario-grid">
          {horarios.map((h, i) => (
            <Reveal key={h.categoria} as="article" className="card horario-card" delay={Math.min(i, 4)}>
              <div className="edad">{h.edades}</div>
              <div className="cat">{h.categoria}</div>
              <div className="horario-tabla">
                {h.bloques.map((b, j) => (
                  <div className="horario-fila" key={j}>
                    <span className="dia">{b.dia}</span>
                    <span className="hora">{b.hora}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="horario-grid" style={{ marginTop: "26px" }}>
          {planes.map((p, i) => (
            <Reveal
              key={p.nombre}
              as="article"
              className="card horario-card"
              delay={Math.min(i, 4)}
              style={
                p.destacado
                  ? { borderColor: "rgba(255,107,0,0.55)", boxShadow: "0 0 34px rgba(255,107,0, calc(var(--glow-alpha) * 0.35))" }
                  : undefined
              }
            >
              {p.destacado ? (
                <div
                  style={{
                    position: "absolute", top: "14px", right: "14px",
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#000", background: "var(--naranjo)",
                    padding: "4px 10px", borderRadius: "3px",
                  }}
                >
                  Popular
                </div>
              ) : null}
              <div className="cat" style={{ fontSize: "24px" }}>{p.nombre}</div>
              <div className="plan-precio">
                {p.precio}
                <small>{p.periodo}</small>
              </div>
              <p className="plan-detalle">{p.detalle}</p>
              <Btn variant="wsp" href={waLink(`Hola! Quiero inscribirme en el ${p.nombre} de Mugan 🥋`)} target="_blank" rel="noopener">
                <span style={{ width: "20px", height: "20px", display: "inline-flex" }}>{Icon.whatsapp}</span>
                Inscríbete por WhatsApp
              </Btn>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Exportar al scope global (cada <script type="text/babel"> tiene scope propio) */
Object.assign(window, {
  Reveal, Btn, addRipple, waLink, Icon,
  Navbar, Hero, QuienesSomos, Instructores, Horarios,
});
