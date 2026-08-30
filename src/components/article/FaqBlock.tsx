export type FaqItem = { question: string; answer: string };

export default function FaqBlock({ items, includeSchema = true }: { items: FaqItem[]; includeSchema?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="not-prose">
      {includeSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="divide-y divide-[var(--color-line)] rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)]">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-[var(--color-ink)]">
              {item.question}
              <span className="shrink-0 text-[var(--color-ink-faint)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
