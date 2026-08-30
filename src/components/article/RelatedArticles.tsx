import Link from "next/link";

export type RelatedItem = { title: string; href: string; description: string };

export default function RelatedArticles({ items }: { items: RelatedItem[] }) {
  return (
    <div className="not-prose">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
        Related guides
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-5 transition-colors hover:border-[var(--color-accent)]"
          >
            <p className="font-display text-base font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
              {item.title}
            </p>
            <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
