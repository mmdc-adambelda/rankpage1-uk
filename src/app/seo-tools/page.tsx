import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import IntentClassifier from "@/components/tools/IntentClassifier";
import SerpPreview from "@/components/tools/SerpPreview";
import SeoChecklist from "@/components/home/SeoChecklist";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free SEO Tools",
  description:
    "Free interactive SEO tools: a keyword intent classifier, a Google-style SERP snippet preview, and an interactive SEO ranking checklist.",
  alternates: { canonical: "/seo-tools/" },
};

export default function SeoToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rank Page 1 SEO Tools",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web-based)",
    url: `${SITE.url}/seo-tools/`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SEO Tools" }]} />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Free SEO Tools
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">
            Simple, free, browser-based tools to help you think through keyword intent and search
            snippets. These are educational aids, not ranking predictors.
          </p>
        </Container>
      </section>

      <section id="intent" className="border-b border-[var(--color-line)] py-16">
        <Container>
          <SectionHeading eyebrow="Tool" title="Keyword Intent Classifier" description="Enter a keyword to get an educational estimate of its likely search intent." />
          <div className="mt-8 max-w-2xl">
            <IntentClassifier />
          </div>
        </Container>
      </section>

      <section id="serp-preview" className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] py-16">
        <Container>
          <SectionHeading eyebrow="Tool" title="SERP Snippet Preview" description="Preview how your title and meta description might appear in Google's desktop and mobile results." />
          <div className="mt-8">
            <SerpPreview />
          </div>
        </Container>
      </section>

      <div id="checklist">
        <SeoChecklist />
      </div>
    </>
  );
}
