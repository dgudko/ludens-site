# Ludens site content

## Where texts live (i18n)

- `src/i18n/ru.json` — Russian texts (default)
- `src/i18n/en.json` — English texts

Most UI copy is taken from these dictionaries.

## Projects data (static export)

Project slugs and content for `/projects/` and `/projects/[slug]/` live in `src/data/projects.ts`.

## Where images live

Put images into `public/images/**` and reference them from the dictionaries:

- About/team photos: `src/i18n/ru.json` → `about.people[*].photoSrc` (same in `src/i18n/en.json`)

Suggested paths:

- `public/images/people/dmitry.jpg`
- `public/images/projects/l2-ludens.jpg`
- `public/images/projects/borsh.jpg`

Note: project cover images are not wired in the UI yet (MVP). If you want them, we can add `imageSrc` into `src/data/projects.ts` and render it on the cards/pages.

## Where UI lives

- Home landing (sections + anchors): `src/components/Landing.tsx`
- Header tabs (routes): `src/components/SiteHeader.tsx`

## Pages (separate routes)

- `app/projects/page.tsx` — all projects
- `app/projects/[slug]/page.tsx` — a single project page
- `app/school/page.tsx` — school landing
- `app/about/page.tsx` — about/team
- `app/consulting/page.tsx` — consulting landing
- `app/contacts/page.tsx` — contacts page

## Language behavior

Language is switched without a page reload and persisted in `localStorage` under `ludens.lang`.

