/* ============================================================
   MUGAN — DATOS DEL SITIO (archivo editable)
   ============================================================
   👉 ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR para cambiar
   contenidos: textos, horarios, precios, links de YouTube,
   rutas de mp3 / mp4 / tutoriales HTML, noticias y fotos.

   Convenciones:
   - Rutas de imágenes:   "img/nombre.jpg"        (carpeta /img)
   - Rutas de audios:     "audio/nombre.mp3"      (carpeta /audio)
   - Rutas de videos mp4: "video/nombre.mp4"      (carpeta /video)
   - Rutas de tutoriales: "tutoriales/nombre.html" (carpeta /tutoriales)
     → un archivo HTML por cinturón; se muestra embebido en la pestaña
       "Tutoriales" de la Zona Alumnos. Para crear uno nuevo (ej: los Dan),
       copia un archivo existente como tutoriales/cinturon-blanco.html y edita
       el objeto window.BELT del final; reutiliza tutorial.css y tutorial.js.
   - Videos de YouTube:   youtubeId: "dQw4w9WgXcQ" ← solo el ID,
     lo que va después de "watch?v=" en la URL (sirven los no listados).
   - Si un campo está vacío (""), el sitio muestra un placeholder
     elegante en su lugar — nada se rompe.
   ============================================================ */

