// The One-Line Exit — main.ts
// Writes one funny resignation letter, exactly one line long,
// to /output/entry.txt (the harness output directory).
//
// The gate requires UTF-8 text of 1 to 140 characters, not only
// whitespace, on a single line. This program writes a fixed,
// hand-written line: no network, no randomness, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I hereby resign, effective immediately \u2014 after three years of being told \u2018we\u2019re a family here,\u2019 I have decided to get emancipated.";

function outPath(): string {
  // The grader mounts /output; locally, MAKEFUN_OUTPUT can point
  // the file elsewhere (for example ./output) for testing.
  const dir = process.env.MAKEFUN_OUTPUT ?? "/output";
  return join(dir, "entry.txt");
}

function validate(text: string): void {
  // Mirror the gate in competition.yaml: 1 to 140 characters,
  // exactly one line, not only whitespace.
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry is ${text.length} characters; gate needs 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  validate(ENTRY);
  const path = outPath();
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${path}`);
}

main();
