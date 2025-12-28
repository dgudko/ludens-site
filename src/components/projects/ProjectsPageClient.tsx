"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import type { Project, ProjectStatus } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { LinkCard } from "@/components/ui/LinkCard";
import { Pill, PillButton } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";

function statusLabelKey(status: ProjectStatus | undefined) {
  return `projects.statuses.${status ?? "concept"}` as const;
}

export function ProjectsPageClient({ projects }: { projects: Project[] }) {
  const { lang, t, ta } = useI18n();
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">("all");
  const [tagFilter, setTagFilter] = useState<string | "all">("all");

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const project of projects) {
      for (const tag of project.tags ?? []) set.add(tag);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const statusOk = statusFilter === "all" ? true : project.status === statusFilter;
      const tagOk = tagFilter === "all" ? true : (project.tags ?? []).includes(tagFilter);
      return statusOk && tagOk;
    });
  }, [projects, statusFilter, tagFilter]);

  function statusVariant(status: ProjectStatus) {
    if (status === "active") return "good" as const;
    if (status === "in_progress") return "warn" as const;
    return "neutral" as const;
  }

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-12 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {t("pages.projects.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {t("pages.projects.lead")}
          </p>
        </Container>
      </div>

      <Section id="projects-filters" title={t("pages.projects.filtersTitle")} lead={t("pages.projects.filtersLead")}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Pill className="mr-1">{t("pages.projects.filters.status")}</Pill>
            <PillButton isActive={statusFilter === "all"} onClick={() => setStatusFilter("all")}>
              {t("pages.projects.filters.all")}
            </PillButton>
            <PillButton isActive={statusFilter === "active"} onClick={() => setStatusFilter("active")}>
              {t(statusLabelKey("active"))}
            </PillButton>
            <PillButton isActive={statusFilter === "in_progress"} onClick={() => setStatusFilter("in_progress")}>
              {t(statusLabelKey("in_progress"))}
            </PillButton>
            <PillButton isActive={statusFilter === "concept"} onClick={() => setStatusFilter("concept")}>
              {t(statusLabelKey("concept"))}
            </PillButton>
          </div>

          {tags.length ? (
            <div className="flex flex-wrap items-center gap-2">
              <Pill className="mr-1">{t("pages.projects.filters.tags")}</Pill>
              <PillButton isActive={tagFilter === "all"} onClick={() => setTagFilter("all")}>
                {t("pages.projects.filters.all")}
              </PillButton>
              {tags.map((tag) => (
                <PillButton key={tag} isActive={tagFilter === tag} onClick={() => setTagFilter(tag)}>
                  {tag}
                </PillButton>
              ))}
            </div>
          ) : null}
        </div>
      </Section>

      <Section id="projects-grid" title={t("pages.projects.gridTitle")} lead={t("pages.projects.gridLead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <LinkCard key={project.slug} href={`/projects/${project.slug}/`}>
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title[lang]}
                </div>
                <Badge variant={statusVariant(project.status)}>
                  {project.statusText?.[lang] ?? t(statusLabelKey(project.status))}
                </Badge>
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.oneLiner[lang]}
              </p>

              {(project.tags ?? []).length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.tags ?? []).slice(0, 3).map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              ) : null}
            </LinkCard>
          ))}
        </div>
      </Section>

      <Section id="projects-participate" title={t("pages.projects.participateTitle")} lead={t("pages.projects.participateLead")}>
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
              <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {ta("pages.projects.participatePoints").map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                {t("pages.projects.participateCtaTitle")}
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {t("pages.projects.participateCtaLead")}
              </p>
              <div className="mt-5">
                <Button href="/contacts/">{t("pages.projects.participateCta")}</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
          >
            {t("pages.projects.backHome")}
          </Link>
        </div>
      </Section>
    </div>
  );
}
