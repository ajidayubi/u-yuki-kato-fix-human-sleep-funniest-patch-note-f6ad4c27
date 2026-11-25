// Fix Human Sleep: Funniest Patch Note — entry program.
// Writes one patch-note line (under 160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 160;

const LINE =
  "Sleep 2.0: humans now wake up rested — overnight progress saves correctly, and dreams resume where you left off.";

if (LINE.length < 1 || LINE.length >= MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS - 1} chars, got ${LINE.length}`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
