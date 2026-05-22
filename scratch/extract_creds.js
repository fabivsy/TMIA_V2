const fs = require('fs');
const path = require('path');

const mapsDir = path.join(__dirname, '../data/maps');
const files = fs.readdirSync(mapsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(mapsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/credentials:\s*\["([^"]+)"\]/);
  if (match) {
    console.log(`${file}: ${match[1]}`);
  }
}
