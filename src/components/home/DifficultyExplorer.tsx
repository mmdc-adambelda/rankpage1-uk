"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const levels = [
  {
    key: "low",
    label: "Low competition",
    color: "var(--color-success)",
    description:
      "Fewer established sites targeting the term, often long-tail or local queries with lower search volume. Realistic to rank with solid on-page SEO and a handful of relevant links.",
    factors: ["Low search volume", "Few strong competitors", "Narrow, specific intent", "Limited SERP features"],
  },
  {
    key: "moderate",
    label: "Moderate competition",
    color: "#c98a12",
    description:
      "A mix of established and newer sites. Usually needs genuinely strong content, solid technical SEO and some authority-building to break into the top results.",
    factors: ["Moderate search volume", "Some authoritative competitors", "Mixed intent signals", "A few SERP features"],
  },
  {
    key: "high",
    label: "High competition",
    color: "var(--color-signal)",
    description:
      "Dominated by established, high-authority sites — often national brands or category leaders. Requires sustained investment across content, technical SEO and authority over time.",
    factors: ["High search volume", "Strong incumbent domains", "Commercial intent", "Rich SERP features & ads"],
  },
];

export default function DifficultyExplorer() {
  const [active, setActive] = useState(levels[0].key);
  const current = levels.find((l) => l.key === active) ?? levels[0];

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] py-20">
      <Container>
        <SectionHeading
          eyebrow="SEO difficulty explorer"
          title="Why ranking difficulty varies so much"
          description="Not every keyword is equally hard to rank for. Explore how competition typically changes as terms move from niche and specific to broad and commercial."
        />

        <div className="mt-10">
          <div className="relative h-3 w-full rounded-full bg-gradient-to-r from-[var(--color-success)] via-[#c98a12] to-[var(--color-signal)]">
            {levels.map((level, i) => (
              <button
                key={level.key}
                onClick={() => setActive(level.key)}
                aria-label={level.label}
                className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[var(--color-paper)] bg-[var(--color-ink)] text-[10px] font-bold text-[var(--color-paper)] shadow transition-transform hover:scale-110"
                style={{ left: `${(i / (levels.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {levels.map((level) => (
              <button
                key={level.key}
                onClick={() => setActive(level.key)}
                className={`rounded-2xl border p-4 text-left transition-colors ${
                  active === level.key
                    ? "border-[var(--color-ink)] bg-[var(--color-card)] shadow-md"
                    : "border-[var(--color-line)] bg-transparent hover:border-[var(--color-ink)]/40"
                }`}
              >
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ background: level.color }}
                />
                <p className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{level.label}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-7">
            <p className="text-base leading-relaxed text-[var(--color-ink)]">{current.description}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {current.factors.map((factor) => (
                <li key={factor} className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  {factor}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink-faint)]">
              This is an educational illustration, not a prediction tool — actual difficulty depends on
              search volume, competitor strength, search intent, domain authority, content quality,
              backlink profiles, local competition and SERP features, and no tool can tell you exactly
              where a page will rank.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
