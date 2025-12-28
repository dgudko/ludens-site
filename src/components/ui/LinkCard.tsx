import Link from "next/link";
import { cn } from "@/ui/cn";

export function LinkCard({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all",
        "hover:-translate-y-0.5 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25",
        "dark:border-white/15 dark:bg-zinc-950",
        className,
      )}
    >
      {children}
    </Link>
  );
}

