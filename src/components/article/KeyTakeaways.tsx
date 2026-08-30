export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
        Key takeaways
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
