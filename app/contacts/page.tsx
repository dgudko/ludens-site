"use client";

import Link from "next/link";
import { useI18n } from "@/src/i18n/I18nProvider";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function ContactsPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-12 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {t("pages.contacts.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {t("pages.contacts.lead")}
          </p>
        </Container>
      </div>

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
                    href={
                      t("contacts.telegramValue").startsWith("@")
                        ? `https://t.me/${t("contacts.telegramValue").slice(1)}`
                        : t("contacts.telegramValue")
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("contacts.telegramValue")}
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
            </dl>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-zinc-950 lg:col-span-5">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.contacts.nextTitle")}
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {t("pages.contacts.nextLead")}
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                href={`mailto:${t("contacts.emailValue")}`}
              >
                {t("contacts.writeCta")}
              </a>
              <Link
                href="/projects"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                {t("pages.contacts.seeProjects")}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
