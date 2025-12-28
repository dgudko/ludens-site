"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/LinkCard";
import { Section } from "@/components/ui/Section";

type SocialLink = { label: string; url: string };
type Person = {
  name: string;
  role: string;
  bio: string;
  photoSrc?: string;
  photoAlt?: string;
  links?: SocialLink[];
};

function initials(name: string): string {
  const parts = name
    .split(" ")
    .map((p) => p.trim())
    .filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase());
  return letters.join("") || "?";
}

export default function AboutPage() {
  const { t, ta, tv } = useI18n();
  const people = tv<Person[]>("about.people") ?? [];

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-12 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {t("pages.about.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {t("pages.about.lead")}
          </p>
          <div className="mt-6">
            <Button href="/contacts/">{t("pages.about.cta")}</Button>
          </div>
        </Container>
      </div>

      <Section id="about-what" title={t("pages.about.whatTitle")} lead={t("pages.about.whatLead")}>
        <Card>
          <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {ta("pages.about.whatPoints").slice(0, 5).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="about-principles" title={t("pages.about.principlesTitle")} lead={t("pages.about.principlesLead")}>
        <Card>
          <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {ta("pages.about.principlesPoints").slice(0, 5).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="team" title={t("pages.about.teamTitle")} lead={t("pages.about.teamLead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <Card key={person.name}>
              <div className="flex items-start gap-4">
                {person.photoSrc ? (
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/5 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
                    <Image
                      src={person.photoSrc}
                      alt={person.photoAlt ?? person.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                    {initials(person.name)}
                  </div>
                )}

                <div>
                  <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">{person.name}</div>
                  <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{person.role}</div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{person.bio}</p>

              {person.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {person.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about-next" title={t("pages.about.nextTitle")} lead={t("pages.about.nextLead")}>
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard href="/projects/">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.about.nextProjectsTitle")}
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("pages.about.nextProjectsLead")}
            </div>
          </LinkCard>
          <LinkCard href="/school/">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.about.nextSchoolTitle")}
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("pages.about.nextSchoolLead")}
            </div>
          </LinkCard>
        </div>
      </Section>
    </div>
  );
}
