import Container from "@/components/ui/Container";
import LeadForm from "@/components/forms/LeadForm";

export default function LeadFormSection() {
  return (
    <section id="enquiry" className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Free SEO enquiry
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-4xl">
            Want to know why your website isn&apos;t ranking?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-ink-soft)]">
            Tell us a little about your website and what you&apos;re trying to rank for. We&apos;ll take a
            genuine look and point you in the right direction.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 shadow-sm sm:p-8">
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}
