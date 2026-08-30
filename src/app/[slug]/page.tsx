import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Breadcrumbs from "@/components/article/Breadcrumbs";
import { categories, getCategory } from "@/lib/categories";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/${category.slug}/` },
    openGraph: { title: category.title, description: category.description },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.description,
    url: `${SITE.url}/${category.slug}/`,
    isPartOf: { "@id": `${SITE.url}/#website` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.label }]} />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)]">{category.description}</p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-editorial">
            {category.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>
              This section of Rank Page 1 is growing — in-depth guides on each of the topics below are
              being added over time. For the full framework these topics sit inside, start with the{" "}
              <Link href="/how-to-rank-1-on-google-uk/">complete guide to ranking #1 on Google UK</Link>.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                What this covers
              </p>
              <ul className="mt-4 space-y-2.5">
                {category.covers.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-6">
              <p className="font-display text-base font-semibold text-[var(--color-ink)]">
                Want a second opinion on your site?
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Request a free SEO enquiry and we&apos;ll take a look at what&apos;s helping — and hurting
                — your rankings.
              </p>
              <ButtonLink href="/contact/" variant="secondary" className="mt-4 w-full">
                Request an SEO Review
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
