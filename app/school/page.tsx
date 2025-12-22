"use client";

import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SubstackEmbed } from "@/components/SubstackEmbed";
import { SUBSTACK_EMBED_URL } from "@/src/config/substack";

export default function SchoolPage() {
  const { t, ta } = useI18n();

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-12 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {t("pages.school.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {t("pages.school.lead")}
          </p>
          <div className="mt-6">
            <Link
              href="/contacts"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {t("pages.school.cta")}
            </Link>
          </div>
        </Container>
      </div>

      <Section id="school-approach" title={t("pages.school.approachTitle")} lead={t("pages.school.approachLead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          {ta("pages.school.approachPoints").map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{point}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="school-program" title={t("pages.school.programTitle")} lead={t("pages.school.programLead")}>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.school.modulesTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("pages.school.modules").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.school.outcomesTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("pages.school.outcomes").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="school-formats" title={t("pages.school.formatsTitle")} lead={t("pages.school.formatsLead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          {ta("pages.school.formats").map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{item}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="school-cta" title={t("pages.school.finalTitle")} lead={t("pages.school.finalLead")}>
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("pages.school.finalBody")}
            </div>
            <Link
              href="/contacts"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {t("pages.school.cta")}
            </Link>
          </div>
        </div>
      </Section>

      {SUBSTACK_EMBED_URL ? (
        <Section id="school-waitlist" title={t("pages.school.waitlistTitle")} lead={t("pages.school.waitlistLead")}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
                <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {t("pages.school.waitlistBody")}
                </div>
                <div className="mt-4">
                  <a
                    className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                    href={t("pages.school.discordInvite")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("pages.school.discordCta")}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SubstackEmbed src={SUBSTACK_EMBED_URL} title="Ludens School waitlist" />
            </div>
          </div>
        </Section>
      ) : null}
    </div>
  );
}
