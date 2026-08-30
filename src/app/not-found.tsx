import Link from "next/link";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm font-semibold text-[var(--color-accent)]">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          This page isn&apos;t ranking on Rank Page 1
        </h1>
        <p className="mt-4 text-base text-[var(--color-ink-soft)]">
          The page you&apos;re looking for doesn&apos;t exist, or has moved. Try one of the links below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to homepage</ButtonLink>
          <ButtonLink href="/how-to-rank-1-on-google-uk/" variant="secondary">
            Read the pillar guide
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-[var(--color-ink-faint)]">
          Or browse the <Link href="/seo-guides/" className="text-[var(--color-accent)] underline">SEO guides</Link> or{" "}
          <Link href="/seo-glossary/" className="text-[var(--color-accent)] underline">glossary</Link>.
        </p>
      </Container>
    </section>
  );
}
