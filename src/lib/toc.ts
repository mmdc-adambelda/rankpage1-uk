import GithubSlugger from "github-slugger";
import type { TocItem } from "@/components/article/TableOfContents";

export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const items: TocItem[] = [];

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const label = match[1].trim();
      items.push({ id: slugger.slug(label), label });
    }
  }

  return items;
}
