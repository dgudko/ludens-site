"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

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
  const { t, tv } = useI18n();
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
        </Container>
      </div>

      <Section id="team" title={t("pages.about.teamTitle")} lead={t("pages.about.teamLead")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
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

              {person.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {person.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 items-center justify-center rounded-full border border-black/10 bg-white px-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contacts"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            {t("pages.about.cta")}
          </Link>
        </div>
      </Section>
    </div>
  );
}

