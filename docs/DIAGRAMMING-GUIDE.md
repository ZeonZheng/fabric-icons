# Use Fabric Icons in draw.io and PowerPoint

This is a short practical guide for architecture diagrams, technical presentations and documentation.

## Choose the right resource

| Task | Preferred starting point | Alternative or supplement |
| --- | --- | --- |
| **Draw.io architecture diagram** | **[FabricToolset XML libraries](../assets/fabrictoolset/xml/)** — curated Fabric/Azure/data-source palettes and [starter template](../assets/fabrictoolset/template/Microsoft%20Fabric%20Icon%20Pack.drawio) | [Microsoft-derived XML libraries](../assets/microsoft/xml/README.md) for smaller, category-specific Fabric palettes |
| **PowerPoint architecture slide** | **[Microsoft official SVGs](../assets/microsoft/svg/)** — crisp vector icons | [Microsoft PNGs](../assets/microsoft/png/) when SVG cannot be used; [FabricToolset SVGs](../assets/fabrictoolset/svg/) for additional architecture components |
| **Detailed Fabric UI / item icons** | [NPM visual gallery](../catalog/README.md) | [Categorized NPM SVG folders](../assets/npm/) for size and style variants |

This is a practical workflow recommendation, not a claim that community-curated icons are official Microsoft artwork. Check [source and usage terms](REFERENCES.md).

## Load a library into diagrams.net (draw.io)

1. Open [app.diagrams.net](https://app.diagrams.net/).
2. Start with a [FabricToolset XML library](../assets/fabrictoolset/xml/). If you need a smaller or more targeted Fabric icon set, choose a [Microsoft-derived XML library](../assets/microsoft/xml/README.md).
3. Download the XML file from GitHub (**Raw → Save**, or **Download raw file**).
4. In diagrams.net, select **File → Open Library from → Device**, and open the local `.xml`.
5. The shapes appear in the left-hand palette; drag the required icons to your diagram. Repeat only for the categories you need.

The XML libraries embed their SVG data; a shape does not depend on a third-party image server after loading it.

### Alternative: import directly from a URL

diagrams.net can load a GitHub raw XML library via a `clibs=U` URL parameter. [Its custom library documentation](https://www.drawio.com/docs/manual/shapes/public-custom-libraries/) explains the supported URL form.

Example for the **Fabric workloads** library:

```text
https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2FZeonZheng%2Ffabric-icons%2Fmain%2Fassets%2Fmicrosoft%2Fxml%2F01-fabric-workloads.xml
```

## Use SVGs in PowerPoint

1. Start with [Microsoft official SVGs](../assets/microsoft/svg/) for Fabric and Power BI workloads. Use [FabricToolset SVGs](../assets/fabrictoolset/svg/) for additional architecture components.
2. Download an SVG and insert it in PowerPoint through **Insert → Pictures → This Device**.
3. Keep the original aspect ratio and colors; put service names in slide text rather than editing product branding.
4. If SVG is unsupported in your target tool or export workflow, use a PNG from [Microsoft PNG](../assets/microsoft/png/).

## AI-assisted diagramming

When asking an AI coding or diagramming assistant to work with this repository, include the following resource-selection instructions in your prompt:

```text
Use https://github.com/ZeonZheng/fabric-icons as the icon reference.
For draw.io diagrams, prefer assets/fabrictoolset/xml/ and its diagram template;
use assets/microsoft/xml/ for additional or smaller Fabric palettes.
For PowerPoint, prefer assets/microsoft/svg/ and use PNG only when required.
Use assets/npm/ for detailed Fabric UI/item icon variants.
Use actual files from this repository; do not invent icon filenames or links.
Preserve product branding and follow docs/REFERENCES.md for attribution and terms.
```

These are selection guidelines, not automated diagram-generation tooling. The repository is a static asset collection; no installation is required.

## Practical architecture diagram advice

- Choose icons **by the actual Fabric item or workload**, not just by visual similarity.
- Use one consistent library or visual style for key architectural components.
- Explicitly label the arrows with data transfer direction, connection type, refresh or replication where relevant.
- Separate sources, ingestion/processing, storage, semantic model, and consumption with clear visual groupings.
- Avoid showing deprecated names or components as current architecture elements without explaining the environment/version.
- For a ready-made composition, open the [FabricToolset template](../assets/fabrictoolset/template/Microsoft%20Fabric%20Icon%20Pack.drawio) and adapt it rather than arranging hundreds of icons manually.

## Source authenticity

**`assets/microsoft/`** = Microsoft Learn-linked official ZIP.  
**`assets/npm/`** = NPM published Microsoft Fabric icon package, re-categorized.  
**`assets/fabrictoolset/`** = third-party curated icon pack by Andrzej Strzała.  
**`assets/microsoft/xml/`** = generated diagrams.net libraries from the official ZIP (a community convenience transformation, not an officially published Microsoft library).

[All sources, update information, and usage terms](REFERENCES.md) · [← Home](../README.md)
