import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/lib/categories";

const featured = [
  {
    href: "/how-to-rank-1-on-google-uk/",
    tag: "Pillar guide",
    title: "How to Rank #1 on Google in the UK",
    description:
      "The complete framework — search intent, keywords, content, technical SEO, links, local SEO and more — in one guide.",
  },
];

export default function FeaturedGuides() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured guides"
          title="Start with the fundamentals"
          description="A growing library of practical, UK-focused SEO guides — organised so you can go as deep as you need."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between rounded-3xl border border-[var(--color-ink)] bg-[var(--color-ink)] p-7 text-[var(--color-paper)] transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-paper)]/60">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-paper)]/70">
                  {item.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">
                Read the guide
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}

          {categories.slice(0, 2).map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="group flex flex-col justify-between rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-7 transition-transform hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                  {cat.label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-[var(--color-ink)]">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{cat.description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
                Explore
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs font-medium text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
