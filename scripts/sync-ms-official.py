#!/usr/bin/env python3
"""Download Microsoft's official Fabric diagramming pack, preserving its folders."""
from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import shutil
import urllib.request
import zipfile

URL = "https://raw.githubusercontent.com/microsoft/fabric-samples/main/docs-samples/Icons.zip"
ROOT = pathlib.Path(__file__).resolve().parents[1]
TARGET = ROOT / "icons-ms-official"
MANIFEST = ROOT / "sources" / "microsoft-official.json"

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--zip", type=pathlib.Path, help="Use a locally downloaded Icons.zip instead of downloading")
    args = parser.parse_args()
    if args.zip:
        data = args.zip.read_bytes()
    else:
        with urllib.request.urlopen(URL, timeout=180) as stream:
            data = stream.read()
    import io
    extracted = 0
    shutil.rmtree(TARGET, ignore_errors=True)
    TARGET.mkdir(exist_ok=True)
    # Preserve the vendor's exact relative paths; reject path traversal.
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        names = set()
        for info in archive.infolist():
            if info.is_dir():
                continue
            rel = pathlib.PurePosixPath(info.filename.replace("\\", "/"))
            if rel.is_absolute() or ".." in rel.parts or not rel.parts:
                raise ValueError("Unsafe ZIP entry: " + info.filename)
            if rel.as_posix().lower() in names:
                raise ValueError("Duplicate ZIP entry: " + info.filename)
            names.add(rel.as_posix().lower())
            if rel.suffix.lower() not in (".svg", ".png"):
                continue
            output = TARGET / rel.suffix.lower().lstrip(".") / rel.name
            output.parent.mkdir(parents=True, exist_ok=True)
            output.write_bytes(archive.read(info))
            extracted += 1
    MANIFEST.parent.mkdir(exist_ok=True)
    MANIFEST.write_text(json.dumps({
        "source": "Microsoft Fabric official icons (Microsoft Learn)",
        "documentation": "https://learn.microsoft.com/en-us/fabric/fundamentals/icons",
        "zip": "https://github.com/microsoft/fabric-samples/blob/main/docs-samples/Icons.zip",
        "zip_sha256": hashlib.sha256(data).hexdigest(),
        "asset_count": extracted,
        "formats": ["svg", "png"],
        "source_package_version": "v6.1.0",
        "note": "Only image assets are retained (separated into svg/ and png/). Other package files are intentionally omitted. Microsoft icon usage restrictions apply."
    }, indent=2) + "\n", encoding="utf-8")
    print(f"Extracted {extracted} official icons/assets to {TARGET}")

if __name__ == "__main__":
    main()
