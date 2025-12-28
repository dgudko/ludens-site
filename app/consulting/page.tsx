"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ConsultingPage() {
  const { t, ta } = useI18n();

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-12 dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {t("pages.consulting.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {t("pages.consulting.lead")}
          </p>
          <div className="mt-6">
            <Button href="/contacts/">{t("pages.consulting.cta")}</Button>
          </div>
        </Container>
      </div>

      <Section id="consulting-why" title={t("pages.consulting.whyTitle")} lead={t("pages.consulting.whyLead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          {ta("pages.consulting.whyPoints").map((point) => (
            <Card key={point} className="p-6 transition-shadow hover:shadow-md">
              <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{point}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="consulting-how" title={t("pages.consulting.howTitle")} lead={t("pages.consulting.howLead")}>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.consulting.flowTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("pages.consulting.flow").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {t("pages.consulting.topicsTitle")}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("pages.consulting.topics").map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="consulting-cta" title={t("pages.consulting.finalTitle")} lead={t("pages.consulting.finalLead")}>
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{t("pages.consulting.finalBody")}</div>
            <div className="text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200">
              <a href="/contacts/">{t("pages.consulting.cta")}</a>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
