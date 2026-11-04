import { readFileSync } from "node:fs";
import { join } from "node:path";

export type LegacyDocument = {
  bodyClassName: string;
  markup: string;
};

export function readLegacyDocument(filename: "index.html" | "index-dark.html"): LegacyDocument {
  const source = readFileSync(join(process.cwd(), "content", filename), "utf8");
  const bodyMatch = source.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);

  if (!bodyMatch) {
    throw new Error(`Unable to find the body element in ${filename}`);
  }

  const bodyClassName = bodyMatch[1].match(/class=["']([^"']*)["']/i)?.[1] ?? "";
  const markup = bodyMatch[2]
    .replace(/<!-- SCRIPTS -->[\s\S]*?<!-- \/SCRIPTS -->/i, "")
    .replace(/(["'(=])img\//g, "$1/img/");

  return { bodyClassName, markup };
}
