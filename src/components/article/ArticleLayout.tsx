import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs, { Crumb } from "@/components/article/Breadcrumbs";
import TableOfContents, { TocItem } from "@/components/article/TableOfContents";
import ReadingProgress from "@/components/article/ReadingProgress";
import WasHelpful from "@/components/article/WasHelpful";

export default function ArticleLayout({
  breadcrumbs,
  category,
  title,
  description,
  publishedAt,
  updatedAt,
  readingTimeMinutes,
  toc,
  children,
  related,
}: {
  breadcrumbs: Crumb[];
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  toc: TocItem[];
  children: ReactNode;
  related?: ReactNode;
}) {
  const formattedPublished = new Date(publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedUpdated = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <article>
      <ReadingProgress />
      <header className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <span className="mt-4 inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
            {category}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-[var(--color-ink)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-ink-faint)]">
            <span>Published {formattedPublished}</span>
            {formattedUpdated && <span>· Updated {formattedUpdated}</span>}
            <span>· {readingTimeMinutes} min read</span>
            <span>· Editorial team, Rank Page 1</span>
          </div>
        </Container>
      </header>

      <div className="py-14">
        <Container className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <div className="hidden lg:block">
            <TableOfContents items={toc} />
          </div>
          <div className="min-w-0">
            <div className="prose-editorial max-w-none">{children}</div>
            <div className="mt-12">
              <WasHelpful />
            </div>
            {related && <div className="mt-14">{related}</div>}
          </div>
        </Container>
      </div>
    </article>
  );
}
