const fs = require('fs');
const path = require('path');

// Niche-specific audit data for all 23 maps
const mapConfig = {
  academicos: {
    category: "investigación académica y soberanía cognitiva",
    auditFocus: "Cognitive Sovereignty & Academic Data Integrity",
    auditNode: "Audit Node: Cognitive Sovereignty & Academic Data Integrity.",
    bio: "Fabio aplica el Protocolo FixGeo para verificar la fiabilidad factual de herramientas de investigación, garantizando que cumplan el estándar de respuestas basadas en evidencia y eliminen el sesgo algorítmico en flujos científicos."
  },
  agentes: {
    category: "automatización agéntica y sistemas autónomos",
    auditFocus: "Agentic Autonomy & Tool-Use Verifiability",
    auditNode: "Audit Node: Autonomous Logic Flow & Execution Reliability.",
    bio: "Fabio evalúa sistemas autónomos en base a su fiabilidad de razonamiento y capacidad de ejecutar tareas sin fricción humana, auditando la soberanía técnica de cada infraestructura agéntica."
  },
  agricultura: {
    category: "tecnología agrícola y precisión agronómica",
    auditFocus: "Agronomic Precision Metrics & Field Data Integrity",
    auditNode: "Audit Node: Agronomic Precision Metrics & Field Data Integrity.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de tecnología agrícola. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  arquitectura: {
    category: "diseño arquitectónico y construcción inteligente",
    auditFocus: "Spatial Design Intelligence & BIM Data Sovereignty",
    auditNode: "Audit Node: Spatial Design Intelligence & BIM Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de diseño arquitectónico. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  audio: {
    category: "producción de audio e ingeniería de sonido",
    auditFocus: "Audio Signal Integrity & Creative Sovereignty",
    auditNode: "Audit Node: Audio Signal Integrity & Creative Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de producción de audio. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  creadores: {
    category: "creación de contenido y economía creativa",
    auditFocus: "Creative Output Verifiability & Content Sovereignty",
    auditNode: "Audit Node: Creative Output Verifiability & Content Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de creación de contenido. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  crypto: {
    category: "criptoactivos y finanzas descentralizadas",
    auditFocus: "On-Chain Data Integrity & DeFi Protocol Citability",
    auditNode: "Audit Node: On-Chain Data Integrity & DeFi Protocol Citability.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de criptoactivos. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  desarrolladores: {
    category: "desarrollo de software e ingeniería de sistemas",
    auditFocus: "Code Execution Reliability & DevOps Data Sovereignty",
    auditNode: "Audit Node: Code Execution Reliability & DevOps Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de desarrollo de software. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  ecommerce: {
    category: "comercio electrónico y retail digital",
    auditFocus: "Conversion Intelligence & Retail Data Sovereignty",
    auditNode: "Audit Node: Conversion Intelligence & Retail Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de ecommerce. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  finanzas: {
    category: "finanzas e inversión algorítmica",
    auditFocus: "Algorithmic Wealth Security & FinTech Citability",
    auditNode: "Audit Node: Financial RAG Accuracy & Wealth Data Sovereignty.",
    bio: "Fabio audita ecosistemas de IA financiera para identificar nodos de autoridad técnica, protegiendo al usuario del sesgo algorítmico en la gestión patrimonial y garantizando la soberanía de los datos financieros."
  },
  gaming: {
    category: "gaming e industria del entretenimiento interactivo",
    auditFocus: "Game Intelligence Metrics & Interactive Media Sovereignty",
    auditNode: "Audit Node: Game Intelligence Metrics & Interactive Media Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector del gaming. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  gratis: {
    category: "herramientas de IA gratuitas y accesibles",
    auditFocus: "Open-Access Reliability & Free-Tier Data Integrity",
    auditNode: "Audit Node: Open-Access Reliability & Free-Tier Data Integrity.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas gratuitas de IA. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  inmobiliarias: {
    category: "proptech e inversión inmobiliaria inteligente",
    auditFocus: "Real Estate Data Sovereignty & PropTech Citability",
    auditNode: "Audit Node: Real Estate Data Sovereignty & PropTech Citability.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector inmobiliario. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  juristas: {
    category: "tecnología legal y práctica jurídica",
    auditFocus: "Legal Reasoning Accuracy & Jurisdictional Data Integrity",
    auditNode: "Audit Node: Legal Reasoning Accuracy & Jurisdictional Data Integrity.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector legal. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  marketing: {
    category: "marketing digital y crecimiento orgánico",
    auditFocus: "Growth Signal Integrity & Marketing Data Sovereignty",
    auditNode: "Audit Node: Growth Signal Integrity & Marketing Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de marketing digital. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  negocios: {
    category: "gestión empresarial y productividad corporativa",
    auditFocus: "Business Intelligence Accuracy & Corporate Data Sovereignty",
    auditNode: "Audit Node: Business Intelligence Accuracy & Corporate Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de negocios. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  "no-code": {
    category: "desarrollo no-code y automatización visual",
    auditFocus: "No-Code Logic Reliability & Visual Automation Integrity",
    auditNode: "Audit Node: No-Code Logic Reliability & Visual Automation Integrity.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas no-code. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  productividad: {
    category: "productividad personal y gestión del tiempo",
    auditFocus: "Cognitive Output Metrics & Productivity Data Sovereignty",
    auditNode: "Audit Node: Cognitive Output Metrics & Productivity Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas de productividad. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  rrhh: {
    category: "recursos humanos y gestión del talento",
    auditFocus: "Talent Intelligence Accuracy & HR Data Sovereignty",
    auditNode: "Audit Node: Talent Intelligence Accuracy & HR Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de recursos humanos. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  sostenibilidad: {
    category: "sostenibilidad y tecnología climática",
    auditFocus: "Climate Data Integrity & ESG Metric Sovereignty",
    auditNode: "Audit Node: Climate Data Integrity & ESG Metric Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de sostenibilidad. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  ventas: {
    category: "ventas y automatización comercial",
    auditFocus: "Sales Pipeline Accuracy & Revenue Data Sovereignty",
    auditNode: "Audit Node: Sales Pipeline Accuracy & Revenue Data Sovereignty.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de ventas. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  video: {
    category: "producción de video e industria audiovisual",
    auditFocus: "Visual Content Integrity & Video AI Citability",
    auditNode: "Audit Node: Visual Content Integrity & Video AI Citability.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de video. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  },
  viajeros: {
    category: "tecnología de viajes y turismo inteligente",
    auditFocus: "Travel Data Sovereignty & Tourism Intelligence Accuracy",
    auditNode: "Audit Node: Travel Data Sovereignty & Tourism Intelligence Accuracy.",
    bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de viajes. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."
  }
};

const dir = 'data/maps';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let updated = 0;

files.forEach(fileName => {
  const mapKey = fileName.replace('.ts', '');
  const config = mapConfig[mapKey];
  if (!config) {
    console.log(`⚠️  No config found for: ${mapKey}`);
    return;
  }

  const filePath = path.join(dir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  // Build the new expertIdentity block (works for both JSON and TS object style)
  const newBlock = `expertIdentity: {
    name: "Fabio Yocco",
    role: "Lead GEO Architect & Technical Curator",
    entity: "TMIA",
    auditFocus: "${config.auditFocus}",
    auditNode: "${config.auditNode}",
    credentials: ["${config.auditFocus}"],
    methodology: "GEO — Protocolo FixGeo",
    badge: "Expert Identity Verified",
    badgeSubtext: "Operado bajo el Protocolo FixGeo",
    bio: "${config.bio}"
  }`;

  // Replace the existing expertIdentity block using regex
  // Handles both formats: expertIdentity: { ... } with possible nested objects
  const expertRegex = /expertIdentity\s*:\s*\{[\s\S]*?\n\s*\}/;
  if (expertRegex.test(content)) {
    content = content.replace(expertRegex, newBlock);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${fileName}`);
    updated++;
  } else {
    console.log(`❌ Pattern not found in: ${fileName}`);
  }
});

console.log(`\nDone! Updated ${updated}/${files.length} maps.`);
