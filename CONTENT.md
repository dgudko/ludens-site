# Ludens site content

## Where texts live (i18n)

- `src/i18n/ru.json` - Russian texts (default)
- `src/i18n/en.json` - English texts

All UI copy is taken from these dictionaries.

## Projects data (static export)

Project slugs and content for `/projects` and `/projects/[slug]` live in `src/data/projects.ts`.

## Where images live

Put images into `public/images/**` and reference them from the i18n dictionaries:

- Projects: `src/i18n/ru.json` → `projects.items[*].imageSrc` (same in `src/i18n/en.json`)
- About: `src/i18n/ru.json` → `about.people[*].photoSrc` (same in `src/i18n/en.json`)

Suggested paths:

- `public/images/projects/alpha.jpg`
- `public/images/projects/beta.jpg`
- `public/images/projects/gamma.jpg`
- `public/images/people/you.jpg`

## Where UI lives

- Home landing (sections + anchors): `components/Landing.tsx`
- Header tabs (routes): `components/SiteHeader.tsx`

## Pages (separate routes)

- `app/projects/page.tsx` - all projects
- `app/projects/[slug]/page.tsx` - a single project page
- `app/school/page.tsx` - school landing
- `app/about/page.tsx` - about/team
- `app/consulting/page.tsx` - consulting funnel landing
- `app/contacts/page.tsx` - contacts page

## Language behavior

Language is switched without a page reload and persisted in `localStorage` under `ludens.lang`.
