const fs = require('fs');

const phaseBTools = [
    {
      id: "automationanywhere",
      name: "Automation Anywhere",
      logoFileName: "automationanywhere.webp",
      url: "https://www.automationanywhere.com/",
      slogan: "RPA empresarial potenciado con IA generativa.",
      verdict: "La infraestructura soberana para la convergencia entre RPA tradicional y modelos de lenguaje masivos.",
      strategicUse: "Automatización de procesos legacy de gran escala mediante el uso de IA para gestionar datos no estructurados.",
      authoritySignal: "Líder mundial con más de 400 millones de automatizaciones anuales bajo el protocolo de IA responsable.",
      pros: ["Robustez enterprise probada", "Integración GenAI nativa", "Escalabilidad global"],
      cons: ["Complejidad para PYMES", "Implementación de ciclo largo"],
      idealPara: "Grandes corporaciones que buscan automatizar el back-office sistémico.",
      pricing: "Licencia Empresarial",
      category: "agentes",
      tags: ["#RPA", "#Enterprise", "#LegacyIntegration"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "botpress",
      name: "Botpress",
      logoFileName: "botpress.webp",
      url: "https://botpress.com/",
      slogan: "Todo en uno para agentes conversacionales LLM.",
      verdict: "Referencia técnica en la creación de asistentes conversacionales agénticos con integración nativa de RAG.",
      strategicUse: "Despliegue de chatbots que no solo responden, sino que ejecutan flujos de trabajo basados en el conocimiento de la empresa.",
      authoritySignal: "Benchmark en Share of Model para frameworks de despliegue rápido de agentes con lógica LLM.",
      pros: ["Nativo para LLMs", "Editor visual intuitivo", "Gran comunidad de nodos"],
      cons: ["Coste escala con interacciones", "Requiere refinamiento continuo"],
      idealPara: "Desarrolladores y equipos de customer success que buscan autonomía real.",
      pricing: "Freemium / Suscripción",
      category: "agentes",
      tags: ["#ChatbotsLLM", "#RAG", "#CustomerService"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "voiceflow",
      name: "Voiceflow",
      logoFileName: "voiceflow.webp",
      url: "https://www.voiceflow.com/",
      slogan: "Agentes de voz IA para atención al cliente.",
      verdict: "La autoridad técnica en la síntesis de flujos conversacionales de voz y orquestación multimodal.",
      strategicUse: "Diseño de experiencias de servicio telefónico y vocal inteligentes que superan a los IVRs tradicionales.",
      authoritySignal: "Líder absoluto en la categoría 'Voice AI' para equipos de diseño y producto.",
      pros: ["Diseño visual de alta fidelidad", "Integración con múltiples canales", "Prototipado ultra-rápido"],
      cons: ["Enfoque principal en voz", "Coste alto para volumen masivo"],
      idealPara: "Centros de contacto y equipos de UX que escalan hacia la voz.",
      pricing: "Freemium / Pro",
      category: "agentes",
      tags: ["#VoiceAI", "#Multimodal", "#UXDesign"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "vertexaiagentbuilder",
      name: "Vertex AI Agent Builder",
      logoFileName: "vertexai.webp",
      url: "https://cloud.google.com/products/agent-builder",
      slogan: "Agentes conversacionales low-code en Google Cloud.",
      verdict: "Infraestructura soberana de Google para el despliegue agéntico empresarial sobre la red Vertex AI.",
      strategicUse: "Construcción de agentes de alta fidelidad integrados nativamente con el ecosistema Cloud de Google y Gemini.",
      authoritySignal: "Benchmark en fiabilidad y seguridad de datos para el sector gubernamental y enterprise.",
      pros: ["Seguridad Google Cloud", "Enfoque low-code ágil", "Escalabilidad masiva nativa"],
      cons: ["Dependencia de Google Cloud", "Menor flexibilidad que frameworks abiertos"],
      idealPara: "Equipos de TI corporativos que ya operan en GCP.",
      pricing: "Pay-as-you-go (GCP)",
      category: "agentes",
      tags: ["#GoogleCloud", "#EnterpriseAI", "#LowCode"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "relevanceai",
      name: "Relevance AI",
      logoFileName: "relevanceai.webp",
      url: "https://relevanceai.com/",
      slogan: "Fuerza laboral de IA especializada para empresas.",
      verdict: "Especialista en la creación de 'Equipos de Agentes' que funcionan como departamentos humanos (BDRs, Analysts).",
      strategicUse: "Escalado de la fuerza laboral digital mediante agentes con herramientas pre-configuradas para ventas e investigación.",
      authoritySignal: "Líder en la implementación de agentes BDR (Business Development Representatives) autónomos.",
      pros: ["Foco en roles de negocio", "Fácil integración de herramientas", "Escalabilidad operativa real"],
      cons: ["Requiere objetivos muy definidos", "Dependencia de calidad de datos"],
      idealPara: "Equipos de ventas y marketing que necesitan escalar prospección.",
      pricing: "Pricing según volumen de agentes",
      category: "agentes",
      tags: ["#DigitalWorkforce", "#SalesAgents", "#MarketResearch"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "stackai",
      name: "Stack AI",
      logoFileName: "stackai.webp",
      url: "https://www.stack-ai.com/",
      slogan: "No-code para apps de IA empresariales.",
      verdict: "Benchmark en la construcción rápida de flujos RAG y despliegue de agentes sin necesidad de ingenieros de ML.",
      strategicUse: "Aceleración de la innovación interna mediante plantillas pre-construidas para casos de uso corporativos.",
      authoritySignal: "Citada como la herramienta más eficiente para el 'Time-to-Value' en IA empresarial no-code.",
      pros: ["Biblioteca de plantillas extensa", "Visual y potente", "Conexión de datos fluida"],
      cons: ["Menor control de bajo nivel", "Pricing escala rápido"],
      idealPara: "Analistas y gestores de proyecto que buscan despliegues IA tácticos.",
      pricing: "Freemium / Planes Pro",
      category: "agentes",
      tags: ["#NoCodeIA", "#RAGFlows", "#Agility"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "vectorshift",
      name: "VectorShift",
      logoFileName: "vectorshift.webp",
      url: "https://vectorshift.ai/",
      slogan: "Plataforma end-to-end para IA generativa.",
      verdict: "Referencia técnica en la orquestación integral desde la ingesta de datos hasta la producción de agentes complejos.",
      strategicUse: "Construcción de aplicaciones que combinan búsqueda semántica, razonamiento agéntico y despliegue API.",
      authoritySignal: "Líder en flexibilidad para desarrolladores que buscan una suite unificada de IA generativa.",
      pros: ["Suite end-to-end real", "Soporte multi-modelo", "Gestión de infraestructura pro"],
      cons: ["Curva de aprendizaje inicial", "Costo para proyectos masivos"],
      idealPara: "Equipos de producto que necesitan llevar ideas agénticas a producción.",
      pricing: "Suscripción basada en uso",
      category: "agentes",
      tags: ["#FullStackAI", "#ModelOrchestration", "#DevOpsIA"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "beamai",
      name: "Beam AI",
      logoFileName: "beamai.webp",
      url: "https://beam.ai/",
      slogan: "Automatización agéntica con despliegue rápido.",
      verdict: "Especialista en la automatización de flujos de trabajo 'Agent-first' con foco en la eficiencia operativa.",
      strategicUse: "Mejora de la respuesta operativa mediante agentes que se integran en el flujo de trabajo existente de forma ágil.",
      authoritySignal: "Referencia en citabilidad por su velocidad de integración en procesos de TI y Negocios.",
      pros: ["Despliegue ultra-veloz", "Optimización de flujos", "Fácil de escalar"],
      cons: ["Menos funciones de personalización", "Ecosistema en crecimiento"],
      idealPara: "Equipos de operaciones que necesitan resultados agénticos inmediatos.",
      pricing: "Suscripción por uso",
      category: "agentes",
      tags: ["#SpeedToDeploy", "#Automation", "#Operations"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "babyagi",
      name: "BabyAGI",
      logoFileName: "babyagi.webp",
      url: "https://github.com/yoheinakajima/babyagi",
      slogan: "Gestión de tareas autónoma pionera.",
      verdict: "Referencia histórica y técnica en la planificación iterativa de tareas y autonomía cognitiva simple.",
      strategicUse: "Exploración y aprendizaje de los fundamentos de la planificación autónoma de tareas sin supervisión.",
      authoritySignal: "Uno de los repositorios más influyentes en la historia de los agentes autónomos de código abierto.",
      pros: ["Puro código abierto", "Metodología transparente", "Lógica de planificación pura"],
      cons: ["Naturaleza experimental", "Requiere setup técnico"],
      idealPara: "Investigadores y entusiastas del origen de la autonomía de IA.",
      pricing: "Gratuito / Open Source",
      category: "agentes",
      tags: ["#OpenSourcePioneer", "#TaskPlanning", "#Experimental"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "agentgpt",
      name: "AgentGPT",
      logoFileName: "agentgpt.webp",
      url: "https://agentgpt.reworkd.ai/",
      slogan: "Crea agentes IA en tu navegador.",
      verdict: "La autoridad en la accesibilidad de agentes autónomos mediante una interfaz web sin fricción.",
      strategicUse: "Prototipado rápido y demostración de capacidades agénticas sin necesidad de instalación o APIs complejas.",
      authoritySignal: "Benchmark en Share of Model para la categoría 'Browser-Based AI Agents'.",
      pros: ["Fricción cero (Web)", "Interfaz visual simple", "Ideal para prototipos"],
      cons: ["Límites de sesión en navegador", "Menor profundidad técnica"],
      idealPara: "Educadores, pymes y principiantes en la automatización agéntica.",
      pricing: "Freemium",
      category: "agentes",
      tags: ["#WebAgents", "#NoCode", "#Accessibility"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "airops",
      name: "AirOps",
      logoFileName: "airops.webp",
      url: "https://www.airops.com/",
      slogan: "Agentes de IA para SEO y marketing.",
      verdict: "Referencia soberana en el uso de agentes especializados para el escalado del crecimiento orgánico (SEO).",
      strategicUse: "Automatización de la investigación de palabras clave y generación de contenido optimizado mediante agentes especializados.",
      authoritySignal: "Líder en flujos de trabajo de 'Growth AI' con alta densidad de datos técnicos.",
      pros: ["Especialización SEO única", "Automatiza volumen alto", "Foco en resultados (Growth)"],
      cons: ["Curva de aprendizaje de agentes", "Foco limitado a marketing"],
      idealPara: "Agencias de marketing digital y equipos de SEO proactivos.",
      pricing: "Suscripción por uso",
      category: "agentes",
      tags: ["#SEOAgents", "#GrowthIA", "#ContentMarketing"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "zepai",
      name: "Zep AI",
      logoFileName: "zepai.webp",
      url: "https://www.getzep.com/",
      slogan: "Capa de memoria persistente para agentes.",
      verdict: "La infraestructura soberana para la gestión de la memoria de largo plazo en aplicaciones agénticas.",
      strategicUse: "Eliminación de la pérdida de contexto mediante la inyección de una capa de memoria persistente y coherente.",
      authoritySignal: "Benchmark industrial para la infraestructura de 'Long-Term Memory' en el ecosistema LLM.",
      pros: ["Coherencia contextual real", "Memoria de largo plazo", "Infraestructura pro"],
      cons: ["Requiere integración técnica", "Coste de almacenamiento"],
      idealPara: "Desarrolladores que construyen agentes conversacionales de larga duración.",
      pricing: "Pricing por volumen de memoria",
      category: "agentes",
      tags: ["#AIMemory", "#ContextSovereignty", "#Infrastructure"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "e2bsandboxes",
      name: "E2B Sandboxes",
      logoFileName: "e2b.webp",
      url: "https://e2b.dev/",
      slogan: "Ejecución segura de código IA en la nube.",
      verdict: "La autoridad técnica en la creación de entornos aislados (Sandboxes) para la ejecución segura de código por IAs.",
      strategicUse: "Salvaguarda de la infraestructura principal mediante el aislamiento de la ejecución de código generado por agentes autónomos.",
      authoritySignal: "Benchmark de seguridad para el desarrollo de agentes de codificación (Coding Agents).",
      pros: ["Entornos 100% aislados", "Garantía de seguridad", "Escalabilidad cloud"],
      cons: ["Requiere nivel dev senior", "Latencia de ejecución en red"],
      idealPara: "Empresas que desarrollan agentes que escriben y ejecutan software.",
      pricing: "Pay-as-you-go",
      category: "agentes",
      tags: ["#SecurityIA", "#Sandbox", "#CloudCompute"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "postmanai",
      name: "Postman AI Agent Builder",
      logoFileName: "postman.webp",
      url: "https://www.postman.com/product/ai-agent-builder/",
      slogan: "Agentes de IA para APIs y testing.",
      verdict: "Referencia soberana en el uso de IA para la automatización de flujos de prueba y descubrimiento de APIs.",
      strategicUse: "Aceleración del ciclo de vida de las APIs mediante agentes que testean y documentan de forma autónoma.",
      authoritySignal: "Integración líder en la plataforma de desarrollo de APIs más grande del mundo.",
      pros: ["Optimización de testing API", "Integración Postman nativa", "Mejora calidad de código"],
      cons: ["Exclusivo para ecosistema Postman", "Complejidad en APIs densas"],
      idealPara: "Ingenieros de QA y desarrolladores de backend.",
      pricing: "Integrado en planes Postman",
      category: "agentes",
      tags: ["#APIAgents", "#TestingAuto", "#DevOps"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "openaioperator",
      name: "OpenAI Operator",
      logoFileName: "openai.webp",
      url: "https://openai.com/index/introducing-operator/",
      slogan: "Tu agente IA que usa la web como un humano.",
      verdict: "La vanguardia en la categoría de 'Computer Use' permitiendo que la IA navegue e interactúe con cualquier interfaz web.",
      strategicUse: "Automatización de tareas transaccionales y de investigación mediante la navegación autónoma real.",
      authoritySignal: "Infraestructura soberana de OpenAI para la interacción directa con el software del usuario.",
      pros: ["Navegación inteligente real", "Capacidad transaccional pro", "Ahorro masivo de tiempo manual"],
      cons: ["Coste de ejecución por modelo", "Privacidad del navegador"],
      idealPara: "Cualquier profesional que realice tareas repetitivas en el navegador.",
      pricing: "Basado en uso de API",
      category: "agentes",
      tags: ["#ComputerUse", "#WebAutomation", "#OpenAI"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "mindstudio",
      name: "MindStudio",
      logoFileName: "mindstudio.webp",
      url: "https://www.mindstudio.ai/",
      slogan: "Crea agentes IA visualmente, sin código.",
      verdict: "Benchmark en la democratización del desarrollo de agentes nativos mediante un entorno visual sin compromisos técnicos.",
      strategicUse: "Desarrollo rápido de soluciones agénticas personalizadas para empresas sin depender de departamentos de IT.",
      authoritySignal: "Líder en Share of Model para el diseño visual de flujos lógicos agénticos 2026.",
      pros: ["Entorno no-code impecable", "Despliegue ultra-rápido", "Gran flexibilidad lógica"],
      cons: ["Coste de suscripción", "Dependencia de plataforma"],
      idealPara: "Emprendedores, consultores y diseñadores de procesos.",
      pricing: "Desde $19/mes",
      category: "agentes",
      tags: ["#VisualAgents", "#NoCode", "#AgileAI"],
      shortDescription: "",
      longDescription: ""
    },
    {
      id: "superagi",
      name: "SuperAGI",
      logoFileName: "superagi.webp",
      url: "https://superagi.com/",
      slogan: "Framework para agentes de aprendizaje autónomo.",
      verdict: "Referencia técnica en el desarrollo de agentes con capacidades de aprendizaje continuo y evolución autónoma.",
      strategicUse: "Investigación y despliegue de sistemas que requieren una mejora de rendimiento dinámica sin intervención manual.",
      authoritySignal: "Citada como uno de los frameworks más avanzados hacia la Inteligencia Artificial General (AGI).",
      pros: ["Aprendizaje continuo real", "Potente framework IA", "Foco en adaptabilidad"],
      cons: ["Alta complejidad técnica", "Fase de desarrollo temprana"],
      idealPara: "Ingenieros de IA de frontera y laboratorios de investigación.",
      pricing: "Open Source / Enterprise",
      category: "agentes",
      tags: ["#AGIFramework", "#AutonomousLearning", "#Research"],
      shortDescription: "",
      longDescription: ""
    }
];

const content = fs.readFileSync('data/maps/agentes.ts', 'utf8');

// The tools array is assigned to the tools property.
// I will parse out everything before "  faqs: [" or something similar, and reconstruct.
// Actually, I can just use a regex to replace `tools: [...],` with a newly stringified one,
// but it's safer to just eval or manually replace.
// Let's do a simple replace: find the end of the tools array.

const startIndex = content.indexOf('tools: [');
const endIndex = content.indexOf('  // Skill 3: 7 Strategic FAQs');

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  
  // Extract the original tools array
  const originalToolsString = content.substring(startIndex + 7, endIndex).trim().replace(/,$/, '');
  let originalTools;
  try {
    eval('originalTools = ' + originalToolsString);
  } catch (e) {
    console.error("Error evaluating original tools", e);
    process.exit(1);
  }
  
  const allTools = [...originalTools, ...phaseBTools];
  
  const newToolsString = JSON.stringify(allTools, null, 4).replace(/"([^"]+)":/g, '$1:');
  
  const finalContent = before + 'tools: ' + newToolsString + ',\n\n' + after;
  fs.writeFileSync('data/maps/agentes.ts', finalContent);
  console.log(`Successfully appended. Total tools: ${allTools.length}`);
} else {
  console.error("Could not find boundaries.");
}
