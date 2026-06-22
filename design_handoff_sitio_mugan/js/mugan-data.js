/* ============================================================
   MUGAN — DATOS DEL SITIO (archivo editable)
   ============================================================
   👉 ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR para cambiar
   contenidos: textos, horarios, precios, links de YouTube,
   rutas de mp3 / mp4 / PDF, noticias y fotos.

   Convenciones:
   - Rutas de imágenes:   "img/nombre.jpg"        (carpeta /img)
   - Rutas de audios:     "audio/nombre.mp3"      (carpeta /audio)
   - Rutas de videos mp4: "video/nombre.mp4"      (carpeta /video)
   - Rutas de PDFs:       "pdfs/nombre.pdf"       (carpeta /pdfs)
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

    // ✏️ REEMPLAZAR: número en formato internacional sin "+" ni espacios
    whatsapp: "56912345678",
    whatsappMensaje: "Hola! Quiero información sobre las clases de Taekwon-Do en Mugan 🥋",

    telefono: "+56 9 1234 5678",            // ✏️ REEMPLAZAR
    email: "contacto@muganacademia.cl",     // ✏️ REEMPLAZAR

    /* ---------- SEDES ----------
       Para cada sede: en Google Maps → Compartir → Insertar un mapa →
       copia el src del iframe y pégalo en mapaEmbed. */
    sedes: [
      {
        nombre: "Sede Concepción",
        direccion: "Calle Ejemplo 1234, Concepción",   // ✏️ REEMPLAZAR
        mapaEmbed: "https://maps.google.com/maps?q=Concepci%C3%B3n%2C%20Chile&t=&z=14&ie=UTF8&iwloc=&output=embed",
      },
      {
        nombre: "Sede Talcahuano",
        direccion: "Calle Ejemplo 567, Talcahuano",    // ✏️ REEMPLAZAR
        mapaEmbed: "https://maps.google.com/maps?q=Talcahuano%2C%20Chile&t=&z=14&ie=UTF8&iwloc=&output=embed",
      },
    ],

    redes: {
      instagram: "https://instagram.com/muganacademia", // ✏️ REEMPLAZAR
      tiktok: "https://tiktok.com/@muganacademia",      // ✏️ REEMPLAZAR
      youtube: "https://youtube.com/@muganacademia",    // ✏️ REEMPLAZAR
    },

    // Video del hero: sube un mp4 corto (10-15 s, comprimido) a /video
    // y este se reproducirá automáticamente. Mientras no exista,
    // se muestra la foto de respaldo con efecto Ken Burns.
    heroVideo: "video/hero.mp4",
    heroFallback: "img/entrenamiento-instructor.jpg",
  },

  /* ---------- QUIÉNES SOMOS ---------- */
  quienesSomos: {
    parrafos: [
      // ✏️ REEMPLAZAR por la presentación real de la academia
      "Mugan es una academia de Taekwon-Do ITF con sedes en Concepción y Talcahuano, dedicada a la enseñanza del arte marcial en su forma tradicional, tal como lo sistematizó el General Choi Hong Hi.",
      "Entrenamos cuerpo y mente: técnica, disciplina y valores que acompañan a nuestros alumnos dentro y fuera del dojang, desde los más pequeños hasta los adultos.",
    ],
    foto: "img/clase-teoria.jpg",
  },

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
      nombre: "Nombre Instructor",       // ✏️ REEMPLAZAR
      grado: "IV Dan",                   // ✏️ REEMPLAZAR
      rol: "Director e instructor jefe",
      bio: "Más de 20 años de trayectoria en Taekwon-Do ITF.", // ✏️ REEMPLAZAR
      foto: "img/entrenamiento-instructor.jpg", // ✏️ REEMPLAZAR por retrato
    },
    {
      nombre: "Nombre Instructora",      // ✏️ REEMPLAZAR
      grado: "II Dan",
      rol: "Instructora categoría infantil",
      bio: "Especialista en formación de niños y niñas.",
      foto: "", // sin foto → placeholder automático
    },
    {
      nombre: "Nombre Asistente",        // ✏️ REEMPLAZAR
      grado: "I Dan",
      rol: "Instructor asistente",
      bio: "Competidor activo en torneos nacionales.",
      foto: "",
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
      nombre: "Plan Mensual", precio: "$35.000", periodo: "/mes",      // ✏️ REEMPLAZAR precios
      detalle: "2 clases por semana · Matrícula $15.000",
      destacado: false,
    },
    {
      nombre: "Plan Full", precio: "$45.000", periodo: "/mes",
      detalle: "Clases ilimitadas · Matrícula $15.000",
      destacado: true,
    },
    {
      nombre: "Plan Familiar", precio: "$80.000", periodo: "/mes",
      detalle: "2 o más integrantes · Matrícula única",
      destacado: false,
    },
  ],

  /* ---------- ZONA ALUMNOS: MATERIA POR CINTURÓN ----------
     Cada cinturón tiene: colores reales (css), punta (tip),
     tules, videos, audios y pdfs. Agrega o quita ítems libremente.
     ------------------------------------------------------- */
  cinturones: [
    {
      id: "10gup", nombre: "10° Gup", color: "#f4f4f4", tip: null, textoOscuro: true,
      titulo: "Cinturón Blanco",
      significado: "Pureza: el alumno que aún no tiene conocimientos de Taekwon-Do.",
      progreso: 0,
      tules: [
        {
          nombre: "Saju Jirugi / Saju Makgi",
          movimientos: "Ejercicios fundamentales",
          significado: "Golpe y bloqueo en cuatro direcciones: la base de todo lo que vendrá.",
          diagrama: "",            // ✏️ ruta a imagen del diagrama, ej: "img/tules/saju.png"
          youtubeId: "",           // ✏️ ID de YouTube del video técnico
        },
      ],
      videos: [
        { titulo: "Posiciones básicas (placeholder)", youtubeId: "", mp4: "" },
        { titulo: "Saju Jirugi paso a paso (placeholder)", youtubeId: "", mp4: "" },
      ],
      audios: [
        { titulo: "Saludo y comandos básicos", desc: "Charyot · Kyong-ye · Junbi · Sijak · Goman", src: "audio/comandos-basicos.mp3" },
        { titulo: "Números en coreano 1–10", desc: "Hana, Dul, Set, Net…", src: "audio/numeros.mp3" },
      ],
      pdfs: [
        { titulo: "Manual 10° Gup", src: "pdfs/ejemplo-tutorial.pdf" }, // ✏️ REEMPLAZAR por el PDF real
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Chon-Ji completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 9° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-9gup.mp3" }],
      pdfs: [{ titulo: "Manual 9° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Dan-Gun completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 8° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-8gup.mp3" }],
      pdfs: [{ titulo: "Manual 8° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Do-San completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 7° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-7gup.mp3" }],
      pdfs: [{ titulo: "Manual 7° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Won-Hyo completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 6° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-6gup.mp3" }],
      pdfs: [{ titulo: "Manual 6° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Yul-Gok completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 5° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-5gup.mp3" }],
      pdfs: [{ titulo: "Manual 5° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Joong-Gun completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 4° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-4gup.mp3" }],
      pdfs: [{ titulo: "Manual 4° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Toi-Gye completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 3° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-3gup.mp3" }],
      pdfs: [{ titulo: "Manual 3° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Hwa-Rang completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 2° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-2gup.mp3" }],
      pdfs: [{ titulo: "Manual 2° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
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
          diagrama: "", youtubeId: "",
        },
      ],
      videos: [{ titulo: "Tul Choong-Moo completo (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología 1° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-1gup.mp3" }],
      pdfs: [{ titulo: "Manual 1° Gup", src: "pdfs/ejemplo-tutorial.pdf" }],
    },
    {
      id: "1dan", nombre: "I Dan", color: "#111111", tip: null, dan: "I",
      titulo: "Cinturón Negro · I Dan",
      significado: "Madurez y dominio de los fundamentos. Lo opuesto al blanco: la oscuridad que ya no teme.",
      progreso: 100,
      tules: [
        { nombre: "Kwang-Gae", movimientos: "39 movimientos", significado: "Honra al rey Kwang-Gae-Toh-Wang de Koguryo, gran expansor del territorio.", diagrama: "", youtubeId: "" },
        { nombre: "Po-Eun", movimientos: "36 movimientos", significado: "Seudónimo del poeta y fiel patriota Chong Mong-Chu (siglo XIV).", diagrama: "", youtubeId: "" },
        { nombre: "Ge-Baek", movimientos: "44 movimientos", significado: "Honra al general Ge-Baek de Baek Je, símbolo de disciplina severa.", diagrama: "", youtubeId: "" },
      ],
      videos: [{ titulo: "Tules de I Dan (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología I Dan", desc: "Teoría avanzada del nivel", src: "audio/term-1dan.mp3" }],
      pdfs: [{ titulo: "Manual I Dan", src: "pdfs/ejemplo-tutorial.pdf" }],
    },
    {
      id: "2dan", nombre: "II Dan", color: "#111111", tip: null, dan: "II",
      titulo: "Cinturón Negro · II Dan",
      significado: "Profundización del arte: el practicante se vuelve guía de otros.",
      progreso: 100,
      tules: [
        { nombre: "Eui-Am", movimientos: "45 movimientos", significado: "Seudónimo de Son Byong Hi, líder del movimiento de independencia de 1919.", diagrama: "", youtubeId: "" },
        { nombre: "Choong-Jang", movimientos: "52 movimientos", significado: "Seudónimo del general Kim Duk Ryang (siglo XIV).", diagrama: "", youtubeId: "" },
        { nombre: "Juche", movimientos: "45 movimientos", significado: "La idea de que el ser humano es dueño de su propio destino.", diagrama: "", youtubeId: "" },
      ],
      videos: [{ titulo: "Tules de II Dan (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología II Dan", desc: "Teoría avanzada del nivel", src: "audio/term-2dan.mp3" }],
      pdfs: [{ titulo: "Manual II Dan", src: "pdfs/ejemplo-tutorial.pdf" }],
    },
    {
      id: "3dan", nombre: "III Dan", color: "#111111", tip: null, dan: "III",
      titulo: "Cinturón Negro · III Dan",
      significado: "Camino hacia la maestría: técnica, enseñanza y ejemplo.",
      progreso: 100,
      tules: [
        { nombre: "Sam-Il", movimientos: "33 movimientos", significado: "El movimiento de independencia del 1 de marzo de 1919; 33 por sus líderes.", diagrama: "", youtubeId: "" },
        { nombre: "Yoo-Sin", movimientos: "68 movimientos", significado: "Honra al general Kim Yoo Sin; 68 por el año 668, unificación de Corea.", diagrama: "", youtubeId: "" },
        { nombre: "Choi-Yong", movimientos: "46 movimientos", significado: "Honra al general Choi Yong, símbolo de lealtad y honestidad.", diagrama: "", youtubeId: "" },
      ],
      videos: [{ titulo: "Tules de III Dan (placeholder)", youtubeId: "", mp4: "" }],
      audios: [{ titulo: "Terminología III Dan", desc: "Teoría avanzada del nivel", src: "audio/term-3dan.mp3" }],
      pdfs: [{ titulo: "Manual III Dan", src: "pdfs/ejemplo-tutorial.pdf" }],
    },
  ],

  /* ---------- MURO SOCIAL ----------
     Para los embeds oficiales: pega el código de inserción de cada
     plataforma en los campos "embedHtml" (Instagram: ⋯ → Insertar;
     TikTok: Compartir → Insertar; YouTube: usa youtubeId).
     Si quedan vacíos se muestra una ventana placeholder con link. */
  social: {
    instagram: { usuario: "@muganacademia", embedHtml: "" },   // ✏️ REEMPLAZAR
    tiktok:    { usuario: "@muganacademia", embedHtml: "" },   // ✏️ REEMPLAZAR
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
      foto: "img/entrenamiento-instructor.jpg",
      texto: "Desde este mes sumamos un bloque los sábados en la mañana.",
    },
  ],

  /* ---------- GALERÍA ----------
     Agrega aquí todas las fotos que quieras (carpeta /img). */
  galeria: [
    { src: "img/entrenamiento-instructor.jpg", alt: "Clase de tul con el instructor" },
    { src: "img/entrenamiento-paletas.jpg", alt: "Entrenamiento con paletas" },
    { src: "img/clase-teoria.jpg", alt: "Clase teórica en el dojang" },
    { src: "", alt: "Foto por agregar" },   // ✏️ slot vacío → placeholder
    { src: "", alt: "Foto por agregar" },
    { src: "", alt: "Foto por agregar" },
  ],
};
