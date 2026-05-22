# Navigation Section Pages — Design Spec

**Date:** 2026-05-22
**Topic:** Build Services / Products / Industries / Talent pages and wire navigation from the mega menu and homepage cards.

## Goal

The site currently has only one page (`/`). Every link in the mega menu, homepage service cards, and homepage product cards points to `#`. Build out the four top-level navigation sections — Services, Products, Industries, Talent & Engagement — with real, navigable pages. Pick one "flagship" page per section and develop it to a polished, conversion-ready level; data-drive the rest from `constants.ts` through a shared template.

## Scope

### Route map

```
/services                         landing (lists 7 categories)
/services/[category]              category detail (template-driven)
   └─ /services/ai                FLAGSHIP — bespoke layout
/products                         landing (lists 3 products)
/products/[slug]                  product detail (template-driven)
   └─ /products/realhrsoft        FLAGSHIP — bespoke layout
/industries                       landing (lists 7 verticals)
/industries/[slug]                vertical detail (template-driven)
   └─ /industries/bfsi            FLAGSHIP — bespoke layout
/talent                           FLAGSHIP — single polished page (no children)
```

### Wiring

All `href="#"` strings in these files must be replaced with real routes:

- `src/components/header.tsx` — desktop mega menu (Services / Products / Industries / Talent panels) and mobile drawer
- `src/components/services-grid.tsx` — homepage service category cards
- `src/components/products-showcase.tsx` — homepage product cards

## Components

### New shared components

- **`src/components/section/SectionHero.tsx`** — Reusable hero shell with badge, headline, subhead, dual-CTA, optional background visual. Used by all landing + template detail pages so they feel cohesive.
- **`src/components/section/SectionDetailTemplate.tsx`** — Data-driven detail page used by non-flagship `[category]`, `[slug]`, and vertical pages. Layout: hero → overview block → grid of items → "Why us" strip → related case studies → CTA.
- **`src/components/section/SectionLanding.tsx`** — Reusable landing page used by `/services`, `/products`, `/industries`. Hero, intro stats, grid of cards routing to detail pages, closing CTA.
- **`src/components/section/CTABand.tsx`** — Shared bottom CTA strip ("Talk to our team") used across every page.

### Bespoke flagship pages (own files, not reused)

- **`/services/ai/page.tsx`** — Hero with animated AI capability visual, 6 capability cards (Vibe Coding, AI Agents, Conversational AI, CV/ML, Data, RPA), tech stack strip, mini case study, dual CTA.
- **`/products/realhrsoft/page.tsx`** — Brand hero with dashboard mockup, 8 feature blocks, module list, customer logo strip, testimonial pulled from existing constants, pricing teaser (3 tiers), CTA.
- **`/industries/bfsi/page.tsx`** — Vertical hero, industry challenges block, Aayulogic approach, compliance badges (ISO 27001 / ISO 9001 — assets exist in `public/`), case study, CTA.
- **`/talent/page.tsx`** — Hero, 4-model comparison matrix (Staff Aug / Dedicated / C2H / BOT), hiring funnel timeline, FAQ accordion, CTA.

## Data changes

`src/lib/constants.ts`:

1. Add `slug` field to every `SERVICE_CATEGORIES` entry (already keyed; just need string slugs that match the existing `key`).
2. Add `slug` to every `PRODUCTS` entry (`realhrsoft`, `realchat`, `reallearn`).
3. Add `slug` to every `INDUSTRIES_NEW` entry (`bfsi`, `healthcare`, `pharma`, `professional-services`, `media`, `retail`, `technology`).
4. Add `slug` to every `TALENT_MODELS` entry (no separate pages, but used for anchor links inside `/talent`).
5. Add a small `RELATED_CASE_STUDIES` helper that maps slug → 1-2 entries from existing `CASE_STUDIES`.

## Visual style

Match the homepage exactly:

- Palette: `brand-navy` / `brand-blue` / `brand-cyan` from existing Tailwind config
- Framer Motion patterns already used in `hero-section.tsx`, `services-grid.tsx`
- Glass morphism on cards (matches mega menu styling)
- Same easing curves from `@/lib/utils`
- `tech-stack-icons` package for tech badges (already imported in `services-grid.tsx`)

No new design tokens, no new fonts, no new color variants.

## Out of scope

- Real CMS / data fetching (everything reads from `constants.ts`)
- Form submissions on CTAs (buttons link to a mailto or hash; no backend)
- Auth / pricing checkout
- Blog detail pages, About page, Careers page (not part of this scope)
- SEO metadata beyond Next.js defaults — title/description per route only

## Acceptance criteria

1. Every nav item in the mega menu (desktop and mobile) navigates to a real page that renders without error.
2. Every service card and product card on the homepage navigates to its respective detail page.
3. The 4 flagship pages (`/services/ai`, `/products/realhrsoft`, `/industries/bfsi`, `/talent`) have unique, custom-laid-out content — not the shared template.
4. All other detail pages (`/services/engineering`, `/products/realchat`, `/industries/healthcare`, etc.) render through the shared `SectionDetailTemplate` driven by `constants.ts`.
5. `npm run build` succeeds with all routes prerendered.
6. Responsive: every page works at mobile (375), tablet (768), desktop (1280+) widths.

## Build approach

The implementation plan will sequence the work to surface integration bugs early:

1. Add `slug` to constants → unblocks routing.
2. Build shared components (`SectionHero`, `SectionDetailTemplate`, `SectionLanding`, `CTABand`) → reusable scaffolding.
3. Wire 4 landing pages first → mega menu top-level links light up.
4. Build dynamic `[category]` / `[slug]` routes using the template → all other links light up.
5. Replace 4 of those routes with bespoke flagship pages.
6. Replace `href="#"` strings in header, services-grid, products-showcase.
7. Final pass: `npm run build`, walk through every nav link in a browser.
