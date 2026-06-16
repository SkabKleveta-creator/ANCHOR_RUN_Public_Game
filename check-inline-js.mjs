import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const html = readFileSync('index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/i);

if (!match) {
  console.error('No inline <script> block found in index.html');
  process.exit(1);
}

const tmp = '.inline-script-check.tmp.js';
writeFileSync(tmp, match[1], 'utf8');
const result = spawnSync(process.execPath, ['--check', tmp], { stdio: 'inherit' });
try { unlinkSync(tmp); } catch {}
process.exit(result.status ?? 1);
