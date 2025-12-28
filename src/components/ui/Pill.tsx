"use client";

import { cn } from "@/ui/cn";

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PillButton({
  children,
  className,
  isActive,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
}) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25",
        isActive
          ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-950"
          : "border-black/10 bg-white text-zinc-700 hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10",
        className,
      )}
    >
      {children}
    </button>
  );
}

