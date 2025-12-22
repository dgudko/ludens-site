"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

type ProjectStatus = "active" | "inProgress" | "concept";
type ProjectLink = { label: string; url: string };
type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  imageSrc?: string;
  imageAlt?: string;
  links?: ProjectLink[];
};

export default function ProjectsPage() {
  const { t, tv } = useI18n();
  const projects = tv<ProjectItem[]>("projects.items") ?? [];

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

      <Section
        id="projects-grid"
        title={t("pages.projects.gridTitle")}
        lead={t("pages.projects.gridLead")}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              {project.imageSrc ? (
                <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </div>
                <div className="inline-flex rounded-full border border-black/10 px-2 py-0.5 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:text-zinc-300">
                  {t(`projects.statuses.${project.status}`)}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  {t("pages.projects.openProject")}
                </Link>

                {(project.links ?? []).slice(0, 2).map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
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

