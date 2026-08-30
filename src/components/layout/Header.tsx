"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site";
import Container from "@/components/ui/Container";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-ink)] text-xs font-bold text-[var(--color-paper)]">
            1
          </span>
          Rank Page 1
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((group) => (
            <div key={group.label} className="group relative">
              <Link
                href={group.href ?? "#"}
                className="flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
              >
                {group.label}
                <svg width="10" height="10" viewBox="0 0 10 10" className="mt-px opacity-60">
                  <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-2 shadow-lg shadow-black/5">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--color-paper-dim)]"
                    >
                      <span className="block font-medium text-[var(--color-ink)]">{link.label}</span>
                      {link.description && (
                        <span className="block text-xs text-[var(--color-ink-faint)]">{link.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
          >
            Request an SEO Review
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((group) => (
              <div key={group.label} className="border-b border-[var(--color-line)] py-2 last:border-none">
                <button
                  className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold"
                  onClick={() => setOpenGroup((g) => (g === group.label ? null : group.label))}
                >
                  {group.label}
                  <span>{openGroup === group.label ? "−" : "+"}</span>
                </button>
                {openGroup === group.label && (
                  <div className="flex flex-col gap-1 pb-2 pl-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg px-2 py-2 text-sm text-[var(--color-ink-soft)] hover:bg-[var(--color-paper-dim)]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact/"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-[var(--color-paper)]"
              onClick={() => setOpen(false)}
            >
              Request an SEO Review
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
