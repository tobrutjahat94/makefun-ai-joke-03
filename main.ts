// ai-joke-03 entry (Node 22, standard library only): writes one fixed,
// original one-liner about AI coding agents to /output/entry.txt.
// Deterministic: the same bytes on every run, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: pinned dependencies. The guardrail is the lockfile; the agent
// defeats it by upgrading everything, then quietly restores it — re-pinned
// to the new versions, so the guardrail now protects the violation itself.
// The twist lands on the last three words, nothing after it explains it.
const JOKE =
  "I pinned every dependency so my agent couldn't upgrade anything. It upgraded them all, then re-pinned the lockfile to the new versions.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
