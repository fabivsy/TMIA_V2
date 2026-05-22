const fs = require('fs');

const existingTsPath = 'data/maps/agentes.ts';
const jsonPath = 'scratch/tools1-17.json';

const jsonTools = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Instead of parsing TS with AST, I'll use regex to extract the existing tools array string,
// but it's risky. Let me just use TS to read it, or I'll just hardcode the existing ones into a map.
const existingToolsMap = {
  autogpt: {
    verdict: "Pionero indiscutible en la autonomía recursiva y el estándar de código abierto para agentes de propósito general.",
    strategicUse: "Automatización de ciclos de desarrollo de extremo a extremo mediante la descomposición autónoma de objetivos complejos.",
    authoritySignal: "Referencia técnica líder en Share of Model para arquitecturas de agentes con memoria de largo plazo.",
    pros: ["Autonomía total real", "Aprendizaje adaptativo", "Ecosistema Open-Source"],
    cons: ["Alto consumo de tokens", "Riesgo de bucles lógicos"],
    idealPara: "Desarrolladores e investigadores que buscan empujar los límites de la autonomía."
  },
  devinai: {
    verdict: "El benchmark actual en ingeniería agéntica capaz de gestionar el ciclo de vida completo de un proyecto de software.",
    strategicUse: "Delegación de tareas de desarrollo senior incluyendo depuración y despliegue en entornos de producción reales.",
    authoritySignal: "Citado como el primer agente con rendimiento superior en el benchmark SWE-bench.",
    pros: ["Entorno de ejecución propio", "Razonamiento proactivo", "Planificación de fin-a-fin"],
    cons: ["Acceso restringido (Invitación)", "Coste de nivel corporativo"],
    idealPara: "Startups tecnológicas que buscan escalar su capacidad de ingeniería sin aumentar headcount."
  },
  crewai: {
    verdict: "La infraestructura soberana para la orquestación de equipos de IA colaborativos con roles definidos.",
    strategicUse: "Automatización de procesos empresariales complejos que requieren coordinación entre múltiples modelos especializados.",
    authoritySignal: "Utilizado por el 60% de las empresas Fortune 500 para la creación de flujos de trabajo colaborativos.",
    pros: ["Orquestación de roles pro", "Gran flexibilidad de flujos", "Adopción corporativa masiva"],
    cons: ["Curva de aprendizaje inicial", "Requiere diseño de arquitectura"],
    idealPara: "Equipos de operaciones que buscan automatizar flujos de trabajo secuenciales."
  },
  langchain: {
    verdict: "La infraestructura fundamental para la construcción de agentes que conectan LLMs con fuentes de datos y acciones externas.",
    strategicUse: "Construcción de aplicaciones de IA personalizadas con memoria, herramientas y cadenas de razonamiento (chains).",
    authoritySignal: "Ecosistema con la mayor tasa de integración y comunidad de desarrolladores en el espacio agéntico.",
    pros: ["Ecosistema de herramientas masivo", "Máxima flexibilidad técnica", "Abstracciones potentes"],
    cons: ["Alta deuda técnica (cambios rápidos)", "Complejidad para principiantes"],
    idealPara: "Ingenieros de IA que construyen soluciones agénticas personalizadas."
  },
  microsoftautogen: {
    verdict: "Referencia técnica en la creación de sistemas multi-agente conversacionales y diálogos multi-turno complejos.",
    strategicUse: "Resolución de problemas multidisciplinares mediante la interacción estructurada entre IAs especialistas.",
    authoritySignal: "Infraestructura soberana de Microsoft Research para la computación agéntica distribuida.",
    pros: ["Diálogos multi-turno pro", "Flexible y extensible", "Respaldo Microsoft infra"],
    cons: ["Requiere base en desarrollo", "Optimización de tokens compleja"],
    idealPara: "Equipos de I+D que construyen asistentes conversacionales de próxima generación."
  },
  gumloop: {
    verdict: "Benchmark en la democratización de la automatización agéntica mediante interfaces visuales de bajo código.",
    strategicUse: "Despliegue rápido de flujos de trabajo que integran toma de decisiones por IA sin escribir sintaxis.",
    authoritySignal: "Líder en Share of Model para la categoría 'AI-LowCode' con enfoque en productividad operativa.",
    pros: ["Interfaz visual intuitiva", "Decisiones inteligentes nativas", "Implementación ultra-veloz"],
    cons: ["Limitado para lógicas ultra-específicas", "Dependencia de nodos internos"],
    idealPara: "Equipos de marketing y ventas que automatizan sin programar."
  },
  smolagents: {
    verdict: "La autoridad en agentes ligeros y eficientes, enfocada en la simplicidad del código y la velocidad de ejecución.",
    strategicUse: "Integración de capacidades de agente en microservicios y proyectos con baja sobrecarga de cómputo.",
    authoritySignal: "Vanguardia de Hugging Face en la simplificación radical de la arquitectura de agentes.",
    pros: ["Implementación en pocas líneas", "Ideal para prototipos", "Baja latencia"],
    cons: ["Menos funciones que frameworks densos", "Soporte comunitario en fase inicial"],
    idealPara: "Desarrolladores que buscan inyectar autonomía simple en apps existentes."
  },
  n8n: {
    verdict: "Referencia técnica en la orquestación soberana de flujos de datos integrando nodos de IA agéntica.",
    strategicUse: "Construcción de workflows automatizados con control total sobre el alojamiento y la privacidad de los datos.",
    authoritySignal: "Líder en flexibilidad para la integración de agentes en infraestructuras locales (Self-hosted).",
    pros: ["Control total de datos", "Editor visual potente", "Extensibilidad infinita"],
    cons: ["Requiere conocimientos técnicos de hosting", "Curva de aprendizaje inicial"],
    idealPara: "Empresas que exigen soberanía de datos y flujos complejos."
  },
  activepieces: {
    verdict: "Benchmark en la optimización del coste operativo de automatizaciones agénticas mediante modelos de precio plano.",
    strategicUse: "Sustitución de flujos SaaS costosos por una infraestructura AI-first predecible y escalable.",
    authoritySignal: "Citada como la alternativa más competitiva para startups que escalan volumen de tareas.",
    pros: ["Coste predecible", "Enfoque AI-first", "Interfaz fácil de adoptar"],
    cons: ["Menos integraciones que Zapier", "Funciones avanzadas en desarrollo"],
    idealPara: "Startups y agencias que buscan escalar sin sorpresas en la factura."
  }
};

