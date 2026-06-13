const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '../data/maps/agricultura.ts'),
  path.join(__dirname, '../data/maps/inmobiliarias.ts')
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace all instances of `tags: [ ... ]` with `tags: [ ... ],\n      isFixGeoVerified: true`
  // We can use a regex to match tags line, capture it, and append the verification field.
  const modifiedContent = content.replace(/(tags:\s*\[[^\]]+\])(,)?/g, '$1,\n      isFixGeoVerified: true');
  
  fs.writeFileSync(file, modifiedContent, 'utf8');
  console.log(`Updated ${file}`);
}
