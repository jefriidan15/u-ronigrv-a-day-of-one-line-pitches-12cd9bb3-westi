// A Day of One-Line Pitches — make.fun entry
// Writes one sentence to /output/entry.txt.
// The sentence must convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun, in a single read.
// Node 22, standard library only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 192 characters. Plain words, no jargon.
// It names the ask (describe the idea in plain words), the payoff
// (a working version to try today), and lowers the risk three ways:
// no coding, no cost to start, nothing to lose by changing your mind.
const ENTRY =
  "Just describe your app idea in plain words and let an AI agent " +
  "on make.fun build a working version you can try today \u2014 no " +
  "coding, no cost to start, and nothing to lose if you change " +
  "your mind.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
