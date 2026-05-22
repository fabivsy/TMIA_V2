const fs = require('fs');
const code = fs.readFileSync('/Users/fabiomyocco/Desktop/TMIA_AGENTES_IA/js/data.js', 'utf8');
// Create a clean evaluation context
const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(code, context);
const tools = context.tools;

const toolKeys = Object.keys(tools).slice(0, 17);
const selectedTools = toolKeys.map(k => {
  const t = tools[k];
  return {
    id: k,
    name: t.name,
    logoFileName: t.logoFileName,
    url: t.websiteUrl || '',
    slogan: t.slogan || '',
    verdict: `Líder en ${t.name}. ${t.shortDescription}`, // Will be refactored manually
    strategicUse: t.useCase || '',
    authoritySignal: `Autoridad técnica en ${t.name}`,
    pros: t.pros || [],
    cons: t.cons || [],
    idealPara: t.useCase || '',
    pricing: t.pricing || '',
    category: 'agentes',
    tags: t.tags || [],
    shortDescription: t.shortDescription || '',
    longDescription: t.longDescription || ''
  };
});
fs.writeFileSync('scratch/tools1-17.json', JSON.stringify(selectedTools, null, 2));
console.log('Extracted 17 tools');
