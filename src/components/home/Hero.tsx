import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-paper)] pb-20 pt-16 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)] opacity-[0.07]"
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
              A UK SEO resource, not an agency pitch
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              How to Rank #1 on Google in the UK
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Practical, plain-English strategies, research and interactive tools for improving Google
              rankings in the UK — covering keyword research, on-page and technical SEO, local search,
              content strategy and link building.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact/">Get Your Free SEO Enquiry</ButtonLink>
              <ButtonLink href="/how-to-rank-1-on-google-uk/" variant="secondary">
                Explore the SEO Guides
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">Focus</dt>
                <dd className="mt-1 font-display text-lg font-semibold">UK search</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">Format</dt>
                <dd className="mt-1 font-display text-lg font-semibold">Guides &amp; tools</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">Approach</dt>
                <dd className="mt-1 font-display text-lg font-semibold">No fluff</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 shadow-xl shadow-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                Google UK SERP — simplified
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { pos: 1, label: "Strong intent match + technical health", strength: 92 },
                  { pos: 2, label: "Good content, weaker authority", strength: 74 },
                  { pos: 3, label: "Thin content, fast site", strength: 58 },
                  { pos: 4, label: "Outdated, slow, few links", strength: 34 },
                ].map((row) => (
                  <div key={row.pos} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper-dim)] text-xs font-bold text-[var(--color-ink)]">
                      {row.pos}
                    </span>
                    <div className="flex-1">
                      <div className="mb-1 h-2 w-full overflow-hidden rounded-full bg-[var(--color-paper-dim)]">
                        <div
                          className="h-full rounded-full bg-[var(--color-accent)]"
                          style={{ width: `${row.strength}%` }}
                        />
                      </div>
                      <p className="text-xs text-[var(--color-ink-soft)]">{row.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--color-ink-faint)]">
                Illustrative only — Google&apos;s ranking system weighs hundreds of signals, and no tool
                can predict an exact position.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
