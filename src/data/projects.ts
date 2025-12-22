export type ProjectStatus = "active" | "in_progress" | "concept";

export type LocalizedText = {
  ru: string;
  en: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content?: LocalizedText;
  status?: ProjectStatus;
};

export const projects: Project[] = [
  {
    slug: "l2-ludens",
    title: {
      ru: "L2 Ludens",
      en: "L2 Ludens",
    },
    summary: {
      ru: "Сайт-витрина: чистый минимализм, структура, двуязычность, SEO-friendly разметка.",
      en: "A showcase site: clean minimal layout, structure, bilingual copy, SEO-friendly markup.",
    },
    content: {
      ru: "Проект-заглушка для демонстрации структуры. Здесь позже появятся: цель, основные фичи, статус, скриншоты и ссылки.",
      en: "A placeholder project to demonstrate structure. Later you can add: goal, features, status, screenshots, and links.",
    },
    status: "active",
  },
  {
    slug: "school-course",
    title: {
      ru: "School: курс про разработку игр",
      en: "School: making games course",
    },
    summary: {
      ru: "Практический путь: прототип → core loop → план продакшена → полировка → релиз.",
      en: "A practical path: prototype → core loop → production plan → polish → release.",
    },
    content: {
      ru: "Это пример страницы проекта. Реальный контент можно перенести в отдельную структуру или CMS позже, но для static export оставляем данные в коде.",
      en: "This is an example project page. You can later move content to a proper structure or CMS, but for static export we keep data in code.",
    },
    status: "in_progress",
  },
  {
    slug: "consulting-toolkit",
    title: {
      ru: "Consulting toolkit",
      en: "Consulting toolkit",
    },
    summary: {
      ru: "Набор практик: разбор продукта, планирование, риски, приоритизация, улучшение пайплайна.",
      en: "A set of practices: product review, planning, risk reduction, prioritization, pipeline improvements.",
    },
    content: {
      ru: "Заглушка. Можно описать форматы консультаций, типовые запросы и кейсы.",
      en: "Placeholder. You can describe consulting formats, typical requests, and case studies.",
    },
    status: "concept",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
