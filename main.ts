// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thank you for your email. I am out of office — I quit to become a barista. Your ticket is now a name on a cup: misspelled, lukewarm, and auto-deleted after three unanswered calls.";

// The gate only accepts 1 to 280 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry must be 1-280 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
