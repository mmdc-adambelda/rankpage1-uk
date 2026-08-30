import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "SEO Guides",
  description: "Every SEO guide on Rank Page 1 — the UK's practical resource for improving Google rankings.",
  alternates: { canonical: "/seo-guides/" },
};

export default function SeoGuidesPage() {
  return (
    <section className="py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SEO Guides" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          SEO Guides
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">
          A growing library of practical, UK-focused SEO guides, organised by topic.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/how-to-rank-1-on-google-uk/"
            className="rounded-3xl border border-[var(--color-ink)] bg-[var(--color-ink)] p-6 text-[var(--color-paper)] transition-transform hover:-translate-y-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-paper)]/60">
              Pillar guide
            </span>
            <p className="mt-3 font-display text-xl font-semibold">
              How to Rank #1 on Google in the UK
            </p>
            <p className="mt-2 text-sm text-[var(--color-paper)]/70">
              The complete framework in one guide.
            </p>
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 transition-transform hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                {cat.label}
              </span>
              <p className="mt-3 font-display text-xl font-semibold text-[var(--color-ink)]">{cat.title}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{cat.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
