import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Rank Page 1",
  description:
    "Rank Page 1 is an independent educational resource helping UK businesses understand Google search and SEO.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          About Rank Page 1
        </h1>
        <div className="prose-editorial mt-8 max-w-none">
          <p>
            Rank Page 1 is an independent educational resource focused on one question: how do UK
            businesses, marketers and website owners genuinely improve their visibility on Google?
            We publish practical, plain-English guides, interactive tools and reference material covering
            keyword research, on-page and technical SEO, local search, content strategy and link building.
          </p>
          <p>
            The site exists because a lot of SEO advice online is either outdated, written to sell a
            specific product or service, or padded out to hit a word count rather than genuinely help.
            Our goal is the opposite: fewer, better pages that a UK business owner would actually bookmark
            and come back to.
          </p>
          <h2>Editorial principles</h2>
          <ul>
            <li>We don&apos;t publish content we haven&apos;t verified is accurate to the best of current, publicly available knowledge about how search engines work.</li>
            <li>We don&apos;t fabricate statistics, case studies, testimonials or expert credentials.</li>
            <li>We don&apos;t promise guaranteed rankings — no legitimate source can.</li>
            <li>Guides are reviewed and updated as search engines and best practice evolve.</li>
            <li>Where we reference outside services, including <a href="https://acendia.uk" target="_blank" rel="noopener noreferrer">Acendia</a>, it&apos;s because they&apos;re editorially relevant to the topic at hand — not a default sales pitch.</li>
          </ul>
          <h2>What this site is not</h2>
          <p>
            Rank Page 1 is not an SEO agency, and it&apos;s not a sales funnel dressed up as a blog. It&apos;s
            a publication. If you&apos;d like hands-on help with your own website, several of our guides
            point to professional SEO services as an optional next step — but every guide is written to
            stand on its own regardless.
          </p>
        </div>
      </Container>
    </section>
  );
}
