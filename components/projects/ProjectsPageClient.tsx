"use client";

import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import type { Project, ProjectStatus } from "@/src/data/projects";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

function statusLabelKey(status: ProjectStatus | undefined) {
  return `projects.statuses.${status ?? "concept"}` as const;
}

export function ProjectsPageClient({ projects }: { projects: Project[] }) {
  const { lang, t } = useI18n();

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

      <Section id="projects-grid" title={t("pages.projects.gridTitle")} lead={t("pages.projects.gridLead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title[lang]}
                </div>
                <div className="inline-flex rounded-full border border-black/10 px-2 py-0.5 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:text-zinc-300">
                  {t(statusLabelKey(project.status))}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.summary[lang]}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={`/projects/${project.slug}/`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  {t("pages.projects.openProject")}
                </Link>

                {(project.links ?? []).slice(0, 2).map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith("/") ? undefined : "_blank"}
                    rel={link.url.startsWith("/") ? undefined : "noreferrer"}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
