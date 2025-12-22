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
  links?: Array<{
    label: string;
    url: string;
  }>;
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
      ru: "Я годами не мог найти «тот самый» Lineage сервер. Заебался — решил сделать свой.\nДля людей. Честно и понятно.\n\nСервер уже живой: можно заходить и играть. Разрабатываю открыто. Если хочешь — залетай.\n\n## Для партнёров-разработчиков\n- SSOT-документация (Specs/ADRs/Ops): не надо догадываться по коду; легко влетать в контекст и спорить предметно.\n- Конфиг-драйв баланс: не надо пересобирать сервер ради экономики; правки темпа/стоимостей живут в настройках.\n- QoL без «сломать мир»: удобство добавляем так, чтобы не убивать смысл дорог, городов и встреч.\n- Экономика как часть дизайна: без «адены из воздуха»; фичи сразу учитывают sinks/loops.\n- Социальные механики вместо обязаловки: меньше стимулов к мультибоксу/бот-рутине, больше причин играть с людьми.\n- Прозрачность управления: понятные правила, изменения и границы.\n- Фичи оформлены как продукты: у каждой есть «зачем игроку» и критерии успеха.\n- Рабочая площадка для сайта+сервера: можно пилить веб, геймдизайн и контент — не тонув в хаосе.\n\n## Для игроков\n- Прогрессивная стоимость телепортов: до 20 — бесплатно, дальше цена растёт вместе с твоим доходом.\n- Телепорт в катакомбы/некрополи через жрецов: меньше бега кругами ради Seven Signs, быстрее попадаешь в дело.\n- Костры: отдых и «присутствие» в мире: меньше пустых простоев, больше живого мира.\n- Отдых и буст опыта: мягкая поддержка, не обязаловка.\n- Adventure Points за исследование: игра ценит путь, а не только часы на одном споте.\n- Продажа бафов игроками: бафы — часть экономики и общения.\n- Глобальный чат через Trade: общение в игре без бесконечного спама.\n- Автолут: меньше кликов, больше игры.\n- Чемпионские мобы и читаемые ауры: больше вызова по делу, меньше непонятных ваншотов.\n- Локализация и новичковые бафы: старт без боли в темпе High Five.\n\n## В планах (по роадмапу)\n- Премиум «QoL, not power»: приятнее играть, но без pay-to-win.\n- Памятка/обучение в Tutorial Book и Alt+B: новичкам проще понять «что тут за сервер».\n- Живая экономика / живое PvE / общие PvE-цели: меньше соло-выживания, больше кооператива.\n- Кооперативные Seven Signs: ощущение фракционной войны вместо формальности.\n- Фракции с контрактами, клановая RPG-прогрессия, Buddies: больше причин держаться вместе.\n- Offline Adventure: прогресс для людей с жизнью, без обязаловки сидеть онлайн.\n\nСсылки (Discord/GitHub/клиент/роадмап) — кнопками сверху.",
      en: "For years I couldn’t find “that” Lineage server. Got tired of it — so I made my own.\nFor people. Honest and clear.\n\nThe server is already live: you can join and play. Development is open — if you want in, jump in.\n\n## For dev partners\n- SSOT docs (Specs/ADRs/Ops): no guessing from code; easy to onboard and debate specifics.\n- Config-driven balance: no rebuilds for economy tweaks; pacing/costs live in config.\n- QoL without “breaking the world”: convenience without killing roads, towns, and meetings.\n- Economy as design: no “adena from thin air”; features include sinks/loops from day one.\n- Social mechanics over chores: fewer incentives for multibox/bot routine, more reasons to play with people.\n- Transparent governance: clear rules, changes, and boundaries.\n- Features as products: each has “why for the player” and success criteria.\n- A working playground for site+server: web, game design, and content without chaos.\n\n## For players\n- Progressive teleport cost: free up to level 20, then it scales with your income.\n- Catacombs/necropolis teleport via priests: less running circles for Seven Signs, more time in the action.\n- Campfires: rest and presence in the world.\n- Rest/XP boost: soft support, not an obligation.\n- Adventure Points for exploration: the game values the journey, not only hours on one spot.\n- Player buff selling: buffs become part of economy and social play.\n- Global chat through Trade: in-game communication without endless spam.\n- Auto-loot: fewer clicks, more play.\n- Champion mobs with readable auras: fair challenge, fewer “what just happened” one-shots.\n- Localization + newbie buffs: a painless start in High Five tempo.\n\n## Roadmap\n- Premium “QoL, not power”: nicer to play, no pay-to-win.\n- Tutorial Book + Alt+B guide: newcomers understand what this server is.\n- Living economy / living PvE / shared PvE goals: less solo survival, more cooperation.\n- Cooperative Seven Signs: faction war feeling instead of formality.\n- Factions with contracts, clan RPG progression, buddies: more reasons to stick together.\n- Offline Adventure: progress for people with a life.\n\nLinks (Discord/GitHub/client/roadmap) are available via buttons above.",
    },
    links: [
      { label: "Discord", url: "https://discord.gg/kCNcu9zCnM" },
      { label: "GitHub", url: "https://github.com/nikitakhotchenkov/Ludens-L2" },
      { label: "Roadmap (Trello)", url: "https://trello.com/b/1dWryWeO/l2-ludens" },
      {
        label: "Client download",
        url: "https://drive.google.com/file/d/1OXeWvINSA9pMCg1i4iooUsASHxoCVP3S/view",
      },
    ],
    status: "active",
  },
  {
    slug: "borsh",
    title: {
      ru: "Borsh (Unreal ко-оп)",
      en: "Borsh (Unreal co-op)",
    },
    summary: {
      ru: "В ко-опе выбираемся из жерла просыпающегося вулкана. Ищем геймдизайнера и 3D артовика (и вообще — welcome).",
      en: "Co-op escape from the mouth of an awakening volcano. Looking for a game designer and a 3D artist (everyone welcome).",
    },
    content: {
      ru: "Стадия: концепт. В команде уже есть я (визионер/дизайн) и 2 программиста.\n\nИщем: геймдизайнера, 3D артовика. Если у тебя SFX/VFX/Animation/UI — тоже залетай.\n\nРепозиторий открыт, обсуждение в Discord.",
      en: "Stage: concept. The team already has me (vision/design) and 2 programmers.\n\nLooking for: game designer, 3D artist. If you do SFX/VFX/Animation/UI — join as well.\n\nRepo is open, discussion is in Discord.",
    },
    links: [
      { label: "Discord", url: "https://discord.gg/QaZkzxQfHn" },
      { label: "GitHub", url: "https://github.com/dgudko/borsh" },
    ],
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
    links: [],
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
    links: [{ label: "Write", url: "/contacts/" }],
    status: "active",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
