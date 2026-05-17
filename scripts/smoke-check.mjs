import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const html = readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
if (!scripts.length) {
  console.error('No inline scripts found in index.html');
  process.exit(1);
}
const combined = scripts.join('\n\n');
const temp = join(tmpdir(), `govern-inline-${process.pid}.mjs`);
writeFileSync(temp, combined);
const check = spawnSync(process.execPath, ['--check', temp], { encoding: 'utf8' });
unlinkSync(temp);
if (check.status !== 0) {
  process.stderr.write(check.stderr || check.stdout);
  process.exit(check.status || 1);
}

const requiredIds = [
  'setup','game','policy-list','world-svg','chat-input','btn-send','week-btn',
  'cabinet-grid','congress-display','news-feed','log-list','expmodal','wbmodal'
];
const missing = requiredIds.filter(id => !html.includes(`id="${id}"`) && !html.includes(`id='${id}'`));
if (missing.length) {
  console.error(`Missing required DOM ids: ${missing.join(', ')}`);
  process.exit(1);
}

for (const symbol of ['function initState', 'function sendCommand', 'function endWeek', 'function saveGame', 'function loadGame', 'function migrateGameState']) {
  if (!combined.includes(symbol)) {
    console.error(`Missing required function: ${symbol}`);
    process.exit(1);
  }
}

console.log('GOVERN smoke check passed: inline JavaScript parses and required DOM anchors/functions exist.');
