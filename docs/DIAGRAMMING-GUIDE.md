# Use Fabric Icons in draw.io and PowerPoint

This is a short practical guide for architecture diagrams, technical presentations and documentation.

## Choose the right resource

| Need | Start here | Why |
| --- | --- | --- |
| Browse visually to find an NPM Fabric SVG | [Icon gallery](../catalog/README.md) | Category pages have no more than 60 previews |
| Select an official icon for PowerPoint or a technical diagram | [Microsoft SVG](../assets/microsoft/svg/) | Vector format stays sharp when resized |
| Use an official PNG image | [Microsoft PNG](../assets/microsoft/png/) | Useful if a tool cannot import SVG |
| Add ready-made Fabric shapes to draw.io | [Small Microsoft draw.io libraries](../libraries/microsoft/README.md) | Each XML embeds at most 40 icons |
| Reuse an existing architecture diagram toolkit | [FabricToolset community icon pack](../assets/fabrictoolset/README.md) | Includes SVGs, libraries, template and visual preview |

## Load a library into diagrams.net (draw.io)

1. Open [app.diagrams.net](https://app.diagrams.net/).
2. From this repository, choose a small XML library in [`libraries/microsoft/`](../libraries/microsoft/) or the original community [`assets/fabrictoolset/xml/`](../assets/fabrictoolset/xml/).
3. Download the XML file from GitHub (**Raw → Save**, or **Download raw file**).
4. In diagrams.net, select **File → Open Library from → Device**, and open the local `.xml`.
5. The shapes appear in the left-hand palette; drag the required icons to your diagram. Repeat only for the categories you need.

The XML libraries embed their SVG data; a shape does not depend on a third-party image server after loading it.

### Alternative: import directly from a URL

diagrams.net can load a GitHub raw XML library via a `clibs=U` URL parameter. [Its custom library documentation](https://www.drawio.com/docs/manual/shapes/public-custom-libraries/) explains the supported URL form.

Example for the **Fabric workloads** library **after the changes are merged to `main`**:

```text
https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2FZeonZheng%2Ffabric-icons%2Fmain%2Flibraries%2Fmicrosoft%2F01-fabric-workloads.xml
```

While the changes are in PR #1, the local download/import workflow is the simplest and least branch-dependent.

## Use SVGs in PowerPoint

1. Browse [Microsoft SVGs](../assets/microsoft/svg/) or [FabricToolset SVGs](../assets/fabrictoolset/svg/).
2. Download an SVG and insert it in PowerPoint through **Insert → Pictures → This Device**.
3. Keep the original aspect ratio and colors; put service names in slide text rather than editing product branding.
4. If SVG is unsupported in your target tool or export workflow, use a PNG from [Microsoft PNG](../assets/microsoft/png/).

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
**`libraries/microsoft/`** = generated diagrams.net libraries from the official ZIP (a community convenience transformation, not an officially published Microsoft library).

[All sources, update information, and usage terms](REFERENCES.md) · [← Home](../README.md)
