"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import { cn } from "@/src/ui/cn";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { projects as projectsData } from "@/src/data/projects";

// Home page landing (SPA-like): sections are available via anchors (#school, #projects, ...).
// Most copy is driven by `src/i18n/en.json` and `src/i18n/ru.json`.
type OverviewItem = { title: string; description: string; href: string };
type Person = {
  name: string;
  role: string;
  bio: string;
  photoSrc?: string;
  photoAlt?: string;
  links?: Array<{ label: string; url: string }>;
};

function initials(name: string): string {
  const parts = name
    .split(" ")
    .map((p) => p.trim())
    .filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase());
  return letters.join("") || "?";
}

export function Landing() {
  const { lang, t, ta, tv } = useI18n();

  const overviewItems = tv<OverviewItem[]>("overview.items") ?? [];
  const people = tv<Person[]>("about.people") ?? [];

  const year = useMemo(() => new Date().getFullYear(), []);
  const featuredProjects = projectsData.slice(0, 3);

  function telegramHref(value: string) {
    return value.startsWith("@") ? `https://t.me/${value.slice(1)}` : value;
  }

  return (
    <div className="bg-white dark:bg-zinc-950">
      <section
        id="home"
        className="scroll-mt-24 border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-16 sm:py-20 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                {t("hero.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                {t("hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/#school"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  {t("hero.cta.school")}
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                >
                  {t("hero.cta.projects")}
                </Link>
                <Link
                  href="/#consulting"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                >
                  {t("hero.cta.consulting")}
                </Link>
                <Link
                  href="/#about"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                >
                  {t("hero.cta.about")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950">
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {t("overview.title")}
                </div>
                <div className="mt-4 grid gap-3">
                  {overviewItems.map((item, index) => (
                    <Link
                      key={`${item.href}:${item.title}:${index}`}
                      href={item.href}
                      className="rounded-2xl border border-black/10 p-4 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                    >
                      <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="school"
        title={t("school.title")}
        lead={t("school.lead")}
        className="bg-white dark:bg-zinc-950"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("school.whatYouLearnTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("school.whatYouLearn").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("school.formatsTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("school.formats").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("school.forWhomTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("school.forWhom").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/#contacts"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {t("school.cta")}
            </a>
            <div className="mt-3">
              <Link
                href="/school"
                className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
              >
                {t("common.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" title={t("projects.title")} lead={t("projects.lead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <details
              key={project.slug}
              className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                      {project.title[lang]}
                    </div>
                    {project.status ? (
                      <div className="mt-2 inline-flex rounded-full border border-black/10 px-2 py-0.5 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:text-zinc-300">
                        {t(`projects.statuses.${project.status}`)}
                      </div>
                    ) : null}
                  </div>
                  <div className="text-sm text-zinc-500 transition-transform group-open:rotate-180 dark:text-zinc-400">
                    ▾
                  </div>
                </div>
              </summary>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.summary[lang]}
              </p>
              <div className="mt-5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                >
                  {t("pages.projects.openProject")}
                </Link>
              </div>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            {t("pages.projects.allProjects")}
          </Link>
        </div>
      </Section>

      <Section id="about" title={t("about.title")} lead={t("about.lead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-4">
                {person.photoSrc ? (
                  <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                    <Image
                      src={person.photoSrc}
                      alt={person.photoAlt ?? person.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                    {initials(person.name)}
                  </div>
                )}
                <div>
                  <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    {person.name}
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {person.role}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/about"
            className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
          >
            {t("common.learnMore")}
          </Link>
        </div>
      </Section>

      <Section id="consulting" title={t("consulting.title")} lead={t("consulting.lead")}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("consulting.whatTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("consulting.what").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("consulting.forWhomTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("consulting.forWhom").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/#contacts"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {t("consulting.cta")}
            </a>
            <div className="mt-3">
              <Link
                href="/consulting"
                className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
              >
                {t("common.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contacts" title={t("contacts.title")} lead={t("contacts.lead")}>
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950 lg:col-span-7">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {t("contacts.emailLabel")}
                </dt>
                <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <a
                    className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                    href={`mailto:${t("contacts.emailValue")}`}
                  >
                    {t("contacts.emailValue")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("contacts.telegramLabel")}
                </dt>
                <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <a
                    className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                    href={telegramHref(t("contacts.telegramValue"))}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("contacts.telegramValue")}
                  </a>
                </dd>
              </div>
              {t("contacts.telegram2Value") !== "contacts.telegram2Value" ? (
                <div>
                  <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    {t("contacts.telegram2Label")}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <a
                      className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                      href={telegramHref(t("contacts.telegram2Value"))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("contacts.telegram2Value")}
                    </a>
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {t("contacts.discordLabel")}
                </dt>
                <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <a
                    className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                    href={t("contacts.discordValue")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("contacts.discordValue")}
                  </a>
                </dd>
              </div>
              {t("contacts.discord2Value") !== "contacts.discord2Value" ? (
                <div>
                  <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    {t("contacts.discord2Label")}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <a
                      className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                      href={t("contacts.discord2Value")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("contacts.discord2Value")}
                    </a>
                  </dd>
                </div>
              ) : null}
              {t("contacts.discord3Value") !== "contacts.discord3Value" ? (
                <div>
                  <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    {t("contacts.discord3Label")}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <a
                      className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                      href={t("contacts.discord3Value")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("contacts.discord3Value")}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950 lg:col-span-5">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("content.howToTitle")}
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("content.howToBody")}
            </p>
            <a
              className={cn(
                "mt-6 inline-flex h-11 w-full items-center justify-center rounded-full",
                "bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800",
                "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
              )}
              href={`mailto:${t("contacts.emailValue")}`}
            >
              {t("contacts.writeCta")}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-6 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          {t("footer.copyright").replace("{year}", String(year))}
        </div>
      </Section>
    </div>
  );
}
