"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const goals = [
  "Rank higher for my main keywords",
  "Improve local / Google Maps visibility",
  "Fix a ranking drop",
  "Get an SEO health check",
  "Something else",
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  if (!value) return true; // optional field
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return Boolean(url.hostname);
  } catch {
    return false;
  }
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setServerMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field, humans never see it.
    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const websiteUrl = String(data.get("websiteUrl") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your full name.";
    if (!email || !isValidEmail(email)) nextErrors.email = "Please enter a valid email address.";
    if (websiteUrl && !isValidUrl(websiteUrl)) nextErrors.websiteUrl = "Please enter a valid website URL.";
    if (!consent) nextErrors.consent = "Please confirm you're happy to be contacted.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setServerMessage("Please check the form for errors.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setServerMessage("This form isn't fully configured yet. Please try again later.");
      return;
    }

    setStatus("submitting");

    const businessName = String(data.get("businessName") ?? "").trim();
    const targetLocation = String(data.get("targetLocation") ?? "").trim();
    const goal = String(data.get("goal") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      // Web3Forms' free tier only accepts submissions sent directly from the
      // browser (server-to-server calls are rejected) — so this posts straight
      // to their API, the way Web3Forms' own integration snippet does.
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New SEO enquiry from ${name}${businessName ? ` (${businessName})` : ""}`,
          from_name: "Rank Page 1 — SEO Enquiry Form",
          name,
          email,
          website_url: websiteUrl || "Not provided",
          business_name: businessName || "Not provided",
          target_location: targetLocation || "Not provided",
          main_seo_goal: goal || "Not provided",
          message: message || "Not provided",
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setServerMessage("We couldn't send your enquiry. Please try again shortly.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong sending your enquiry. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-success)] text-white">
          ✓
        </span>
        <p className="font-display text-xl font-semibold text-[var(--color-ink)]">
          Thanks — your enquiry has been received.
        </p>
        <p className="text-sm text-[var(--color-ink-soft)]">
          We&apos;ll take a look and get back to you. In the meantime, feel free to keep exploring the{" "}
          <a href="/how-to-rank-1-on-google-uk/" className="text-[var(--color-accent)] underline">
            SEO guides
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real users, accessible name deters bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Email address" name="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Website URL" name="websiteUrl" error={errors.websiteUrl}>
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="text"
            inputMode="url"
            placeholder="yourwebsite.co.uk"
            className={inputClass}
            aria-invalid={Boolean(errors.websiteUrl)}
          />
        </Field>
        <Field label="Business name" name="businessName">
          <input id="businessName" name="businessName" type="text" className={inputClass} />
        </Field>
        <Field label="Target location" name="targetLocation">
          <input
            id="targetLocation"
            name="targetLocation"
            type="text"
            placeholder="e.g. Manchester, or UK-wide"
            className={inputClass}
          />
        </Field>
        <Field label="Main SEO goal" name="goal">
          <select id="goal" name="goal" className={inputClass} defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            {goals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" name="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your website and what you're trying to rank for."
          className={inputClass}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-[var(--color-ink-soft)]">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-[var(--color-line)]"
          aria-invalid={Boolean(errors.consent)}
        />
        I agree to be contacted regarding my enquiry.
      </label>
      {errors.consent && <p className="text-sm text-[var(--color-signal)]">{errors.consent}</p>}

      {status === "error" && serverMessage && (
        <p role="alert" className="rounded-xl bg-[var(--color-signal)]/10 p-3 text-sm text-[var(--color-signal)]">
          {serverMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Request an SEO Review"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-accent)]";

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
        {label} {required && <span className="text-[var(--color-signal)]">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-[var(--color-signal)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
