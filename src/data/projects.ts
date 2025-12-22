export type ProjectStatus = "active" | "in_progress" | "concept";

export type LocalizedText = {
  ru: string;
  en: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content?: LocalizedText;
  status?: ProjectStatus;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "l2-ludens",
    title: { ru: "L2 Ludens", en: "L2 Ludens" },
    summary: {
      ru: "Lineage 2 High Five: тот самый дух — без боли. Сервер от людей для людей, честно и понятно.",
      en: "Lineage 2 High Five with the original spirit — without the pain. From people to people: honest and clear.",
    },
    content: {
      ru: [
        "Я годами не мог найти \"тот самый\" Lineage сервер. Заебался — сделал свой.",
        "",
        "Разрабатываю открыто. Если хочешь — залетай: и как игрок, и как разработчик.",
        "",
        "## Для партнёров-разработчиков",
        "- SSOT-документация (Specs/ADRs/Ops) — меньше догадок по коду, проще влетать в контекст и спорить предметно.",
        "- Конфиг-драйв баланс — правки темпа/стоимостей живут в настройках, не надо пересобирать сервер ради экономики.",
        "- QoL без \"сломать мир\" — удобство добавляется так, чтобы не убивать смысл дорог, городов и встреч в мире.",
        "- Экономика как часть дизайна — меньше \"адена из воздуха\": фичи сразу учитывают sinks/loops.",
        "- Социальные механики вместо обязаловки — меньше стимулов к мультибоксу/бот-рутине, больше причин играть с людьми.",
        "- Прозрачность управления — понятные правила, изменения и границы. Меньше паранойи про \"админ рисует\".",
        "- Фичи оформлены как продукты — у каждой есть \"зачем игроку\" и критерии успеха, а не только \"как сделать\".",
        "- Рабочая площадка для сайта+сервера — можно вместе пилить и веб, и геймдизайн, и контент, не тонув в хаосе.",
        "",
        "## Для игроков",
        "- Прогрессивная стоимость телепортов — до 20 телепорты бесплатны, дальше цена растёт вместе с твоим доходом.",
        "- Телепорт в катакомбы/некрополи через жрецов — быстрее попадаешь \"в дело\" для Seven Signs.",
        "- Костры: отдых и \"присутствие\" в мире — понятные точки, где приятно остановиться и почувствовать живой мир.",
        "- Отдых и буст опыта (мягкая поддержка, не обязаловка) — меньше ощущения \"если не гринжу — отстаю\".",
        "- Adventure Points и прогресс за исследование — игра ценит путь, а не только часы на одном споте.",
        "- Продажа бафов игроками — бафы становятся частью экономики и общения, меньше боли с окнами.",
        "- Глобальный чат через Trade — общение в игре, но без бесконечного спама.",
        "- Автолут — меньше кликов, больше игры.",
        "- Чемпионские мобы и читаемые ауры — больше \"вызова по делу\", меньше непонятных ваншотов.",
        "- Локализация и новичковые бафы — старт без боли: понятнее и быстрее входишь в темп High Five.",
        "",
        "## В планах (по роадмапу)",
        "- Премиум \"QoL, not power\" (в дизайне) — приятнее играть, но без pay-to-win.",
        "- Видимость сервера + памятка/обучение в Tutorial Book и Alt+B — новичкам проще понять \"что тут за сервер\".",
        "- Живая экономика / живое PvE / общие PvE-цели — меньше соло-выживания, больше кооператива и смысла в мире.",
        "- Кооперативные Seven Signs — ощущение \"фракционной войны\" вместо формальности.",
        "- Фракции с контрактами, клановая RPG-прогрессия, Buddies — больше причин держаться вместе.",
        "- Offline Adventure — прогресс \"для людей с жизнью\", без обязаловки сидеть онлайн.",
      ].join("\n"),
      en: [
        "I couldn't find \"that\" Lineage server for years. Got tired — built my own.",
        "",
        "We develop in the open. Join as a player or as a contributor.",
        "",
        "## For dev partners",
        "- SSOT docs (Specs/ADRs/Ops): less guessing from code, easier onboarding and real discussions.",
        "- Config-driven balance: tempo/economy tweaks live in config, not rebuilds.",
        "- QoL without \"breaking the world\": convenience that keeps cities, roads, and meetings meaningful.",
        "- Economy as design: less \"adena from thin air\"; features account for sinks/loops.",
        "- Social mechanics over chores: fewer incentives for multibox/bot routine, more reasons to play with people.",
        "- Transparent governance: clear rules, changes, and boundaries.",
        "- Features as products: each has \"why for the player\" and success criteria, not only implementation.",
        "- A shared workspace: web + game design + content, without drowning in chaos.",
        "",
        "## For players",
        "- Progressive teleport cost: free up to level 20, then scales with your income.",
        "- Catacombs/necropolis teleport via priests: faster access for Seven Signs.",
        "- Campfires: rest and presence in the world.",
        "- Rest XP boost (support, not a must): less FOMO.",
        "- Adventure Points and exploration progress: the journey matters.",
        "- Player-sold buffs: buffs become economy + social layer, less pain with windows.",
        "- Global chat via Trade: in-game world chat, less spam.",
        "- Auto-loot: less clicking, more playing.",
        "",
        "## Roadmap",
        "- Premium: QoL, not power.",
        "- Better visibility + onboarding (Tutorial Book / Alt+B).",
        "- Living economy / living PvE / shared PvE goals.",
        "- Cooperative Seven Signs.",
        "- Factions, contracts, clan RPG progression, buddies.",
        "- Offline Adventure: progress for people with a life.",
      ].join("\n"),
    },
    links: [
      { label: "Discord", url: "https://discord.gg/kCNcu9zCnM" },
      { label: "GitHub", url: "https://github.com/nikitakhotchenkov/Ludens-L2" },
      { label: "Roadmap", url: "https://trello.com/b/1dWryWeO/l2-ludens" },
      {
        label: "Client download",
        url: "https://drive.google.com/file/d/1OXeWvINSA9pMCg1i4iooUsASHxoCVP3S/view",
      },
    ],
    status: "active",
  },
  {
    slug: "borsh",
    title: { ru: "Borsh (Unreal co-op)", en: "Borsh (Unreal co-op)" },
    summary: {
      ru: "Ко-оп на Unreal: вместе выбираемся из огромной ямы, где снизу поднимается лава. Стадия — концепт.",
      en: "Unreal co-op: escape a huge pit while lava rises. Stage: concept.",
    },
    content: {
      ru: [
        "Рабочее имя: Borsh.",
        "",
        "Питч: в ко-опе выбираемся из жерла просыпающегося вулкана. Нужны люди, которые любят совместный геймплей и хороший темп.",
        "",
        "## Кого ищем",
        "- Геймдизайнера",
        "- 3D артовика",
        "- SFX/VFX/Animation/UI — тоже велкам, разберёмся, куда применить",
        "",
        "Стадия: концепт. В команде сейчас я (визионер/дизайн) и 2 программиста. Делаем open source.",
      ].join("\n"),
      en: [
        "Working title: Borsh.",
        "",
        "Pitch: a co-op escape from a waking volcano crater while lava rises below.",
        "",
        "## Looking for",
        "- Game designer",
        "- 3D artist",
        "- SFX/VFX/Animation/UI — welcome too",
        "",
        "Stage: concept. Team: me (vision/design) + 2 programmers. Open source.",
      ].join("\n"),
    },
    links: [
      { label: "Discord", url: "https://discord.gg/QaZkzxQfHn" },
      { label: "GitHub", url: "https://github.com/dgudko/borsh" },
    ],
    status: "concept",
  },
  {
    slug: "ludens-school",
    title: { ru: "Ludens School", en: "Ludens School" },
    summary: {
      ru: "Школа про опору на себя, ясность и путь к проекту. Пока в замысле, но непременно прибудет.",
      en: "A school about self-support, clarity, and a path to your project. Still a concept — coming.",
    },
    content: {
      ru: [
        "Это не школа \"будь творческим\". Это школа про то, как держаться на себе и доводить до результата.",
        "",
        "## Успешный результат",
        "- Системно понял, что тебя драйвит (не вспышка)",
        "- Тише внутри: меньше сомнений и метаний",
        "- Есть видение проекта и первые решения",
        "- Запустил прототип, ясно куда дальше (и куда лучше не ходить)",
        "",
        "## Где жить комьюнити",
        "- Discord для школы: заходи, знакомься, задавай вопросы",
        "- Email — чтобы не потеряться (лист ожидания)",
      ].join("\n"),
      en: [
        "Not a \"be creative\" school. It's about self-support, clarity, and shipping.",
        "",
        "## Success looks like",
        "- You find what drives you consistently (not a flash)",
        "- It's quieter inside: less doubt and spinning",
        "- You have a project vision and first decisions",
        "- You start a prototype and see clear next steps",
        "",
        "## Where the community lives",
        "- Discord: join, meet people, ask questions",
        "- Email: a waitlist so we don't lose each other",
      ].join("\n"),
    },
    links: [{ label: "Discord", url: "https://discord.gg/7qtrx9Jm8f" }],
    status: "concept",
  },
  {
    slug: "consulting-1on1",
    title: { ru: "Личное консультирование 1:1", en: "1:1 consulting" },
    summary: {
      ru: "Когда входишь в новое и теряешься — помогу сориентироваться, вернуть вдохновение и держать свою линию.",
      en: "When you step into the new and start drifting — I help you regain your line and move with clarity.",
    },
    content: {
      ru: [
        "Широкий профиль: помогаю посмотреть на тупик с другой точки зрения, увидеть слепые пятна и найти решения, которые подходят именно тебе.",
        "",
        "Цена: $100–$150 за встречу. По времени не ограничена — работаем, пока не станет ясно.",
        "",
        "## Бесплатно / платно",
        "- Если я сам так хочу и это массово/публично — делаю бесплатно",
        "- Если ко мне приходят с запросом \"реши мне вот это\" — тогда платно",
        "- Студенты и молодые команды (первый проект): первая встреча бесплатно",
      ].join("\n"),
      en: [
        "Broad profile: we look at your stuck point from a new angle, find blind spots, and design a path that fits you.",
        "",
        "Price: $100–$150 per session. No hard time limit — we work until it's clear.",
        "",
        "## Free vs paid",
        "- If I want it and it is public/mass — I do it for free",
        "- If you come with \"solve this for me\" — it's paid",
        "- Students and first-time teams: first session is free",
      ].join("\n"),
    },
    links: [{ label: "Write", url: "/contacts/" }],
    status: "active",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

