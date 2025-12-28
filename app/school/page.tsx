"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/LinkCard";
import { Section } from "@/components/ui/Section";
import { SubstackEmbed } from "@/components/SubstackEmbed";
import { SUBSTACK_EMBED_URL } from "@/config/substack";

type InfoCard = { title: string; body: string };
type FaqItem = { q: string; a: string };

export default function SchoolPage() {
  const { t, ta, tv } = useI18n();
  const forWhom = tv<InfoCard[]>("pages.school.forWhomCards") ?? [];
  const formats = tv<InfoCard[]>("pages.school.formatsCards") ?? [];
  const faq = tv<FaqItem[]>("pages.school.faq") ?? [];

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
            <Button href="/contacts/">{t("pages.school.cta")}</Button>
          </div>
        </Container>
      </div>

      <Section id="school-for-whom" title={t("pages.school.forWhomTitle")} lead={t("pages.school.forWhomLead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          {forWhom.map((item) => (
            <Card key={item.title}>
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{item.title}</div>
              <div className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.body}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="school-what" title={t("pages.school.whatTitle")} lead={t("pages.school.whatLead")}>
        <Card>
          <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {ta("pages.school.whatPoints").slice(0, 5).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="school-formats" title={t("pages.school.formatsTitle")} lead={t("pages.school.formatsLead")}>
        <div className="grid gap-4 lg:grid-cols-3">
          {formats.map((item) => (
            <Card key={item.title}>
              <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{item.title}</div>
              <div className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.body}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="school-process" title={t("pages.school.processTitle")} lead={t("pages.school.processLead")}>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <ol className="space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("pages.school.processSteps").slice(0, 5).map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-xs font-semibold text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{t("pages.school.outcomesTitle")}</div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {ta("pages.school.outcomes").slice(0, 5).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {faq.length ? (
        <Section id="school-faq" title={t("pages.school.faqTitle")} lead={t("pages.school.faqLead")}>
          <div className="grid gap-3">
            {faq.slice(0, 6).map((item) => (
              <details
                key={item.q}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm open:shadow-md dark:border-white/15 dark:bg-zinc-950"
              >
                <summary className="cursor-pointer select-none text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>
      ) : null}

      {SUBSTACK_EMBED_URL ? (
        <Section id="school-waitlist" title={t("pages.school.waitlistTitle")} lead={t("pages.school.waitlistLead")}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card>
                <div className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{t("pages.school.waitlistBody")}</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <LinkCard href={t("pages.school.discordInvite")} external>
                    <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{t("pages.school.discordCta")}</div>
                    <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {t("pages.school.discordLead")}
                    </div>
                  </LinkCard>
                  <LinkCard href="/contacts/">
                    <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{t("pages.school.contactsCta")}</div>
                    <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {t("pages.school.contactsLead")}
                    </div>
                  </LinkCard>
                </div>
              </Card>
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
