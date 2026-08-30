"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const areas = [
  {
    key: "intent",
    label: "Search intent",
    summary:
      "Google tries to match results to what a searcher actually wants — information, a local business, a comparison, or a purchase. Content that mismatches intent rarely ranks, however well written it is.",
  },
  {
    key: "content",
    label: "Content quality",
    summary:
      "Content needs to comprehensively and accurately answer the query, in a format searchers expect, better than what's already ranking — not just longer, but more useful.",
  },
  {
    key: "technical",
    label: "Technical SEO",
    summary:
      "Google has to be able to crawl, render and index your pages efficiently. Broken links, slow pages, poor mobile experiences and indexing errors all get in the way, regardless of content quality.",
  },
  {
    key: "authority",
    label: "Authority",
    summary:
      "Signals like quality backlinks, brand mentions and consistent expertise on a topic help Google trust a site enough to rank it for competitive terms.",
  },
  {
    key: "links",
    label: "Internal links",
    summary:
      "How pages link to each other tells Google (and users) which pages matter most and how topics relate — a deliberate structure spreads authority around a site.",
  },
  {
    key: "ux",
    label: "User experience",
    summary:
      "Core Web Vitals, mobile usability and clear page layout affect both rankings and whether visitors stay once they arrive — the two are closely linked.",
  },
  {
    key: "local",
    label: "Local relevance",
    summary:
      "For location-based searches, proximity, a well-optimised Google Business Profile and consistent local citations matter as much as — sometimes more than — traditional SEO signals.",
  },
  {
    key: "competition",
    label: "Competition",
    summary:
      "The realistic difficulty of ranking depends on who else is targeting the same query — their content quality, authority and how well established they already are in the SERP.",
  },
];

export default function RankingFramework() {
  const [active, setActive] = useState(areas[0].key);
  const current = areas.find((a) => a.key === active) ?? areas[0];

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] py-20">
      <Container>
        <SectionHeading
          eyebrow="The ranking framework"
          title="What does it take to rank #1?"
          description="Google's algorithm weighs hundreds of signals, but they cluster into a handful of areas you can actually act on. Select one to see what it involves."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2">
            {areas.map((area, i) => (
              <button
                key={area.key}
                onClick={() => setActive(area.key)}
                className={`rounded-2xl border p-4 text-left transition-colors ${
                  active === area.key
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "border-[var(--color-line)] bg-[var(--color-card)] hover:border-[var(--color-accent)]"
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    active === area.key ? "text-[var(--color-paper)]/60" : "text-[var(--color-ink-faint)]"
                  }`}
                >
                  0{i + 1}
                </span>
                <p className="mt-1 text-sm font-semibold">{area.label}</p>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {current.label}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink)]">{current.summary}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
