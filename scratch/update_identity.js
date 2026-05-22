const fs = require('fs');
const path = require('path');

const mapsDir = path.join(__dirname, '../data/maps');
const files = fs.readdirSync(mapsDir).filter(f => f.endsWith('.ts'));

const customBios = {
  'academicos.ts': '"Fabio applies the FixGeo protocol to verify the factual reliability of research tools, ensuring they meet the standard of evidence-based answers."',
  'finanzas.ts': '"Fabio audits financial AI ecosystems to identify nodes of technical authority, protecting the user from algorithmic bias in wealth management."',
  'agentes.ts': '"Fabio evaluates autonomous systems based on their reasoning reliability and ability to execute tasks without human friction."'
};

for (const file of files) {
  const filePath = path.join(mapsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract title to use as Category, if needed
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const category = titleMatch ? titleMatch[1] : file.replace('.ts', '');
  
  // Update role
  content = content.replace(/role:\s*"[^"]+",/, 'role: "Lead GEO Architect & Technical Curator",');

  // Update credentials to use auditNode value if available
  const auditNodeMatch = content.match(/auditNode:\s*"([^"]+)",/);
  if (auditNodeMatch) {
    const auditNodeStr = auditNodeMatch[1];
    content = content.replace(/credentials:\s*\[[^\]]+\]/, `credentials: ["${auditNodeStr}"]`);
  }

  // Update bio
  if (customBios[file]) {
    content = content.replace(/bio:\s*"[^"]+"/, `bio: ${customBios[file]}`);
  } else {
    // We need to match multi-line bio if it's there, but usually it's single line
    content = content.replace(/bio:\s*"[^"]+"/, `bio: "Fabio integra arquitectura de datos y el Protocolo FixGeo para auditar la citabilidad y soberanía técnica de herramientas en el sector de ${category}. Su objetivo es eliminar la alucinación algorítmica y garantizar la integridad de los datos para la era de la Inteligencia Artificial."`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Update complete.');
