import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

export type ArticleFrontmatter = {
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
};

export type Article = {
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTimeMinutes: number;
};

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    frontmatter: { ...(data as Omit<ArticleFrontmatter, "slug">), slug },
    content,
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => a !== null);
}
