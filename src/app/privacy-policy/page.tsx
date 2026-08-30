import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/article/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Rank Page 1 collects, uses and protects personal data.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[var(--color-ink-faint)]">Last updated: [INSERT DATE]</p>
        <div className="prose-editorial mt-8 max-w-none">
          <p>
            This Privacy Policy explains how Rank Page 1 (&quot;we&quot;, &quot;us&quot;) collects, uses and
            protects information when you visit rankpage1.uk (the &quot;Site&quot;). This is a template
            policy — replace the bracketed placeholders with your actual legal entity details before
            publishing live.
          </p>
          <h2>Who we are</h2>
          <p>
            Rank Page 1 is operated by [INSERT LEGAL ENTITY NAME], registered in [INSERT COUNTRY/REGISTRATION
            DETAILS]. For privacy enquiries, contact [INSERT CONTACT EMAIL].
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li><strong>Enquiry form data:</strong> when you submit a contact or enquiry form, we collect the information you provide — name, email, website URL, business name, target location, SEO goal and message.</li>
            <li><strong>Usage data:</strong> if analytics tools (such as Google Analytics) are enabled, we may collect anonymised or pseudonymised data about how you use the Site, including pages visited and general location.</li>
            <li><strong>Cookies:</strong> the Site may use cookies for essential functionality and, where enabled, analytics. You can control cookies through your browser settings.</li>
          </ul>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to enquiries submitted through our contact forms.</li>
            <li>To understand how the Site is used and improve its content and functionality.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>
            Enquiry form submissions are processed via Web3Forms, a third-party form processing service.
            We do not sell your personal data to third parties.
          </p>
          <h2>Data retention</h2>
          <p>We retain enquiry data only as long as reasonably necessary to respond to and follow up on your enquiry, or as required by law.</p>
          <h2>Your rights</h2>
          <p>
            Under UK GDPR, you have the right to access, correct, or request deletion of your personal
            data. To exercise these rights, contact [INSERT CONTACT EMAIL].
          </p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to [INSERT CONTACT EMAIL].</p>
        </div>
      </Container>
    </section>
  );
}
