import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You told your guests you cook. My camera disagrees. It's hummus. Again.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n", "utf8");
} catch {
  writeFileSync("entry.txt", entry + "\n", "utf8");
}
