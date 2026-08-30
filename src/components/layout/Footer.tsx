import Link from "next/link";
import Container from "@/components/ui/Container";
import { footerNav, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper-dim)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-ink)] text-xs font-bold text-[var(--color-paper)]">
                1
              </span>
              Rank Page 1
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {SITE.description}
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                {group.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rank Page 1. An independent UK SEO resource.</p>
          <p>Built &amp; published in the United Kingdom.</p>
        </div>
      </Container>
    </footer>
  );
}
