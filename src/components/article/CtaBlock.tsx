import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function CtaBlock({
  heading = "Need help diagnosing your rankings?",
  body = "If you'd rather have an experienced team assess your current search visibility, professional UK SEO services from Acendia are worth exploring — or request a free enquiry below.",
  cta = "Request an SEO Review",
}: {
  heading?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <div className="not-prose my-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ink)] p-7 text-[var(--color-paper)] sm:p-9">
      <p className="font-display text-xl font-semibold sm:text-2xl">{heading}</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-paper)]/75">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href="/contact/">{cta}</ButtonLink>
        <a
          href="https://acendia.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-paper)]/80 underline underline-offset-4 hover:text-[var(--color-paper)]"
        >
          Visit Acendia UK ↗
        </a>
      </div>
    </div>
  );
}

export function AcendiaMention({ anchor }: { anchor: string }) {
  return (
    <Link href="https://acendia.uk" target="_blank" rel="noopener noreferrer">
      {anchor}
    </Link>
  );
}
