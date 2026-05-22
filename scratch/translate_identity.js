const fs = require('fs');
const path = require('path');

const mapsDir = path.join(__dirname, '../data/maps');
const files = fs.readdirSync(mapsDir).filter(f => f.endsWith('.ts'));

const translations = {
  'academicos.ts': {
    node: 'Nodo de Auditoría: Soberanía Cognitiva e Integridad de Datos Académicos.',
    bio: 'Fabio aplica el Protocolo FixGeo para verificar la fiabilidad factual de herramientas de investigación, asegurando que cumplan el estándar de respuestas basadas en evidencia.'
  },
  'agentes.ts': {
    node: 'Nodo de Auditoría: Flujo Lógico Autónomo y Fiabilidad de Ejecución.',
    bio: 'Fabio evalúa sistemas autónomos basándose en la fiabilidad de su razonamiento y su capacidad para ejecutar tareas sin fricción humana.'
  },
  'agricultura.ts': { node: 'Nodo de Auditoría: Métricas de Precisión Agronómica e Integridad de Datos de Campo.' },
  'arquitectura.ts': { node: 'Nodo de Auditoría: Inteligencia de Diseño Espacial y Soberanía de Datos BIM.' },
  'audio.ts': { node: 'Nodo de Auditoría: Integridad de Señal de Audio y Soberanía Creativa.' },
  'creadores.ts': { node: 'Nodo de Auditoría: Verificabilidad de Resultados Creativos y Soberanía de Contenido.' },
  'crypto.ts': { node: 'Nodo de Auditoría: Integridad de Datos On-Chain y Citabilidad de Protocolos DeFi.' },
  'desarrolladores.ts': { node: 'Nodo de Auditoría: Fiabilidad de Ejecución de Código y Soberanía de Datos DevOps.' },
  'ecommerce.ts': { node: 'Nodo de Auditoría: Inteligencia de Conversión y Soberanía de Datos de Retail.' },
  'finanzas.ts': {
    node: 'Nodo de Auditoría: Seguridad de Patrimonio Algorítmico y Citabilidad FinTech.',
    bio: 'Fabio audita los ecosistemas financieros de IA para identificar nodos de autoridad técnica, protegiendo al usuario del sesgo algorítmico en la gestión del patrimonio.'
  },
  'gaming.ts': { node: 'Nodo de Auditoría: Métricas de Inteligencia de Juego y Soberanía de Medios Interactivos.' },
  'gratis.ts': { node: 'Nodo de Auditoría: Fiabilidad de Acceso Abierto e Integridad de Datos en Niveles Gratuitos.' },
  'inmobiliarias.ts': { node: 'Nodo de Auditoría: Soberanía de Datos Inmobiliarios y Citabilidad PropTech.' },
  'juristas.ts': { node: 'Nodo de Auditoría: Precisión de Razonamiento Legal e Integridad de Datos Jurisdiccionales.' },
  'marketing.ts': { node: 'Nodo de Auditoría: Integridad de Señal de Crecimiento y Soberanía de Datos de Marketing.' },
  'negocios.ts': { node: 'Nodo de Auditoría: Precisión de Inteligencia de Negocios y Soberanía de Datos Corporativos.' },
  'no-code.ts': { node: 'Nodo de Auditoría: Fiabilidad Lógica No-Code e Integridad de Automatización Visual.' },
  'productividad.ts': { node: 'Nodo de Auditoría: Métricas de Resultado Cognitivo y Soberanía de Datos de Productividad.' },
  'rrhh.ts': { node: 'Nodo de Auditoría: Precisión de Inteligencia de Talento y Soberanía de Datos de RRHH.' },
  'sostenibilidad.ts': { node: 'Nodo de Auditoría: Integridad de Datos Climáticos y Soberanía de Métricas ESG.' },
  'ventas.ts': { node: 'Nodo de Auditoría: Precisión de Pipeline de Ventas y Soberanía de Datos de Ingresos.' },
  'viajeros.ts': { node: 'Nodo de Auditoría: Soberanía de Datos de Viaje y Precisión de Inteligencia Turística.' },
  'video.ts': { node: 'Nodo de Auditoría: Integridad de Contenido Visual y Citabilidad de IA en Video.' }
};

for (const file of files) {
  const filePath = path.join(mapsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract category from title
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const category = titleMatch ? titleMatch[1] : file.replace('.ts', '');
  
  // Update role
  content = content.replace(/role:\s*"[^"]+",/, 'role: "Arquitecto Principal GEO y Curador Técnico",');

  // Update auditNode and credentials
  if (translations[file] && translations[file].node) {
    const nodeStr = translations[file].node;
    content = content.replace(/auditNode:\s*"([^"]+)",/, `auditNode: "${nodeStr}",`);
    content = content.replace(/auditFocus:\s*"([^"]+)",/, `auditFocus: "${nodeStr.replace('Nodo de Auditoría: ', '')}",`);
    content = content.replace(/credentials:\s*\[[^\]]+\]/, `credentials: ["${nodeStr}"]`);
  }

  // Update bio
  if (translations[file] && translations[file].bio) {
    content = content.replace(/bio:\s*"[^"]+"/, `bio: "${translations[file].bio}"`);
  } else {
    content = content.replace(/bio:\s*"[^"]+"/, `bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de ${category}. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."`);
  }

  // Update badgeSubtext
  content = content.replace(/badgeSubtext:\s*"[^"]+"/, 'badgeSubtext: "OPERADO BAJO EL PROTOCOLO FIXGEO"');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Update complete.');
