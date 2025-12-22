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
      ru: "Тёплый и честный L2 сервер «от людей для людей»: дух той самой игры — без боли.",
      en: "A warm and honest L2 server “from people to people”: the spirit of the game, without the pain.",
    },
    content: {
      ru: "Сервер уже живой: можно заходить и играть. Дальше мы доводим баланс, комфорт и прозрачные правила.\n\nХочу делать это вместе: open-source на GitHub (ссылку добавим), обсуждение и предложения — в Discord.\n\nНужно от тебя: 1) GitHub репозиторий 2) Discord invite 3) как подключиться (IP/гайд/клиент).",
      en: "The server is already live: you can join and play. Next we refine balance, comfort, and transparent rules.\n\nI want to build this together: open-source on GitHub (we’ll add the link), discussions and proposals in Discord.\n\nNeeded from you: 1) GitHub repo 2) Discord invite 3) how to connect (IP/guide/client).",
    },
    status: "active",
  },
  {
    slug: "out-of-the-pit",
    title: {
      ru: "Ко-оп игра на Unreal: «выбраться из ямы»",
      en: "Unreal co-op game: “out of the pit”",
    },
    summary: {
      ru: "Вместе выбираемся из огромной ямы, снизу поднимается лава. Нужны арты и люди, которым интересно.",
      en: "We climb out of a huge pit while lava rises from below. Looking for artists and people who want in.",
    },
    content: {
      ru: "Я — визионер/дизайнер. В команде уже есть 2 программиста. Делаем open-source на GitHub.\n\nЕсли ты артовик (2D/3D/FX/UI) — приходи: вместе соберём атмосферу и читаемость.\n\nНужно от тебя: GitHub репо + короткий pitch проекта (1–2 абзаца) + 3–6 скринов/гифок (если есть).",
      en: "I’m the vision/design lead. The team already has 2 programmers. We build it open-source on GitHub.\n\nIf you’re an artist (2D/3D/FX/UI) — join: we’ll craft the vibe and readability together.\n\nNeeded from you: GitHub repo + a short pitch (1–2 paragraphs) + 3–6 screenshots/GIFs (if you have them).",
    },
    status: "in_progress",
  },
  {
    slug: "ludens-school",
    title: {
      ru: "Ludens School",
      en: "Ludens School",
    },
    summary: {
      ru: "Школа про опору на себя, ясность и путь к своему проекту — без метаний и лишнего шума.",
      en: "A school about self-support, clarity, and a path to your project — without spinning or noise.",
    },
    content: {
      ru: "Это школа не про «будь креативным». Это про то, как найти своё настоящее, удержать линию и довести до результата.\n\nУспех: внутри стало тише и яснее; появилось видение проекта; начался прототип; появились люди рядом (или понятный путь соло).\n\nНужно от тебя: куда собирать лист ожидания (форма/почта) + 1–2 кейса, которые можно рассказать без лишнего.",
      en: "This is not a “be creative” school. It’s about finding what’s real for you, holding the line, and shipping.\n\nSuccess: it gets quieter and clearer inside; you have a project vision; you start a prototype; you find people (or a clear solo path).\n\nNeeded from you: where to collect the waitlist (form/email) + 1–2 stories/cases you can share publicly.",
    },
    status: "concept",
  },
  {
    slug: "consulting-1on1",
    title: {
      ru: "Личное консультирование 1:1",
      en: "1:1 consulting",
    },
    summary: {
      ru: "Когда ты входишь в новое и расплываешься — я помогаю увидеть реальность, вернуть линию и запал.",
      en: "When you step into the new and start drifting — I help you see reality, regain your line, and keep the spark.",
    },
    content: {
      ru: "Широкий профиль: тупики, лидерство, творческая ясность, команда, план к цели в хаосе.\n\n$100–$150 за встречу. По времени не ограничена: работаем, пока не распутаем.\n\nДля молодых старт-ап команд (первый опыт) — сейчас могу на энтузиазме.\n\nНужно от тебя: подтверждение прайса, политика бесплатных разборов и ссылка для записи (или просто «пиши в телегу/почту»).",
      en: "$100–$150 per session. No hard time limit: we work until it’s clear.\n\nI can also help early student/first-time teams with a lighter format.\n\nNeeded from you: confirm pricing, free review policy, and a booking link (or “message me on Telegram/email”).",
    },
    status: "active",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
