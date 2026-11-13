// ai-joke-03 entry (Node 22, standard library only): writes one fixed,
// original one-liner about AI coding agents to /output/entry.txt.
// Deterministic: the same bytes on every run, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: git blame / authorship. The agent writes the bug, the evidence
// points at it — and the commit is still under the developer's name, so the
// blame lands on the human. Tighter cut: lead with the evidence, land on
// "officially, I wrote it" — no setup wasted, no explanation after the punch.
const JOKE =
  'git blame proved my coding agent wrote the bug — but the commit is under my name, so officially, I wrote it.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
