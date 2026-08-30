"use client";

import { useState } from "react";

export default function WasHelpful() {
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);

  if (choice) {
    return (
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-6 text-center">
        <p className="text-sm font-medium text-[var(--color-ink)]">
          {choice === "yes"
            ? "Thanks for the feedback — glad it helped."
            : "Thanks for letting us know — we'll use this to improve the guide."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <p className="text-sm font-medium text-[var(--color-ink)]">Was this guide helpful?</p>
      <div className="flex gap-2">
        <button
          onClick={() => setChoice("yes")}
          className="rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium hover:border-[var(--color-accent)]"
        >
          Yes
        </button>
        <button
          onClick={() => setChoice("no")}
          className="rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium hover:border-[var(--color-accent)]"
        >
          Not really
        </button>
      </div>
    </div>
  );
}
