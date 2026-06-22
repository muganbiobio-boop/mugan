/* ============================================================
   MUGAN ACADEMIA · Motor de render de tutoriales ITF
   Lee el objeto global window.BELT (definido en cada archivo
   de cinturón) y construye toda la página.
   ============================================================ */
(function () {
  'use strict';
  const B = window.BELT;
  if (!B) { console.error('Falta window.BELT'); return; }

  const esc = s => String(s == null ? '' : s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const el = (id) => document.getElementById(id);

  const CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#0E0E10" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L19 7"/></svg>';
  const INFO_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>';
  const PREV_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13M11 6l6 6-6 6M21 5v14"/></svg>';

  // ---------- LOGOS (comentados para reemplazo fácil) ----------
  const logoMain = `
    <figure><!-- LOGO_MUGAN  → --><img src="logos/mugan.png" alt="Mugan Academia"><figcaption>Mugan</figcaption></figure>
    <span class="amp">+</span>
    <figure><!-- LOGO_DUNGDAE → --><img src="logos/dungdae.png" alt="Dungdae"><figcaption>Dungdae</figcaption></figure>`;
  const logoSec = `
    <figure><!-- LOGO_OIAT → --><img src="logos/oiat.png" alt="OIAT"><figcaption>OIAT</figcaption></figure>
    <figure><!-- LOGO_CHANHUN → --><img src="logos/chanhun.png" alt="Chan-Hun"><figcaption>Chan-Hun ITF</figcaption></figure>`;

  // ---------- NAV ----------
  function navLinks() {
    const items = [];
    if (B.fundamentos && B.fundamentos.length) items.push(['fundamentos', 'Fundamentos']);
    if (B.posiciones && B.posiciones.length) items.push(['posiciones', 'Posiciones']);
    if (B.tuls && B.tuls.length) items.push(['tul', 'Tul']);
    if (B.patadas && B.patadas.length) items.push(['patadas', 'Patadas']);
    if (B.combate && B.combate.length) items.push(['combate', 'Combate']);
    items.push(['defensa', 'Defensa']);
    items.push(['rotura', 'Rotura']);
    if (B.teoria && B.teoria.length) items.push(['teoria', 'Teoría']);
    return items.map(([h, t]) => `<a href="#${h}">${t}</a>`).join('');
  }

  // ---------- helpers de sección ----------
  function techCards(arr) {
    return `<div class="tech-grid">` + arr.map((t, i) =>
      `<div class="tech-card"><div class="tech-card__n">${i + 1}</div><div class="tech-card__body"><div class="tech-card__name">${esc(t.name)}</div>${t.es ? `<div class="tech-card__es">${esc(t.es)}</div>` : ''}</div></div>`
    ).join('') + `</div>`;
  }
  function prevNote(text) {
    return `<div class="prev-note">${PREV_SVG}<span>${esc(text)}</span></div>`;
  }
  function listCards(arr) {
    return `<div class="list-grid">` + arr.map((t, i) =>
      `<div class="list-card"><div class="list-card__n">${i + 1}</div><div class="list-card__t">${esc(t.t)}${t.s ? `<small>${esc(t.s)}</small>` : ''}</div></div>`
    ).join('') + `</div>`;
  }

  function tulCards(arr) {
    return `<div class="tul-grid">` + arr.map(t => {
      const cls = t.prep ? 'tul-card tul-prep' : 'tul-card';
      return `<div class="${cls}"><div class="tul-card__top"><span class="tul-card__kr kr">${esc(t.kr)}</span><span class="tul-card__moves">${esc(t.moves)} mov.</span></div><h3>${esc(t.name)}</h3><div class="tul-card__mean">${esc(t.mean)}</div><p>${esc(t.desc)}</p></div>`;
    }).join('') + `</div>`;
  }

  function crossDiagram() {
    return `<div class="diagram">
      <svg viewBox="0 0 260 260" role="img" aria-label="Diagrama en forma de cruz">
        <defs><marker id="arrow" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="var(--orange)"/></marker></defs>
        <line x1="130" y1="26" x2="130" y2="234" stroke="var(--line)" stroke-width="2"/>
        <line x1="26" y1="130" x2="234" y2="130" stroke="var(--line)" stroke-width="2"/>
        <g stroke="var(--belt)" stroke-width="9" stroke-linecap="round" fill="none" opacity=".55">
          <line x1="130" y1="130" x2="130" y2="42"/><line x1="130" y1="130" x2="130" y2="218"/>
          <line x1="130" y1="130" x2="42" y2="130"/><line x1="130" y1="130" x2="218" y2="130"/></g>
        <g stroke="var(--orange)" stroke-width="2.4" fill="none" marker-end="url(#arrow)">
          <line x1="130" y1="120" x2="130" y2="58"/><line x1="130" y1="140" x2="130" y2="202"/>
          <line x1="120" y1="130" x2="58" y2="130"/><line x1="140" y1="130" x2="202" y2="130"/></g>
        <circle cx="130" cy="130" r="13" fill="var(--ink)"/><circle cx="130" cy="130" r="13" fill="none" stroke="var(--belt)" stroke-width="3"/>
        <text x="130" y="135" text-anchor="middle" font-family="Anton, sans-serif" font-size="14" fill="#fff">★</text>
      </svg>
      <div class="diagram__legend"><h3>Cómo se lee</h3><ul>
        <li><span class="dot">★</span><span><strong>Inicio y fin.</strong> Empiezas en el centro y debes regresar exactamente al mismo punto.</span></li>
        <li><span class="dot">+</span><span><strong>Forma de cruz.</strong> El recorrido visita los cuatro extremos y vuelve al centro.</span></li>
        <li><span class="dot">2</span><span><strong>Dos partes.</strong> Primero defensa baja y golpe; luego defensa media en posición L y golpe.</span></li>
      </ul></div></div>`;
  }

  function tulDetail(d) {
    let html = '';
    if (d.terminology && d.terminology.length) {
      html += `<h3 class="sub-h">Terminología <span class="kr" style="color:var(--orange)">용어</span></h3><div class="table-wrap"><table><thead><tr><th>Coreano</th><th>Pronunciación</th><th>Significado</th></tr></thead><tbody>`;
      html += d.terminology.map(r => `<tr><td class="t-kr">${esc(r.kr)}</td><td class="t-pron">${esc(r.pron)}${r.sub ? `<small>${esc(r.sub)}</small>` : ''}</td><td>${esc(r.mean)}</td></tr>`).join('');
      html += `</tbody></table></div>`;
    }
    if (d.diagram === 'cross') html += `<h3 class="sub-h">Diagrama del recorrido</h3>` + crossDiagram();
    if (d.steps && d.steps.length) {
      html += `<h3 class="sub-h">Los ${d.moves} movimientos de ${esc(d.name)}</h3>`;
      if (d.intro) html += `<p style="margin:0 0 18px;max-width:64ch">${d.intro}</p>`;
      html += `<div class="steps">`;
      d.steps.forEach(it => {
        if (it.phase) { html += `<div class="phase">${esc(it.phase)}</div>`; return; }
        const k = it.kihap ? ' kihap' : '';
        const tag = it.kihap ? '<span class="kihap-tag">¡Kihap! 기합</span>' : '';
        html += `<div class="step${k}"><div class="step__n">${it.n}</div><div class="step__body"><span class="step__stance">${esc(it.st)}</span><span class="step__kr kr">${esc(it.kr)}</span><span class="step__es">${esc(it.es)} ${tag}</span></div></div>`;
      });
      html += `</div>`;
    }
    return html;
  }

  function noticeBlock(o) {
    return `<div class="notice"><div class="notice__mk">${INFO_SVG}</div><div><p style="margin:0">${o.text}</p>${o.when ? `<span class="when">${esc(o.when)}</span>` : ''}</div></div>`;
  }

  function theoryCards(arr) {
    return `<div class="theory">` + arr.map((t, i) => {
      const body = t.html ? t.html : (t.p ? `<p>${esc(t.p)}</p>` : '');
      return `<div class="theory-card"><div class="t-num">${i + 1}</div><div><h3>${esc(t.q)}</h3>${body}</div></div>`;
    }).join('') + `</div>`;
  }

  // ---------- ENSAMBLAR PÁGINA ----------
  function section(id, eyebrow, title, kr, body, lead) {
    return `<section class="reveal" id="${id}"><div class="sec-divider"></div><span class="eyebrow">${esc(eyebrow)}</span><h2 class="h-sec">${esc(title)}${kr ? ` <span class="kr">${esc(kr)}</span>` : ''}</h2>${lead ? `<p class="lead" style="margin-bottom:20px">${lead}</p>` : ''}${body}</section>`;
  }

  function build() {
    // NAV
    // Botonera (Fundamentos/Posiciones/Tul/…) eliminada: no tenía función.
    // Se conservan el logo y el botón "Descargar PDF".
    el('nav').innerHTML = `<span class="nav__brand"><img src="logos/mugan.png" alt="Mugan Academia">Mugan</span><span style="flex:1"></span><button class="btn-pdf" onclick="window.print()" aria-label="Descargar PDF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>Descargar PDF</button>`;

    // COVER
    el('cover').innerHTML = `<div class="cover__tape"></div><div class="cover__inner">
      <div class="logos-main">${logoMain}</div>
      <div class="cover__head">
        <div class="belt-chip"><span class="belt-vis" aria-hidden="true"><i class="base"></i>${B.tip ? '<i class="tip"></i>' : ''}</span><span class="belt-chip__label">Cinturón ${esc(B.name)}</span><span class="belt-chip__grade">${esc(B.grade)}</span></div>
        <div class="cover__materia">Tutorial de examinación · Mugan Academia</div>
        <h1 class="cover__title">${esc(B.name)}</h1>
        <p class="cover__sub">${B.subtitle}</p>
        <div class="quick">${B.quick.map(q => `<div class="q"><b>${q.b}</b><span>${esc(q.s)}</span></div>`).join('')}</div>
      </div>
      <div class="logos-sec">${logoSec}</div></div>`;

    // BODY
    let m = '';
    // intro
    m += `<section class="reveal"><span class="eyebrow">El examen</span><h2 class="h-sec">${esc(B.introTitle)}</h2><p class="lead">${B.intro}</p>${B.introTiles ? `<div class="tiles" style="margin-top:18px">${B.introTiles.map(t => `<div class="tile"><b>${t.b}</b><span>${esc(t.s)}</span></div>`).join('')}</div>` : ''}</section>`;

    let n = 0;
    if (B.fundamentos && B.fundamentos.length) {
      n++;
      m += section('fundamentos', `Materia ${n} · Técnica básica`, 'Movimientos fundamentales', '기본 동작',
        techCards(B.fundamentos) + (B.fundamentosPrev ? prevNote(B.fundamentosPrev) : ''),
        B.fundamentosLead || 'Técnicas de puño, defensa y ataque ejecutadas en posición fija. Estas son las <strong>nuevas</strong> de tu nivel; en el examen también se evalúan todas las de cinturones anteriores.');
    }
    if (B.posiciones && B.posiciones.length) {
      n++;
      m += section('posiciones', `Materia ${n} · Posiciones`, 'Posiciones', '서기',
        techCards(B.posiciones) + (B.posicionesPrev ? prevNote(B.posicionesPrev) : ''),
        B.posicionesLead || 'La base de toda técnica. Posiciones nuevas que se suman en este nivel.');
    }
    if (B.tuls && B.tuls.length) {
      n++;
      let tbody = tulCards(B.tuls);
      if (B.tulKeys) tbody += `<div class="tiles" style="margin-top:18px">${B.tulKeys.map(t => `<div class="tile"><b>${t.b}</b><span>${esc(t.s)}</span></div>`).join('')}</div>`;
      if (B.tulDetail) tbody += tulDetail(B.tulDetail);
      m += section('tul', `Materia ${n} · Tul (Forma)`, 'Tul', '틀', tbody, B.tulLead);
      if (B.tulCheck) {
        m += `<section class="reveal"><div class="check"><span class="eyebrow">Pauta de examen · Tul</span><h2 class="h-sec">¿Qué evalúa el examinador?</h2><ul>${B.tulCheck.map(c => `<li><span class="mk">${CHECK_SVG}</span><span>${c}</span></li>`).join('')}</ul></div></section>`;
      }
    }
    if (B.patadas && B.patadas.length) {
      n++;
      m += section('patadas', `Materia ${n} · Patadas`, 'Patadas', '차기',
        techCards(B.patadas) + (B.patadasPrev ? prevNote(B.patadasPrev) : ''),
        B.patadasLead || 'Técnicas de pierna del examen. Las nuevas de tu nivel.');
    }
    if (B.combate && B.combate.length) {
      n++;
      m += section('combate', `Materia ${n} · Combate`, 'Combate', '맞서기',
        listCards(B.combate),
        B.combateLead || 'Modalidades de combate que debes demostrar.');
    }
    // Defensa personal (siempre presente)
    m += section('defensa', 'Materia · Defensa personal', 'Defensa personal', '호신술',
      B.defensa && B.defensa.length ? listCards(B.defensa) : noticeBlock({ text: `La defensa personal <b>no se evalúa en este nivel</b>. Según el currículo de la academia, esta materia comienza más adelante.`, when: B.defensaWhen }));
    // Rotura (siempre presente)
    m += section('rotura', 'Materia · Rotura', 'Rotura', '격파',
      B.rotura && B.rotura.length ? listCards(B.rotura) : noticeBlock({ text: `La rotura de tablas <b>no se evalúa en este nivel</b>. Se introduce en grados intermedios.`, when: B.roturaWhen }));
    // Teoría
    if (B.teoria && B.teoria.length) {
      n++;
      m += section('teoria', `Materia ${n} · Teoría`, 'Teoría', '이론',
        theoryCards(B.teoria),
        'El examinador puede preguntar cualquiera de estos temas. Apréndelos de memoria.');
    }
    // Para recordar
    if (B.recordar) {
      m += `<section class="reveal"><div class="callout"><div class="callout__icon"><span class="kr">${esc(B.recordarIcon || '武')}</span></div><div><h3>Para recordar</h3><p>${B.recordar}</p></div></div></section>`;
    }
    el('main').innerHTML = m;

    // FOOTER
    el('foot').innerHTML = `<div class="cover__tape"></div><div class="foot">
      <div class="foot__logos"><div class="pri">${logoMain.replace(/<figcaption>.*?<\/figcaption>/g, '')}</div><div class="sec">${logoSec.replace(/<figcaption>.*?<\/figcaption>/g, '')}</div></div>
      <div class="foot__title"><b>Mugan</b> Academia · Taekwon-Do ITF</div>
      <div class="foot__meta">Tutorial de examinación · Cinturón ${esc(B.name)} (${esc(B.grade)}) · Materia del currículo de la academia</div>
      <div class="foot__belt"><span class="belt-vis" aria-hidden="true"><i class="base"></i>${B.tip ? '<i class="tip"></i>' : ''}</span> Currículo de examinación · Academias Taekwon-Do ITF Chile</div></div>`;

    document.title = `${B.name} · ${B.grade} · Mugan Academia`;

    // animación aparición
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver((ents) => { ents.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: .1, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
