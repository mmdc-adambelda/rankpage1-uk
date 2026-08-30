"use client";

import { useState } from "react";

export default function SerpPreview() {
  const [title, setTitle] = useState("How to Rank #1 on Google in the UK");
  const [url, setUrl] = useState("rankpage1.uk/how-to-rank-1-on-google-uk");
  const [description, setDescription] = useState(
    "Learn how to improve your Google rankings in the UK with practical SEO guides covering keywords, content, technical SEO, local search, links and more.",
  );
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  const titleLimit = device === "desktop" ? 60 : 50;
  const descLimit = device === "desktop" ? 158 : 120;

  return (
    <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 sm:p-8">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <Field label="Page title" value={title} onChange={setTitle} limit={titleLimit} />
          <Field label="URL" value={url} onChange={setUrl} />
          <Field label="Meta description" value={description} onChange={setDescription} limit={descLimit} multiline />

          <div className="flex gap-2">
            {(["desktop", "mobile"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDevice(d)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${
                  device === d
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "border-[var(--color-line)] text-[var(--color-ink-soft)]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
            Preview
          </p>
          <div
            className={`rounded-2xl border border-[var(--color-line)] bg-white p-5 ${
              device === "mobile" ? "max-w-xs" : ""
            }`}
          >
            <p className="truncate text-xs text-[#4d5156]">{url || "yourwebsite.co.uk"}</p>
            <p className="mt-0.5 truncate text-lg text-[#1a0dab] hover:underline">
              {(title || "Page title").slice(0, titleLimit + 15)}
            </p>
            <p className="mt-1 line-clamp-2 text-sm text-[#4d5156]">
              {(description || "Meta description preview.").slice(0, descLimit + 20)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  limit,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  limit?: number;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-[var(--color-ink)]">{label}</label>
        {limit && (
          <span
            className={`text-xs ${
              value.length > limit ? "text-[var(--color-signal)]" : "text-[var(--color-ink-faint)]"
            }`}
          >
            {value.length}/{limit}
          </span>
        )}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      )}
    </div>
  );
}
