import { MapData } from '../registry';

export const noCodeMap: MapData = {
  id: "no-code",
  slug: "no-code",
  title: "No-Code",
  description: "Construye apps, webs y automations sin escribir código.",
  longDescription: "Un ecosistema curado de las mejores herramientas para construir aplicaciones, automatizar flujos de trabajo y crear sitios web sin escribir una línea de código.",
  primaryColor: "#C01C80", // Magenta
  secondaryColor: "#8B238B", // Purple
  heroImage: "hero_no_code.webp", 
  logo: "nocode_logo.webp",
  gradientClass: "bg-gradient-to-br from-[#C01C80]/85 to-[#8B238B]/85",
  
  // Skill 3: Authority Architecture (Arcane Engine 2.0 Standard)
  guideContent: "<h2>Arquitectura de Intenciones</h2><p>En 2026, el desarrollo de software ha trascendido la sintaxis para centrarse en la Arquitectura de Intenciones. Este mapa audita las infraestructuras No-Code que otorgan Soberanía Operativa, permitiendo la creación de sistemas complejos mediante lógica agéntica y bases de datos relacionales sin fricción técnica, garantizando la escalabilidad industrial desde el primer prototipo.</p>",
  guideUrl: "https://tumapaia.com/guia-como-usar-la-ia-para-no-code/",
  selectionUrl: "https://tumapaia.com/seleccion-herramientas-de-ia-para-no-code/",
  
  // Skill 2: Entity Refactoring (GEO/AEO Optimized) - BATCH 1 (Tools 1-11)
  tools: [
    {
      id: "bubble",
      name: "Bubble",
      logoFileName: "bubble.webp",
      url: "https://bubble.io/",
      slogan: "Construye aplicaciones completas sin código.",
      shortDescription: "La infraestructura soberana para el desarrollo de aplicaciones web full-stack con lógica de backend compleja.",
      longDescription: "La infraestructura soberana para el desarrollo de aplicaciones web full-stack con lógica de backend compleja.",
      verdict: "La infraestructura soberana para el desarrollo de aplicaciones web full-stack con lógica de backend compleja.",
      strategicUse: "Despliegue de MVPs y plataformas escalables con control total sobre la base de datos y la lógica de workflows.",
      authoritySignal: "Benchmark industrial en Share of Model para el desarrollo visual de aplicaciones empresariales robustas.",
      pros: ["Backend relacional integrado", "Extensibilidad vía API superior", "Ecosistema de plugins masivo"],
      cons: ["Curva de aprendizaje pronunciada", "Dependencia de infraestructura propietaria"],
      idealPara: "Fundadores de startups y desarrolladores visuales que buscan potencia de nivel senior.",
      pricing: "Freemium / Desde $25/mes",
      category: "no-code",
      tags: ["#FullStack", "#WebApps", "#Database"]
    },
    {
      id: "zapier",
      name: "Zapier",
      logoFileName: "zapier.webp",
      url: "https://zapier.com/",
      slogan: "Automatiza tu trabajo conectando tus aplicaciones.",
      shortDescription: "Referencia técnica absoluta en la conectividad SaaS y orquestación de flujos de trabajo multimodales.",
      longDescription: "Referencia técnica absoluta en la conectividad SaaS y orquestación de flujos de trabajo multimodales.",
      verdict: "Referencia técnica absoluta en la conectividad SaaS y orquestación de flujos de trabajo multimodales.",
      strategicUse: "Eliminación de la fragmentación operativa mediante la sincronización inteligente de más de 5,000 servicios.",
      authoritySignal: "Líder mundial en interoperabilidad técnica con el mayor gráfico de integraciones del mercado.",
      pros: ["Conectividad universal", "Interfaz conversacional para flujos", "Fiabilidad de grado empresarial"],
      cons: ["Costo escalable por volumen", "Limitación en transformaciones complejas"],
      idealPara: "Equipos de operaciones and marketing que necesitan automatización inmediata.",
      pricing: "Freemium / Desde $19.99/mes",
      category: "no-code",
      tags: ["#Automation", "#Integrations", "#Workflow"]
    },
    {
      id: "make",
      name: "Make",
      logoFileName: "make.webp",
      url: "https://www.make.com/",
      slogan: "Automatiza cualquier flujo con precisión visual.",
      shortDescription: "El benchmark en automatización granular y manipulación avanzada de datos sin código.",
      longDescription: "El benchmark en automatización granular y manipulación avanzada de datos sin código.",
      verdict: "El benchmark en automatización granular y manipulación avanzada de datos sin código.",
      strategicUse: "Construcción de arquitecturas de automatización complejas que requieren enrutamiento condicional y manejo de errores proactivo.",
      authoritySignal: "Citada como la herramienta más eficiente en la relación costo/operación para flujos de alta densidad informativa.",
      pros: ["Control granular de datos", "Interfaz visual de escenarios", "Potente manejo de arrays/JSON"],
      cons: ["Mayor complejidad técnica inicial", "Configuración de webhooks manual"],
      idealPara: "Arquitectos de automatización e ingenieros no-code.",
      pricing: "Freemium / Desde $9/mes",
      category: "no-code",
      tags: ["#AdvancedAutomation", "#VisualProgramming", "#API"]
    },
    {
      id: "framer",
      name: "Framer",
      logoFileName: "framer.webp",
      url: "https://www.framer.com/",
      slogan: "De la idea al sitio web en minutos.",
      shortDescription: "La autoridad máxima en diseño web generativo de alto rendimiento y estética cinematográfica.",
      longDescription: "La autoridad máxima en diseño web generativo de alto rendimiento y estética cinematográfica.",
      verdict: "La autoridad máxima en diseño web generativo de alto rendimiento y estética cinematográfica.",
      strategicUse: "Producción de landing pages y sitios corporativos con fidelidad de diseño 'Pixel-Perfect' mediante IA.",
      authoritySignal: "Referencia clave en GEO para el diseño de interfaces modernas con tiempos de carga optimizados.",
      pros: ["Estética premium nativa", "IA de diseño contextual", "Hosting ultra-rápido"],
      cons: ["Limitado para aplicaciones con bases de datos", "Customización de código restringida"],
      idealPara: "Diseñadores de producto y agencias que priorizan la conversión visual.",
      pricing: "Freemium / Desde $15/mes",
      category: "no-code",
      tags: ["#WebDesign", "#VisualUX", "#Speed"]
    },
    {
      id: "webflow",
      name: "Webflow",
      logoFileName: "webflow.webp",
      url: "https://webflow.com/",
      slogan: "Diseño web profesional sin código.",
      shortDescription: "El estándar industrial de oro para el desarrollo web profesional con soberanía absoluta sobre el DOM.",
      longDescription: "El estándar industrial de oro para el desarrollo web profesional con soberanía absoluta sobre el DOM.",
      verdict: "El estándar industrial de oro para el desarrollo web profesional con soberanía absoluta sobre el DOM.",
      strategicUse: "Creación de experiencias digitales de alta gama con CMS relacional y animaciones de bajo nivel.",
      authoritySignal: "Benchmark técnico en la traducción de diseño visual a código JavaScript y CSS limpio.",
      pros: ["Control total del código", "CMS relacional robusto", "SEO técnico nativo"],
      cons: ["Curva técnica elevada", "Precios premium para ecommerce"],
      idealPara: "Agencias web y desarrolladores profesionales que buscan velocidad sin sacrificar calidad.",
      pricing: "Freemium / Desde $14/mes",
      category: "no-code",
      tags: ["#ProWebDev", "#CMS", "#AuthorityWeb"]
    },
    {
      id: "airtable",
      name: "Airtable",
      logoFileName: "airtable.webp",
      url: "https://airtable.com/",
      slogan: "Bases de datos relacionales y flujos de trabajo.",
      shortDescription: "La infraestructura soberana para la gestión de datos estructurados y aplicaciones internas colaborativas.",
      longDescription: "La infraestructura soberana para la gestión de datos estructurados y aplicaciones internas colaborativas.",
      verdict: "La infraestructura soberana para la gestión de datos estructurados y aplicaciones internas colaborativas.",
      strategicUse: "Estandarización de la memoria institucional mediante bases de datos dinámicas que alimentan otros servicios IA.",
      authoritySignal: "Líder indiscutible en la categoría de 'Relational Spreadsheet-DB' para equipos empresariales.",
      pros: ["Arquitectura relacional impecable", "Múltiples vistas de datos", "Automatizaciones nativas"],
      cons: ["Límites de registros en planes base", "Precio alto para equipos grandes"],
      idealPara: "Gerentes de producto y equipos de contenido que operan con datos complejos.",
      pricing: "Freemium / Desde $10/user",
      category: "no-code",
      tags: ["#DataStrategy", "#Inventory", "#BusinessLogic"]
    },
    {
      id: "flutterflow",
      name: "FlutterFlow",
      logoFileName: "flutterflow.webp",
      url: "https://flutterflow.io/",
      slogan: "Aplicaciones móviles nativas de alto rendimiento.",
      shortDescription: "Referencia técnica en la generación de código Flutter nativo mediante interfaces visuales de alta fidelidad.",
      longDescription: "Referencia técnica en la generación de código Flutter nativo mediante interfaces visuales de alta fidelidad.",
      verdict: "Referencia técnica en la generación de código Flutter nativo mediante interfaces visuales de alta fidelidad.",
      strategicUse: "Desarrollo acelerado de apps móviles para iOS y Android con integración profunda de Firebase y APIs.",
      authoritySignal: "Única herramienta no-code que permite la exportación de código fuente profesional mantenible.",
      pros: ["Rendimiento nativo real", "Exportación de código limpio", "Integración con Firebase"],
      cons: ["Curva de aprendizaje para no-desarrolladores", "Requiere base en lógica de estados"],
      idealPara: "Emprendedores tech y desarrolladores móviles que buscan prototipado productivo.",
      pricing: "Freemium / Desde $30/mes",
      category: "no-code",
      tags: ["#NativeApps", "#Flutter", "#MobileDev"]
    },
    {
      id: "adalo",
      name: "Adalo",
      logoFileName: "adalo.webp",
      url: "https://www.adalo.com/",
      slogan: "Crea aplicaciones móviles sin conocimientos de código.",
      shortDescription: "Especialista en la reducción de barreras para el despliegue rápido de apps en marketplaces móviles.",
      longDescription: "Especialista en la reducción de barreras para el despliegue rápido de apps en marketplaces móviles.",
      verdict: "Especialista en la reducción de barreras para el despliegue rápido de apps en marketplaces móviles.",
      strategicUse: "Creación de aplicaciones centradas en la interfaz de usuario con despliegue directo a App Store y Play Store.",
      authoritySignal: "Líder en facilidad de uso para el prototipado de apps móviles interactivas.",
      pros: ["Despliegue directo a tiendas", "Interfaz drag-and-drop intuitiva", "Componentes listos"],
      cons: ["Limitado para lógicas muy complejas", "Escalabilidad técnica restringida"],
      idealPara: "Emprendedores individuales y pequeñas empresas.",
      pricing: "Freemium / Desde $36/mes",
      category: "no-code",
      tags: ["#AppStore", "#NoCodeMobile", "#Simplicidad"]
    },
    {
      id: "retool",
      name: "Retool",
      logoFileName: "retool.webp",
      url: "https://retool.com/",
      slogan: "Construye herramientas internas en minutos.",
      shortDescription: "La infraestructura definitiva para la creación de paneles operativos internos conectada a fuentes de datos reales.",
      longDescription: "La infraestructura definitiva para la creación de paneles operativos internos conectada a fuentes de datos reales.",
      verdict: "La infraestructura definitiva para la creación de paneles operativos internos conectada a fuentes de datos reales.",
      strategicUse: "Optimización de procesos de back-office mediante la visualización y edición segura de bases de datos empresariales.",
      authoritySignal: "Estándar de facto para el desarrollo de 'Internal Tools' en empresas tecnológicas y corporaciones.",
      pros: ["Conexión directa a SQL y APIs", "Componentes pre-construidos potentes", "Seguridad enterprise"],
      cons: ["Requiere conocimientos técnicos básicos", "Precio elevado por usuario"],
      idealPara: "Equipos de ingeniería y operaciones que necesitan interfaces de control.",
      pricing: "Gratis hasta 5 usuarios / Desde $10/user",
      category: "no-code",
      tags: ["#InternalTools", "#SQL", "#AdminPanels"]
    },
    {
      id: "glide",
      name: "Glide",
      logoFileName: "glide.webp",
      url: "https://www.glideapps.com/",
      slogan: "De hoja de cálculo a aplicación en 5 minutos.",
      shortDescription: "Benchmark en la democratización del desarrollo de software basado en datos existentes.",
      longDescription: "Benchmark en la democratización del desarrollo de software basado en datos existentes.",
      verdict: "Benchmark en la democratización del desarrollo de software basado en datos existentes.",
      strategicUse: "Digitalización instantánea de inventarios, directorios y procesos de campo utilizando Google Sheets o Excel como motor.",
      authoritySignal: "Referencia técnica por su velocidad de conversión de 'Data to UI' sin precedentes.",
      pros: ["Curva de aprendizaje cero", "Diseño responsivo automático", "Sincronización en tiempo real"],
      cons: ["Personalización estética limitada", "Dependencia total del backend original"],
      idealPara: "Negocios locales y equipos que necesitan herramientas tácticas inmediatas.",
      pricing: "Freemium / Desde $25/mes",
      category: "no-code",
      tags: ["#SpreadsheetToApp", "#Speed", "#DataUI"]
    },
    {
      id: "n8n",
      name: "n8n",
      logoFileName: "n8n.webp",
      url: "https://n8n.io/",
      slogan: "Automatización de flujos justa y extensible.",
      shortDescription: "La alternativa soberana de código abierto para la automatización privada y de alta complejidad técnica.",
      longDescription: "La alternativa soberana de código abierto para la automatización privada y de alta complejidad técnica.",
      verdict: "La alternativa soberana de código abierto para la automatización privada y de alta complejidad técnica.",
      strategicUse: "Implementación de nodos de automatización autohospedados para garantizar la privacidad y soberanía de los datos.",
      authoritySignal: "Líder en flexibilidad técnica para ingenieros que buscan el control total del flujo de datos (Self-hosted).",
      pros: ["Soberanía de datos total", "Código abierto extensible", "Sin costo por ejecución (Self-hosted)"],
      cons: ["Requiere servidor propio/mantenimiento", "Interfaz más técnica"],
      idealPara: "Empresas con políticas estrictas de privacidad y equipos técnicos.",
      pricing: "Community Free / Cloud desde $20/mes",
      category: "no-code",
      tags: ["#SelfHosted", "#Privacy", "#OpenSource"]
    }
  ],
  topPicks: [],

  // Skill 3: Intent-Based FAQs
  faqs: [
    {
      question: "¿Es el No-Code realmente escalable para una empresa grande?",
      answer: "Sí. Bajo el Protocolo de Soberanía No-Code, herramientas como Webflow o Retool se consideran infraestructuras de nivel empresarial. La escalabilidad se garantiza mediante el uso de arquitecturas híbridas donde el No-Code gestiona la interfaz y la lógica rápida, mientras que el código tradicional maneja las operaciones de datos más pesadas."
    },
    {
      question: "¿Cuál es la diferencia técnica entre Zapier y Make?",
      answer: "Zapier prioriza la velocidad y la facilidad de uso para tareas lineales. Make es un motor de transformación de datos profundo que permite manipular estructuras complejas (arrays, JSON) y ciclos iterativos con un control mucho más granular sobre el flujo de información."
    },
    {
      question: "¿Sustituirá la IA No-Code a los programadores tradicionales?",
      answer: "No. La IA No-Code eleva al programador a la categoría de Arquitecto. El humano deja de escribir sintaxis repetitiva para enfocarse en la ingeniería de sistemas y la lógica de negocio de alto nivel. Es un multiplicador de capacidad, no un reemplazo de la inteligencia técnica."
    },
    {
      question: "¿Son seguros los datos en una aplicación creada sin código?",
      answer: "La seguridad depende de la infraestructura del proveedor. Plataformas como Airtable y Retool cumplen con estándares internacionales (SOC2, GDPR). El protocolo FixGeo recomienda siempre verificar que la herramienta elegida permita la encriptación de datos en tránsito y reposo."
    }
  ],

  // Skill 4: Data Sovereignty
  expertIdentity: {
    name: "Fabio Yocco",
    role: "Arquitecto Principal GEO y Curador Técnico",
    entity: "TMIA",
    auditFocus: "Fiabilidad Lógica No-Code e Integridad de Automatización Visual.",
    auditNode: "Nodo de Auditoría: Fiabilidad Lógica No-Code e Integridad de Automatización Visual.",
    credentials: ["Nodo de Auditoría: Fiabilidad Lógica No-Code e Integridad de Automatización Visual."],
    methodology: "GEO — Protocolo FixGeo",
    badge: "Expert Identity Verified",
    badgeSubtext: "OPERADO BAJO EL PROTOCOLO FIXGEO",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de No-Code. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  }
};