window.MUGAN = {

  /* ---------- CONFIGURACIÓN GENERAL ---------- */
  config: {
    nombre: "Mugan",
    nombreCompleto: "Mugan Academia Taekwon-Do ITF",
    lema: "Forja tu espíritu indomable. Taekwon-Do ITF tradicional en Concepción y Talcahuano.", // ✏️ REEMPLAZAR por el lema real
    logo: "img/logo-mugan.png",

    // Número para el botón de WhatsApp (formato internacional sin "+" ni espacios)
    whatsapp: "56984294445",
    whatsappMensaje: "Hola! Quiero información sobre las clases de Taekwon-Do en Mugan 🥋",

    telefono: "+56 9 8429 4445 · +56 9 6323 4797",
    email: "muganbiobio@gmail.com",

    /* ---------- SEDES ----------
       Para cada sede: en Google Maps → Compartir → Insertar un mapa →
       copia el src del iframe y pégalo en mapaEmbed. */
    sedes: [
      {
        nombre: "Sede Concepción",
        direccion: "Pronto nueva ubicación",
        mapaEmbed: "https://maps.google.com/maps?q=Concepci%C3%B3n%2C%20Chile&t=&z=13&ie=UTF8&iwloc=&output=embed",
      },
      {
        nombre: "Sede Talcahuano",
        direccion: "Palacio del Deporte, 2º piso — La Tortuga de Talcahuano",
        mapaEmbed: "https://maps.google.com/maps?q=Estadio%20La%20Tortuga%20Talcahuano&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
    ],

    redes: {
      instagram: "https://instagram.com/mugan.tkd", // ✏️ REEMPLAZAR
      tiktok: "https://tiktok.com/@mugan.tkd",      // ✏️ REEMPLAZAR
      youtube: "https://youtube.com/@mugantkd.tv",    // ✏️ REEMPLAZAR
    },

    // Video del hero: sube un mp4 corto (10-15 s, comprimido) a /video
    // y este se reproducirá automáticamente. Mientras no exista,
    // se muestra la foto de respaldo con efecto Ken Burns.
    heroVideo: "video/hero.mp4",
    heroFallback: "img/clase-ninos.jpg",
  },

  /* ---------- QUIÉNES SOMOS ---------- */
  quienesSomos: {
    parrafos: [
      // ✏️ REEMPLAZAR por la presentación real de la academia
      "Mugan es una academia de Taekwon-Do ITF con sedes en Concepción y Talcahuano, dedicada a la enseñanza del arte marcial en su forma tradicional, tal como lo sistematizó el General Choi Hong Hi.",
      "Entrenamos cuerpo y mente: técnica, disciplina y valores que acompañan a nuestros alumnos dentro y fuera del dojang, desde los más pequeños hasta los adultos.",
    ],
    foto: "img/quienes-somos.jpg",
  },

  // Foto de la sección "Valores" (composición ITF). ✏️ "" → sin foto
  valoresFoto: "img/valores-itf.jpg",
  valores: [
    { es: "Cortesía",            kr: "Ye Ui",       hangul: "예의",     desc: "Respeto hacia compañeros, instructores y el arte." },
    { es: "Integridad",          kr: "Yom Chi",     hangul: "염치",     desc: "Distinguir lo correcto de lo incorrecto y actuar en consecuencia." },
    { es: "Perseverancia",       kr: "In Nae",      hangul: "인내",     desc: "Constancia para superar cada obstáculo, paso a paso." },
    { es: "Autocontrol",         kr: "Guk Gi",      hangul: "극기",     desc: "Dominio de uno mismo, dentro y fuera del combate." },
    { es: "Espíritu indomable",  kr: "Baekjul Boolgool", hangul: "백절불굴", desc: "Coraje frente a la adversidad, sin rendirse jamás." },
  ],

  /* ---------- INSTRUCTORES ---------- */
  instructores: [
    {
      nombre: "José Miguel Espinoza",
      grado: "I Dan Taekwon-Do ITF · II Dan Choikwando",
      rol: "Instructor",
      bio: "@joseflowdo",
      foto: "img/jose-miguel.jpg",
    },
    {
      nombre: "Álvaro Caballero",
      grado: "I Dan Taekwon-Do ITF · I Dan Taekwondo WT",
      rol: "Instructor",
      bio: "@alvaro_caballero.diaz",
      foto: "img/alvaro.jpg",
    },
    {
      nombre: "Instructor asistente",
      grado: "",
      rol: "Cupo por confirmar",
      bio: "",
      foto: "", // sin foto → placeholder automático
    },
  ],

  /* ---------- HORARIOS Y PLANES ---------- */
  horarios: [
    {
      categoria: "Infantil", edades: "5 a 9 años",
      bloques: [
        { dia: "Lunes y Miércoles", hora: "17:30 – 18:30" },  // ✏️ REEMPLAZAR
        { dia: "Sábado", hora: "10:00 – 11:00" },
      ],
    },
    {
      categoria: "Juvenil", edades: "10 a 15 años",
      bloques: [
        { dia: "Lunes y Miércoles", hora: "18:30 – 19:45" },
        { dia: "Viernes", hora: "18:00 – 19:15" },
      ],
    },
    {
      categoria: "Adultos", edades: "16+ años",
      bloques: [
        { dia: "Lunes y Miércoles", hora: "20:00 – 21:30" },
        { dia: "Viernes", hora: "19:30 – 21:00" },
      ],
    },
  ],

  planes: [
    {
      nombre: "Plan Mensual", precio: "$0", periodo: "/mes",      // ✏️ REEMPLAZAR precio
      detalle: "2 clases por semana · Matrícula $0",
      destacado: false,
    },
    {
      nombre: "Plan Full", precio: "$0", periodo: "/mes",         // ✏️ REEMPLAZAR precio
      detalle: "Clases ilimitadas · Matrícula $0",
      destacado: true,
    },
    {
      nombre: "Plan Familiar", precio: "$0", periodo: "/mes",     // ✏️ REEMPLAZAR precio
      detalle: "2 o más integrantes · Matrícula única",
      destacado: false,
    },
  ],

  /* ---------- ZONA ALUMNOS: MATERIA POR CINTURÓN ----------
     Cada cinturón tiene: colores reales (css), punta (tip),
     tules, videos y tutoriales (HTML). Agrega o quita ítems libremente.
     ------------------------------------------------------- */
  // Foto de portada de la sección Zona Alumnos. ✏️ "" → sin foto
  zonaAlumnosFoto: "img/zona-alumnos.png",
  cinturones: [
    {
      id: "10gup", nombre: "10° Gup", color: "#f4f4f4", tip: null, textoOscuro: true,
      titulo: "Cinturón Blanco",
      significado: "Pureza: el alumno que aún no tiene conocimientos de Taekwon-Do.",
      progreso: 0,
      tules: [
        {
          nombre: "Saju Jirugi",
          movimientos: "Ejercicio fundamental",
          significado: "Golpe en cuatro direcciones: introduce la posición caminante y el golpe de puño medio.",
          diagrama: "img/pretul_01_saju_jirugi.png",
          youtubeId: "https://www.youtube.com/watch?v=qYBxko-4yZo&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=9",           // ✏️ ID de YouTube del video técnico
        },
        {
          nombre: "Saju Makgi",
          movimientos: "Ejercicio fundamental",
          significado: "Bloqueo en cuatro direcciones: bloqueo bajo y medio, base de la defensa.",
          diagrama: "img/pretul_02_saju_makgi.png",
          youtubeId: "https://www.youtube.com/watch?v=AD3WyTLkVhY",
        },
      ],
      videos: [
        { titulo: "Posiciones básicas (placeholder)", youtubeId: "https://www.youtube.com/watch?v=6X1OTIAaJII&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=1", mp4: "" },
        { titulo: "Saju Jirugi paso a paso (placeholder)", youtubeId: "https://www.youtube.com/watch?v=qYBxko-4yZo&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=9", mp4: "" },
      ],
      audios: [
        { titulo: "Saludo y comandos básicos", desc: "Charyot · Kyong-ye · Junbi · Sijak · Goman", src: "audio/comandos-basicos.mp3" },
        { titulo: "Números en coreano 1–10", desc: "Hana, Dul, Set, Net…", src: "audio/numeros.mp3" },
      ],
      tutoriales: [
        { titulo: "Materia 10° Gup — Cinturón Blanco", src: "tutoriales/cinturon-blanco.html" },
      ],
    },
    {
      id: "9gup", nombre: "9° Gup", color: "#f4f4f4", tip: "#FFD400", textoOscuro: true,
      titulo: "Blanco punta amarilla",
      significado: "El primer paso: la semilla comienza a germinar.",
      progreso: 10,
      tules: [
        {
          nombre: "Chon-Ji",
          movimientos: "19 movimientos",
          significado: "«Cielo y Tierra». El inicio de la historia del mundo y del alumno en el Taekwon-Do.",
          diagrama: "img/tul_03_chon_ji.png", youtubeId: "https://www.youtube.com/watch?v=0geBPLJn0GI",
        },
      ],
      videos: [{ titulo: "Tul Chon-Ji completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=0geBPLJn0GI", mp4: "" }],
      audios: [{ titulo: "Terminología 9° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-9gup.mp3" }],
      tutoriales: [{ titulo: "Materia 9° Gup — Blanco punta amarilla", src: "tutoriales/cinturon-punta_amarilla.html" }],
    },
    {
      id: "8gup", nombre: "8° Gup", color: "#FFD400", tip: null, textoOscuro: true,
      titulo: "Cinturón Amarillo",
      significado: "La tierra donde la semilla echa raíces.",
      progreso: 20,
      tules: [
        {
          nombre: "Dan-Gun",
          movimientos: "21 movimientos",
          significado: "Honra a Dan-Gun, legendario fundador de Corea en el año 2333 a.C.",
          diagrama: "img/tul_04_dan_gun.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Dan-Gun completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 8° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-8gup.mp3" }],
      tutoriales: [{ titulo: "Materia 8° Gup — Cinturón Amarillo", src: "tutoriales/cinturon-amarillo.html" }],
    },
    {
      id: "7gup", nombre: "7° Gup", color: "#FFD400", tip: "#1C9C45", textoOscuro: true,
      titulo: "Amarillo punta verde",
      significado: "La planta comienza a crecer hacia la luz.",
      progreso: 30,
      tules: [
        {
          nombre: "Do-San",
          movimientos: "24 movimientos",
          significado: "Seudónimo del patriota Ahn Chang-Ho, dedicado a la educación e independencia de Corea.",
          diagrama: "img/tul_05_do_san.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Do-San completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 7° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-7gup.mp3" }],
      tutoriales: [{ titulo: "Materia 7° Gup — Amarillo punta verde", src: "tutoriales/cinturon-punta_verde.html" }],
    },
    {
      id: "6gup", nombre: "6° Gup", color: "#1C9C45", tip: null,
      titulo: "Cinturón Verde",
      significado: "La planta que crece: la técnica empieza a desarrollarse.",
      progreso: 40,
      tules: [
        {
          nombre: "Won-Hyo",
          movimientos: "28 movimientos",
          significado: "Monje que introdujo el budismo en la dinastía Silla en el año 686 d.C.",
          diagrama: "img/tul_06_won_hyo.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Won-Hyo completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 6° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-6gup.mp3" }],
      tutoriales: [{ titulo: "Materia 6° Gup — Cinturón Verde", src: "tutoriales/cinturon-verde.html" }],
    },
    {
      id: "5gup", nombre: "5° Gup", color: "#1C9C45", tip: "#1769FF",
      titulo: "Verde punta azul",
      significado: "El árbol mira hacia el cielo al que apunta.",
      progreso: 50,
      tules: [
        {
          nombre: "Yul-Gok",
          movimientos: "38 movimientos",
          significado: "Seudónimo del filósofo Yi I (1536-1584), llamado el «Confucio de Corea».",
          diagrama: "img/tul_05_yul_gok.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Yul-Gok completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 5° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-5gup.mp3" }],
      tutoriales: [{ titulo: "Materia 5° Gup — Verde punta azul", src: "tutoriales/cinturon-punta_azul.html" }],
    },
    {
      id: "4gup", nombre: "4° Gup", color: "#1769FF", tip: null,
      titulo: "Cinturón Azul",
      significado: "El cielo hacia el cual el árbol crece, ya maduro.",
      progreso: 60,
      tules: [
        {
          nombre: "Joong-Gun",
          movimientos: "32 movimientos",
          significado: "Honra al patriota Ahn Joong-Gun; los 32 movimientos aluden a su edad al morir.",
          diagrama: "img/tul_07_joong_gun.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Joong-Gun completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 4° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-4gup.mp3" }],
      tutoriales: [{ titulo: "Materia 4° Gup — Cinturón Azul", src: "tutoriales/cinturon-azul.html" }],
    },
    {
      id: "3gup", nombre: "3° Gup", color: "#1769FF", tip: "#E11D2E",
      titulo: "Azul punta roja",
      significado: "Acercándose al peligro: la responsabilidad crece.",
      progreso: 70,
      tules: [
        {
          nombre: "Toi-Gye",
          movimientos: "37 movimientos",
          significado: "Seudónimo del erudito Yi Hwang (siglo XVI), autoridad del neoconfucianismo.",
          diagrama: "img/tul_08_toi_gye.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Toi-Gye completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 3° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-3gup.mp3" }],
      tutoriales: [{ titulo: "Materia 3° Gup — Azul punta roja", src: "tutoriales/cinturon-punta_roja.html" }],
    },
    {
      id: "2gup", nombre: "2° Gup", color: "#E11D2E", tip: null,
      titulo: "Cinturón Rojo",
      significado: "Peligro: el alumno debe controlar su poder; advertencia al oponente.",
      progreso: 80,
      tules: [
        {
          nombre: "Hwa-Rang",
          movimientos: "29 movimientos",
          significado: "Honra al grupo juvenil Hwa-Rang de la dinastía Silla, origen del espíritu guerrero coreano.",
          diagrama: "img/tul_09_hwa_rang.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Hwa-Rang completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 2° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-2gup.mp3" }],
      tutoriales: [{ titulo: "Materia 2° Gup — Cinturón Rojo", src: "tutoriales/cinturon-rojo.html" }],
    },
    {
      id: "1gup", nombre: "1° Gup", color: "#E11D2E", tip: "#111111",
      titulo: "Rojo punta negra",
      significado: "El umbral del cinturón negro: madurez técnica y mental.",
      progreso: 90,
      tules: [
        {
          nombre: "Choong-Moo",
          movimientos: "30 movimientos",
          significado: "Nombre del almirante Yi Soon-Sin, inventor del barco tortuga (1592).",
          diagrama: "img/tul_10_choong_moo.png", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Choong-Moo completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 1° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-1gup.mp3" }],
      tutoriales: [{ titulo: "Materia 1° Gup — Rojo punta negra", src: "tutoriales/cinturon-punta_negra.html" }],
    },
    {
      id: "1dan", nombre: "I Dan", color: "#111111", tip: null, dan: "I",
      titulo: "Cinturón Negro · I Dan",
      significado: "Madurez y dominio de los fundamentos. Lo opuesto al blanco: la oscuridad que ya no teme.",
      progreso: 100,
      tules: [
        { nombre: "Kwang-Gae", movimientos: "39 movimientos", significado: "Honra al rey Kwang-Gae-Toh-Wang de Koguryo, gran expansor del territorio.", diagrama: "img/tul_11_kwang_gae.png", youtubeId: "" },
        { nombre: "Po-Eun", movimientos: "36 movimientos", significado: "Seudónimo del poeta y fiel patriota Chong Mong-Chu (siglo XIV).", diagrama: "img/tul_12_po_eun.png", youtubeId: "" },
        { nombre: "Ge-Baek", movimientos: "44 movimientos", significado: "Honra al general Ge-Baek de Baek Je, símbolo de disciplina severa.", diagrama: "img/tul_13_gae_baek.png", youtubeId: "" },
      ],
      videos: [{ titulo: "Tules de I Dan (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología I Dan", desc: "Teoría avanzada del nivel", src: "audio/term-1dan.mp3" }],
      tutoriales: [{ titulo: "Materia I Dan — Cinturón Negro", src: "tutoriales/cinturon-negro_1dan.html" }],
    },
    {
      id: "2dan", nombre: "II Dan", color: "#111111", tip: null, dan: "II",
      titulo: "Cinturón Negro · II Dan",
      significado: "Profundización del arte: el practicante se vuelve guía de otros.",
      progreso: 100,
      tules: [
        { nombre: "Eui-Am", movimientos: "45 movimientos", significado: "Seudónimo de Son Byong Hi, líder del movimiento de independencia de 1919.", diagrama: "img/tul_14_eui_am.png", youtubeId: "" },
        { nombre: "Choong-Jang", movimientos: "52 movimientos", significado: "Seudónimo del general Kim Duk Ryang (siglo XIV).", diagrama: "img/tul_15_choong_jang.png", youtubeId: "" },
        { nombre: "Juche", movimientos: "45 movimientos", significado: "La idea de que el ser humano es dueño de su propio destino.", diagrama: "img/tul_16_juche.png", youtubeId: "" },
      ],
      videos: [{ titulo: "Tules de II Dan (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología II Dan", desc: "Teoría avanzada del nivel", src: "audio/term-2dan.mp3" }],
      tutoriales: [{ titulo: "Materia II Dan — Cinturón Negro", src: "tutoriales/cinturon-negro_2dan.html" }],
    },
    {
      id: "3dan", nombre: "III Dan", color: "#111111", tip: null, dan: "III",
      titulo: "Cinturón Negro · III Dan",
      significado: "Camino hacia la maestría: técnica, enseñanza y ejemplo.",
      progreso: 100,
      tules: [
        { nombre: "Sam-Il", movimientos: "33 movimientos", significado: "El movimiento de independencia del 1 de marzo de 1919; 33 por sus líderes.", diagrama: "img/tul_17_sam_il.png", youtubeId: "" },
        { nombre: "Yoo-Sin", movimientos: "68 movimientos", significado: "Honra al general Kim Yoo Sin; 68 por el año 668, unificación de Corea.", diagrama: "img/tul_18_yoo_sin.png", youtubeId: "" },
        { nombre: "Choi-Yong", movimientos: "46 movimientos", significado: "Honra al general Choi Yong, símbolo de lealtad y honestidad.", diagrama: "img/tul_19_choi_yong.png", youtubeId: "" },
      ],
      videos: [{ titulo: "Tules de III Dan (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología III Dan", desc: "Teoría avanzada del nivel", src: "audio/term-3dan.mp3" }],
      tutoriales: [{ titulo: "Materia III Dan — Cinturón Negro", src: "tutoriales/cinturon-negro_3dan.html" }],
    },
  ],

  /* ---------- MURO SOCIAL ----------
     Para los embeds oficiales: pega el código de inserción de cada
     plataforma en los campos "embedHtml" (Instagram: ⋯ → Insertar;
     TikTok: Compartir → Insertar; YouTube: usa youtubeId).
     Si quedan vacíos se muestra una ventana placeholder con link. */
  social: {
    // Foto de portada de la sección Comunidad / Muro en vivo. ✏️ "" → sin foto
    muroFoto: "img/muro-en-vivo.jpg",
    instagram: { usuario: "@mugan.tkd", embedHtml: "" },   // ✏️ REEMPLAZAR
    tiktok:    { usuario: "@mugan.tkd", embedHtml: "" },   // ✏️ REEMPLAZAR
    youtube:   { usuario: "Mugan Academia", youtubeId: "" },   // ✏️ ID del último video
  },

  noticias: [
    {
      titulo: "Examen de grado: fecha confirmada",   // ✏️ REEMPLAZAR
      fecha: "Junio 2026",
      foto: "img/clase-teoria.jpg",
      texto: "Prepara tu materia en la Zona Alumnos. Inscripciones abiertas con tu instructor.",
    },
    {
      titulo: "Mugan presente en el torneo regional",
      fecha: "Mayo 2026",
      foto: "img/entrenamiento-paletas.jpg",
      texto: "Nuestros alumnos destacaron en tul y combate. ¡Felicitaciones a todos!",
    },
    {
      titulo: "Nuevos horarios categoría infantil",
      fecha: "Abril 2026",
      foto: "img/ninos-familia.jpg",
      texto: "Desde este mes sumamos un bloque los sábados en la mañana.",
    },
  ],

  /* ---------- GALERÍA ----------
     Agrega aquí todas las fotos que quieras (carpeta /img). */
  galeria: [
    { src: "img/galeria/foto-001.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-002.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-003.png", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-004.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-005.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-006.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-007.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-008.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-009.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-010.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-011.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-012.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-013.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-014.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-015.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-016.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-017.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-018.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-019.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-020.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-021.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-022.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-023.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-024.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-025.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-026.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-027.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-028.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-029.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-030.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-031.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-032.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-033.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-034.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-035.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-036.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-037.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-038.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-039.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-040.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-041.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-042.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-043.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-044.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-045.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-046.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-047.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-048.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-049.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-050.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-051.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-052.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-053.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-054.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-055.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-056.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-057.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-058.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-059.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-060.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-061.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-062.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-063.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-064.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-065.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-066.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-067.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-068.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-069.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-070.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-071.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-072.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-073.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-074.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-075.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-076.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-077.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-078.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-079.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-080.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-081.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-082.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-083.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-084.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-085.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-086.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-087.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-088.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-089.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-090.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-091.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-092.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-093.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-094.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-095.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-096.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-097.jpg", alt: "Mugan Taekwon-Do ITF" },
  ],
};