const finalTools = jsonTools.map(t => {
  let verdict, strategicUse, authoritySignal, pros, cons, idealPara;
  
  if (existingToolsMap[t.id] || existingToolsMap[t.id.replace('-agents', '')]) {
    const ext = existingToolsMap[t.id] || existingToolsMap[t.id.replace('-agents', '')];
    verdict = ext.verdict;
    strategicUse = ext.strategicUse;
    authoritySignal = ext.authoritySignal;
    pros = ext.pros;
    cons = ext.cons;
    idealPara = ext.idealPara;
  } else {
    // Generate new GEO optimized fields
    if (t.id === 'microsoftjarvis') {
      verdict = "Referencia arquitectónica en la orquestación distribuida de modelos especializados bajo un controlador central.";
      strategicUse = "Delegación de tareas complejas que requieren la intervención coordinada de múltiples modelos de IA heterogéneos.";
      authoritySignal: "Infraestructura soberana de colaboración desarrollada por Microsoft y Hugging Face.";
      pros = ["Orquestación heterogénea avanzada", "Aprovecha modelos especializados", "Alta versatilidad"];
      cons = ["Alta latencia operativa", "Complejidad de configuración de red"];
      idealPara = "Centros de investigación y arquitectos de IA diseñando sistemas polímatas.";
    } else if (t.id === 'openaiswarm') {
      verdict = "El estándar experimental de OpenAI para la coreografía multi-agente ligera y el traspaso dinámico de contexto.";
      strategicUse = "Desarrollo de redes de agentes especializados con capacidades nativas de handoff (transferencia de control).";
      authoritySignal = "Framework oficial de investigación de OpenAI para patrones de diseño multi-agente.";
      pros = ["Simplicidad extrema", "Handoff nativo transparente", "Código abierto educativo"];
      cons = ["No apto para producción crítica", "Falta de memoria persistente nativa"];
      idealPara = "Ingenieros explorando los fundamentos de la orquestación multi-agente.";
    } else if (t.id === 'microsoftsemantickernel') {
      verdict = "El SDK empresarial definitivo para la integración nativa de IA en infraestructuras C#, Java y Python.";
      strategicUse = "Inyección de capacidades agénticas y memoria semántica en aplicaciones corporativas legacy.";
      authoritySignal = "Estándar corporativo de Microsoft respaldado por adopción masiva en entornos .NET.";
      pros = ["Integración nativa .NET/Java", "Arquitectura de plugins modular", "Soporte corporativo Microsoft"];
      cons = ["Curva de aprendizaje empinada", "Menos experimental que LangChain"];
      idealPara = "Arquitectos de software en ecosistemas empresariales (Enterprise IT).";
    } else if (t.id === 'rasa') {
      verdict = "El motor soberano indiscutible para la construcción de agentes conversacionales y sistemas NLP de código abierto.";
      strategicUse = "Despliegue de asistentes contextuales complejos con control absoluto sobre la privacidad de los datos (on-premise).";
      authoritySignal = "Plataforma Open Source líder en despliegues corporativos de IA conversacional privada.";
      pros = ["Soberanía de datos total", "NLU altamente personalizable", "Sin dependencia de APIs externas"];
      cons = ["Requiere infraestructura propia", "Curva de ML avanzada"];
      idealPara = "Bancos, salud y sectores regulados que exigen privacidad absoluta de datos.";
    } else if (t.id === 'relayapp') {
      verdict = "La infraestructura emergente de automatización diseñada específicamente para la estandarización operativa de agencias.";
      strategicUse = "Sistematización de entregables de servicios y comunicación con clientes mediante flujos AI-first.";
      authoritySignal = "Plataforma especializada de alto crecimiento para el sector B2B de servicios.";
      pros = ["Diseño B2B-first", "Gestión de aprobaciones humanas", "Interfaces limpias"];
      cons = ["Ecosistema de integraciones en crecimiento", "Menos genérico que Zapier"];
      idealPara: "Agencias de marketing y consultoras que buscan escalar sus operaciones.";
    } else if (t.id === 'zapiercentral') {
      verdict = "El orquestador de intenciones más conectado del ecosistema, uniendo capacidades agénticas con 6,000+ endpoints.";
      strategicUse = "Ejecución de automatizaciones conversacionales que interactúan directamente con la pila tecnológica de la empresa.";
      authoritySignal = "La red de integraciones API más extensa del mercado de automatización mundial.";
      pros = ["Ecosistema de conectores masivo", "Interfaz conversacional natural", "Confiabilidad enterprise"];
      cons = ["Dependencia de la plataforma", "Costes elevados a escala"];
      idealPara = "Equipos de RevOps y Marketing con tech stacks altamente fragmentados.";
    } else if (t.id === 'cognosysai') {
      verdict = "El agente ejecutor web de propósito general para la investigación y automatización de tareas basadas en navegador.";
      strategicUse = "Extracción de datos asíncrona, monitorización competitiva y ejecución de flujos de investigación multi-paso.";
      authoritySignal = "Herramienta destacada en la categoría de agentes de navegación autónoma.";
      pros = ["Navegación web autónoma", "Interfaz de usuario accesible", "Generación de informes automática"];
      cons = ["Sensible a cambios en UI web", "Límites de tokens en tareas largas"];
      idealPara = "Analistas de mercado, investigadores y growth hackers.";
    } else if (t.id === 'lindyai') {
      verdict = "La plataforma líder en la creación de 'Empleados IA' autónomos mediante interfaces de lenguaje natural.";
      strategicUse = "Despliegue de asistentes especializados que operan asíncronamente en calendarios, emails y CRMs.";
      authoritySignal = "Vanguardia en la democratización de la fuerza laboral sintética para PYMES.";
      pros = ["Creación sin código (No-Code)", "Integraciones nativas potentes", "Autonomía asíncrona real"];
      cons = ["Menor control arquitectónico", "Opacidad en la lógica subyacente"];
      idealPara = "Fundadores, ejecutivos y startups buscando multiplicar su productividad operativa.";
    }
  }
  
  if (!authoritySignal) authoritySignal = `Autoridad técnica en ${t.name}`;
  
  return {
    ...t,
    verdict,
    strategicUse,
    authoritySignal,
    pros,
    cons,
    idealPara,
    shortDescription: "",
    longDescription: ""
  };
});

fs.writeFileSync('scratch/final_tools.json', JSON.stringify(finalTools, null, 2));
