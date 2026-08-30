import Link from "next/link";
import { ReactNode } from "react";

type Common = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<string, string> = {
  primary: "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)]",
  secondary:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)]/25 hover:border-[var(--color-ink)]",
  ghost: "bg-transparent text-[var(--color-accent)] hover:underline px-0 py-0",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Common & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: Common & {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
