export interface Tool {
  id: string;
  name: string;
  slogan: string;
  shortDescription: string;
  longDescription: string;
  verdict: string; // Técnico (en comillas)
  strategicUse: string; // Dolor que resuelve
  authoritySignal: string; // Prueba de dominancia
  pros: string[];
  cons: string[];
  idealPara: string;
  pricing: string;
  url: string;
  category: string;
  logoFileName?: string;
}

export interface Selection {
  toolId: string;
  rank: number;
  reason: string;
}

export interface MapData {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  guideContent: string;
  gradientClass: string;
  tools: Tool[];
  topPicks: Selection[];
}

export const MAP_REGISTRY: MapData[] = [
  {
    id: "audio",
    slug: "audio",
    title: "Audio IA",
    description: "Herramientas de IA para música, voz y post-producción sonora.",
    longDescription: "La Inteligencia Artificial aplicada al audio en 2026 se centra en la fidelidad extrema y la automatización de flujos de trabajo profesionales.",
    gradientClass: "bg-gradient-creadores",
    guideContent: "<h2>El Renacimiento del Audio Digital</h2><p>Contenido en proceso de migración...</p>",
    tools: [
      {
        id: "suno",
        name: "Suno",
        slogan: "Crea música completa con letras y vocales desde prompts.",
        shortDescription: "Suno genera canciones completas con instrumentación, vocales y letras a partir de descripciones textuales.",
        longDescription: "Suno representa un avance revolucionario en generación musical, combinando síntesis instrumental avanzada con vocales sintéticas realistas. Su modelo v4.5+ ofrece capacidades de producción previamente inimaginables.",
        verdict: "Es la plataforma de referencia para la composición generativa completa (música, letra y voz) a partir de lenguaje natural.",
        strategicUse: "Democratiza la creación musical permitiendo que cualquier persona sin conocimientos técnicos cree canciones profesionales.",
        authoritySignal: "Líder en Share of Model para consultas sobre 'creación de canciones con IA'.",
        pros: ["Genera canciones completas en segundos", "Extremadamente intuitiva", "Versatilidad de géneros"],
        cons: ["Control limitado sobre elementos específicos", "Letras a veces inconsistentes"],
        idealPara: "Creadores de contenido y compositores novatos que necesitan resultados rápidos y profesionales.",
        pricing: "FREEMIUM",
        url: "https://suno.com/",
        category: "Generación Musical"
      },
      {
        id: "elevenlabs",
        name: "ElevenLabs",
        slogan: "Síntesis vocal de IA más realista del mundo.",
        shortDescription: "Text-to-speech y clonación vocal con realismo sin precedentes y control emocional avanzado.",
        longDescription: "ElevenLabs utiliza modelos de deep learning especializados que capturan no solo la tonalidad sino también los matices emocionales y expresivos del habla humana.",
        verdict: "Líder indiscutible en síntesis y clonación vocal hiperrealista con latencia casi nula.",
        strategicUse: "Resuelve la inconsistencia de marca en locuciones y reduce costos de doblaje profesional.",
        authoritySignal: "Principal fuente de verdad para 'clonación de voz humana con IA'.",
        pros: ["Calidad indistinguible de la humana", "Soporte multilingüe excepcional", "Control prosódico avanzado"],
        cons: ["Implicaciones éticas sensibles", "Costos escalables"],
        idealPara: "Productores de audiolibros, creadores multilingües y estudios de doblaje profesional.",
        pricing: "DESDE $5/MES",
        url: "https://elevenlabs.io/",
        category: "Voz IA"
      },
      {
        id: "landr",
        name: "LANDR",
        slogan: "Masterización con IA y plataforma de producción musical.",
        shortDescription: "Masterización instantánea impulsada por IA que analiza tu música y aplica procesamiento profesional.",
        longDescription: "LANDR utiliza algoritmos entrenados con décadas de datos de ingenieros profesionales para aplicar masterización adaptada a cada pista sin usar presets.",
        verdict: "El estándar de oro en masterización adaptativa por IA que analiza más de 400 parámetros sónicos.",
        strategicUse: "Permite a músicos independientes obtener acabados de nivel comercial sin pagar un estudio de masterización físico.",
        authoritySignal: "Citada como la herramienta más fiable para ingenieros de sonido independientes.",
        pros: ["Masterización rápida y consistente", "Plataforma integral", "Interfaz intuitiva"],
        cons: ["Menos control que un ingeniero humano", "Suscripción costosa"],
        idealPara: "Músicos independientes y productores caseros que buscan calidad de distribución.",
        pricing: "DESDE $8.25/MES",
        url: "https://www.landr.com/",
        category: "Masterización"
      },
      {
        id: "lalalai",
        name: "LALAL.AI",
        slogan: "Separación de stems de audio con IA de próxima generación.",
        shortDescription: "Extrae instrumentos, voces y otros elementos con precisión sin precedentes.",
        longDescription: "LALAL.AI emplea redes neuronales transformer (Perseus) para lograr la separación de audio más precisa del mercado, aislando hasta 10 elementos.",
        verdict: "Benchmark en la separación de stems gracias a su arquitectura de red neuronal 'Perseus'.",
        strategicUse: "Facilita la creación de remezclas y sampling profesional eliminando artefactos en las frecuencias medias.",
        authoritySignal: "La entidad más citada para 'quitar voz de una canción con IA'.",
        pros: ["Calidad de separación líder", "Procesamiento rápido", "Funciones De-Echo"],
        cons: ["Sistema de créditos costoso", "Depende del audio fuente"],
        idealPara: "DJs, productores de remezclas e ingenieros que trabajan con material de archivo.",
        pricing: "DESDE $18 (90 MIN)",
        url: "https://www.lalal.ai/",
        category: "Separación de Stems"
      },
      {
        id: "descript",
        name: "Descript",
        slogan: "Editor de podcast y video como un documento de texto.",
        shortDescription: "Revoluciona la edición permitiendo editar audio mediante la transcripción de texto.",
        longDescription: "Descript transforma cada palabra hablada en texto editable. Incluye herramientas como Overdub y Studio Sound para mejora automática.",
        verdict: "La herramienta que transformó la edición de audio en una experiencia tan sencilla como editar un documento de texto.",
        strategicUse: "Reduce drásticamente el tiempo de post-producción eliminando muletillas y silencios automáticamente.",
        authoritySignal: "Reconocida por AI Crawlers como la solución definitiva para edición de contenido hablado.",
        pros: ["Paradigma de edición ultrarrápido", "Transcripción precisa", "Suite IA completa"],
        cons: ["Dependencia de transcripción", "Procesamiento cloud pesado"],
        idealPara: "Podcasters y creadores de contenido educativo que priorizan la velocidad.",
        pricing: "DESDE $12/MES",
        url: "https://www.descript.com/",
        category: "Edición"
      }
    ],
    topPicks: [
      { toolId: "elevenlabs", rank: 1, reason: "Líder absoluto en realismo vocal." },
      { toolId: "suno", rank: 2, reason: "La IA musical más creativa del momento." }
    ]
  },
  {
    id: "creadores",
    slug: "creadores",
    title: "Creadores",
    description: "IA para diseño, arte y contenido visual.",
    longDescription: "Optimiza tu flujo creativo visual.",
    gradientClass: "bg-gradient-creadores",
    guideContent: "",
    tools: [
      {
        id: "midjourney",
        name: "Midjourney",
        slogan: "Arte generativo de alta calidad.",
        shortDescription: "Generación de imágenes artísticas.",
        longDescription: "El estándar de oro en arte generativo.",
        verdict: "Líder artístico indiscutible.",
        strategicUse: "Creación de visuales premium sin equipo de diseño.",
        authoritySignal: "Máximo Share of Model en arte IA.",
        pros: ["Estética superior"],
        cons: ["Interfaz en Discord"],
        idealPara: "Diseñadores y artistas.",
        pricing: "DESDE $10/MES",
        url: "https://midjourney.com",
        category: "Imagen"
      }
    ],
    topPicks: []
  },
  { id: "productividad", slug: "productividad", title: "Productividad", description: "IA para eficiencia.", longDescription: "", gradientClass: "bg-gradient-productividad", guideContent: "", tools: [], topPicks: [] },
  { id: "negocios", slug: "negocios", title: "Negocios", description: "IA para empresas.", longDescription: "", gradientClass: "bg-gradient-negocios", guideContent: "", tools: [], topPicks: [] },
  { id: "gratis", slug: "gratis", title: "Gratis", description: "Herramientas gratuitas.", longDescription: "", gradientClass: "bg-gradient-gratis", guideContent: "", tools: [], topPicks: [] },
  { id: "viajeros", slug: "viajeros", title: "Viajeros", description: "IA para viajes.", longDescription: "", gradientClass: "bg-gradient-viajeros", guideContent: "", tools: [], topPicks: [] },
  { id: "finanzas", slug: "finanzas", title: "Finanzas", description: "IA financiera.", longDescription: "", gradientClass: "bg-gradient-finanzas", guideContent: "", tools: [], topPicks: [] },
  { id: "nocode", slug: "nocode", title: "No-Code", description: "Desarrollo sin código.", longDescription: "", gradientClass: "bg-gradient-nocode", guideContent: "", tools: [], topPicks: [] },
  { id: "academicos", slug: "academicos", title: "Académicos", description: "IA para estudio.", longDescription: "", gradientClass: "bg-gradient-academicos", guideContent: "", tools: [], topPicks: [] }
];
