# Microsoft Fabric Icons & Diagramming Library

A ready-to-use collection of **Microsoft Fabric icons, draw.io shape libraries and editable diagram resources** for architecture diagrams, technical documentation and PowerPoint presentations.

**No installation or build step required.** Clone the repository, browse the folders and use the SVG, PNG or draw.io XML files directly.

![Microsoft Fabric diagramming library showcase — preview from FabricToolset](assets/fabrictoolset/template/img/DrawIO_Fabric_Icon_Pack.png)

<sub>Preview image and the curated Fabric & Azure pack by [Andrzej Strzała / FabricToolset](https://github.com/astrzala/FabricToolset), reproduced with attribution. See [sources and licensing notes](docs/REFERENCES.md).</sub>

## Explore Fabric icons

### Workloads and experiences

|  |  |  |  |
| :---: | :---: | :---: | :---: |
| [<img src="assets/microsoft/png/fabric_32_color.png" width="48" alt="Microsoft Fabric">](assets/microsoft/svg/fabric_32_color.svg)<br/>Microsoft Fabric | [<img src="assets/microsoft/png/power_bi_32_color.png" width="48" alt="Power BI">](assets/microsoft/svg/power_bi_32_color.svg)<br/>Power BI | [<img src="assets/microsoft/png/data_factory_32_color.png" width="48" alt="Data Factory">](assets/microsoft/svg/data_factory_32_color.svg)<br/>Data Factory | [<img src="assets/microsoft/png/data_engineering_32_color.png" width="48" alt="Data Engineering">](assets/microsoft/svg/data_engineering_32_color.svg)<br/>Data Engineering |
| [<img src="assets/microsoft/png/data_warehouse_32_color.png" width="48" alt="Data Warehouse">](assets/microsoft/svg/data_warehouse_32_color.svg)<br/>Data Warehouse | [<img src="assets/microsoft/png/data_science_32_color.png" width="48" alt="Data Science">](assets/microsoft/svg/data_science_32_color.svg)<br/>Data Science | [<img src="assets/microsoft/png/real_time_intelligence_32_color.png" width="48" alt="Real-Time Intelligence">](assets/microsoft/svg/real_time_intelligence_32_color.svg)<br/>Real-Time Intelligence | [<img src="assets/microsoft/png/one_lake_32_color.png" width="48" alt="OneLake">](assets/microsoft/svg/one_lake_32_color.svg)<br/>OneLake |

### Common architecture building blocks

|  |  |  |  |
| :---: | :---: | :---: | :---: |
| [<img src="assets/microsoft/png/lakehouse_32_item.png" width="48" alt="Lakehouse">](assets/microsoft/svg/lakehouse_32_item.svg)<br/>Lakehouse | [<img src="assets/microsoft/png/pipeline_32_item.png" width="48" alt="Data Pipeline">](assets/microsoft/svg/pipeline_32_item.svg)<br/>Data Pipeline | [<img src="assets/microsoft/png/notebook_32_item.png" width="48" alt="Notebook">](assets/microsoft/svg/notebook_32_item.svg)<br/>Notebook | [<img src="assets/microsoft/png/dataflow_gen2_32_item.png" width="48" alt="Dataflow Gen2">](assets/microsoft/svg/dataflow_gen2_32_item.svg)<br/>Dataflow Gen2 |
| [<img src="assets/microsoft/png/semantic_model_32_item.png" width="48" alt="Semantic Model">](assets/microsoft/svg/semantic_model_32_item.svg)<br/>Semantic Model | [<img src="assets/microsoft/png/report_32_item.png" width="48" alt="Report">](assets/microsoft/svg/report_32_item.svg)<br/>Report | [<img src="assets/microsoft/png/event_house_32_item.png" width="48" alt="Eventhouse">](assets/microsoft/svg/event_house_32_item.svg)<br/>Eventhouse | [<img src="assets/microsoft/png/data_agent_32_item.png" width="48" alt="Data Agent">](assets/microsoft/svg/data_agent_32_item.svg)<br/>Data Agent |

*Click any icon to open the original vector SVG. For all available sizes and variants, browse the full source folders.*

## Collections

**Where to start:** For **draw.io diagrams**, begin with FabricToolset's ready-made XML libraries; use the Microsoft-derived XML libraries when you need more Fabric-specific shapes. For **PowerPoint**, start with official Microsoft SVG icons (or PNG when SVG is unsuitable). Use NPM for additional Fabric UI and item-level variants.

| Collection | Best for | What's inside | Open |
| --- | --- | --- | --- |
| **FabricToolset — community pack** | **draw.io first choice** | **390 original files**: 7 XML libraries, SVGs, diagram templates and previews, plus the bundled license | [Draw.io XML](assets/fabrictoolset/xml/) · [Original guide & previews](assets/fabrictoolset/README.md) · [SVG](assets/fabrictoolset/svg/) |
| **Microsoft — official icon pack** | **PowerPoint first choice** · draw.io alternative | **1,584 SVG + 1,584 PNG** from Microsoft's `Icons.zip`, plus **16 community-generated** draw.io XML libraries | [SVG](assets/microsoft/svg/) · [PNG](assets/microsoft/png/) · [Draw.io XML](assets/microsoft/xml/README.md) |
| **NPM — categorized SVG** | Detailed Fabric UI and item icons | **1,670 SVGs**, organized by workload, item type and UI function | [Browse folders](assets/npm/) · [Visual gallery](catalog/README.md) |

These collections have different origins and licensing considerations; they are not interchangeable official releases. See [Sources & Attribution](docs/REFERENCES.md).

## Import libraries into draw.io

| Library | When to use | Open |
| --- | --- | --- |
| **1. FabricToolset XML — recommended first** | Ready-made Fabric, Azure and data-source palettes for architecture diagrams | [Browse 7 XML libraries](assets/fabrictoolset/xml/) · [Usage examples](assets/fabrictoolset/README.md) |
| **2. Microsoft-derived XML — alternative** | Smaller, category-based Fabric palettes; 16 XML libraries with at most 40 shapes each | [Browse Microsoft XML libraries](assets/microsoft/xml/README.md) |
| **Starter diagram template** | Start from a prearranged diagram instead of a blank canvas | [Open Fabric template](assets/fabrictoolset/template/Microsoft%20Fabric%20Icon%20Pack.drawio) |

**Import steps:** Open [diagrams.net](https://app.diagrams.net/) → **File → Open Library from → Device** → select a downloaded `.xml` file. The full [diagramming guide](docs/DIAGRAMMING-GUIDE.md) explains alternative GitHub URL importing, PPT use and best practices.

## Clone the library

```bash
git clone https://github.com/ZeonZheng/fabric-icons.git
```

```text
fabric-icons/
├── assets/
│   ├── fabrictoolset/        # Draw.io libraries, SVGs and templates
│   │   ├── xml/              # Ready-to-import community libraries
│   │   ├── svg/              # Community-curated icons
│   │   └── template/         # Starter diagram and preview
│   ├── microsoft/
│   │   ├── svg/              # Official icons for PPT and diagrams
│   │   ├── png/              # Official raster icons
│   │   └── xml/              # Generated draw.io shape libraries
│   └── npm/                  # Detailed Fabric SVG variants
├── catalog/                  # Visual icon gallery
└── docs/                     # Usage guide, sources and references
```

This repository is a **static, clone-ready asset snapshot**. There are no checked-in `node_modules`, NPM installation steps, or generation workflows to run.

## Documentation and sources

- [How to use these icons with draw.io, PowerPoint and AI tools](docs/DIAGRAMMING-GUIDE.md)
- [All original sources, references, attributions and license notes](docs/REFERENCES.md)
- [Microsoft Learn — Fabric icon usage guidance](https://learn.microsoft.com/en-us/fabric/fundamentals/icons)
- [FabricToolset original icon pack](https://github.com/astrzala/FabricToolset/tree/main/Microsoft%20Fabric%20%26%20Azure%20Icon%20Pack)

**Rights:** Product icons and marks are owned by their respective rights holders. The presence of a resource in this repository does not imply unrestricted redistribution or Microsoft endorsement; see [source-specific terms](docs/REFERENCES.md).
