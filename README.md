# Microsoft Fabric Icons

A clone-ready collection of Microsoft Fabric SVG and PNG icon resources, organized for **draw.io, architecture diagrams, documentation, and PowerPoint**.

## Choose an icon source

| Source | Browse | Files |
| --- | --- | --- |
| NPM `@fabric-msft/svg-icons` | [Organized SVG folders](icons/) · **[Browse icon galleries](catalog/README.md)** | 1670 SVG |
| Microsoft official `Icons.zip` | [SVG](icons-ms-official/svg/) · [PNG](icons-ms-official/png/) | 1,584 SVG + 1,584 PNG |

**[Diagramming guide and reference sources](docs/DIAGRAMMING-GUIDE.md)** — Microsoft Learn, Microsoft ZIP, SVG-to-PNG notebook and 2026 community blog.

## Draw.io / diagrams.net — importable icon libraries

You can import ready-made XML shape libraries directly into [diagrams.net](https://app.diagrams.net/). Each library contains embedded SVG content, so you can drag icons onto drawings without relying on image-host URLs.

| Collection | Purpose | Browse |
| --- | --- | --- |
| **Microsoft official** | Official Fabric SVGs selected and split into 16 compact libraries (max 40 icons each) | [Official draw.io libraries](drawio/ms-official/README.md) |
| **FabricToolset community** | Original seven draw.io libraries shown in earlier screenshots; MIT license and attribution preserved | [Full FabricToolset icon pack, preview and instructions](drawio/community-fabrictoolset/README.md) |

**Quick start:** In diagrams.net select **File → Open Library from → Device**, then choose a downloaded `.xml` from one of the links above. Alternatively, load the raw GitHub XML URL with the `clibs=U...` query parameter as described in the [draw.io documentation](https://www.drawio.com/docs/manual/shapes/public-custom-libraries/).

These libraries are distinct from the source SVG/PNG folders; the official library generator is `python scripts/build-drawio-libraries.py`.

## Clone the library

```bash
git clone https://github.com/ZeonZheng/fabric-icons.git
```

Until this PR is merged, clone the feature branch instead:

```bash
git clone --branch refactor/organized-icon-catalog https://github.com/ZeonZheng/fabric-icons.git
```

No installation is required to use the checked-in icons.

## Maintenance

Run `npm install && npm start` to synchronize the NPM SVG collection and regenerate the category galleries. Run `python scripts/sync-ms-official.py` to refresh the separate Microsoft official ZIP collection. See [source provenance](sources/microsoft-official.json).

**Note:** Icons are owned by their respective publishers; see the [Microsoft usage conditions](https://learn.microsoft.com/en-us/fabric/fundamentals/icons). This is a community-maintained catalog, not an official Microsoft branding guide.
