export type ProjectStatus = "active" | "in_progress" | "concept";

export type Localized<T> = {
  ru: T;
  en: T;
};

export type LocalizedText = Localized<string>;

export type ProjectLink = {
  label: LocalizedText;
  href: string;
};

export type ProjectRoadmap = {
  done: string[];
  now: string[];
  next: string[];
};

export type Project = {
  slug: string;
  title: LocalizedText;
  oneLiner: LocalizedText;
  why: LocalizedText;
  what: Localized<string[]>;
  status: ProjectStatus;
  statusText?: LocalizedText;
  participation: Localized<string[]>;
  roadmap: Localized<ProjectRoadmap>;
  links?: ProjectLink[];
  tags?: string[];
  cta?: {
    label: LocalizedText;
    href: string;
  };
};

export const projects: Project[] = [
  {
    slug: "l2-ludens",
    title: { ru: "L2 Ludens", en: "L2 Ludens" },
    oneLiner: {
      ru: "Lineage 2 High Five: дух той самой игры — без боли. Честный сервер от людей для людей.",
      en: "Lineage 2 High Five with the original spirit — without the pain. From people to people.",
    },
    why: {
      ru: "Я годами искал «тот самый» сервер. Заебался и сделал свой — понятно, честно, с уважением к миру и людям. Сервер уже живой: можно заходить и играть. Дальше — делаем вместе.",
      en: "I spent years looking for “that” server. Got tired and built my own: clear, honest, and respectful to the world and players. It’s already live — you can play now. Next: we build it together.",
    },
    what: {
      ru: [
        "High Five, с приоритетом на «живой мир», а не на гонку за цифрами",
        "QoL, который не ломает смысл дорог, городов и встреч",
        "Экономика как часть дизайна: меньше «адена из воздуха», больше понятных циклов",
        "Открытая разработка и прозрачные правила",
      ],
      en: [
        "High Five with a focus on a living world (not just numbers)",
        "QoL that doesn’t kill the meaning of cities, roads, and meetings",
        "Economy as part of design: fewer “free adena” loopholes, more clear loops",
        "Open development and transparent rules",
      ],
    },
    roadmap: {
      ru: {
        done: [
          "Сервер запущен и доступен игрокам",
          "Комьюнити и правила живут в Discord",
          "Есть роадмап и трекинг задач",
        ],
        now: [
          "Онбординг новичков: памятки, подсказки, «что за сервер»",
          "Баланс и QoL итерации без pay-to-win",
          "Привлечение контрибьюторов (код/контент/дизайн)",
        ],
        next: [
          "Более «живое PvE»: общие цели и причины кооперироваться",
          "Инструменты против рутины (для людей с жизнью)",
          "Расширение фич по роадмапу",
        ],
      },
      en: {
        done: ["Server is live", "Community & rules in Discord", "Roadmap and task tracking are in place"],
        now: ["New player onboarding", "Balance/QoL iterations (no pay-to-win)", "Contributor onboarding (code/content/design)"],
        next: ["More “living PvE” and shared goals", "Less routine: progress for people with a life", "More roadmap features"],
      },
    },
    participation: {
      ru: [
        "Зайти и поиграть — дать фидбек (что кайф, что бесит, что непонятно)",
        "Помочь разработкой (server/devops/web), обсудить фичи",
        "Помочь контентом: тексты, гайды, онбординг, UX для новичков",
      ],
      en: [
        "Play and give feedback (what’s great, what’s annoying, what’s unclear)",
        "Contribute (server/devops/web), discuss features",
        "Help with content: guides, onboarding, newbie UX",
      ],
    },
    links: [
      { label: { ru: "Discord", en: "Discord" }, href: "https://discord.gg/kCNcu9zCnM" },
      { label: { ru: "GitHub", en: "GitHub" }, href: "https://github.com/nikitakhotchenkov/Ludens-L2" },
      { label: { ru: "Roadmap", en: "Roadmap" }, href: "https://trello.com/b/1dWryWeO/l2-ludens" },
      {
        label: { ru: "Скачать клиент", en: "Download client" },
        href: "https://drive.google.com/file/d/1OXeWvINSA9pMCg1i4iooUsASHxoCVP3S/view",
      },
    ],
    tags: ["L2", "High Five", "MMO", "Open source"],
    status: "active",
    cta: {
      label: { ru: "Зайти в Discord", en: "Join Discord" },
      href: "https://discord.gg/kCNcu9zCnM",
    },
  },
  {
    slug: "borsh",
    title: { ru: "Borsh", en: "Borsh" },
    oneLiner: {
      ru: "Unreal co‑op: вместе выбираемся из жерла вулкана, пока лава поднимается.",
      en: "Unreal co-op: escape a volcano crater together while lava rises.",
    },
    why: {
      ru: "Хочется кооператива, где команда реально «держит линию» — и это чувствуется в геймплее. Сейчас стадия концепта: собираем людей и делаем прототип.",
      en: "We want co-op where the team truly “holds the line” and you feel it in gameplay. It’s concept stage: we’re gathering people and building a prototype.",
    },
    what: {
      ru: [
        "Unreal Engine, кооператив на 2–4 игроков",
        "Вертикальный темп: снизу поднимается лава — вылезай вместе",
        "Ставка на синергию, а не на соло‑геройство",
      ],
      en: [
        "Unreal Engine, co-op for 2–4 players",
        "Vertical pressure: lava rises — climb together",
        "Synergy over solo heroics",
      ],
    },
    roadmap: {
      ru: {
        done: ["Питч и концепт", "Репозиторий открыт"],
        now: ["Сбор команды (GD/3D/SFX/VFX/UI)", "Прототип базовой петли"],
        next: ["Вертикальный срез", "Плейтесты и итерации"],
      },
      en: {
        done: ["Pitch and concept", "Open repo"],
        now: ["Team building (GD/3D/SFX/VFX/UI)", "Core loop prototype"],
        next: ["Vertical slice", "Playtests and iteration"],
      },
    },
    participation: {
      ru: [
        "Залететь в Discord и познакомиться",
        "Помочь с геймдизайном или 3D (или чем умеешь)",
        "Поиграть в прототип и дать фидбек по темпу/кайфу",
      ],
      en: ["Join Discord", "Contribute (GD/3D/etc.)", "Playtest prototypes and give feedback"],
    },
    links: [
      { label: { ru: "Discord", en: "Discord" }, href: "https://discord.gg/QaZkzxQfHn" },
      { label: { ru: "GitHub", en: "GitHub" }, href: "https://github.com/dgudko/borsh" },
    ],
    tags: ["Unreal", "Co-op", "Prototype"],
    status: "concept",
    cta: { label: { ru: "Следить в Discord", en: "Follow in Discord" }, href: "https://discord.gg/QaZkzxQfHn" },
  },
  {
    slug: "ludens-school",
    title: { ru: "Ludens School", en: "Ludens School" },
    oneLiner: {
      ru: "Школа про опору на себя, ясность и путь к проекту — без метаний и шума.",
      en: "A school about self-support, clarity, and a path to your project — without spinning and noise.",
    },
    why: {
      ru: "Я хочу учить делать игры так, чтобы они были живыми — и чтобы тебе не пришлось воевать с собой по дороге. Пока это концепт: собираем комьюнити и первые форматы.",
      en: "I want to teach game making in a way that keeps it alive — without fighting yourself along the way. It’s a concept for now: we’re gathering community and shaping formats.",
    },
    what: {
      ru: [
        "Опора на себя: что твоё, а что шум",
        "Видение проекта и первые решения",
        "Старт прототипа и понятные следующие шаги",
        "Команда без трения (или ясный соло‑путь)",
      ],
      en: [
        "Self-support: what’s yours vs what’s noise",
        "Project vision and first decisions",
        "Prototype start and clear next steps",
        "Teamwork without friction (or a clear solo path)",
      ],
    },
    roadmap: {
      ru: {
        done: ["Собран вижн и черновая программа"],
        now: ["Лист ожидания + Discord", "Первые разборы/встречи в тестовом режиме"],
        next: ["Пилотный набор", "Первые кейсы и публичные материалы"],
      },
      en: {
        done: ["Vision and draft program"],
        now: ["Waitlist + Discord", "First test sessions"],
        next: ["Pilot cohort", "First cases and public materials"],
      },
    },
    participation: {
      ru: ["Зайти в Discord школы", "Оставить email в лист ожидания", "Принести свой кейс/проект на разбор"],
      en: ["Join the school Discord", "Leave email on the waitlist", "Bring your case/project for review"],
    },
    links: [{ label: { ru: "Discord", en: "Discord" }, href: "https://discord.gg/7qtrx9Jm8f" }],
    tags: ["Education", "Mentoring"],
    status: "concept",
    cta: { label: { ru: "Зайти в Discord", en: "Join Discord" }, href: "https://discord.gg/7qtrx9Jm8f" },
  },
  {
    slug: "consulting-1on1",
    title: { ru: "Консультации 1:1", en: "1:1 consulting" },
    oneLiner: {
      ru: "Если входишь в новое и растекаешься — помогу собрать линию и пойти дальше.",
      en: "When you step into the new and start drifting — I help you regain your line and move forward.",
    },
    why: {
      ru: "Широкий профиль: реальность, ясность, решения. Иногда — тихо и спокойно. Иногда — с огоньком, когда надо.",
      en: "Broad profile: reality, clarity, decisions. Sometimes calm and quiet. Sometimes with a spark — when needed.",
    },
    what: {
      ru: [
        "Разбираем, где именно ты застрял (без самообмана и без унижения)",
        "Отделяем лишнее от настоящего",
        "Собираем простой план и следующий шаг",
      ],
      en: [
        "We find where you’re actually stuck (no self-deception, no shame)",
        "We separate noise from what’s real",
        "We build a simple plan and next step",
      ],
    },
    roadmap: {
      ru: { done: ["Формат 1:1 доступен"], now: ["Сбор кейсов и отзывов"], next: ["Системная программа сопровождения"] },
      en: { done: ["1:1 format is available"], now: ["Collecting cases and feedback"], next: ["A structured long-term program"] },
    },
    participation: {
      ru: ["Написать в Telegram/Email с 3 строками: что делаешь, где залип, какой результат хочешь"],
      en: ["Message on Telegram/email with 3 lines: what you do, where you’re stuck, what outcome you want"],
    },
    links: [{ label: { ru: "Контакты", en: "Contacts" }, href: "/contacts/" }],
    tags: ["Consulting", "1:1"],
    status: "active",
    cta: { label: { ru: "Написать", en: "Write me" }, href: "/contacts/" },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

