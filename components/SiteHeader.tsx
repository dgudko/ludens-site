"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useMemo, useState } from "react";
import { useI18n } from "@/src/i18n/I18nProvider";
import { cn } from "@/src/ui/cn";
import { Container } from "@/components/Container";

type NavItem = { id: string; labelKey: string; href: string };

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const menuId = useId();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active tab is determined by the current route segment (supports /projects/[slug] etc).
  const activeId = useMemo(() => {
    const segment = (pathname ?? "/").split("/").filter(Boolean)[0];
    return segment ?? "home";
  }, [pathname]);

  const navItems = useMemo<NavItem[]>(
    () => [
      { id: "home", labelKey: "nav.home", href: "/" },
      { id: "school", labelKey: "nav.school", href: "/school" },
      { id: "projects", labelKey: "nav.projects", href: "/projects" },
      { id: "about", labelKey: "nav.about", href: "/about" },
      { id: "consulting", labelKey: "nav.consulting", href: "/consulting" },
      { id: "contacts", labelKey: "nav.contacts", href: "/contacts" },
    ],
    [],
  );

  function toggleLanguage() {
    setLang(lang === "ru" ? "en" : "ru");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
      <Container className="flex h-16 items-center gap-3">
        <Link href="/" className="font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {t("brand.name")}
        </Link>

        <div className="flex-1" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={activeId === item.id ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                activeId === item.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10",
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
          aria-label={lang === "ru" ? t("language.ariaSwitchToEn") : t("language.ariaSwitchToRu")}
        >
          {lang === "ru" ? t("language.switchToEn") : t("language.switchToRu")}
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-black/5 md:hidden dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
          aria-label={isMenuOpen ? t("header.close") : t("header.menu")}
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? t("header.close") : t("header.menu")}
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          "md:hidden",
          isMenuOpen ? "border-t border-black/5 dark:border-white/10" : "hidden",
        )}
      >
        <Container className="py-3">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  activeId === item.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                    : "text-zinc-800 hover:bg-black/5 dark:text-zinc-200 dark:hover:bg-white/10",
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
