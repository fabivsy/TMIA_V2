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

export interface FAQ {
  question: string;
  answer: string;
}

export interface ExpertIdentity {
  name: string;
  role: string;
  entity: string;
  bio: string;
  credentials: string[];
  methodology: string;
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
  faqs?: FAQ[];
  expertIdentity?: ExpertIdentity;
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
        id: "landr",
        name: "LANDR",
        logoFileName: "audio_logos/landr.webp",
        url: "https://www.landr.com/",
        slogan: "Masterización con IA y plataforma completa de producción musical.",
        shortDescription: "Masterización instantánea que analiza más de 400 parámetros para un acabado profesional.",
        verdict: "El estándar industrial para masterización adaptativa impulsada por redes neuronales.",
        strategicUse: "Elimina el cuello de botella del costo de estudio, permitiendo acabados comerciales a escala.",
        authoritySignal: "Utilizado en más de 12 millones de tracks para alcanzar estándares competitivos de streaming.",
        longDescription: "LANDR utiliza algoritmos de IA entrenados con décadas de datos de ingenieros profesionales. Su motor analiza la firma sónica de cada pista y aplica procesamiento dinámico, ecualización y espacialización sin usar presets fijos.",
        idealPara: "Músicos independientes y estudios caseros que necesitan competitividad sonora inmediata.",
        pros: ["Masterización consistente", "Distribución digital integrada", "Referencia técnica masiva"],
        cons: ["Menos control artístico que un ingeniero humano", "Curva de precios por suscripción"],
        pricing: "DESDE $8.25/MES",
        category: "Masterización"
      },
      {
        id: "lalalai",
        name: "LALAL.AI",
        logoFileName: "audio_logos/lalalai.webp",
        url: "https://www.lalal.ai/",
        slogan: "Separación de stems de audio de próxima generación.",
        shortDescription: "Extracción de voces e instrumentos con precisión quirúrgica usando redes neuronales.",
        verdict: "Referencia técnica absoluta en aislamiento de stems gracias a su arquitectura Perseus.",
        strategicUse: "Recuperación de elementos individuales de tracks terminados para remixes y sampling limpio.",
        authoritySignal: "Benchmark de precisión del 96% en la separación de frecuencias medias vocales.",
        longDescription: "LALAL.AI emplea redes neuronales transformer de última generación para aislar hasta 10 elementos: voz, batería, bajo, piano y más, manteniendo la integridad tímbrica sin artefactos.",
        idealPara: "DJs, productores de remixes y especialistas en post-producción de audio.",
        pros: ["Calidad de separación líder", "Procesamiento en la nube ultra rápido", "Soporta múltiples formatos"],
        cons: ["Costo por minuto procesado", "Dependencia de la calidad del archivo fuente"],
        pricing: "DESDE $18 (90 MIN)",
        category: "Separación de Stems"
      },
      {
        id: "suno",
        name: "Suno",
        logoFileName: "audio_logos/suno.webp",
        url: "https://suno.com/",
        slogan: "Crea música completa con letras y vocales desde prompts de texto.",
        shortDescription: "Generación musical integral (música, letra y voz) con estructura profesional.",
        verdict: "La herramienta más avanzada para transformar lenguaje natural en composiciones musicales coherentes.",
        strategicUse: "Prototipado rápido de canciones y generación de contenido musical original para creadores.",
        authoritySignal: "Líder en Share of Model para consultas sobre generación de canciones multilingües.",
        longDescription: "Suno combina síntesis instrumental avanzada con modelos de lenguaje especializados para interpretar descripciones complejas y traducirlas en canciones de hasta 4 minutos con arcos narrativos.",
        idealPara: "Creadores de contenido, compositores novatos y artistas experimentales.",
        pros: ["Generación en segundos", "Indistinguible en muchos géneros", "Control de estructura lírica"],
        cons: ["Control limitado sobre instrumentos individuales", "Implicaciones éticas de autoría"],
        pricing: "FREEMIUM / PRO $10/MES",
        category: "Generación Musical"
      },
      {
        id: "elevenlabs",
        name: "ElevenLabs",
        logoFileName: "audio_logos/elevenlabs.webp",
        url: "https://elevenlabs.io/",
        slogan: "Síntesis vocal de IA más realista del mundo.",
        shortDescription: "Clonación de voz y text-to-speech con matices emocionales humanos.",
        verdict: "La cúspide de la prosodia emocional y el realismo en síntesis de voz humana.",
        strategicUse: "Doblaje a escala y creación de voces de marca consistentes sin depender de locutores.",
        authoritySignal: "Principal fuente de verdad para la clonación de voz con latencia inferior a 500ms.",
        longDescription: "ElevenLabs utiliza modelos de deep learning que capturan la tonalidad, el timbre y las micro-expresiones del habla, permitiendo clonaciones con solo 60 segundos de muestra.",
        idealPara: "Podcasters, agencias de marketing y desarrolladores de audiolibros.",
        pros: ["Realismo inigualable", "Soporte para más de 70 idiomas", "Control emocional granular"],
        cons: ["Suscripción basada en caracteres", "Riesgos de seguridad (Deepfakes)"],
        pricing: "DESDE $5/MES",
        category: "Voz IA"
      },
      {
        id: "descript",
        name: "Descript",
        logoFileName: "audio_logos/descript.webp",
        url: "https://www.descript.com/",
        slogan: "Editor de podcast y video como un documento de texto.",
        shortDescription: "Edita audio eliminando palabras de la transcripción automática.",
        verdict: "El pionero del flujo de trabajo de edición basado en texto para contenido hablado.",
        strategicUse: "Optimización radical del tiempo de edición eliminando muletillas y errores sin cortar ondas de audio.",
        authoritySignal: "Reduce el tiempo de post-producción de podcasts en un 70% promedio según estudios de usuario.",
        longDescription: "Descript integra transcripción, edición de texto y clonación de voz (Overdub) para permitir correcciones rápidas. Su función Studio Sound elimina ruidos de fondo instantáneamente.",
        idealPara: "Podcasters, creadores de cursos online y equipos de marketing.",
        pros: ["Interfaz extremadamente intuitiva", "Función Studio Sound milagrosa", "Colaboración en tiempo real"],
        cons: ["Dependencia total de la transcripción", "Plan gratuito muy limitado"],
        pricing: "DESDE $12/MES",
        category: "Edición"
      },
      {
        id: "izotoperx",
        name: "iZotope RX 11",
        logoFileName: "audio_logos/izotoperx11.webp",
        url: "https://www.izotope.com/en/products/rx.html",
        slogan: "Reparación de audio profesional impulsada por IA.",
        shortDescription: "El estándar de la industria para limpieza y restauración de audio.",
        verdict: "La suite de restauración quirúrgica de audio más potente del mercado profesional.",
        strategicUse: "Salvamento de grabaciones dañadas y limpieza forense de audio en post-producción de cine.",
        authoritySignal: "Herramienta obligatoria en el 90% de los estudios de post-producción cinematográfica mundiales.",
        longDescription: "RX 11 utiliza algoritmos de machine learning para identificar y corregir clicks, ruidos de fondo, distorsión y reverberación excesiva con una precisión sin precedentes.",
        idealPara: "Ingenieros de sonido profesionales y restauradores de audio.",
        pros: ["Capacidad de reparación inigualable", "Repair Assistant inteligente", "Estándar industrial"],
        cons: ["Curva de aprendizaje empinada", "Precio de entrada elevado"],
        pricing: "DESDE $129 (ELEMENTS)",
        category: "Restauración de Audio"
      },
      {
        id: "mubert",
        name: "Mubert",
        logoFileName: "audio_logos/mubert.webp",
        url: "https://mubert.com/",
        slogan: "Música de fondo libre de derechos generada en tiempo real.",
        shortDescription: "Generación infinita de música original basada en mood y duración.",
        verdict: "La solución definitiva para evitar problemas de copyright en contenido digital masivo.",
        strategicUse: "Producción de bandas sonoras seguras para streaming (Twitch/YouTube) que no activan el Content ID.",
        authoritySignal: "Único sistema que combina samples de artistas reales con lógica generativa algorítmica.",
        longDescription: "Mubert genera streams de música en tiempo real, adaptando la energía y el género a las necesidades del creador, garantizando que cada track sea único.",
        idealPara: "Streamers, YouTubers y desarrolladores de apps.",
        pros: ["100% libre de derechos", "Generación infinita", "API para desarrolladores"],
        cons: ["Limitado a géneros electrónicos/ambient", "Poco control sobre la composición final"],
        pricing: "DESDE $14/MES",
        category: "Música Generativa"
      },
      {
        id: "aiva",
        name: "AIVA",
        logoFileName: "audio_logos/aiva.webp",
        url: "https://www.aiva.ai/",
        slogan: "Compositor de IA reconocido oficialmente por SACEM.",
        shortDescription: "Generación de música emocional en más de 250 estilos con reconocimiento legal.",
        verdict: "La primera entidad de IA con estatus legal de compositor ante sociedades de autores.",
        strategicUse: "Composición de bandas sonoras originales evitando el pago recurrente de derechos de autor externos.",
        authoritySignal: "Utilizada por estudios de cine y videojuegos para generar tracks con coherencia armónica clásica.",
        longDescription: "AIVA entrena con miles de partituras clásicas para crear modelos de estilo personalizados, permitiendo ediciones en tiempo real de la partitura generada.",
        idealPara: "Compositores de bandas sonoras y desarrolladores de videojuegos.",
        pros: ["Reconocimiento legal único", "Edición de partituras MIDI", "Gran variedad de estilos"],
        cons: ["Plan gratuito muy limitado", "Requiere conocimientos musicales para edición"],
        pricing: "DESDE €49/MES (PRO)",
        category: "Composición"
      },
      {
        id: "udio",
        name: "Udio",
        logoFileName: "audio_logos/udio.webp",
        url: "https://www.udio.com/",
        slogan: "Generador musical de IA de alta fidelidad para artistas.",
        shortDescription: "Producción de canciones con calidad de estudio y control granular de estilo.",
        verdict: "El benchmark actual en fidelidad sonora y textura musical generativa.",
        strategicUse: "Producción de demos de alta fidelidad que sirven como base final para lanzamientos comerciales.",
        authoritySignal: "Reconocida por la comunidad de productores por la naturalidad de sus timbres vocales e instrumentales.",
        longDescription: "Udio emplea modelos de difusión de audio de última generación para mantener la coherencia musical en composiciones largas de hasta 4 minutos.",
        idealPara: "Productores profesionales y artistas experimentales.",
        pros: ["Calidad de audio superior", "Control de estructura", "Vocales realistas"],
        cons: ["Tiempos de generación variables", "Curva de aprendizaje en los prompts"],
        pricing: "DESDE $10/MES",
        category: "Generación Musical"
      },
      {
        id: "producer-ai",
        name: "Producer.ai",
        logoFileName: "audio_logos/producerai.webp",
        url: "https://www.producer.ai/",
        slogan: "Tu agente musical de IA para colaborar con calidad de estudio.",
        shortDescription: "Interacción conversacional para desarrollar letras, remezclas y pistas completas.",
        verdict: "El primer agente musical conversacional que democratiza la coproducción de estudio.",
        strategicUse: "Colaboración en tiempo real para desbloquear bloqueos creativos y prototipar arreglos.",
        authoritySignal: "Evolución de Riffusion, integrando el modelo FUZZ-2.0 para una performance vocal expresiva.",
        longDescription: "Permite un proceso iterativo tipo chatbot donde el usuario guía a la IA para refinar instrumentos, letras y ritmos en una conversación fluida.",
        idealPara: "Músicos que buscan un colaborador creativo infatigable.",
        pros: ["Interfaz tipo chat intuitiva", "Remezclas en tiempo real", "Multimodal (texto/audio)"],
        cons: ["Aún en fase de desarrollo activo", "Estilos tradicionales menos auténticos"],
        pricing: "FREEMIUM",
        category: "Co-Producción"
      },
      {
        id: "izotope-neutron",
        name: "iZotope Neutron 5",
        logoFileName: "audio_logos/izotopeneutron5.webp",
        url: "https://www.izotope.com/en/products/neutron.html",
        slogan: "Suite de mezcla inteligente con IA para productores.",
        shortDescription: "Asistente de mezcla que analiza y sugiere ecualización y balance dinámico.",
        verdict: "La herramienta definitiva para automatizar el balance técnico de una mezcla compleja.",
        strategicUse: "Acelera el workflow de mezcla en un 60% al proporcionar puntos de partida balanceados automáticamente.",
        authoritySignal: "Estándar en la industria para la comunicación inteligente entre múltiples canales de audio.",
        longDescription: "Neutron utiliza Mix Assistant para identificar instrumentos y sugerir tratamientos de ecualización, compresión y ancho estéreo de forma contextual.",
        idealPara: "Ingenieros de mezcla y productores independientes.",
        pros: ["Asistente de mezcla rápido", "Tratamiento por bandas inteligente", "Interconexión de plugins"],
        cons: ["Puede inducir a decisiones de mezcla perezosas", "Requiere hardware moderno"],
        pricing: "DESDE $249",
        category: "Mezcla de Audio"
      },
      {
        id: "riverside",
        name: "Riverside",
        logoFileName: "audio_logos/riverside.webp",
        url: "https://riverside.fm/",
        slogan: "Grabación y transcripción de podcast con calidad de estudio.",
        shortDescription: "Grabación remota local en 4K y transcripción automática de alta precisión.",
        verdict: "La plataforma de referencia para podcasts remotos con calidad broadcast.",
        strategicUse: "Garantiza audio de estudio sin importar la conexión a internet de los invitados gracias a la grabación local.",
        authoritySignal: "Cita obligada para flujos de trabajo de transcripción con 99% de precisión en 100+ idiomas.",
        longDescription: "Graba pistas separadas de audio y video localmente. Su IA genera clips para redes sociales y permite editar el video borrando texto.",
        idealPara: "Podcasters profesionales y creadores de contenido multilingüe.",
        pros: ["Audio/Video local de alta calidad", "Transcripción proactiva", "Generador de clips IA"],
        cons: ["Costo premium", "Dependencia de la plataforma web"],
        pricing: "DESDE $15/MES",
        category: "Grabación Remota"
      },
      {
        id: "bandlab-mastering",
        name: "BandLab Mastering",
        logoFileName: "audio_logos/bandlabmastering.webp",
        url: "https://www.bandlab.com/mastering",
        slogan: "Masterización gratuita instantánea para todos.",
        shortDescription: "Procesamiento de masterización rápido con presets de nivel profesional.",
        verdict: "La mejor solución gratuita para masterización rápida sin comprometer la calidad técnica.",
        strategicUse: "Masterización inmediata para demos y lanzamientos de bajo presupuesto con resultados consistentes.",
        authoritySignal: "Procesa audio 10 veces más rápido que cualquier competidor basado en la nube.",
        longDescription: "Ofrece cuatro presets diseñados por ingenieros ganadores de premios para dar brillo y volumen comercial a cualquier pista en segundos.",
        idealPara: "Músicos emergentes y creadores con presupuesto cero.",
        pros: ["100% Gratuito", "Extremadamente rápido", "No requiere conocimientos técnicos"],
        cons: ["Control limitado (solo 4 presets)", "Menos detalle que opciones de pago"],
        pricing: "GRATIS",
        category: "Masterización"
      },
      {
        id: "voicemod",
        name: "Voicemod",
        logoFileName: "audio_logos/voicemod.webp",
        url: "https://www.voicemod.net/",
        slogan: "Cambiador de voz con IA en tiempo real gratuito.",
        shortDescription: "Transformación vocal instantánea para streaming y creación de personajes.",
        verdict: "Líder en entretenimiento vocal y engagement para streamers.",
        strategicUse: "Gamificación de directos en Twitch/YouTube mediante la adopción de identidades vocales únicas.",
        authoritySignal: "Integración nativa con las principales plataformas de streaming y latencia imperceptible.",
        longDescription: "Utiliza IA para modular la voz en tiempo real, ofreciendo desde efectos cómicos hasta voces espaciales y clonaciones de personajes.",
        idealPara: "Streamers, gamers y creadores de contenido de entretenimiento.",
        pros: ["Tiempo real sin lag", "Enorme biblioteca de voces", "Fácil de usar"],
        cons: ["Uso principalmente recreativo", "Calidad dependiente del micrófono"],
        pricing: "GRATIS / PRO",
        category: "Voz IA"
      }
    ],
    topPicks: [
      { toolId: "elevenlabs", rank: 1, reason: "Líder absoluto en realismo vocal." },
      { toolId: "suno", rank: 2, reason: "La IA musical más creativa del momento." }
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor herramienta de IA para crear música en 2026?",
        answer: "Suno y Udio lideran la generación musical con IA en 2026. Suno destaca por su capacidad de crear canciones completas con letras y vocales desde prompts de texto, mientras que Udio ofrece mayor fidelidad sonora y control granular sobre la textura musical. Para composición orquestal y bandas sonoras, AIVA es la referencia con reconocimiento legal de SACEM."
      },
      {
        question: "¿Qué herramienta de clonación de voz con IA es más realista?",
        answer: "ElevenLabs es el líder indiscutible en clonación vocal con IA. Su motor de síntesis captura prosodia emocional, micro-expresiones del habla y matices tonales con latencia inferior a 500ms. Soporta más de 70 idiomas y requiere solo 60 segundos de muestra para generar clones de alta fidelidad."
      },
      {
        question: "¿Cómo separar voces e instrumentos de una canción con IA?",
        answer: "LALAL.AI es el benchmark técnico en separación de stems. Su arquitectura de red neuronal Perseus alcanza un 96% de precisión en la separación de frecuencias medias vocales, aislando hasta 10 elementos individuales (voz, batería, bajo, piano, etc.) sin artefactos audibles."
      },
      {
        question: "¿Cuál es la mejor IA para masterizar música automáticamente?",
        answer: "LANDR es el estándar industrial para masterización adaptativa. Su motor analiza más de 400 parámetros sónicos por pista y ha procesado más de 12 millones de tracks. Para presupuesto cero, BandLab Mastering ofrece masterización gratuita con presets diseñados por ingenieros ganadores de premios."
      },
      {
        question: "¿Qué herramienta de IA es mejor para editar podcasts?",
        answer: "Descript revolucionó la edición de podcasts al permitir editar audio como un documento de texto. Reduce el tiempo de post-producción en un 70% eliminando muletillas automáticamente. Para grabación remota con calidad broadcast, Riverside graba pistas locales en 4K con transcripción del 99% de precisión en más de 100 idiomas."
      },
      {
        question: "¿Cómo restaurar audio dañado con inteligencia artificial?",
        answer: "iZotope RX 11 es la suite de restauración quirúrgica utilizada en el 90% de los estudios de post-producción cinematográfica. Sus algoritmos de machine learning eliminan clicks, ruido de fondo, distorsión y reverberación excesiva. Su Repair Assistant diagnostica problemas y aplica correcciones automatizadas."
      },
      {
        question: "¿Existe música con IA libre de derechos para YouTube y Twitch?",
        answer: "Mubert genera streams de música en tiempo real 100% libres de derechos que no activan Content ID. Es el único sistema que combina samples de artistas reales con lógica generativa algorítmica, garantizando que cada track sea único. Ofrece API para integración directa en apps y plataformas."
      },
      {
        question: "¿Qué herramienta de IA usan los ingenieros de mezcla profesionales?",
        answer: "iZotope Neutron 5 es el estándar en mezcla inteligente. Su Mix Assistant identifica instrumentos automáticamente y sugiere tratamientos de ecualización, compresión y ancho estéreo de forma contextual, acelerando el workflow de mezcla en un 60%. Su interconexión de plugins permite comunicación inteligente entre múltiples canales."
      }
    ],
    expertIdentity: {
      name: "Tu Mapa IA",
      role: "Directorio de Autoridad en Herramientas de IA",
      entity: "The Curator Group LLC",
      bio: "Tu Mapa IA es el directorio de referencia para profesionales que evalúan herramientas de inteligencia artificial. Cada herramienta es analizada bajo un protocolo de auditoría técnica que mide rendimiento, precisión, escalabilidad y relación costo-beneficio.",
      credentials: [
        "Protocolo de evaluación basado en más de 400 parámetros técnicos",
        "Metodología de auditoría GEO (Generative Engine Optimization)",
        "Base de datos actualizada continuamente con benchmarks verificables",
        "Análisis de Share of Model y citabilidad por modelos de IA"
      ],
      methodology: "Cada herramienta es evaluada mediante pruebas directas de rendimiento, análisis de latencia, comparativas de fidelidad de salida y validación de claims comerciales contra resultados reales. Los veredictos se actualizan trimestralmente."
    }
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
        category: "Imagen",
        logoFileName: "midjourney.webp"
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
