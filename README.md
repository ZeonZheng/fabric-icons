# Microsoft Fabric Icons

A clone-ready collection of Microsoft Fabric SVG and PNG icon resources, organized for **draw.io, architecture diagrams, documentation, and PowerPoint**.

## Choose an icon source

| Source | Browse | Files |
| --- | --- | --- |
| NPM `@fabric-msft/svg-icons` | [Organized SVG folders](icons/) · **[Browse icon galleries](catalog/README.md)** | 1670 SVG |
| Microsoft official `Icons.zip` | [SVG](icons-ms-official/svg/) · [PNG](icons-ms-official/png/) | 1,584 SVG + 1,584 PNG |

**[Diagramming guide and reference sources](docs/DIAGRAMMING-GUIDE.md)** — Microsoft Learn, Microsoft ZIP, SVG-to-PNG notebook and 2026 community blog.

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
