"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
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
  details?: string[];
  links?: ProjectLink[];
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { t, tv } = useI18n();
  const projects = tv<ProjectItem[]>("projects.items") ?? [];

  const project = useMemo(
    () => projects.find((p) => p.slug === params.slug),
    [params.slug, projects],
  );

  if (!project) {
    return (
      <div className="bg-white py-12 dark:bg-zinc-950">
        <Container>
          <Link
            href="/projects"
            className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
          >
            {t("pages.projects.back")}
          </Link>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {t("pages.projects.notFound")}
          </h1>
        </Container>
      </div>
    );
  }

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
              {project.title}
            </h1>
            <div className="inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300">
              {t(`projects.statuses.${project.status}`)}
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {project.description}
          </p>

          {project.links?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.map((link) => (
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
          ) : null}
        </Container>
      </div>

      <Section id="project" title={t("pages.projects.detailsTitle")} lead={t("pages.projects.detailsLead")}>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
              <ul className="space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {(project.details ?? []).map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            {project.imageSrc ? (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-black/10 bg-zinc-100 shadow-sm dark:border-white/15 dark:bg-zinc-900">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {t("pages.projects.noImageTitle")}
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {t("pages.projects.noImageLead")}
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

