const fs = require('fs');
const path = require('path');
const root = __dirname;
const iconsDir = path.join(root, 'icons');
const catalogDir = path.join(root, 'catalog');
if (!fs.existsSync(iconsDir)) throw new Error('Run npm run sync:icons first.');
fs.rmSync(catalogDir, { recursive: true, force: true });
fs.mkdirSync(catalogDir, { recursive: true });
const collections = {};
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(full); continue; }
    if (!entry.name.endsWith('.svg')) continue;
    const rel = path.relative(iconsDir, full).split(path.sep);
    const family = rel[rel.length - 2];
    const category = rel.slice(0, -2).join('/');
    (((collections[category] ||= {})[family] ||= [])).push(rel.join('/'));
  }
}
walk(iconsDir);
const score = f => (/_items?\.svg$/.test(f) ? 0 : /_color\.svg$/.test(f) ? 100 : /_filled\.svg$/.test(f) ? 200 : 300) + Math.abs(Number(f.match(/_(\d+)_/)?.[1] || 32) - 32);
const index = [
  '# Fabric NPM Icon Catalog', '',
  'Browse smaller galleries instead of loading hundreds of images in a single README. Original icon files are in [organized folders](../icons/).', '',
  '| Collection | Icon families | Gallery |', '| --- | ---: | --- |'
];
let total = 0;
for (const [category, families] of Object.entries(collections).sort(([a],[b]) => a.localeCompare(b))) {
  const names = Object.keys(families).sort();
  total += names.length;
  const stem = category.replace(/\//g, '-');
  const pageCount = Math.ceil(names.length / 60);
  const links = [];
  for (let i = 0; i < pageCount; i++) {
    const filename = stem + '-' + (i + 1) + '.md';
    links.push('[' + (i + 1) + '](' + filename + ')');
    const lines = [
      '# ' + category + ' — page ' + (i + 1) + '/' + pageCount, '',
      '[← Catalog](README.md)', '',
      '| Preview | Icon family | Variants |', '| :---: | --- | ---: |'
    ];
    for (const name of names.slice(i * 60, (i + 1) * 60)) {
      const files = families[name];
      const selected = [...files].sort((a,b) => score(a) - score(b))[0];
      const url = '../icons/' + selected;
      lines.push('| [<img src="' + url + '" width="32" height="32" alt="' + name + '">](' + url + ') | '+ String.fromCharCode(96) + name + String.fromCharCode(96) + ' | ' + files.length + ' |');
    }
    lines.push('', '[← Catalog](README.md)', '');
    fs.writeFileSync(path.join(catalogDir, filename), lines.join('\n'));
  }
  index.push('| ' + category + ' | ' + names.length + ' | ' + links.join(' · ') + ' |');
}
index.push('', '[Diagramming guide](../docs/DIAGRAMMING-GUIDE.md) · [Microsoft official SVGs](../icons-ms-official/svg/)', '');
fs.writeFileSync(path.join(catalogDir, 'README.md'), index.join('\n'));
console.log('Generated ' + total + ' icon-family entries into paginated catalog pages.');
