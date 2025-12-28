"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import type { Project, ProjectStatus } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/LinkCard";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";

function statusLabelKey(status: ProjectStatus) {
  return `projects.statuses.${status}` as const;
}

function statusVariant(status: ProjectStatus) {
  if (status === "active") return "good" as const;
  if (status === "in_progress") return "warn" as const;
  return "neutral" as const;
}

export function ProjectPageClient({ project }: { project: Project }) {
  const { lang, t } = useI18n();
  const status = project.status;

  const ctaHref = project.cta?.href ?? "/contacts/";
  const ctaLabel =
    project.cta?.label?.[lang] ??
    (status === "active" ? t("pages.project.ctaJoin") : t("pages.project.ctaFollow"));

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-10 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <Link
            href="/projects/"
            className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
          >
            {t("pages.projects.back")}
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                  {project.title[lang]}
                </h1>
                <Badge variant={statusVariant(status)}>
                  {project.statusText?.[lang] ?? t(statusLabelKey(status))}
                </Badge>
              </div>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                {project.oneLiner[lang]}
              </p>

              {(project.tags ?? []).length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {(project.tags ?? []).map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              ) : null}

              <p className="mt-6 max-w-2xl whitespace-pre-line text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.why[lang]}
              </p>
            </div>

            <div className="lg:col-span-4">
              <Card className="p-5">
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {t("pages.project.heroCtaTitle")}
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {t("pages.project.heroCtaLead")}
                </p>
                <div className="mt-5">
                  <Button href={ctaHref} external={ctaHref.startsWith("http")}>
                    {ctaLabel}
                  </Button>
                </div>
                <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                  {t("pages.project.heroCtaHint")}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      <Section id="project-what" title={t("pages.project.whatTitle")} lead={t("pages.project.whatLead")}>
        <Card>
          <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {project.what[lang].slice(0, 6).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="project-status" title={t("pages.project.statusTitle")} lead={t("pages.project.statusLead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-5">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.project.roadmap.done")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {project.roadmap[lang].done.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.project.roadmap.now")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {project.roadmap[lang].now.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.project.roadmap.next")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {project.roadmap[lang].next.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="project-participation" title={t("pages.project.participationTitle")} lead={t("pages.project.participationLead")}>
        <Card>
          <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {project.participation[lang].slice(0, 6).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {(project.links ?? []).length ? (
        <Section id="project-links" title={t("pages.project.linksTitle")} lead={t("pages.project.linksLead")}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(project.links ?? []).map((link) => (
              <LinkCard key={link.href} href={link.href} external={link.href.startsWith("http")}>
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {link.label[lang]}
                </div>
                <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {t("pages.project.linksOpen")}
                </div>
              </LinkCard>
            ))}
          </div>
        </Section>
      ) : null}

      <Section id="project-nav" title={t("pages.project.navTitle")} lead={t("pages.project.navLead")}>
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard href="/projects/">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.project.navBack")}
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("pages.project.navBackLead")}
            </div>
          </LinkCard>
          <LinkCard href="/contacts/">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.project.navContacts")}
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("pages.project.navContactsLead")}
            </div>
          </LinkCard>
        </div>
      </Section>
    </div>
  );
}

