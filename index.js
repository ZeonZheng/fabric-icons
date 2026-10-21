const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const root = __dirname;
const dir = path.join(root, 'node_modules/@fabric-msft/svg-icons/svg');
const config = yaml.load(fs.readFileSync(path.join(root, 'config.yml'), 'utf8'));
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg')).sort();
const groups = {};
for (const file of files) {
  const name = file.replace(/_\d+_(color|filled|regular|items?|non-item)\.svg$/, '').replace(/\.svg$/, '');
  (groups[name] ||= []).push(file);
}
const categories = { Workloads: config.workloads || [], ...(config.categories || {}), 'Other Fabric Items': [], 'UI & Supporting Icons': [] };
const assigned = new Set(Object.values(categories).flat());
for (const [name, variants] of Object.entries(groups)) {
  if (assigned.has(name)) continue;
  categories[variants.some(f => /_items?\.svg$/.test(f)) ? 'Other Fabric Items' : 'UI & Supporting Icons'].push(name);
}
for (const key in categories) categories[key] = categories[key].filter(name => groups[name]).sort();

const slug = value => value.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
const score = f => (/_items?\.svg$/.test(f) ? 0 : /_color\.svg$/.test(f) ? 100 : /_filled\.svg$/.test(f) ? 200 : 300) + Math.abs(32 - Number(f.match(/_(\d+)_/)?.[1] || 32));
const catalogDir = path.join(root, 'catalog');
fs.mkdirSync(catalogDir, { recursive: true });

const index = [
  '# Fabric NPM Icon Catalog', '',
  'Browse by category. The main repository README intentionally avoids rendering hundreds of SVG previews at once.', '',
  'All icon files are available in [organized folders](../icons/). This gallery is generated from the `@fabric-msft/svg-icons` package.', '',
  '| Category | Icon families | Gallery |', '| --- | ---: | --- |'
];
for (const [category, names] of Object.entries(categories)) {
  if (!names.length) continue;
  const pageSize = 65;
  const pages = Math.ceil(names.length / pageSize);
  const key = slug(category);
  index.push('| ' + category + ' | ' + names.length + ' | ' + Array.from({ length: pages }, (_, i) => '[Page ' + (i + 1) + '](' + key + '-' + (i + 1) + '.md)').join(' · ') + ' |');
  for (let page = 0; page < pages; page++) {
    const output = [
      '# ' + category + ' — ' + (page + 1) + '/' + pages, '',
      '[← Catalog index](README.md) · ' + (page > 0 ? '[Previous](' + key + '-' + page + '.md) · ' : '') + (page + 1 < pages ? '[Next](' + key + '-' + (page + 2) + '.md)' : ''), '',
      '| Preview | Family | SVG variants |', '| :---: | --- | ---: |'
    ];
    for (const name of names.slice(page * pageSize, (page + 1) * pageSize)) {
      const variants = groups[name];
      const file = [...variants].sort((a, b) => score(a) - score(b))[0];
      // Relative links from catalog/ use the public, categorized files; avoids node_modules paths.
      const paths = Object.keys(categories).find(k => k === category);
      const folder = category === 'Workloads' ? 'workloads' :
        category === 'Governance & Other Fabric Items' ? 'governance-other' :
        category === 'Other Fabric Items' ? 'other-items' :
        category === 'UI & Supporting Icons' ? null :
        category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      let url;
      if (folder) {
        url = '../icons/' + folder + '/' + name + '/' + file;
      } else {
        // Generic UI icons may be in one of several subfolders. Resolve from the organized filesystem.
        const ui = ['actions', 'data-modeling', 'formatting', 'navigation', 'visualization', 'misc'];
        const selected = ui.find(sub => fs.existsSync(path.join(root, 'icons/ui', sub, name, file)));
        url = selected ? '../icons/ui/' + selected + '/' + name + '/' + file :
          '../node_modules/@fabric-msft/svg-icons/svg/' + file;
      }
      output.push('| [<img src="' + url + '" width="32" height="32" alt="' + name + '">](' + url + ') | `' + name + '` | ' + variants.length + ' |');
    }
    output.push('', '[← Catalog index](README.md)', '');
    fs.writeFileSync(path.join(catalogDir, key + '-' + (page + 1) + '.md'), output.join('\n'));
  }
}
index.push('', 'For draw.io and PowerPoint workflows, see the [Diagramming Guide](../docs/DIAGRAMMING-GUIDE.md).', '');
fs.writeFileSync(path.join(catalogDir, 'README.md'), index.join('\n'));
console.log('Generated paginated catalog (' + Object.keys(groups).length + ' icon families).');
