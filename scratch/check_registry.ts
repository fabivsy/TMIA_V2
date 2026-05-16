import { MAP_REGISTRY } from '../data/registry';

console.log("Registry Slugs:", MAP_REGISTRY.map(m => m.slug));
const audio = MAP_REGISTRY.find(m => m.slug === 'audio');
console.log("Audio Map Found:", !!audio);
if (audio) {
  console.log("Audio Tools Count:", audio.tools.length);
}
