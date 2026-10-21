#!/usr/bin/env python3
"""Build small, standalone diagrams.net libraries from Microsoft's official SVGs."""
import base64
import json
import pathlib
import re
from collections import defaultdict
from xml.sax.saxutils import escape

ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCE = ROOT / "icons-ms-official" / "svg"
OUTPUT = ROOT / "drawio" / "ms-official"
MAX_PER_LIBRARY = 40

# Category matching is intentionally conservative. Unmatched icons stay discoverable.
GROUPS = [
    ("01-fabric-workloads", r"^(fabric|power_bi|one_lake|data_engineering|data_factory|data_science|data_warehouse|real_time_intelligence|databases|copilot|industry_solutions|purview|graph_intelligence)$"),
    ("02-data-integration", r"(pipeline|copy_job|dataflow|gateway|connection|data_factory|data_source|ingest|shortcut)"),
    ("03-data-engineering", r"(lakehouse|notebook|spark|environment|user_data_function|warehouse|sql_database|mirrored|database|storage|one_lake)"),
    ("04-real-time-intelligence", r"(eventstream|event_house|eventhouse|kql|real_time|activator|streaming|event_hub)"),
    ("05-power-bi-analytics", r"(power_bi|semantic_model|report|dashboard|scorecard|datamart|metric|visual|paginated|model)"),
    ("06-ai-data-science", r"(data_agent|copilot|experiment|machine_learning|feature_store|ai_|ml_|model_training)"),
    ("07-governance-platform", r"(workspace|deployment|git_|security|governance|capacity|monitor|domain|tenant|policy|lineage|access|admin|permission)"),
]
PATTERNS = [(name, re.compile(expr)) for name, expr in GROUPS]

def family_of(filename):
    return re.sub(r"_\d+_(?:color|filled|regular|items?|non-item)\.svg$", "", filename).removesuffix(".svg")

def preference(filename):
    size_match = re.search(r"_(\d+)_", filename)
    size = int(size_match.group(1)) if size_match else 32
    kind = (0 if filename.endswith("_item.svg") else
            1 if filename.endswith("_color.svg") else
            2 if filename.endswith("_filled.svg") else 3)
    return (kind, abs(size - 32), filename)

def category(family):
    for label, pattern in PATTERNS:
        if pattern.search(family):
            return label
    if re.search(r"^(arrow|chevron|menu|filter|sort|search|zoom|navigation|home|back|forward)", family):
        return "08-ui-navigation"
    return "09-other-ui"

def main():
    if not SOURCE.is_dir():
        raise SystemExit("Missing icons-ms-official/svg/ (sync the official ZIP first)")
    families = defaultdict(list)
    for item in SOURCE.glob("*.svg"):
        families[family_of(item.name)].append(item)
    buckets = defaultdict(list)
    for family, variants in families.items():
        icon = sorted(variants, key=lambda item: preference(item.name))[0]
        buckets[category(family)].append((family, icon))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for old in OUTPUT.glob("*.xml"):
        old.unlink()
    summary = ["# Official Microsoft Fabric — diagrams.net Libraries", "",
               "Generated from the [Microsoft official icon ZIP](../../icons-ms-official/svg/).",
               "Each XML is self-contained with embedded SVG data, contains at most 40 icons, and can be imported directly into diagrams.net.",
               "", "| Category | Icons | Library |", "| --- | ---: | --- |"]
    count = 0
    for group, records in sorted(buckets.items()):
        records.sort(key=lambda pair: pair[0])
        for start in range(0, len(records), MAX_PER_LIBRARY):
            batch = records[start:start+MAX_PER_LIBRARY]
            suffix = "" if len(records) <= MAX_PER_LIBRARY else f"-{start//MAX_PER_LIBRARY+1:02d}"
            filename = group + suffix + ".xml"
            entries = []
            for family, svg in batch:
                raw = svg.read_bytes()
                entries.append({
                    "title": family.replace("_", " ").title(),
                    "data": "data:image/svg+xml;base64," + base64.b64encode(raw).decode("ascii"),
                    "w": 64, "h": 64, "aspect": "fixed"
                })
            # JSON is text inside the mxlibrary element; escape XML specials.
            xml = '<mxlibrary>' + escape(json.dumps(entries, separators=(",", ":"), ensure_ascii=False)) + '</mxlibrary>\n'
            (OUTPUT / filename).write_text(xml, encoding="utf-8")
            summary.append(f"| {group} | {len(batch)} | [{filename}]({filename}) |")
            count += len(batch)
    summary += ["", f"**Total:** {count} representative SVG icon families; all size/style variants remain available in `icons-ms-official/svg/`.", "",
                "Load a local XML via **File → Open Library from → Device**, or load its GitHub raw URL using the `clibs=U...` parameter.",
                "The grouped icons are a convenience classification, not an official Microsoft product taxonomy.",
                "For usage rights and source attribution, see [Diagramming Guide](../../docs/DIAGRAMMING-GUIDE.md).", ""]
    (OUTPUT / "README.md").write_text("\n".join(summary), encoding="utf-8")
    print(f"Built {count} icon entries across {len(list(OUTPUT.glob('*.xml')))} libraries")

if __name__ == "__main__":
    main()
