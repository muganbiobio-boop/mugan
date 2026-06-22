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
   - Videos de YouTube:   youtubeId: "dQw4w9WgXcQ" ← el ID (lo que va
     después de "watch?v="). También puedes pegar la URL completa: el
     sitio extrae el ID solo. El video debe ser Público o No listado
     (los Privados no se pueden incrustar).
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
      instagram: "https://instagram.com/@mugan.tkd", // ✏️ REEMPLAZAR
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
        { dia: "Lunes y Miércoles", hora: "19:20 – 20:20" },  // ✏️ REEMPLAZAR
        { dia: "Sábado", hora: "10:00 – 11:00" },
      ],
    },
    {
      categoria: "Juvenil", edades: "10 a 15 años",
      bloques: [
        { dia: "Lunes y Miércoles", hora: "19:20 – 20:20" },
        { dia: "Viernes", hora: "18:00 – 19:15" },
      ],
    },
    {
      categoria: "Adultos", edades: "16+ años",
      bloques: [
        { dia: "Lunes y Miércoles", hora: "20:30 – 21:30" },
        { dia: "Viernes", hora: "20:30 – 21:30" },
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
          diagrama: "img/tul_04_dan_gun.png", youtubeId: "https://www.youtube.com/watch?v=8itOnuWW6kg&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=7",
        },
      ],
      videos: [{ titulo: "Tul Dan-Gun completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=8itOnuWW6kg&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=7", mp4: "" }],
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
          diagrama: "img/tul_05_do_san.png", youtubeId: "https://www.youtube.com/watch?v=tOMeNiOs8H0&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=6",
        },
      ],
      videos: [{ titulo: "Tul Do-San completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=tOMeNiOs8H0&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=6", mp4: "" }],
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
          diagrama: "img/tul_06_won_hyo.png", youtubeId: "https://www.youtube.com/watch?v=upN83Tg2Z98&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=5",
        },
      ],
      videos: [{ titulo: "Tul Won-Hyo completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=upN83Tg2Z98&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=5", mp4: "" }],
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
          diagrama: "img/tul_05_yul_gok.png", youtubeId: "https://www.youtube.com/watch?v=Cckg254_ZpM&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=18",
        },
      ],
      videos: [{ titulo: "Tul Yul-Gok completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=Cckg254_ZpM&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=18", mp4: "" }],
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
          diagrama: "img/tul_07_joong_gun.png", youtubeId: "https://www.youtube.com/watch?v=V5UjjpoyE_Y&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=19",
        },
      ],
      videos: [{ titulo: "Tul Joong-Gun completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=V5UjjpoyE_Y&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=19", mp4: "" }],
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
          diagrama: "img/tul_08_toi_gye.png", youtubeId: "https://www.youtube.com/watch?v=3MNBZORQ5Kw&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=20",
        },
      ],
      videos: [{ titulo: "Tul Toi-Gye completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=3MNBZORQ5Kw&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=20", mp4: "" }],
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
          diagrama: "img/tul_09_hwa_rang.png", youtubeId: "https://www.youtube.com/watch?v=a_oHkGuch-s&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=21",
        },
      ],
      videos: [{ titulo: "Tul Hwa-Rang completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=a_oHkGuch-s&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=21", mp4: "" }],
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
          diagrama: "img/tul_10_choong_moo.png", youtubeId: "https://www.youtube.com/watch?v=c7bxiuCqGEM&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=22",
        },
      ],
      videos: [{ titulo: "Tul Choong-Moo completo (placeholder)", youtubeId: "https://www.youtube.com/watch?v=c7bxiuCqGEM&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=22", mp4: "" }],
      audios: [{ titulo: "Terminología 1° Gup", desc: "Técnicas y posiciones del nivel", src: "audio/term-1gup.mp3" }],
      tutoriales: [{ titulo: "Materia 1° Gup — Rojo punta negra", src: "tutoriales/cinturon-punta_negra.html" }],
    },
    {
      id: "1dan", nombre: "I Dan", color: "#111111", tip: null, dan: "I",
      titulo: "Cinturón Negro · I Dan",
      significado: "Madurez y dominio de los fundamentos. Lo opuesto al blanco: la oscuridad que ya no teme.",
      progreso: 100,
      tules: [
        { nombre: "Kwang-Gae", movimientos: "39 movimientos", significado: "Honra al rey Kwang-Gae-Toh-Wang de Koguryo, gran expansor del territorio.", diagrama: "img/tul_11_kwang_gae.png", youtubeId: "https://www.youtube.com/watch?v=sIROpaedlRA&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=23" },
        { nombre: "Po-Eun", movimientos: "36 movimientos", significado: "Seudónimo del poeta y fiel patriota Chong Mong-Chu (siglo XIV).", diagrama: "img/tul_12_po_eun.png", youtubeId: "https://www.youtube.com/watch?v=A3cJQJR8rh0&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=24" },
        { nombre: "Ge-Baek", movimientos: "44 movimientos", significado: "Honra al general Ge-Baek de Baek Je, símbolo de disciplina severa.", diagrama: "img/tul_13_gae_baek.png", youtubeId: "https://www.youtube.com/watch?v=_5-gTw8LIGg&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=25" },
      ],
      videos: [{ titulo: "Tules de I Dan (placeholder)", youtubeId: "https://www.youtube.com/watch?v=sIROpaedlRA&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=23", mp4: "" }],
      audios: [{ titulo: "Terminología I Dan", desc: "Teoría avanzada del nivel", src: "audio/term-1dan.mp3" }],
      tutoriales: [{ titulo: "Materia I Dan — Cinturón Negro", src: "tutoriales/cinturon-negro_1dan.html" }],
    },
    {
      id: "2dan", nombre: "II Dan", color: "#111111", tip: null, dan: "II",
      titulo: "Cinturón Negro · II Dan",
      significado: "Profundización del arte: el practicante se vuelve guía de otros.",
      progreso: 100,
      tules: [
        { nombre: "Eui-Am", movimientos: "45 movimientos", significado: "Seudónimo de Son Byong Hi, líder del movimiento de independencia de 1919.", diagrama: "img/tul_14_eui_am.png", youtubeId: "https://www.youtube.com/watch?v=Xf8K4X3w52o&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=26" },
        { nombre: "Choong-Jang", movimientos: "52 movimientos", significado: "Seudónimo del general Kim Duk Ryang (siglo XIV).", diagrama: "img/tul_15_choong_jang.png", youtubeId: "https://www.youtube.com/watch?v=1aBJ296G3Fs&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=27" },
        { nombre: "Juche", movimientos: "45 movimientos", significado: "La idea de que el ser humano es dueño de su propio destino.", diagrama: "img/tul_16_juche.png", youtubeId: "https://www.youtube.com/watch?v=EXCJmAEr-Y8&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=4" },
      ],
      videos: [{ titulo: "Tules de II Dan (placeholder)", youtubeId: "https://www.youtube.com/watch?v=Xf8K4X3w52o&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=26", mp4: "" }],
      audios: [{ titulo: "Terminología II Dan", desc: "Teoría avanzada del nivel", src: "audio/term-2dan.mp3" }],
      tutoriales: [{ titulo: "Materia II Dan — Cinturón Negro", src: "tutoriales/cinturon-negro_2dan.html" }],
    },
    {
      id: "3dan", nombre: "III Dan", color: "#111111", tip: null, dan: "III",
      titulo: "Cinturón Negro · III Dan",
      significado: "Camino hacia la maestría: técnica, enseñanza y ejemplo.",
      progreso: 100,
      tules: [
        { nombre: "Sam-Il", movimientos: "33 movimientos", significado: "El movimiento de independencia del 1 de marzo de 1919; 33 por sus líderes.", diagrama: "img/tul_17_sam_il.png", youtubeId: "https://www.youtube.com/watch?v=eOfVLUyvBdY&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=28" },
        { nombre: "Yoo-Sin", movimientos: "68 movimientos", significado: "Honra al general Kim Yoo Sin; 68 por el año 668, unificación de Corea.", diagrama: "img/tul_18_yoo_sin.png", youtubeId: "https://www.youtube.com/watch?v=hB-LVcOLdb8&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=29" },
        { nombre: "Choi-Yong", movimientos: "46 movimientos", significado: "Honra al general Choi Yong, símbolo de lealtad y honestidad.", diagrama: "img/tul_19_choi_yong.png", youtubeId: "https://www.youtube.com/watch?v=utktT20XLW0&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=30" },
      ],
      videos: [{ titulo: "Tules de III Dan (placeholder)", youtubeId: "https://www.youtube.com/watch?v=eOfVLUyvBdY&list=PL-MnBzNTiwmeYc46H6orqLdofv-oDnjTG&index=28", mp4: "" }],
      audios: [{ titulo: "Terminología III Dan", desc: "Teoría avanzada del nivel", src: "audio/term-3dan.mp3" }],
      tutoriales: [{ titulo: "Materia III Dan — Cinturón Negro", src: "tutoriales/cinturon-negro_3dan.html" }],
    },
  ],

  /* ---------- COMBATE · MATSOKGI ----------
     Lista de videos de combate. El alumno elige un título de la lista
     y el video se muestra al lado. youtubeId: pega el ID o la URL
     completa de YouTube (el video debe ser público o no listado).
     Si dejas la lista vacía [], la sección no aparece.

     Cada título puede tener:
       • UN video  → usa el campo "youtubeId"
       • VARIOS    → usa "videos: [{ titulo, youtubeId }, …]"; aparece
                     una fila de botones bajo el reproductor para elegir. */
  combate: [
    {
      titulo: "Sambo Matsokgi (3 pasos)",
      videos: [                                  // ✏️ varios videos bajo un título
        { titulo: "sin oponente", youtubeId: "https://www.youtube.com/watch?v=EkjDCScNJnQ&list=PL5M3q4RSgi-D9X0l4vsuV3ypB6coZl5Va", },
        { titulo: "oponente 1", youtubeId: "https://www.youtube.com/watch?v=Ua-QbcRpG88&list=PL5M3q4RSgi-D9X0l4vsuV3ypB6coZl5Va&index=2", },
        { titulo: "oponente 2", youtubeId: "https://www.youtube.com/watch?v=bFUtlfv8OzE&list=PL5M3q4RSgi-D9X0l4vsuV3ypB6coZl5Va&index=3", },
        { titulo: "oponente 3", youtubeId: "https://www.youtube.com/watch?v=jRHIPy-vTJo&list=PL5M3q4RSgi-D9X0l4vsuV3ypB6coZl5Va&index=4", },
        { titulo: "oponente 4", youtubeId: "https://www.youtube.com/watch?v=gftqn4txEsY&list=PL5M3q4RSgi-D9X0l4vsuV3ypB6coZl5Va&index=5",  },
        { titulo: "oponente 5", youtubeId: "https://www.youtube.com/watch?v=GVrt-8IT5mw&list=PL5M3q4RSgi-D9X0l4vsuV3ypB6coZl5Va&index=6",  },
      ],
    },
    { titulo: "Ibo Matsokgi (2 pasos)", youtubeId: "https://www.youtube.com/watch?v=VgMQKgRRCY0" },   // ✏️ un solo video
    { titulo: "Ilbo Matsokgi (1 paso)", youtubeId: "https://www.youtube.com/watch?v=wOU9rqFZasw" },
    { titulo: "Combate semi-libre", youtubeId: "https://www.youtube.com/watch?v=nCStgx9osHY" },
  ],

  /* ---------- MURO SOCIAL ----------
     Para los embeds oficiales: pega el código de inserción de cada
     plataforma en los campos "embedHtml" (Instagram: ⋯ → Insertar;
     TikTok: Compartir → Insertar; YouTube: usa youtubeId).
     Si quedan vacíos se muestra una ventana placeholder con link. */
  social: {
    // Foto de portada de la sección Comunidad / Muro en vivo. ✏️ "" → sin foto
    muroFoto: "img/muro-en-vivo.jpg",
    instagram: { usuario: "@mugan.tkd", embedHtml: <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DY5bw7xhTqk/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DY5bw7xhTqk/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DY5bw7xhTqk/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida por Mugan Taekwon-Do ITF (@mugan.tkd)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script> },   // ✏️ REEMPLAZAR
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
    { src: "img/galeria/foto-098.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-099.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-100.jpg", alt: "Mugan Taekwon-Do ITF" },
    { src: "img/galeria/foto-101.jpg", alt: "Mugan Taekwon-Do ITF" },
     
  ],
};
