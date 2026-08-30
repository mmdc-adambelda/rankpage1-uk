"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { id: "keyword-research", label: "Keyword research" },
  { id: "search-intent", label: "Search intent" },
  { id: "technical-seo", label: "Technical SEO" },
  { id: "on-page", label: "On-page optimisation" },
  { id: "internal-linking", label: "Internal linking" },
  { id: "content-quality", label: "Content quality" },
  { id: "local-seo", label: "Local SEO" },
  { id: "authority", label: "Authority building" },
  { id: "backlinks", label: "Backlinks" },
  { id: "gbp", label: "Google Business Profile" },
  { id: "conversion", label: "Conversion optimisation" },
];

const STORAGE_KEY = "rankpage1-seo-checklist";

export default function SeoChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      // ignore — localStorage unavailable
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore
    }
  }, [checked, hydrated]);

  const completed = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((completed / items.length) * 100);

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Interactive checklist"
            title="The SEO ranking checklist"
            description="Every area that genuinely moves the needle for UK websites, in one list. Tick off what you've already covered — your progress is saved in this browser only."
          />

          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--color-ink-soft)]">
                {completed} of {items.length} covered
              </span>
              <span className="font-mono text-sm font-semibold text-[var(--color-accent)]">{percent}%</span>
            </div>
            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-[var(--color-paper-dim)]">
              <div
                className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-[var(--color-paper-dim)]">
                    <input
                      type="checkbox"
                      checked={Boolean(checked[item.id])}
                      onChange={() =>
                        setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                      }
                      className="h-4 w-4 rounded border-[var(--color-line)] accent-[var(--color-accent)]"
                    />
                    <span
                      className={`text-sm ${
                        checked[item.id] ? "text-[var(--color-ink-faint)] line-through" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
