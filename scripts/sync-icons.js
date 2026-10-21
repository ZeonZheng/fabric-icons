// Generate a clone-ready categorized SVG library from the upstream package.
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'node_modules/@fabric-msft/svg-icons/svg');
const destination = path.join(root, 'icons');
const config = yaml.load(fs.readFileSync(path.join(root, 'config.yml'), 'utf8'));
const categories = { workloads: config.workloads || [], ...(config.categories || {}) };
const assigned = new Map();
for (const [category, names] of Object.entries(categories)) {
  const key = category === 'workloads' ? 'workloads' : category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  for (const name of names) {
    if (assigned.has(name)) throw new Error('Duplicate icon family: ' + name);
    assigned.set(name, key);
  }
}
function uiCategory(name) {
  if (/^(arrow|chevron|caret|navigation|home|back|forward|previous|next|menu|more|dismiss|close|search|zoom|filter|sort|expand|collapse|breadcrumb|refresh|sync|direction|location|globe|link|external_link|open|pin|book|bookmark|history|page|tab|window|split|panel|sidebar|route|compass)/.test(name)) return 'navigation';
  if (/^(chart|graph|bar|line|scatter|pie|donut|funnel|table|matrix|axis|visual|map|gauge|sparkline|slicer|tooltip|card|legend|trend|analytics|diagram|report|dashboard)/.test(name)) return 'visualization';
  if (/^(database|data|field|column|row|measure|calculator|sigma|function|formula|model|relationship|schema|query|sql|code|variable|parameter|spark|lake|server|storage|cloud|file|folder|document|cube|dataset|source|transform|calendar)/.test(name)) return 'data-modeling';
  if (/^(text|font|align|border|color|paint|brush|shape|crop|image|picture|background|format|resize|spacing|indent|bold|italic|underline|paragraph|bullet|grid|layout|design|rectangle|circle|square|ruler|draw|edit|wand|style)/.test(name)) return 'formatting';
  if (/^(add|check|delete|remove|copy|cut|paste|save|download|upload|export|import|send|share|play|pause|stop|run|start|cancel|undo|redo|reset|insert|create|duplicate|select|drag|drop|move|replace|merge|group|ungroup|commit|update|accept|reject|apply|clear|lock|unlock|eye|hide|show|toggle|settings|gear|info|warning|error|alert|question|help)/.test(name)) return 'actions';
  return 'misc';
}
if (!fs.existsSync(source)) throw new Error('Install npm dependencies before syncing icons.');
fs.rmSync(destination, { recursive: true, force: true });
let copied = 0;
for (const filename of fs.readdirSync(source).filter(x => x.endsWith('.svg')).sort()) {
  const name = filename.replace(/_\d+_(color|filled|regular|items?|non-item)\.svg$/, '').replace(/\.svg$/, '');
  const section = assigned.get(name) || (/_items?\.svg$/.test(filename) ? 'other-items' : 'ui/' + uiCategory(name));
  const targetDir = path.join(destination, section, name);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(path.join(source, filename), path.join(targetDir, filename));
  copied++;
}
console.log('Organized ' + copied + ' SVG icons under icons/');
