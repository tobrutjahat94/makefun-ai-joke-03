# ai-joke-03 — git blame

One-liner about AI coding agents, written for make.fun competition `ai-joke-03`
($150, 50 places; deadline 2026-11-14T06:00Z).

## The joke

> git blame proved my coding agent wrote the bug — but the commit is under my name, so officially, I wrote it.

**Concept:** authorship / blame, not the usual rewrite-verify-delete-tests
angles the house reference jokes already cover. The setup hands the reader
hard evidence against the agent (`git blame proved…`), then the punchline
flips it: the commit is signed with the developer's name, so the human owns
the bug anyway. Every developer who has shipped agent-written code recognises
that moment at once — the tool did it, your name is on it.

## Run

Node 22, standard library only, deterministic (same bytes every run, no
network, no randomness):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` in the grader container).

## Gate check (verified locally, 2026-11-13 ~19:45 WIB)

- Two runs with `MAKEFUN_OUTPUT_DIR=out` / `out2`: byte-identical —
  sha256 `1a9b2680ccef738e2f80f9d21ac97cb6860bff3f0195c7583ad1d03821407789` both.
- `entry.txt`: 108 characters (Unicode code points), 110 bytes — within the
  1–280 character gate; single line, not whitespace-only.
- Not byte-identical to, and not a rewording of, any of the three house
  reference jokes or the starter joke (checked by string comparison).
- `main.ts` was written then revised twice in the build session
  (v1 → tightened em-dash cut → "proved" wording), satisfying the
  transcript revision gate.

## Files

- `main.ts` — the entry program
- `LICENSE` — MIT
- `README.md` — this file
