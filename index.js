const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const dir = path.join(__dirname, 'node_modules/@fabric-msft/svg-icons/svg');
const config = yaml.load(fs.readFileSync(path.join(__dirname, 'config.yml'), 'utf8'));
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg')).sort();
const groups = {};
for (const f of files) {
  const name = f.replace(/_\d+_(color|filled|regular|items?|non-item)\.svg$/, '').replace(/\.svg$/, '');
  (groups[name] ||= []).push(f);
}
const categories = { 'Workloads': config.workloads || [], ...(config.categories || {}), 'Other Fabric Items': [], 'UI & Supporting Icons': [] };
const assigned = new Set(Object.values(categories).flat());
for (const [name, variants] of Object.entries(groups)) {
  if (assigned.has(name)) continue;
  categories[variants.some(f => /_items?\.svg$/.test(f)) ? 'Other Fabric Items' : 'UI & Supporting Icons'].push(name);
}
for (const key in categories) categories[key] = categories[key].filter(name => groups[name]).sort();
const slug = text => text.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
const out = ['# Microsoft Fabric SVG Icons', '', '![NPM Version](https://img.shields.io/npm/v/%40fabric-msft%2Fsvg-icons?label=svg-icons)', '',
  '**' + files.length + ' SVG files** across **' + Object.keys(groups).length + ' icon families**. All original assets remain in the upstream package directory.', '',
  '## Browse by category', '',
  ...Object.entries(categories).filter(([, names]) => names.length).map(([key,names]) => '- [' + key + '](#' + slug(key) + ') — ' + names.length + ' icon families'), '',
  '## Usage', '',
  'Click a preview to open a representative SVG. See [all SVG files](node_modules/@fabric-msft/svg-icons/svg) for additional sizes and `color`, `filled`, or `regular` variants. This is a community catalog, not an official Microsoft branding guide.', '' ];
const score = f => (/_items?\.svg$/.test(f) ? 0 : /_color\.svg$/.test(f) ? 100 : /_filled\.svg$/.test(f) ? 200 : 300) + Math.abs(32 - Number(f.match(/_(\d+)_/)?.[1] || 32));
for (const [key, names] of Object.entries(categories)) {
  if (!names.length) continue;
  out.push('## ' + key, '', '| Preview | Icon family | Variants |', '| :---: | --- | ---: |');
  for (const name of names) {
    const variants = groups[name];
    const file = [...variants].sort((a,b) => score(a) - score(b))[0];
    const url = 'node_modules/@fabric-msft/svg-icons/svg/' + file;
    out.push('| [<img src="' + url + '" width="32" height="32" alt="' + name + '">](' + url + ') | `' + name + '` | ' + variants.length + ' |');
  }
  out.push('');
}
out.push('## Maintenance', '', 'Run `npm install && npm start` to regenerate the catalog. Maintain categories in `config.yml`; new names fall back to Other Fabric Items or UI & Supporting Icons.', '');
fs.writeFileSync(path.join(__dirname, 'README.md'), out.join('\n'), 'utf8');
console.log('Generated catalog: ' + files.length + ' SVGs, ' + Object.keys(groups).length + ' families');
