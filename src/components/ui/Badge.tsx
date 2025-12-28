import { cn } from "@/ui/cn";

export type BadgeVariant = "neutral" | "good" | "warn";

export function Badge({
  children,
  className,
  variant = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        variant === "good" && "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        variant === "warn" && "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-200",
        variant === "neutral" &&
          "border-black/10 bg-black/5 text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

