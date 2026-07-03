# NicoFacts Site Revamp — Design

**Date:** 2026-07-03
**Status:** Approved by Shawn

## Goal

Revamp the nicotine pouch education website (currently "Taiwan Nicotine Pouch Education", v0-generated) along four axes:

1. **Content spec as source of truth** — a standalone, editable `CONTENT_SPEC.md` dictates all word content; blog posts live as individual markdown files parsed at build time.
2. **Design revamp** — coherent clinical/professional/authoritative palette, subtle tasteful animations, desktop and mobile.
3. **New domain** — `nicofacts.com`, with a rebrand of the site name to **NicoFacts**.
4. **Codebase refactor** — away from brittle v0 structure toward pragmatic SOLID: small focused components, single-purpose modules, no dead code.

## Decisions (from brainstorming)

| Question | Decision |
|---|---|
| Spec scope | All word content: landing, blog, learn, research, vendors, market-growth, contact, disclaimers |
| Copy treatment | **Keep verbatim** — extract existing Traditional Chinese copy word-for-word; no rewriting |
| Branding | Rebrand visible site name / titles / metadata to **NicoFacts**; body copy untouched |
| Palette | Clinical teal/blue on clean off-white; **light mode only** |
| Blog storage | Separate `content/blog/*.md` files with frontmatter; spec holds an index of them |
| Spec pipeline | Human doc + manual sync for page copy; blog markdown parsed at build time. Workflow documented in README |
| Content cuts | **Keep everything** (incl. JFK Jr. video, vendors page, market-growth page, media carousel) |
| Approach | **A — incremental refactor in place**, each step diffable against current behavior |

## 1. Content architecture

### CONTENT_SPEC.md (repo root)

Modeled on `~/workspace/OpalResearchLandingPage/CONTENT_SPEC.md`:

- Header: goal, tone (clinical, professional, authoritative), audience (Taiwanese consumers seeking smoke-free nicotine alternatives), outbound-links table (vendor links, media article links).
- Site map of all routes.
- One section per page containing the current copy **verbatim in Traditional Chinese**: headlines, body, CTA labels + destinations, section ordering, media/asset references (video, carousel articles, images).
- Blog index table: slug, title, publish date, author, reading time, excerpt, hero image — pointing at `content/blog/*.md`.

Editing rule: the spec is authoritative for page copy. Code must match the spec; edits to the spec are manually synced into components.

### Blog pipeline

- `content/blog/<slug>.md`, one per existing post. Frontmatter: `title`, `publishDate`, `readingTime`, `author`, `heroImageUrl`, `heroImageAlt`, `excerpt`. Body: current HTML content converted to markdown (rendered output must be visually identical).
- `lib/blog.ts` is replaced by a small server-only loader: reads `content/blog` with `fs`, parses frontmatter with `gray-matter`, renders markdown to HTML with remark at build time. Existing static generation (`generateStaticParams`) preserved.
- Adding a post = add a markdown file; it appears on next deploy with no code change.

### README

Rewrite, dropping v0 boilerplate. Documents: project overview, dev commands, and the content workflow (page copy = edit spec then sync code; blog = edit/add markdown file).

## 2. Design system

### Palette — light only, defined once

Semantic tokens in `app/globals.css` mapped through Tailwind config:

- **Primary:** deep clinical teal (~`hsl(174 65% 26%)`) — buttons, key accents
- **Ink:** dark slate-navy for headings
- **Surfaces:** off-white background, white cards, cool-gray borders/muted text
- **Accent:** single sky-blue for links/highlights

All hardcoded `blue-600` / `gray-500`-style utility classes across pages are replaced with semantic token classes. Remove: dark-mode token block, sidebar tokens, duplicate `styles/globals.css`, `app/styles/faq-styles.css` (merged into the token system or component styles).

### Typography

`Noto Sans TC` via `next/font` (replacing Arial) for proper Traditional Chinese rendering; clear heading hierarchy with tighter tracking on large headings.

### Animations — CSS-only, subtle, no new dependencies

- Scroll-reveal (fade-up) on sections via a small `IntersectionObserver` hook adding a class
- Card hover lift + soft shadow
- Animated underline on nav links
- Hero fade-up on load
- All gated behind `prefers-reduced-motion: reduce`

## 3. Code refactor

- `app/page.tsx` (733 lines) → server component composing `components/sections/home/*`, one component per landing section, named to mirror spec headings. `"use client"` pushed down to only the interactive leaves (carousel, video player).
- Other oversized pages get the same decomposition treatment.
- Shared layout primitives: `PageHeader`, `Section`, `CTAButton` — replacing copy-pasted markup.
- `lib/site-config.ts`: single source for site name, URL (from `NEXT_PUBLIC_SITE_URL`, default `https://nicofacts.com`), and outbound links. Metadata, sitemap, and OG tags read from it.
- Remove dead v0 leftovers: `components/theme-provider.tsx`, unused shadcn/ui components, stray CSS files, unused assets if any are confirmed orphaned.

## 4. Branding & domain

- Visible site name, header/logo text, `<title>` and OG metadata, web manifest, footer © line → **NicoFacts**.
- All domain references → `nicofacts.com` (`robots.txt`, `sitemap.ts`, metadata base URL).
- Google Analytics + Microsoft Clarity wiring unchanged (env-driven).
- Body copy remains verbatim.

## 5. Verification

- `pnpm build` passes (static generation of all pages including blog).
- Visual pass over every page at desktop and mobile widths in the preview browser: copy verbatim-identical to the pre-revamp site, palette coherent, animations subtle and functional, reduced-motion respected.
- Spot-check: sitemap/robots/OG point at nicofacts.com; blog posts render identically to their previous HTML.

## Out of scope

- Rewriting or translating any copy
- Dark mode
- New pages or content
- DNS/hosting configuration for nicofacts.com (code references only)
