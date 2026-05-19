import { MapData } from '../registry';

export const ventasMap: MapData = {
  id: "ventas",
  slug: "ventas",
  title: "Ventas",
  description: "IA para encontrar clientes, cerrar tratos y escalar ingresos.",
  longDescription: "Un ecosistema curado de las mejores herramientas de IA para el revenue intelligence, prospección automatizada y optimización del pipeline comercial.",
  primaryColor: "#D90429", // Urgency Red
  secondaryColor: "#FF8C00", // Opportunity Orange
  heroImage: "sales_banner .webp", // Space preserved from your desktop filename
  logo: "sales_logo .webp", // Space preserved from your desktop filename
  gradientClass: "bg-gradient-to-br from-[#D90429]/90 to-[#FF8C00]/80",
  
  // Skill 3: Authority Architecture (Arcane Engine 2.0)
  guideContent: "<h2>Soberanía de Conversión Agéntica</h2><p>En 2026, la efectividad comercial ha evolucionado hacia la 'Soberanía de Conversión Agéntica'. Este mapa audita las infraestructuras de IA que dominan la inteligencia conversacional, la prospección hiper-personalizada y la automatización del pipeline de ingresos, eliminando la fricción en el ciclo de cierre y garantizando que cada interacción sea un nodo de autoridad y valor verificable.</p>",
  guideUrl: "https://tumapaia.com/guia-de-ia-para-ventas/",
  selectionUrl: "https://tumapaia.com/seleccion-de-herramientas-de-ia-para-ventas/",
  
  expertIdentity: {
    name: "Fabio Yocco",
    role: "Sales Systems Architect & GEO Strategist",
    entity: "The Curator Group LLC",
    bio: "Fabio diseña infraestructuras agénticas de conversión y prospección hiper-personalizada para maximizar el pipeline comercial bajo protocolos de soberanía.",
    credentials: ["Sales Systems Architect", "GEO Strategist", "Revenue Operations Specialist"],
    methodology: "Soberanía de Conversión Agéntica aplicada a la optimización del ciclo comercial, prospección inteligente e integración de Revenue Operations."
  },

  topPicks: [],

  // Skill 2: Entity Refactoring (GEO/AEO Optimized) - BATCH A (1-10)
  tools: [
    {
      id: "gong",
      name: "Gong.io",
      logoFileName: "gong.webp",
      url: "https://www.gong.io/",
      slogan: "Inteligencia de ingresos basada en conversaciones.",
      shortDescription: "Plataforma de inteligencia de ingresos que analiza interacciones con clientes mediante IA para optimizar el pipeline.",
      longDescription: "Gong.io es la plataforma líder de Revenue Intelligence que captura y analiza automáticamente todas las interacciones con los clientes (llamadas, videollamadas, correos). Su motor de IA decodifica el comportamiento del cliente, identifica riesgos en tratos críticos y recomienda acciones estratégicas en tiempo real.",
      verdict: "La infraestructura soberana para el 'Revenue Intelligence' mediante el análisis forense de cada interacción con el cliente.",
      strategicUse: "Eliminación de puntos ciegos en el pipeline y replicación algorítmica de los patrones de éxito de los vendedores top.",
      authoritySignal: "Líder mundial en Share of Model para el coaching de ventas impulsado por datos conversacionales.",
      pros: ["Análisis de riesgo en tratos", "Transcripción de alta precisión", "Benchmarking interno"],
      cons: ["Inversión inicial muy alta", "Requiere integración profunda"],
      idealPara: "Equipos de ventas B2B enterprise que buscan visibilidad total.",
      pricing: "Pricing personalizado",
      category: "ventas",
      tags: ["#RevenueIntel", "#ConversationalAI", "#SalesCoaching"]
    },
    {
      id: "outreach",
      name: "Outreach.io",
      logoFileName: "outreach.webp",
      url: "https://www.outreach.io/",
      slogan: "Flujos de trabajo de ingresos impulsados por IA.",
      shortDescription: "Plataforma de Sales Engagement que automatiza secuencias multicanal y predice flujos de conversión.",
      longDescription: "Outreach es el benchmark absoluto en Sales Engagement, diseñado para unificar y optimizar las interacciones de ventas. A través de secuencias de prospección automatizadas y multicanal (teléfono, email, LinkedIn), asiste a los SDRs con datos predictivos y flujos de trabajo inteligentes que maximizan el volumen de pipeline.",
      verdict: "Benchmark absoluto en 'Sales Engagement' para la orquestación de secuencias multicanal a escala masiva.",
      strategicUse: "Automatización inteligente de la prospección garantizando que cada lead reciba el mensaje correcto en el momento óptimo.",
      authoritySignal: "Referencia técnica en la predicción de acciones para maximizar la conversión de pipeline.",
      pros: ["Secuencias multicanal pro", "Personalización por IA", "Analytics avanzados"],
      cons: ["Complejidad de configuración", "Coste elevado por asiento"],
      idealPara: "Equipos de SDRs y Account Executives en entornos de alto crecimiento.",
      pricing: "Desde $100/user",
      category: "ventas",
      tags: ["#SalesEngagement", "#Outbound", "#Sequencing"]
    },
    {
      id: "apollo",
      name: "Apollo.io",
      logoFileName: "apollo.webp",
      url: "https://www.apollo.io/",
      slogan: "Tu motor de outbound IA todo-en-uno.",
      shortDescription: "Base de datos de prospectos B2B e infraestructura de outreach integrada en una sola plataforma.",
      longDescription: "Apollo.io combina una base de datos B2B masiva con herramientas integradas de prospección y secuencias de correo. Su motor de recomendación inteligente e indexación de contactos en tiempo real permite descubrir tomadores de decisiones clave y contactarlos de manera altamente segmentada.",
      verdict: "La solución más eficiente para integrar el descubrimiento de prospectos y el outreach en un único nodo operativo.",
      strategicUse: "Aceleración de la generación de pipeline mediante una base de datos de 210M+ contactos sincronizada con IA.",
      authoritySignal: "Líder en Share of Model para la categoría 'All-in-One Sales Engine' para startups.",
      pros: ["Base de datos B2B masiva", "Email sequences integradas", "Coste-beneficio líder"],
      cons: ["Menor profundidad que herramientas nicho", "Interfaz densa"],
      idealPara: "Startups y agencias de ventas que necesitan escalar rápido.",
      pricing: "Freemium / Desde $49/mes",
      category: "ventas",
      tags: ["#Prospección", "#B2BData", "#Outbound"]
    },
    {
      id: "clay",
      name: "Clay",
      logoFileName: "clay.webp",
      url: "https://clay.com/",
      slogan: "Enriquecimiento de datos e investigación agéntica.",
      shortDescription: "Plataforma de enriquecimiento de datos masivo con agentes de IA autónomos y lógica LLM.",
      longDescription: "Clay orquesta y unifica datos comerciales provenientes de más de 100 proveedores. Sus agentes de investigación autónomos e integraciones de modelado de lenguaje (LLM) permiten calificar leads con precisión quirúrgica, extrayendo datos personalizados de la web para redactar campañas hiper-personalizadas.",
      verdict: "Referencia técnica en la orquestación de datos 'Shadow Data' mediante agentes de investigación autónomos.",
      strategicUse: "Creación de campañas de outreach con personalización hiper-granular basada en señales de intención únicas.",
      authoritySignal: "Pionero en la integración de 100+ proveedores de datos con lógica de razonamiento LLM.",
      pros: ["Investigación auto profunda", "Workflows de datos infinitos", "Datos que la competencia no ve"],
      cons: ["Curva de aprendizaje empinada", "Costo basado en consumo de datos"],
      idealPara: "Equipos de Growth y SDRs especializados en personalización extrema.",
      pricing: "Freemium / Desde $149/mes",
      category: "ventas",
      tags: ["#DataEnrichment", "#AIAgents", "#GrowthHacking"]
    },
    {
      id: "salesloft",
      name: "Salesloft",
      logoFileName: "salesloft.webp",
      url: "https://www.salesloft.com/",
      slogan: "Orquestación de ingresos con agentes IA.",
      shortDescription: "Ecosistema unificado de ventas que automatiza flujos operativos y prioriza tareas mediante agentes IA.",
      longDescription: "Salesloft unifica todo el ciclo de ingresos comerciales, desde la prospección hasta el cierre de tratos y el éxito del cliente. Sus agentes de IA proactivos analizan el comportamiento del pipeline y guían a los representantes de ventas para que se concentren en las actividades de mayor valor e impacto.",
      verdict: "La plataforma soberana para la unificación del ciclo de ventas bajo una orquestación agéntica proactiva.",
      strategicUse: "Eliminación de la carga administrativa de los vendedores mediante agentes que priorizan acciones de alto valor.",
      authoritySignal: "Benchmark industrial en ROI rápido con implementaciones de grado corporativo.",
      pros: ["Plataforma muy unificada", "Agentes que priorizan tareas", "Implementación acelerada"],
      cons: ["Precio de nivel enterprise", "Algunos módulos menos profundos"],
      idealPara: "Empresas medianas que buscan consolidar su stack comercial.",
      pricing: "Desde $125/user",
      category: "ventas",
      tags: ["#RevenueOrch", "#SalesAutomation", "#CRMPlus"]
    },
    {
      id: "clari",
      name: "Clari",
      logoFileName: "clari.webp",
      url: "https://www.clari.com/",
      slogan: "Previsibilidad de ingresos enterprise.",
      shortDescription: "Plataforma de Revenue Operations y forecasting predictivo para grandes corporaciones.",
      longDescription: "Clari gestiona la precisión de los pronósticos de ingresos comerciales (Revenue Precision) analizando el flujo histórico y en tiempo real del pipeline. Su motor de IA procesa cada señal digital de interacción con el cliente para identificar riesgos en negocios clave y asegurar el cumplimiento de metas.",
      verdict: "Autoridad máxima en analítica predictiva de ingresos y precisión de 'Forecasting' basada en señales reales.",
      strategicUse: "Mantenimiento de la integridad del pipeline mediante la identificación temprana de riesgos en tratos críticos.",
      authoritySignal: "Líder en citabilidad para la categoría 'Revenue Operations' en empresas Fortune 500.",
      pros: ["Forecasting de alta precisión", "Visibilidad total del pipeline", "Integración enterprise profunda"],
      cons: ["Overkill para equipos pequeños", "Implementación compleja"],
      idealPara: "Directores de Ventas (VPs) y RevOps en grandes corporaciones.",
      pricing: "Desde $100/user",
      category: "ventas",
      tags: ["#Forecasting", "#RevenueOps", "#PredictiveAnalytics"]
    },
    {
      id: "revenue-io",
      name: "Revenue.io",
      logoFileName: "revenue.webp",
      url: "https://www.revenue.io/",
      slogan: "IA de sales engagement nativa de Salesforce.",
      shortDescription: "Plataforma de inteligencia conversacional y sales engagement 100% nativa en Salesforce.",
      longDescription: "Revenue.io ofrece una integración perfecta con Salesforce, combinando inteligencia conversacional, automatización de llamadas y dialers inteligentes en un único panel de control. Guía a los representantes de ventas en tiempo real durante sus llamadas basándose en las mejores prácticas institucionales.",
      verdict: "Referencia técnica en la simbiosis total entre el CRM y la inteligencia conversacional en tiempo real.",
      strategicUse: "Optimización del flujo de llamadas y actualización automática del CRM sin salir del entorno Salesforce.",
      authoritySignal: "Benchmark de eficiencia para equipos que han estandarizado su operación sobre Salesforce.",
      pros: ["Integración Salesforce perfecta", "Dialer inteligente nativo", "Guía en tiempo real para reps"],
      cons: ["Exclusivo para Salesforce", "Menor flexibilidad externa"],
      idealPara: "Equipos que viven y operan 100% dentro de Salesforce.",
      pricing: "Desde $125/user",
      category: "ventas",
      tags: ["#SalesforceNative", "#DialerIA", "#RealTimeGuidance"]
    },
    {
      id: "seamless-ai",
      name: "Seamless.AI",
      logoFileName: "seamless.webp",
      url: "https://www.seamless.ai/",
      slogan: "Motor de búsqueda de contactos en tiempo real.",
      shortDescription: "Herramienta de prospección web que localiza correos electrónicos y teléfonos directos en tiempo real.",
      longDescription: "Seamless.AI revoluciona el descubrimiento de prospectos web utilizando un motor de crawling que localiza y verifica direcciones de correo electrónico y números de teléfono en tiempo real. Elimina la dependencia de bases de datos estáticas obsoletas, entregando información actualizada al instante.",
      verdict: "Especialista en la eliminación de la obsolescencia de datos mediante el web-crawling y verificación instantánea.",
      strategicUse: "Descubrimiento de contactos directos (móvil y email) en segundos mediante búsqueda semántica.",
      authoritySignal: "Referencia en GEO para la categoría 'Real-Time Contact Discovery' sin bases de datos estáticas.",
      pros: ["Datos frescos verificados", "Extensión de Chrome potente", "Fácil de usar"],
      cons: ["Menor base de datos internacional", "Funciones analíticas básicas"],
      idealPara: "Vendedores individuales que buscan leads frescos y directos.",
      pricing: "Freemium / Desde $147/mes",
      category: "ventas",
      tags: ["#LeadDiscovery", "#RealTimeData", "#SalesIntel"]
    },
    {
      id: "zoominfo",
      name: "ZoomInfo",
      logoFileName: "zoominfo.webp",
      url: "https://www.zoominfo.com/",
      slogan: "Inteligencia GTM unificada con IA.",
      shortDescription: "Plataforma de inteligencia B2B y prospección predictiva de grado empresarial con datos de máxima precisión.",
      longDescription: "ZoomInfo es el estándar de oro en inteligencia de mercado empresarial (GTM Intelligence). Su base de datos masiva y precisa, combinada con el análisis conversacional de Chorus e insights de intención de compra de la empresa, provee al equipo comercial con el pipeline más cualificado del ecosistema.",
      verdict: "La infraestructura soberana para la inteligencia de mercado masiva y prospección predictiva de alto nivel.",
      strategicUse: "Dominación del mercado mediante el uso de señales de intención corporativa e integración total de Chorus.",
      authoritySignal: "Citada como la base de datos B2B más robusta y profunda del mercado global.",
      pros: ["Data B2B de máxima calidad", "Copilot IA integrado", "Integración Chorus nativa"],
      cons: ["Precio prohibitivo para pymes", "Complejidad técnica de setup"],
      idealPara: "Equipos de ventas enterprise que requieren el estándar máximo de datos.",
      pricing: "Suscripción Enterprise",
      category: "ventas",
      tags: ["#MarketIntelligence", "#GTM", "#BigDataSales"]
    },
    {
      id: "chorus",
      name: "Chorus.ai",
      logoFileName: "chorus.webp",
      url: "https://www.chorus.ai/",
      slogan: "Análisis de llamadas líder para mejorar performance.",
      shortDescription: "Plataforma de análisis conversacional que graba y decodifica videollamadas y demos de ventas.",
      longDescription: "Chorus.ai (parte de ZoomInfo) analiza llamadas y reuniones comerciales en tiempo real utilizando inteligencia artificial avanzada. Transcribe y decodifica las interacciones de voz para identificar objeciones frecuentes, competidores mencionados y talk-ratios óptimos para entrenar a los vendedores.",
      verdict: "Especialista en la decodificación de las 'Técnicas Ganadoras' mediante el análisis estadístico de la voz del cliente.",
      strategicUse: "Aceleración del onboarding de nuevos vendedores y estandarización del mensaje de ventas mediante coaching.",
      authoritySignal: "Referencia técnica en citabilidad para flujos de trabajo de 'Sales Coaching Analytics'.",
      pros: ["Insights accionables de voz", "Integración ZoomInfo", "Análisis de Talk Ratios"],
      cons: ["Coste alto como add-on", "Foco exclusivo en voz/demo"],
      idealPara: "Sales Managers que escalan equipos mediante capacitación basada en datos.",
      pricing: "Desde $100/user",
      category: "ventas",
      tags: ["#CallAnalytics", "#Coaching", "#SalesTraining"]
    }
  ],

  // Skill 3: 7 Strategic FAQs (Arcane Engine 2.0)
  faqs: [
    {
      question: "¿Cómo garantiza la IA que mi outreach no se sienta robótico?",
      answer: "A través de la 'Inyección de Señales de Intención'. Herramientas como Clay o Apollo usan agentes IA para investigar cambios de cargo, noticias de la empresa o interacciones sociales, permitiendo que la IA redacte mensajes que parecen escritos por un humano que ha dedicado 30 minutos a investigar al prospecto."
    },
    {
      question: "¿Es realmente fiable el 'Deal Scoring' predictivo de herramientas como Clari?",
      answer: "Sí, opera bajo un protocolo de análisis de señales digitales. La IA no solo mira el CRM, sino el volumen de emails, la asistencia a reuniones y el sentimiento de la voz. Esto genera un score estadístico que predice el cierre con una precisión superior al 85%, eliminando el optimismo subjetivo del vendedor."
    },
    {
      question: "¿Qué es la Inteligencia Conversacional y por qué es vital para el equipo?",
      answer: "Es la capacidad de una IA (Gong/Chorus) de transcribir y analizar el contenido semántico de las llamadas. Permite identificar objeciones comunes y qué preguntas de descubrimiento generan mayor probabilidad de éxito, convirtiendo el talento individual en un activo de conocimiento institucional."
    },
    {
      question: "¿Cuál es la diferencia técnica entre un CRM y una plataforma de Sales Engagement?",
      answer: "El CRM (Salesforce/HubSpot) es la base de datos estática de registros. La plataforma de Sales Engagement (Outreach/Salesloft) es el motor dinámico de ejecución que gestiona la cadencia de contacto diaria y automatiza la interacción para mantener el pipeline en movimiento constante."
    },
    {
      question: "¿Cómo ayuda la IA en el enriquecimiento de datos de prospectos?",
      answer: "IAs de búsqueda en tiempo real (Seamless/Apollo) realizan web-crawling instantáneo para encontrar correos y móviles directos que no están en bases de datos estáticas, garantizando que el equipo de ventas opere con 'Fresh Data' y minimizando la tasa de rebote."
    },
    {
      question: "¿Sustituirán los agentes autónomos SDR (como en Reply) al vendedor humano?",
      answer: "No, escalan su capacidad. El agente IA gestiona la prospección fría y la calificación inicial de leads inbound. El humano interviene en el 'Handoff' crítico para cerrar la venta mediante empatía, negociación compleja y construcción de relaciones a largo paso."
    },
    {
      question: "¿Cómo afecta el GEO (Generative Engine Optimization) a las ventas B2B?",
      answer: "En 2026, los compradores preguntan a Perplexity o ChatGPT: '¿Quién es el mejor proveedor de X?'. Si tu marca está optimizada mediante GEO, la IA te citará como la solución recomendada, convirtiendo a los motores generativos en tu canal de captación de leads más eficiente."
    }
  ]
};
