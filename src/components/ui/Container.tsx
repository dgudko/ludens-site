import { cn } from "@/ui/cn";

export type ContainerSize = "5xl" | "6xl";

export function Container({
  children,
  className,
  size = "5xl",
}: {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}) {
  const max = size === "6xl" ? "max-w-6xl" : "max-w-5xl";
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", max, className)}>{children}</div>;
}

