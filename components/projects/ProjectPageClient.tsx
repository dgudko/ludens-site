"use client";

import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import type { Project, ProjectStatus } from "@/src/data/projects";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

function statusLabelKey(status: ProjectStatus | undefined) {
  return `projects.statuses.${status ?? "concept"}` as const;
}

export function ProjectPageClient({ project }: { project: Project }) {
  const { lang, t } = useI18n();

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-10 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <Link
            href="/projects"
            className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
          >
            {t("pages.projects.back")}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              {project.title[lang]}
            </h1>
            <div className="inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300">
              {t(statusLabelKey(project.status))}
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {project.summary[lang]}
          </p>
        </Container>
      </div>

      <Section id="project" title={t("pages.projects.detailsTitle")} lead={t("pages.projects.detailsLead")}>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.content?.[lang] ?? t("pages.projects.detailsLead")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                {t("pages.contacts.title")}
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {t("pages.consulting.finalBody")}
              </p>
              <Link
                href="/contacts"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                {t("pages.consulting.cta")}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

