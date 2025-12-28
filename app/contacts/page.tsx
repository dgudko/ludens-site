"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ContactsPage() {
  const { t } = useI18n();

  function telegramHref(value: string) {
    return value.startsWith("@") ? `https://t.me/${value.slice(1)}` : value;
  }

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
          <div className="lg:col-span-7">
            <Card>
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
                  {t("contacts.writeCta")}
                </Button>
              </div>
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                <a
                  className="font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
                  href={`mailto:${t("contacts.emailValue")}`}
                >
                  {t("contacts.emailValue")}
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
