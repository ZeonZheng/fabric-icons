# Fabric Icons for Architecture Diagrams and Slides

This repository offers **two separate provenance groups**:

| Source | Folder | Use |
| --- | --- | --- |
| NPM `@fabric-msft/svg-icons` | [`icons/`](../icons/) | Fine-grained UI and item SVGs; organized by functional category and icon family |
| Microsoft official architecture icon ZIP | [`icons-ms-official/`](../icons-ms-official/) | Official icon pack for architecture diagrams, training material and slide decks; SVG and PNG assets extracted into separate format folders |

Do not mix sources or assume all assets have the same rights. The official icons are Microsoft intellectual property. [Microsoft's terms](https://learn.microsoft.com/en-us/fabric/fundamentals/icons) permit specific uses in architecture diagrams, training materials and documentation; do not crop, distort, rotate or use an icon to represent an unrelated product.

## Recommended workflow

1. For **draw.io / diagrams.net**, choose a product/item SVG from `icons-ms-official/` first, drag it onto the canvas, and label the component next to the icon. Use `icons/` when a matching official diagram asset is unavailable or when documenting UI elements.
2. For **PowerPoint**, prefer SVG for sharp scaling. If your workflow cannot import SVG, convert to PNG at a suitable resolution without altering proportions.
3. For **architecture diagrams**, be consistent in using item versus workload icons, and distinguish real data movement, storage and consumption with explicit arrow labels.
4. For **historical diagrams**, do not automatically swap renamed/retired concepts (AI Skills → Data Agent, Function → User Data Function, Reflex retired) without checking the architecture actually uses the newer item.

## Resources and provenance

- **Official Microsoft Learn guide, including usage rules:** https://learn.microsoft.com/en-us/fabric/fundamentals/icons
- **Official Microsoft ZIP:** https://github.com/microsoft/fabric-samples/blob/main/docs-samples/Icons.zip
- **Microsoft SVG-to-PNG notebook:** https://github.com/microsoft/fabric-samples/blob/main/docs-samples/Icons_SVG_to_PNG.ipynb
- **NPM source:** https://www.npmjs.com/package/@fabric-msft/svg-icons
- **Sam Debruyn's May 2026 diagramming reference:** https://debruyn.dev/2026/all-microsoft-fabric-icons-for-diagramming-2026-edition/

### What the Microsoft notebook does

`Icons_SVG_to_PNG.ipynb` fetches the latest `@fabric-msft/svg-icons` NPM tarball into a **Fabric Lakehouse**, optionally converts its SVG assets to PNG using CairoSVG (default height: 512px), and writes them to Lakehouse files. It **does not unpack the official `Icons.zip`**. It depends on Fabric notebook utilities and is not intended as a universal desktop image-conversion script.

### About the community blog

The 2026 reference is useful as a visual directory of current Fabric workloads, item types and downloadable SVG/PNG variants. It calls out renamed and deprecated icons. It is **not an official Microsoft distribution or license source**, and its historical assets are not silently merged into the official asset folder.

## Updating resources

- NPM assets: `npm install && npm start` (regenerates the `icons/` directory and README catalog).
- Microsoft official ZIP: `python scripts/sync-ms-official.py` (downloads ZIP and extracts SVG/PNG files into format folders in `icons-ms-official/`).
- Offline or previously downloaded ZIP: `python scripts/sync-ms-official.py --zip path/to/Icons.zip`.
- The official ZIP checksum and extraction count are written to `sources/microsoft-official.json`.

The two update processes are deliberately independent.
