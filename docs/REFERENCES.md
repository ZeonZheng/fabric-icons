# Sources, References & Attribution

This is the **source registry** for assets in this repository. The repository is a convenience collection for drawing Microsoft Fabric architecture diagrams, presentations and documentation. **It is not an official Microsoft repository or a Microsoft branding guide.**

## Resource register

| Resource | Publisher / Author | What it is used for | Local copy / details |
| --- | --- | --- | --- |
| [Microsoft Fabric — Icons](https://learn.microsoft.com/en-us/fabric/fundamentals/icons) | Microsoft Learn | **Official** source for Fabric icon packs and usage guidance | Read before using or redistributing Microsoft product imagery |
| [Official `Icons.zip`](https://github.com/microsoft/fabric-samples/blob/main/docs-samples/Icons.zip) | Microsoft, `fabric-samples` | Source for Microsoft-labelled SVG/PNG icon set | [`assets/microsoft/`](../assets/microsoft/) · [import provenance](microsoft-asset-manifest.json) |
| [`Icons_SVG_to_PNG.ipynb`](https://github.com/microsoft/fabric-samples/blob/main/docs-samples/Icons_SVG_to_PNG.ipynb) | Microsoft, `fabric-samples` | Reference **notebook** that downloads NPM SVGs and converts them to PNG in Fabric Lakehouse | Documentation/reference only; not required to use this repository |
| [`@fabric-msft/svg-icons` (NPM)](https://www.npmjs.com/package/@fabric-msft/svg-icons) | Published package for Microsoft Fabric SVG icons | Source of categorized Fabric UI, workload and item SVGs (snapshot: version **11.0.0**) | [`assets/npm/`](../assets/npm/) · [gallery](../catalog/README.md) · [original notice](npm-NOTICE.txt) |
| [All Microsoft Fabric Icons for Diagramming — 2026 edition](https://debruyn.dev/2026/all-microsoft-fabric-icons-for-diagramming-2026-edition/) | Sam Debruyn | Community overview of diagramming icon naming, availability, format variants and evolution | Reference only; no assets in this repository are claimed to originate from the blog |
| [FabricToolset](https://github.com/astrzala/FabricToolset) / [icon pack](https://github.com/astrzala/FabricToolset/tree/main/Microsoft%20Fabric%20%26%20Azure%20Icon%20Pack) | **Andrzej Strzała** | Curated SVGs, ready-to-import diagrams.net libraries, starter diagram and example preview | Complete copied directory: [`assets/fabrictoolset/`](../assets/fabrictoolset/) |
| [FabricToolset original README](../assets/fabrictoolset/README.md) | Andrzej Strzała | Original usage instructions, preview and multi-library loading URL | Preserved as originally published |
| [diagrams.net / draw.io — Public custom libraries](https://www.drawio.com/docs/manual/shapes/public-custom-libraries/) | diagrams.net | Importing custom shape libraries and opening remote library URLs | Use with [Microsoft XML libraries](../assets/microsoft/xml/README.md) and [community XML libraries](../assets/fabrictoolset/xml/) |

## Folder provenance

### NPM icons — `assets/npm/`

- Source: `@fabric-msft/svg-icons` v11.0.0.
- Format: 1,670 SVG assets, regrouped into folders by family and function without altering the original individual SVG contents.
- Every source SVG remains available in its full size/style variant; only the directory placement changed.
- This copy is intentionally independent of the official ZIP source.

### Microsoft icon ZIP — `assets/microsoft/`

- Source: Microsoft Learn-linked `Icons.zip`, supplied in Microsoft's `fabric-samples` repository.
- Source ZIP includes a `v6.1.0` icon package; the repo retains only image formats: **1,584 SVG and 1,584 PNG**.
- The ZIP also included JS, TypeScript and package metadata that was deliberately excluded from the ready-to-use asset collection.
- Provenance and ZIP SHA-256: [`microsoft-asset-manifest.json`](microsoft-asset-manifest.json).
- The official SVG icons are also used to create **small, self-contained** [diagrams.net XML libraries](../assets/microsoft/xml/).

### FabricToolset community pack — `assets/fabrictoolset/`

- Source: `astrzala/FabricToolset` → `Microsoft Fabric & Azure Icon Pack`.
- The full source directory was copied: 390 files, including 371 individual SVGs, original diagram libraries, a diagram template, two preview screenshots and the original README.
- The [original MIT license](../assets/fabrictoolset/LICENSE) is preserved with attribution to **Andrzej Strzała**.
- It is a **third-party curated/modified** icon pack, not an official Microsoft ZIP. The original author describes extraction from the Fabric UI, scaling and padding adjustments. Microsoft product logo/image rights may still apply.
- The previous redundant copies of XML outside this folder were removed. Use [`assets/fabrictoolset/xml/`](../assets/fabrictoolset/xml/) directly.

## Terms and license considerations

- Microsoft owns or controls its relevant product marks and artwork. Follow [Microsoft's official icon usage guidance](https://learn.microsoft.com/en-us/fabric/fundamentals/icons); **do not interpret inclusion here as general permission to alter, commercialize or redistribute Microsoft logos**.
- FabricToolset repository source is under its [included MIT license](../assets/fabrictoolset/LICENSE); this does not override Microsoft brand and artwork conditions.
- The project's prior root MIT license was from its previous repository scaffolding ([preserved for transparency](original-repository-LICENSE.txt)). It was removed from the repository root to avoid implying that every bundled Microsoft icon or trademark was relicensed under MIT.
- The NPM collection's older third-party attribution statement is [preserved here](npm-NOTICE.txt); confirm the publisher's current package terms independently if redistributing.
- The icon collections are **snapshots**, not automatically synchronized with their upstream sources. Upstream names and available icons can change.

## Recommended icon selection for architecture diagrams

Use **official Microsoft SVG** for the most consistent product/service representation; use the **FabricToolset community pack** for convenient prearranged draw.io libraries, diagram starter templates, and broader Azure/data-source assets. Use **NPM icon assets** for more detailed Fabric UI and item-level concepts. Keep your diagram's labeling and icon style consistent.

[← Home](../README.md) · [Diagramming guide](DIAGRAMMING-GUIDE.md)
