"""Optimize website raster assets with Pillow; preserve paths except large photographic PNGs.

Usage: python3 scripts/optimize-images.py
Originals are backed up outside the project before any file is changed.
"""
from pathlib import Path
from PIL import Image, ImageOps
from io import BytesIO
import json
import tarfile
import tempfile

ROOT = Path(__file__).resolve().parents[1]
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'}
EXCLUDED = {'node_modules', 'dist', '.git', '.codex', '.agents'}
PHOTO_PNGS = {
    'public/images/sliders/twilight-city-dome.png',
    'public/images/academy/academy-handshake.png',
    'public/images/family-offices-hero-enhanced.png',
    'public/images/family-offices-hero-blurred.png',
    'public/images/professionals/aimt-enhanced.png',
    'public/images/events-hero.png',
    'public/images/about-cape-town-hero.png',
    'public/images/Team/freda-portrait.png',
    'public/images/Team/emmanuel-portrait.png',
    'public/images/Team/john-kohler.png',
}
files = sorted(p for p in ROOT.rglob('*') if p.is_file()
               and p.suffix.lower() in EXTENSIONS
               and not EXCLUDED.intersection(p.relative_to(ROOT).parts))
backup_dir = Path(tempfile.mkdtemp(prefix='asime-image-originals-'))
with tarfile.open(backup_dir / 'originals.tar', 'w') as archive:
    for path in files:
        archive.add(path, arcname=path.relative_to(ROOT))

results = []
renames = {}
for path in files:
    relative = path.relative_to(ROOT).as_posix()
    before = path.stat().st_size
    with Image.open(path) as source:
        if getattr(source, 'is_animated', False):
            results.append({'path': relative, 'before': before, 'after': before, 'note': 'Animation preserved'})
            continue
        image = ImageOps.exif_transpose(source)
        format_name = source.format
        target = path
        options = {}
        if relative in PHOTO_PNGS and not path.with_suffix('.webp').exists():
            target = path.with_suffix('.webp')
            format_name = 'WEBP'
            options = {'quality': 85, 'method': 6}
        elif format_name == 'JPEG':
            options = {'quality': 83, 'optimize': True, 'progressive': True}
        elif format_name == 'PNG':
            options = {'optimize': True, 'compress_level': 9}
        elif format_name == 'WEBP':
            options = {'quality': 85, 'method': 6}
        else:
            results.append({'path': relative, 'before': before, 'after': before, 'note': 'Original format preserved'})
            continue
        if format_name in {'JPEG', 'WEBP'}:
            image.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
        if source.info.get('icc_profile'):
            options['icc_profile'] = source.info['icc_profile']
        buffer = BytesIO()
        image.save(buffer, format=format_name, **options)
        encoded = buffer.getvalue()
        # Keep the original when re-encoding offers no meaningful saving.
        if len(encoded) < before * .98:
            target.write_bytes(encoded)
            if target != path:
                renames['/' + path.relative_to(ROOT / 'public').as_posix()] = '/' + target.relative_to(ROOT / 'public').as_posix()
                path.unlink()
            results.append({'path': relative, 'before': before, 'after': len(encoded), 'dimensions': image.size})
        else:
            results.append({'path': relative, 'before': before, 'after': before})

# Update source, generated metadata, and CSS references together.
for path in ROOT.rglob('*'):
    if not path.is_file() or EXCLUDED.intersection(path.relative_to(ROOT).parts):
        continue
    if path.suffix not in {'.tsx', '.ts', '.jsx', '.js', '.mjs', '.css', '.html', '.json', '.xml'}:
        continue
    text = path.read_text()
    updated = text
    for old, new in renames.items():
        updated = updated.replace(old, new)
    if updated != text:
        path.write_text(updated)

summary = {
    'images': len(results),
    'optimized': sum(r['after'] < r['before'] for r in results),
    'before_bytes': sum(r['before'] for r in results),
    'after_bytes': sum(r['after'] for r in results),
    'backup': str(backup_dir / 'originals.tar'),
    'renames': renames,
}
(backup_dir / 'report.json').write_text(json.dumps({'summary': summary, 'images': results}, indent=2))
print(json.dumps(summary, indent=2))
