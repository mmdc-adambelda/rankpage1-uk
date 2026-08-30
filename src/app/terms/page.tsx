import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Rank Page 1 website.",
  alternates: { canonical: "/terms/" },
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-[var(--color-ink-faint)]">Last updated: [INSERT DATE]</p>
        <div className="prose-editorial mt-8 max-w-none">
          <p>
            These Terms of Use govern your access to and use of rankpage1.uk (the &quot;Site&quot;),
            operated by [INSERT LEGAL ENTITY NAME]. By using the Site, you agree to these terms. This is a
            template — replace bracketed placeholders with accurate legal details before publishing live.
          </p>
          <h2>Use of content</h2>
          <p>
            Content on this Site is provided for general informational purposes only and does not
            constitute professional advice. You may reference and link to our content, but reproduction
            of substantial portions without permission is not permitted.
          </p>
          <h2>No guaranteed outcomes</h2>
          <p>
            Nothing on this Site guarantees any specific search ranking, traffic outcome, or business
            result. SEO outcomes depend on many factors outside our control, including changes to search
            engine algorithms.
          </p>
          <h2>Interactive tools</h2>
          <p>
            Tools on this Site (including any keyword, SERP preview, or difficulty-illustration tools) are
            provided for educational purposes and produce estimates or illustrations only — they are not
            predictions of actual search performance.
          </p>
          <h2>Third-party links</h2>
          <p>
            The Site may link to third-party websites, including professional service providers such as
            Acendia. We are not responsible for the content or practices of external sites.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, [INSERT LEGAL ENTITY NAME] is not liable for any loss or
            damage arising from your use of this Site or reliance on its content.
          </p>
          <h2>Changes to these terms</h2>
          <p>We may update these terms from time to time. Continued use of the Site constitutes acceptance of the current version.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to [INSERT CONTACT EMAIL].</p>
        </div>
      </Container>
    </section>
  );
}
