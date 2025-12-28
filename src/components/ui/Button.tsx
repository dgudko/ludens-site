"use client";

import Link from "next/link";
import { cn } from "@/ui/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25";

function buttonClasses(variant: ButtonVariant, size: ButtonSize) {
  const sizing = size === "sm" ? "h-10 px-4 text-sm" : "h-11 px-5 text-sm";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      : variant === "secondary"
        ? "border border-black/10 bg-white text-zinc-900 hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
        : "text-zinc-900 hover:bg-black/5 dark:text-zinc-50 dark:hover:bg-white/10";
  return cn(base, sizing, styles);
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLinkProps | ButtonAsButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(buttonClasses(variant, size), className);

  if ("href" in props && props.href) {
    const isExternal = props.external ?? props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}

