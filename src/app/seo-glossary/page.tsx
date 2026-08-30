import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";
import { glossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "SEO Glossary",
  description: "Plain-English definitions of common SEO terms — backlinks, Core Web Vitals, search intent, schema markup and more.",
  alternates: { canonical: "/seo-glossary/" },
};

export default function GlossaryPage() {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SEO Glossary" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          SEO Glossary
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          Plain-English definitions for the SEO terms you&apos;ll run into throughout this site.
        </p>

        <dl className="mt-10 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
          {glossaryTerms.map((entry) => (
            <div key={entry.term} className="py-6">
              <dt className="font-display text-xl font-semibold text-[var(--color-ink)]">{entry.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)]">
                {entry.definition}
                {entry.relatedHref && (
                  <>
                    {" "}
                    <Link href={entry.relatedHref} className="text-[var(--color-accent)] underline underline-offset-2">
                      Read more about {entry.relatedLabel} →
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
