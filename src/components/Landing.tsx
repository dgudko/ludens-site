"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { projects as projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/LinkCard";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";

type OverviewItem = { title: string; description: string; href: string };
type Person = {
  name: string;
  role: string;
  bio: string;
  photoSrc?: string;
  photoAlt?: string;
  links?: Array<{ label: string; url: string }>;
};
type InfoCard = { title: string; body: string };

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
  const year = useMemo(() => new Date().getFullYear(), []);

  const overviewItems = tv<OverviewItem[]>("overview.items") ?? [];
  const people = tv<Person[]>("about.people") ?? [];
  const schoolForWhom = tv<InfoCard[]>("pages.school.forWhomCards") ?? [];
  const consultingPoints = ta("home.consulting.points");

  const featuredProjects = projectsData.slice(0, 3);
  const you = people[0];

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
              <div className="mt-8">
                <Button href="#contacts">{t("contacts.writeCta")}</Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="p-6">
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {t("overview.title")}
                </div>
                <div className="mt-4 grid gap-3">
                  {overviewItems.map((item, index) => (
                    <LinkCard key={`${item.href}:${index}`} href={item.href}>
                      <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                        {item.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {item.description}
                      </div>
                    </LinkCard>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Section id="projects" title={t("pages.projects.title")} lead={t("pages.projects.gridLead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <LinkCard key={project.slug} href={`/projects/${project.slug}/`}>
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title[lang]}
                </div>
                <Pill>{t(`projects.statuses.${project.status}`)}</Pill>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.oneLiner[lang]}
              </p>
            </LinkCard>
          ))}
        </div>
      </Section>

      <Section id="school" title={t("pages.school.title")} lead={t("pages.school.lead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          {schoolForWhom.slice(0, 3).map((item) => (
            <LinkCard key={item.title} href="/school/">
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{item.title}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.body}</div>
            </LinkCard>
          ))}
        </div>
      </Section>

      <Section id="about" title={t("pages.about.title")} lead={t("pages.about.lead")}>
        {you ? (
          <LinkCard href="/about/" className="max-w-3xl">
            <div className="flex items-start gap-4">
              {you.photoSrc ? (
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                  <Image
                    src={you.photoSrc}
                    alt={you.photoAlt ?? you.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                  {initials(you.name)}
                </div>
              )}

              <div>
                <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">{you.name}</div>
                <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{you.role}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{you.bio}</p>
              </div>
            </div>
          </LinkCard>
        ) : null}
      </Section>

      <Section
        id="consulting"
        title={t("pages.consulting.title")}
        lead={t("pages.consulting.lead")}
        headerRight={<Button href="/contacts/">{t("pages.consulting.cta")}</Button>}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {consultingPoints.slice(0, 5).map((item) => (
            <Card key={item} className="p-5">
              <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contacts" title={t("contacts.title")} lead={t("contacts.lead")}>
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <dl className="grid gap-4 sm:grid-cols-2">
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
              </dl>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6">
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                {t("pages.contacts.nextTitle")}
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {t("pages.contacts.nextLead")}
              </p>
              <div className="mt-6">
                <Button href={telegramHref(t("contacts.telegram2Value"))} external>
                  {t("contacts.telegram2Label")}
                </Button>
              </div>
              <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                {t("contacts.emailValue")}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-6 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          {t("footer.copyright").replace("{year}", String(year))}
        </div>
      </Section>
    </div>
  );
}
