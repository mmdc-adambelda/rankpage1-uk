"use client";

import { useState } from "react";

type Intent = "Informational" | "Commercial" | "Transactional" | "Navigational" | "Local";

const patterns: { intent: Intent; keywords: string[] }[] = [
  { intent: "Transactional", keywords: ["buy", "price", "cost", "quote", "hire", "order", "booking", "book", "deal", "discount", "cheap", "for sale"] },
  { intent: "Commercial", keywords: ["best", "top", "vs", "versus", "review", "reviews", "compare", "comparison", "alternative", "alternatives"] },
  { intent: "Local", keywords: ["near me", "in manchester", "in london", "in birmingham", "in leeds", "in bristol", "in glasgow", "in edinburgh", "in cardiff", "local", "nearby"] },
  { intent: "Navigational", keywords: ["login", "sign in", "website", "official", "homepage", "contact number"] },
  { intent: "Informational", keywords: ["what is", "how to", "why", "guide", "tips", "meaning", "definition", "examples"] },
];

function classify(keyword: string): { intent: Intent; matched: string | null } {
  const lower = keyword.toLowerCase();
  for (const group of patterns) {
    const match = group.keywords.find((kw) => lower.includes(kw));
    if (match) return { intent: group.intent, matched: match };
  }
  return { intent: "Informational", matched: null };
}

const descriptions: Record<Intent, string> = {
  Informational: "The searcher likely wants to learn something. Best served by a comprehensive guide or article rather than a sales page.",
  Commercial: "The searcher is comparing options before deciding. Comparison content, reviews, or well-structured service pages tend to perform best.",
  Transactional: "The searcher is likely ready to act. A clear, fast-loading service or product page with an obvious next step usually wins here.",
  Navigational: "The searcher is looking for a specific site, brand or page rather than general information.",
  Local: "The searcher wants a result relevant to a specific place. Google Business Profile and local landing pages matter heavily here.",
};

export default function IntentClassifier() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ReturnType<typeof classify> | null>(null);

  return (
    <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 sm:p-8">
      <label htmlFor="intent-keyword" className="block text-sm font-medium text-[var(--color-ink)]">
        Enter a keyword
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="intent-keyword"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. best SEO agency UK"
          className="flex-1 rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
        />
        <button
          onClick={() => setResult(value.trim() ? classify(value.trim()) : null)}
          className="rounded-xl bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-[var(--color-paper)] hover:bg-[var(--color-accent)]"
        >
          Classify
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl bg-[var(--color-paper-dim)] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Likely intent: {result.intent}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]">{descriptions[result.intent]}</p>
        </div>
      )}

      <p className="mt-5 text-xs leading-relaxed text-[var(--color-ink-faint)]">
        This is an educational estimate based on common keyword patterns, not a definitive classification —
        always confirm intent by reviewing what's actually ranking in Google UK for your term.
      </p>
    </div>
  );
}
