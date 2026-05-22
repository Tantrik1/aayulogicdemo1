import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = new URL('../public/', import.meta.url);
const KEEP_FORMAT = true;

const fmtKB = (n) => `${(n / 1024).toFixed(1)} KB`;

async function compressFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  const before = (await stat(filePath)).size;
  const tmp = `${filePath}.tmp`;
  let img = sharp(filePath, { failOn: 'none' });

  if (ext === '.jpg' || ext === '.jpeg') {
    await img.jpeg({ quality: 82, mozjpeg: true, progressive: true }).toFile(tmp);
  } else if (ext === '.png') {
    await img.png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(tmp);
  } else {
    return null;
  }

  const after = (await stat(tmp)).size;
  if (after >= before) {
    await unlink(tmp);
    return { filePath, before, after: before, skipped: true };
  }
  await rename(tmp, filePath);
  return { filePath, before, after, skipped: false };
}

const files = await readdir(PUBLIC_DIR);
const targets = files.filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const f of targets) {
  const fp = join(PUBLIC_DIR.pathname.replace(/^\//, ''), f);
  const full = new URL(f, PUBLIC_DIR).pathname.replace(/^\//, '');
  try {
    const r = await compressFile(full);
    if (!r) continue;
    totalBefore += r.before;
    totalAfter += r.after;
    const pct = (((r.before - r.after) / r.before) * 100).toFixed(1);
    console.log(
      r.skipped
        ? `= ${f.padEnd(40)} ${fmtKB(r.before).padStart(10)}  (already optimal)`
        : `✓ ${f.padEnd(40)} ${fmtKB(r.before).padStart(10)} -> ${fmtKB(r.after).padStart(10)}  (-${pct}%)`,
    );
  } catch (e) {
    console.error(`x ${f}: ${e.message}`);
  }
}

console.log('');
console.log(`Total: ${fmtKB(totalBefore)} -> ${fmtKB(totalAfter)}  saved ${fmtKB(totalBefore - totalAfter)}`);
