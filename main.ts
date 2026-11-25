import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You opened me 14 times today. Nothing new has appeared since visit one. One of us needs to change, and I'm set to 4\u00B0C.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n", "utf8");
} catch {
  writeFileSync("entry.txt", entry + "\n", "utf8");
}
