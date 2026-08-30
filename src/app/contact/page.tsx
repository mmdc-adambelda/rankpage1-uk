import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";
import LeadForm from "@/components/forms/LeadForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rank Page 1 or request a free SEO enquiry review.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rank Page 1",
    url: `${SITE.url}/contact/`,
  };

  return (
    <section className="py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Want to know why your website isn&apos;t ranking?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
            Tell us a little about your website and what you&apos;re trying to rank for, and we&apos;ll
            take a genuine look.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 shadow-sm sm:p-8">
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}
