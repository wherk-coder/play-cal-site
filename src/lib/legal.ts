import { readFileSync } from "fs";
import { join } from "path";

/**
 * Load a legal markdown document at build time.
 *
 * The source files in `src/content/` are mirrored from
 * `wherk-coder/family-hub` (`docs/legal/*.md`) on each release. Keeping
 * them in this repo means privacy/terms updates ship in a normal PR and
 * deploy via Vercel — no separate CMS, no fetch-on-render fragility.
 */
export function loadLegalMarkdown(filename: string): string {
  const path = join(process.cwd(), "src/content", filename);
  return readFileSync(path, "utf8");
}
