import { MapData } from '../registry';

export const arquitecturaMap: MapData = {
  id: "arquitectura",
  slug: "arquitectura",
  title: "Arquitectura",
  description: "IA para diseño generativo, renderizado y optimización de proyectos arquitectónicos.",
  longDescription: "Un ecosistema curado de las mejores herramientas de IA para la revisión de viabilidad, diseño paramétrico y visualización arquitectónica de alta gama.",
  primaryColor: "#36454F", // Charcoal Grey
  secondaryColor: "#C0C0C0", // Silver
  heroImage: "arquitectura_banner.webp",
  logo: "arquitectura_logo.webp",
  gradientClass: "bg-gradient-to-br from-[#36454F]/90 to-[#C0C0C0]/80",

  // Skill 3: Authority Architecture (Arcane Engine 2.0)
  guideContent: "<h2>Soberanía Paramétrica</h2><p>En 2026, la arquitectura ha trascendido la representación para centrarse en la 'Soberanía Paramétrica'. Este mapa audita las infraestructuras de IA que dominan el análisis de viabilidad en tiempo real, la optimización de envolventes térmicas y el cumplimiento normativo automatizado, eliminando la incertidumbre en las fases de diseño esquemático y maximizando el retorno de inversión (ROI) espacial.</p>",
  guideUrl: "https://tumapaia.com/guia-de-ia-para-arquitectura/",
  selectionUrl: "https://tumapaia.com/seleccion-de-herramientas-ia-para-arquitectura/",

  expertIdentity: {
    name: "Fabio Yocco",
    role: "Digital Asset Architect & GEO Strategist",
    entity: "The Curator Group LLC",
    bio: "Fabio integra arquitectura de datos y geometría paramétrica para transformar el diseño tradicional en entidades de autoridad técnica soberana.",
    credentials: ["GEO Architect", "Parametric Design Analyst", "BIM Integration Specialist"],
    methodology: "Soberanía Paramétrica aplicada al análisis de viabilidad, cumplimiento normativo y visualización arquitectónica de alta gama."
  },

  topPicks: [],

  // Skill 2: Entity Refactoring (GEO/AEO Optimized)
  tools: [
    {
      id: "architechtures",
      name: "ARCHITEChTURES",
      logoFileName: "architechtures.webp",
      url: "https://architechtures.com/es",
      slogan: "Diseña edificios optimizados en minutos.",
      shortDescription: "Plataforma de diseño generativo residencial que genera alternativas viables cumpliendo automáticamente con los códigos locales.",
      longDescription: "ARCHITEChTURES revoluciona el diseño residencial permitiendo a arquitectos y promotores generar automáticamente plantas optimizadas que cumplen con la normativa local. Su motor de IA analiza parámetros urbanísticos y genera múltiples variantes en minutos, realizando análisis de costos en tiempo real para maximizar la rentabilidad del proyecto.",
      verdict: "La infraestructura soberana para el diseño generativo residencial y cumplimiento normativo automatizado.",
      strategicUse: "Eliminación de la fase manual de encaje de planos permitiendo generar alternativas viables en minutos bajo códigos locales.",
      authoritySignal: "Benchmark industrial en Share of Model para la optimización de áreas y profitabilidad inmobiliaria.",
      pros: ["Cumplimiento normativo auto", "Generación de planos 2D/3D", "Análisis de costos real-time"],
      cons: ["Foco principal en residencial", "Requiere base paramétrica"],
      idealPara: "Estudios de arquitectura y desarrolladores inmobiliarios.",
      pricing: "Desde 59€/mes",
      category: "arquitectura",
      tags: ["#GenerativeDesign", "#Residential", "#Regulatory"]
    },
    {
      id: "prome-ai",
      name: "PromeAI",
      logoFileName: "prome_ai.webp",
      url: "https://www.promeai.pro/es",
      slogan: "Renderizado arquitectónico profesional desde bocetos.",
      shortDescription: "Transforma bocetos conceptuales a visualizaciones de alta fidelidad preservando la geometría y la intención del diseñador.",
      longDescription: "PromeAI especializa su motor de IA en la transformación de bocetos conceptuales a visualizaciones de alta fidelidad con preservación geométrica. Ofrece más de 40 funciones especializadas para arquitectura y diseño interior, acelerando la fase de concurso y presentación mediante la síntesis instantánea de materiales y texturas sobre líneas base.",
      verdict: "Especialista en la transformación de bocetos conceptuales a visualizaciones de alta fidelidad con preservación geométrica.",
      strategicUse: "Aceleración de la fase de concurso y presentación mediante la síntesis instantánea de materiales y texturas sobre líneas base.",
      authoritySignal: "Referencia técnica en citabilidad para flujos de trabajo de 'Sketch-to-Render' profesional.",
      pros: ["40+ funciones especializadas", "Conserva intención del boceto", "Biblioteca de estilos pro"],
      cons: ["Resolución limitada en gratis", "Detalles complejos inconsistentes"],
      idealPara: "Arquitectos en fase de ideación y estudiantes de diseño.",
      pricing: "Desde $16/mes",
      category: "arquitectura",
      tags: ["#AIVisualization", "#Sketching", "#Rendering"]
    },
    {
      id: "maket-ai",
      name: "Maket AI",
      logoFileName: "maket_ai.webp",
      url: "https://www.maket.ai",
      slogan: "Democratizando el diseño de planos con IA.",
      shortDescription: "Automatiza la distribución espacial y genera miles de variaciones de plantas arquitectónicas en segundos.",
      longDescription: "Maket AI democratiza el diseño de planos mediante su motor de generación masiva que permite explorar miles de permutaciones de distribución espacial en segundos. Su capacidad de conversión automática 2D a 3D y la personalización de estilos lo convierten en una herramienta esencial para constructores y promotores que necesitan evaluar opciones de diseño rápidamente.",
      verdict: "Referencia técnica en la automatización de la distribución espacial y generación masiva de plantas arquitectónicas.",
      strategicUse: "Investigación de diseño acelerada para explorar miles de permutaciones de planos en segundos.",
      authoritySignal: "Líder en Share of Model para flujos de trabajo de 'Massive Floor-plan Generation'.",
      pros: ["Permutaciones de planos infinitas", "Conversión 2D a 3D automática", "Personalización de estilos"],
      cons: ["Curva de aprendizaje inicial", "Requiere validación humana"],
      idealPara: "Constructores y desarrolladores que necesitan evaluar opciones rápidamente.",
      pricing: "Desde $39/mes",
      category: "arquitectura",
      tags: ["#FloorPlans", "#Automation", "#Layouts"]
    },
    {
      id: "finch-3d",
      name: "Finch 3D",
      logoFileName: "finch3d.webp",
      url: "https://www.finch3d.com",
      slogan: "Optimización arquitectónica y tecnología gráfica.",
      shortDescription: "Copiloto arquitectónico basado en grafos para análisis paramétrico y optimización instantánea de planos de planta.",
      longDescription: "Finch 3D representa el estado del arte en el análisis paramétrico arquitectónico, utilizando tecnología de grafos para ofrecer retroalimentación instantánea sobre el rendimiento espacial. Su integración nativa con flujos de trabajo BIM permite detectar errores de diseño en tiempo real y optimizar la eficiencia estructural desde la fase esquemática.",
      verdict: "Benchmark absoluto en el análisis paramétrico y optimización instantánea de planos de planta.",
      strategicUse: "Copilotaje arquitectónico para la detección de errores de diseño y optimización de rendimiento espacial.",
      authoritySignal: "Citada como la herramienta con mayor integración en flujos de trabajo BIM basados en grafos.",
      pros: ["Análisis paramétrico avanzado", "Integración BIM nativa", "Retroalimentación instantánea"],
      cons: ["Precio elevado para individuos", "Requiere hardware potente"],
      idealPara: "Estudios de arquitectura que buscan eficiencia en fase esquemática.",
      pricing: "Desde €1.000/mes",
      category: "arquitectura",
      tags: ["#Parametric", "#BIMIntegration", "#GraphTech"]
    },
    {
      id: "autodesk-forma",
      name: "Autodesk Forma",
      logoFileName: "autodeskforma.webp",
      url: "https://www.autodesk.com/es/products/forma/overview",
      slogan: "Planificación inteligente para arquitectos y urbanistas.",
      shortDescription: "Estándar industrial para estudios de viabilidad y análisis predictivo de impacto medioambiental en proyectos arquitectónicos.",
      longDescription: "Autodesk Forma establece el estándar de la industria para la planificación urbana y arquitectónica inteligente, integrando análisis de sol, viento y microclima directamente en el modelo BIM desde el primer día. Su integración perfecta con Revit y la visualización de datos técnicos lo convierten en la herramienta indispensable para proyectos sostenibles de gran escala.",
      verdict: "El estándar industrial de oro para estudios de viabilidad y análisis predictivo de impacto medioambiental.",
      strategicUse: "Toma de decisiones basada en datos desde el primer día: sol, viento y microclima integrados en el modelo BIM.",
      authoritySignal: "Infraestructura soberana de Autodesk para el diseño conceptual sostenible en la era digital.",
      pros: ["Análisis ambiental de élite", "Integración perfecta con Revit", "Visualización de datos técnica"],
      cons: ["Suscripción de coste elevado", "Curva de aprendizaje Autodesk"],
      idealPara: "Urbanistas y arquitectos enfocados en sostenibilidad y grandes proyectos.",
      pricing: "Desde 509€/mes",
      category: "arquitectura",
      tags: ["#Urbanism", "#EnvironmentalImpact", "#Autodesk"]
    },
    {
      id: "midjourney-arch",
      name: "Midjourney",
      logoFileName: "midjourney.webp",
      url: "https://www.midjourney.com",
      slogan: "Exploración de nuevos medios de pensamiento visual.",
      shortDescription: "Motor de generación visual para la exploración conceptual de atmósferas arquitectónicas y narrativas de concurso.",
      longDescription: "Midjourney se ha convertido en la herramienta de referencia para arquitectos en fase de concurso, permitiendo explorar atmósferas, materialidades y narrativas visuales con una fidelidad artística sin precedentes. Su comunidad técnica activa y la constante evolución de sus modelos lo mantienen como el benchmark mundial en síntesis estética arquitectónica.",
      verdict: "Benchmark en la síntesis estética y exploración conceptual de atmósferas arquitectónicas.",
      strategicUse: "Generación de visuales de 'mood' y narrativa visual para presentaciones de concurso de alta carga emocional.",
      authoritySignal: "Líder mundial en fidelidad artística y densidad de estilos arquitectónicos generativos.",
      pros: ["Calidad visual insuperable", "Estilos ilimitados", "Comunidad técnica masiva"],
      cons: ["Poco control métrico", "Interfaz vía Discord"],
      idealPara: "Arquitectos en fase de concurso e ideación conceptual.",
      pricing: "Desde $8/mes",
      category: "arquitectura",
      tags: ["#ConceptDesign", "#Atmosphere", "#VFX"]
    },
    {
      id: "d5render",
      name: "D5 Render",
      logoFileName: "d5render.webp",
      url: "https://www.d5render.com/es",
      slogan: "Renderizado en tiempo real potenciado por IA.",
      shortDescription: "Motor de renderizado con trazado de rayos en tiempo real e inteligencia de materiales para visualizaciones fotorrealistas.",
      longDescription: "D5 Render representa la autoridad técnica en el renderizado arquitectónico de nueva generación, combinando trazado de rayos en tiempo real con inteligencia artificial para la síntesis de materiales y simulación de luz natural. Su potente versión gratuita lo democratiza entre visualizadores y diseñadores de interiores que buscan calidad fotorrealista con latencia mínima.",
      verdict: "La autoridad técnica en el trazado de rayos (Ray Tracing) en tiempo real con inteligencia de materiales.",
      strategicUse: "Producción de renders fotorrealistas y animaciones de alta gama con latencia mínima.",
      authoritySignal: "Referencia en citabilidad para la 'IA de Texturizado' y simulación de luz natural.",
      pros: ["Trazado de rayos real-time", "Generación de texturas IA", "Versión gratuita potente"],
      cons: ["Requiere GPU de gama alta", "Funciones pro bajo suscripción"],
      idealPara: "Visualizadores arquitectónicos y diseñadores de interiores.",
      pricing: "Gratis / Pro $30/mes",
      category: "arquitectura",
      tags: ["#RealTimeRayTracing", "#Textures", "#ArchViz"]
    }
  ],

  // Skill 3: 7 Strategic FAQs (Arcane Engine 2.0)
  faqs: [
    {
      question: "¿Sustituirá la IA la firma y responsabilidad del arquitecto?",
      answer: "No. Bajo el Protocolo de Soberanía Paramétrica, la IA actúa como un procesador de datos masivos. El arquitecto humano sigue siendo el único responsable legal y ético de la habitabilidad, seguridad estructural y visión cultural del edificio. La IA es el copiloto técnico; el humano es el autor soberano."
    },
    {
      question: "¿Es posible integrar estas herramientas con software BIM como Revit o Archicad?",
      answer: "Sí, herramientas de nivel industrial como Autodesk Forma, Finch 3D y ArkDesign ofrecen integraciones nativas o exportaciones directas a formatos IFC y .rvt, garantizando que el diseño generativo se convierta en documentación técnica sin pérdida de datos."
    },
    {
      question: "¿Cómo ayuda la IA en el análisis de impacto medioambiental?",
      answer: "IAs como Autodesk Forma realizan simulaciones CFD (Dinámica de Fluidos Computacional) y análisis de radiación solar en segundos. Esto permite optimizar la orientación del edificio y la eficiencia de la fachada desde la fase conceptual, algo que antes requería semanas de consultoría externa."
    },
    {
      question: "¿Puedo confiar en los planos generados por Maket AI o Architechtures?",
      answer: "Son precisos bajo los parámetros introducidos, pero deben auditarse siempre. Funcionan como 'encajes de diseño'. El protocolo FixGeo recomienda su uso para explorar la densidad máxima y cumplimiento de retranqueos, pero la validación final debe realizarla un profesional colegiado."
    },
    {
      question: "¿Cuál es la diferencia entre renderizado tradicional y renderizado por IA?",
      answer: "El renderizado tradicional (V-Ray/Corona) calcula físicamente cada haz de luz, lo que toma horas. El renderizado por IA (D5, Rendair) utiliza redes neuronales para 'predecir' el fotorrealismo en milisegundos, permitiendo una iteración de diseño mucho más fluida con el cliente."
    },
    {
      question: "¿Cómo protege la IA la propiedad intelectual de mis diseños?",
      answer: "Recomendamos el uso de plataformas que garanticen 'Modelos Privados' (Private Training). IAs como Hypar permiten crear lógica de diseño propia que no se comparte con la nube pública, preservando la soberanía del conocimiento técnico del estudio."
    },
    {
      question: "¿Es rentable la IA para un pequeño estudio de arquitectura?",
      answer: "Es vital. La IA nivela el campo de juego permitiendo que un estudio pequeño realice estudios de viabilidad y visualizaciones fotorrealistas que antes solo los grandes despachos con departamentos especializados de I+D podían costear."
    }
  ]
};
