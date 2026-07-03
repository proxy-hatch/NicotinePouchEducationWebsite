# NicoFacts Site Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp the Taiwan nicotine-pouch education site into NicoFacts: content dictated by a standalone CONTENT_SPEC.md, blog as build-time markdown, a coherent clinical teal/blue design system with tasteful motion animations, a decomposed component structure, and nicofacts.com branding — all while keeping the Cloudflare-Pages-compatible static export.

**Architecture:** Incremental refactor of an existing Next.js 15 App Router static-export site (`output: 'export'`). Content extraction first (spec + markdown blog with tests), then design-system foundation (tokens, font, motion primitives, layout shell), then page-by-page restyle/decomposition, then rebrand sweep and final verification. Total rebuild of a page is permitted where v0 structure resists cleanup.

**Tech Stack:** Next.js 15.2.4 (App Router, static export), React 19, Tailwind CSS 3 + shadcn/ui remnants, `gray-matter` + `remark` for blog markdown, `motion` (framer-motion successor) for animations, `vitest` for unit tests, pnpm.

**Spec:** `docs/superpowers/specs/2026-07-03-nicofacts-revamp-design.md` — read it before starting any task.

## Global Constraints

- **Copy is verbatim.** All user-visible Traditional Chinese copy must survive character-for-character. Rebrand changes are limited to the site name (header/logo text, metadata titles, manifest, footer © line, JSON-LD org name) → **NicoFacts**.
- **Cloudflare Pages static export must not regress.** `next.config.mjs` keeps `output: 'export'`, `trailingSlash: true`, `skipTrailingSlashRedirect: true`, `images: { unoptimized: true }`. No server runtime, no middleware, no server actions. `pnpm build` must emit a complete static `out/`.
- **Domain:** all self-referential URLs default to `https://nicofacts.com` (still overridable via `NEXT_PUBLIC_SITE_URL`).
- **Light mode only.** No `.dark` tokens, no theme switching.
- **Analytics unchanged:** GA id `G-NJMMFLSV38` (with `healthynic.com` linker) and Clarity project id `t8zin2xpe3` keep working exactly as today.
- **Animations:** subtle, professional; every entrance/scroll animation gated behind reduced-motion preference (use `useReducedMotion` from `motion/react` or CSS `@media (prefers-reduced-motion: reduce)`).
- **Package manager:** pnpm. Node ≥ 20.
- **Verification command for every task:** `pnpm build` must pass (it also runs the vitest suite once tests exist only if invoked — run `pnpm test` explicitly too).

## File Structure (end state)

```
CONTENT_SPEC.md                      # source of truth for all page copy + blog index
content/blog/<slug>.md               # one file per blog post (frontmatter + markdown body)
app/
  layout.tsx                         # SERVER root layout: html/body, font, metadata, Header/Footer/Analytics
  page.tsx                           # server composition of home sections
  <route>/page.tsx                   # thin pages composing sections/primitives
  globals.css                        # single stylesheet: tokens + base + utilities
  sitemap.ts
components/
  layout/header.tsx                  # client: nav + mobile menu
  layout/footer.tsx
  layout/analytics.tsx               # client: GA + Clarity + JSON-LD
  motion/reveal.tsx                  # client: scroll-reveal wrapper
  motion/stagger.tsx                 # client: staggered children reveal
  motion/count-up.tsx                # client: animated number
  primitives/section.tsx             # section wrapper (spacing + container)
  primitives/page-header.tsx         # per-page hero header
  primitives/cta-button.tsx
  sections/home/*.tsx                # one component per landing section
  ui/*                               # shadcn remnants actually in use
lib/
  site-config.ts                     # name, url, nav, footer links, outbound links
  content/blog.ts                    # build-time markdown loader (fs + gray-matter + remark)
  utils.ts
tests/
  blog.test.ts                       # loader unit tests
docs/superpowers/{specs,plans}/
```

Deleted by the end: `app/ClientLayout.tsx`, `lib/blog.ts`, `components/theme-provider.tsx`, `styles/globals.css`, `app/styles/faq-styles.css`, v0 README content, `next-themes` dependency.

---

### Task 1: Baseline + dependencies + test harness

**Files:**
- Modify: `package.json` (deps + `test` script)
- Create: `vitest.config.ts`

**Interfaces:**
- Produces: working `pnpm test` (vitest) and unchanged-passing `pnpm build`; deps `gray-matter`, `remark`, `remark-html`, `remark-gfm`, `motion` available to later tasks.

- [ ] **Step 1: Verify the baseline build passes before touching anything**

Run: `pnpm install && pnpm build`
Expected: build succeeds, `out/` contains `index.html`, `learn/index.html`, `blog/what-is-nicotine-pouch/index.html`, etc. If this fails, STOP and report — do not proceed on a broken baseline.

- [ ] **Step 2: Add dependencies**

Run:
```bash
pnpm add gray-matter remark remark-html remark-gfm motion
pnpm add -D vitest
```

- [ ] **Step 3: Add vitest config and test script**

Create `vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname) },
  },
})
```

In `package.json` scripts add: `"test": "vitest run"`.

- [ ] **Step 4: Verify harness runs (no tests yet is OK)**

Run: `pnpm test`
Expected: vitest exits reporting "no test files found" (exit code may be 1 — that's fine at this step; note it) or passes trivially.

Run: `pnpm build`
Expected: still passes.

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts
git commit -m "chore: add content/animation deps and vitest harness"
```

---

### Task 2: Blog markdown loader (TDD)

**Files:**
- Create: `lib/content/blog.ts`
- Create: `tests/blog.test.ts`
- Create: `content/blog/.gitkeep` (dir exists before posts migrate)

**Interfaces:**
- Produces (consumed by Tasks 3, 6, 9):
  ```ts
  export interface BlogPost {
    slug: string
    title: string
    publishDate: string      // YYYY-MM-DD
    readingTime: number
    author: string
    heroImageUrl: string
    heroImageAlt: string
    excerpt: string
    contentHtml: string      // rendered HTML from markdown body
  }
  export function getAllPosts(): BlogPost[]        // sorted by publishDate ascending (matches current display order)
  export function getPostBySlug(slug: string): BlogPost | undefined
  ```
- Behavior contract: reads every `content/blog/*.md`; skips files with `draft: true` frontmatter; replaces the literal token `{{year}}` with the current year in `title` and body (this preserves the old `new Date().getFullYear()` titles); renders markdown → HTML with `remark` + `remark-gfm` + `remark-html` (with `{ sanitize: false }` so raw inline HTML in the markdown passes through).

- [ ] **Step 1: Write the failing tests**

Create `tests/blog.test.ts`:
```ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { getAllPosts, getPostBySlug } from '@/lib/content/blog'

const dir = path.join(process.cwd(), 'content/blog')
const fixture = path.join(dir, 'zz-test-fixture.md')
const draftFixture = path.join(dir, 'zz-test-draft.md')

beforeAll(() => {
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(
    fixture,
    `---
title: "測試文章 {{year}} 指南"
publishDate: "2099-01-01"
readingTime: 3
author: "測試團隊"
heroImageUrl: "/blog/test.jpg"
heroImageAlt: "測試圖"
excerpt: "測試摘要"
---

## 標題二

這是**粗體**段落。

- 項目一
- 項目二
`,
  )
  fs.writeFileSync(
    draftFixture,
    `---
title: "草稿"
publishDate: "2099-02-01"
readingTime: 1
author: "x"
heroImageUrl: ""
heroImageAlt: ""
excerpt: "d"
draft: true
---
body
`,
  )
})

afterAll(() => {
  fs.rmSync(fixture, { force: true })
  fs.rmSync(draftFixture, { force: true })
})

describe('blog loader', () => {
  it('loads frontmatter and renders markdown to HTML', () => {
    const post = getPostBySlug('zz-test-fixture')
    expect(post).toBeDefined()
    expect(post!.author).toBe('測試團隊')
    expect(post!.readingTime).toBe(3)
    expect(post!.contentHtml).toContain('<h2>標題二</h2>')
    expect(post!.contentHtml).toContain('<strong>粗體</strong>')
    expect(post!.contentHtml).toContain('<li>項目一</li>')
  })

  it('substitutes {{year}} with the current year in the title', () => {
    const post = getPostBySlug('zz-test-fixture')
    expect(post!.title).toBe(`測試文章 ${new Date().getFullYear()} 指南`)
  })

  it('derives slug from filename', () => {
    expect(getPostBySlug('zz-test-fixture')!.slug).toBe('zz-test-fixture')
  })

  it('excludes drafts', () => {
    expect(getPostBySlug('zz-test-draft')).toBeUndefined()
    expect(getAllPosts().every((p) => p.slug !== 'zz-test-draft')).toBe(true)
  })

  it('sorts by publishDate ascending', () => {
    const dates = getAllPosts().map((p) => p.publishDate)
    expect([...dates].sort()).toEqual(dates)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `pnpm test`
Expected: FAIL — cannot resolve `@/lib/content/blog`.

- [ ] **Step 3: Implement the loader**

Create `lib/content/blog.ts`:
```ts
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

export interface BlogPost {
  slug: string
  title: string
  publishDate: string
  readingTime: number
  author: string
  heroImageUrl: string
  heroImageAlt: string
  excerpt: string
  contentHtml: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

const substituteYear = (s: string) => s.replaceAll('{{year}}', String(new Date().getFullYear()))

const renderer = remark().use(remarkGfm).use(remarkHtml, { sanitize: false })

function loadPost(filename: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const { data, content } = matter(raw)
  if (data.draft) return null
  return {
    slug: filename.replace(/\.md$/, ''),
    title: substituteYear(String(data.title)),
    publishDate: String(data.publishDate),
    readingTime: Number(data.readingTime),
    author: String(data.author),
    heroImageUrl: String(data.heroImageUrl ?? ''),
    heroImageAlt: String(data.heroImageAlt ?? ''),
    excerpt: String(data.excerpt ?? ''),
    contentHtml: renderer.processSync(substituteYear(content)).toString(),
  }
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(loadPost)
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => a.publishDate.localeCompare(b.publishDate))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}
```

Create empty `content/blog/.gitkeep`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `pnpm test`
Expected: all 5 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/content/blog.ts tests/blog.test.ts content/blog/.gitkeep
git commit -m "feat: build-time markdown blog loader with tests"
```

---

### Task 3: Migrate blog posts to markdown, switch consumers, delete lib/blog.ts

**Files:**
- Create: `content/blog/what-is-nicotine-pouch.md`, `content/blog/workplace-nicotine-pouch-guide.md`, `content/blog/nicotine-pouch-where-to-buy-taiwan.md`
- Modify: `app/blog/[slug]/page.tsx`, `app/sitemap.ts`, `app/page.tsx` (import swap only), `app/learn/page.tsx` (import swap only — check it, it lists posts)
- Delete: `lib/blog.ts`

**Interfaces:**
- Consumes: `getAllPosts` / `getPostBySlug` / `BlogPost` from `lib/content/blog.ts` (Task 2). Note the content field is now `contentHtml` (was `content`) and `id` no longer exists — use `slug` for React keys.

The three ACTIVE posts in `lib/blog.ts` (`blogPostsData` entries with ids 1, 3, 7) migrate. The commented-out entries (ids 2, 4, 5, 6, 8) are dead code — some reference constants that don't exist; they are recorded as "planned posts" in CONTENT_SPEC.md (Task 4), not migrated.

- [ ] **Step 1: Create the three markdown files — frontmatter**

For each post, copy frontmatter values **verbatim** from `blogPostsData` in `lib/blog.ts`. Where a title contains `` ${new Date().getFullYear()} ``, write the literal token `{{year}}` instead. Strip the `?width=...&height=...` query suffix from `heroImageUrl` values ONLY IF you verify `app/blog/[slug]/page.tsx` hardcodes width/height props (it does: 1200×630) — otherwise keep verbatim. Example header for the first post:

```markdown
---
title: "口含菸完整介紹 {{year}}：成分分析、使用方法與科學原理指南"
publishDate: "2024-10-01"
readingTime: 6
author: "健康科學團隊"
heroImageUrl: "/blog/holding_nicotine_pouch_wood_background.jpg"
heroImageAlt: "口含菸成分與使用方法圖解"
excerpt: "什麼是口含菸（尼古丁袋）？與傳統菸草產品有何不同？深入了解這種源自北歐的創新產品，包括成分分析、正確使用方法，以及背後的科學原理。適合初次接觸者的完整入門指南。"
---
```

(Do the same for `workplace-nicotine-pouch-guide` using the id-3 entry and `nicotine-pouch-where-to-buy-taiwan` using the id-7 entry — every field copied exactly from `lib/blog.ts`.)

- [ ] **Step 2: Convert each post body from HTML to markdown**

Source bodies are `article1Content`, `article3Content`, `article7Content` in `lib/blog.ts`. Mechanical mapping — do it by hand, tag by tag:
- `<h2>X</h2>` → `## X`, `<h3>X</h3>` → `### X`
- `<p>...</p>` → paragraph; `<strong>X</strong>` → `**X**`
- `<ul><li>X</li>...</ul>` → `- X` lines
- `<a href="U">X</a>` → `[X](U)`; `<table>` (if any) → GFM table; any construct without a clean markdown equivalent stays as raw inline HTML (the loader allows it).
- Text content must be character-identical. No rewording, no punctuation changes.

- [ ] **Step 3: Verify text parity with a one-off script**

Create a throwaway script at `/private/tmp/claude-501/.../scratchpad/parity.mjs` (scratchpad dir — NOT in the repo) that, for each of the three slugs, (a) imports the old string from `lib/blog.ts` source via a regex extract or a direct `import`, (b) gets `contentHtml` from the new loader, (c) strips all tags (`.replace(/<[^>]+>/g, '')`) and all whitespace (`.replace(/\s+/g, '')`) from both, and (d) asserts equality, printing a diff on mismatch.

Run: `node --experimental-strip-types` it (or `pnpm vitest run` a temp test).
Expected: parity OK for all three posts. Fix markdown until it passes.

- [ ] **Step 4: Switch consumers**

In `app/blog/[slug]/page.tsx`: change import to `@/lib/content/blog`; change `post.content` → `post.contentHtml`; change related-post `key={relatedPost.id}` → `key={relatedPost.slug}`. Everything else stays.

In `app/sitemap.ts`: change `import {blogPostsData} from '@/lib/blog'` to `import {getAllPosts} from '@/lib/content/blog'` and `blogPostsData.map(...)` → `getAllPosts().map(...)`. Also DELETE the `/faq/` entry from `staticPages` (that route does not exist — pre-existing bug).

In `app/page.tsx` and `app/learn/page.tsx`: swap `blogPostsData` / helpers from `@/lib/blog` to `getAllPosts()` from `@/lib/content/blog`. **Caution:** `app/page.tsx` is a client component (`"use client"`) — it cannot call the fs-based loader. Restructure minimally now (full refactor comes in Task 9): create a tiny server wrapper by moving the current client component to `components/sections/home/home-client.tsx` (verbatim move) and making `app/page.tsx` a server component that calls `getAllPosts()` and passes posts as a prop. Same pattern for `app/learn/page.tsx` if it is a client component (check its first line).

- [ ] **Step 5: Delete `lib/blog.ts`, build, test**

```bash
git rm lib/blog.ts
pnpm test && pnpm build
```
Expected: tests pass; build passes; `out/blog/` contains exactly the same three post directories as the baseline build. Compare rendered post HTML against baseline visually in Task 12.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: blog posts as markdown files; delete hardcoded blog.ts"
```

---

### Task 4: Write CONTENT_SPEC.md (verbatim extraction)

**Files:**
- Create: `CONTENT_SPEC.md` (repo root)

**Interfaces:**
- Produces: the authoritative copy document later tasks must match. Every later page task cites section names from this file.

- [ ] **Step 1: Write the spec skeleton**

Model on `/Users/shawn/workspace/OpalResearchLandingPage/CONTENT_SPEC.md`. Structure:

```markdown
# NicoFacts — Content Spec

**Goal:** ... (education platform for Taiwanese consumers about nicotine pouches 口含菸/尼古丁袋)
**Tone:** clinical, professional, authoritative. Traditional Chinese (zh-TW).
**Brand:** Site name is **NicoFacts**（口含菸科普平台）. Domain nicofacts.com.
**Editing rule:** This file dictates all page copy. Code must match this spec; edit here first, then sync components. Blog post BODIES live in content/blog/*.md (this file only indexes them).

## Outbound links (table: destination / purpose / URL)
## Site Map (all routes)
## Global chrome (header nav labels, footer links, © line)
## Landing (/) — section by section
## Learn (/learn)
## Research (/research)
## Vendors (/vendors)
## Market Growth (/market-growth)
## Contact (/contact)
## Disclaimer (/disclaimer) · Legal (/legal-disclaimer) · Privacy (/privacy-policy)
## Blog index (published posts table + planned/unpublished posts table)
## Structured data (JSON-LD FAQ questions/answers)
```

- [ ] **Step 2: Extract copy verbatim, page by page**

For each route, open the page file and transcribe EVERY user-visible string in order: headlines, body paragraphs, CTA labels with their `href` targets, image/video captions and alt text, media-carousel article entries (source, title, excerpt, link) from `app/page.tsx`, FAQ questions/answers, vendor names/descriptions/links, market-growth statistics (numbers + labels), form labels on contact, and the three legal pages' full text. Copy-paste — do not retype. Where the site name appears as part of branding chrome (header logo text, footer ©, metadata titles, JSON-LD org name), the spec records the NEW brand line: `NicoFacts｜口含菸（尼古丁袋）科普平台` for metadata title and `NicoFacts` for the header logo — mark each such line with `**(rebrand)**`. Body copy that merely mentions the platform stays verbatim.

Blog index tables: published (3 posts: slug, title with `{{year}}` token, date, author, reading time, hero image, excerpt) and planned (the 5 commented-out entries from old `lib/blog.ts`: slug, title, excerpt — noted as unwritten).

- [ ] **Step 3: Self-check**

Grep sanity: pick 5 random visible strings from the spec and `grep -rF` each in `app/` — every one must hit. Pick 5 random JSX text strings from pages and confirm each appears in the spec.

- [ ] **Step 4: Commit**

```bash
git add CONTENT_SPEC.md
git commit -m "docs: CONTENT_SPEC.md — verbatim source of truth for all site copy"
```

---

### Task 5: Site config + rebrand of metadata, robots, manifest

**Files:**
- Create: `lib/site-config.ts`
- Modify: `app/layout.tsx` (metadata only for now), `public/robots.txt`, `public/favicon/site.webmanifest`, `app/sitemap.ts`

**Interfaces:**
- Produces (consumed by Tasks 6–11):
  ```ts
  export const siteConfig: {
    name: 'NicoFacts'
    titleZh: '口含菸（尼古丁袋）科普平台'
    fullTitle: 'NicoFacts｜口含菸（尼古丁袋）科普平台'
    description: string            // existing description, verbatim
    url: string                    // process.env.NEXT_PUBLIC_SITE_URL || 'https://nicofacts.com'
    nav: { label: string; href: string }[]        // 4 nav items, labels verbatim from spec
    footerLinks: { label: string; href: string }[] // 3 legal links
  }
  ```

- [ ] **Step 1: Create `lib/site-config.ts`**

```ts
export const siteConfig = {
  name: 'NicoFacts',
  titleZh: '口含菸（尼古丁袋）科普平台',
  fullTitle: 'NicoFacts｜口含菸（尼古丁袋）科普平台',
  description: '為臺灣消費者提供關於口含菸的可靠資訊',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nicofacts.com',
  nav: [
    { label: '了解更多', href: '/learn' },
    { label: '研究方法', href: '/research' },
    { label: '推薦品牌', href: '/vendors' },
    { label: '聯繫我們', href: '/contact' },
  ],
  footerLinks: [
    { label: '法律聲明', href: '/legal-disclaimer' },
    { label: '隱私政策', href: '/privacy-policy' },
    { label: '免責聲明', href: '/disclaimer' },
  ],
} as const
```

- [ ] **Step 2: Update `app/layout.tsx` metadata to read from siteConfig**

Replace hardcoded titles/siteName with `siteConfig.fullTitle` / `siteConfig.name`, `metadataBase: new URL(siteConfig.url)`. Keep OG description string verbatim (`純淨尼古丁，明智選擇。...`). Remove `generator: "v0.dev"`.

- [ ] **Step 3: robots.txt and manifest**

`public/robots.txt`: change `Sitemap: https://nicopouch.tw/sitemap.xml` → `Sitemap: https://nicofacts.com/sitemap.xml`.
`public/favicon/site.webmanifest`: set `name`/`short_name` to `NicoFacts`.
`app/sitemap.ts`: replace the env fallback `'http://localhost:3000'` with `siteConfig.url` import.

- [ ] **Step 4: Build + verify**

Run: `pnpm build && grep -r "nicofacts.com" out/sitemap.xml && grep -ri "nicopouch" out/ public/ app/ lib/ components/ || echo CLEAN`
Expected: sitemap URLs use nicofacts.com (given no env override), no `nicopouch` references remain.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: site-config + NicoFacts metadata, robots, manifest rebrand"
```

---

### Task 6: Layout shell refactor — server RootLayout, Header/Footer/Analytics components

**Files:**
- Create: `components/layout/header.tsx`, `components/layout/footer.tsx`, `components/layout/analytics.tsx`
- Modify: `app/layout.tsx`
- Delete: `app/ClientLayout.tsx`, `components/theme-provider.tsx`
- Modify: `package.json` (remove `next-themes`)

**Interfaces:**
- Consumes: `siteConfig` (Task 5).
- Produces: `<Header />` (client; renders logo `NicoFacts` + zh subtitle, nav from `siteConfig.nav`, mobile menu preserving current behavior: backdrop, slide-in panel, body-scroll lock, close-on-outside-click, aria labels verbatim), `<Footer />` (server; `siteConfig.footerLinks` + © line `© {year} NicoFacts｜口含菸（尼古丁袋）科普平台. 版權所有.` per spec), `<Analytics />` (client; GA scripts, Clarity init, JSON-LD — moved verbatim from ClientLayout, org/website `name` fields updated to `siteConfig.fullTitle`).

- [ ] **Step 1: Extract Header** — new client component containing the entire `<header>` block + mobile-menu state/effects from `ClientLayout.tsx`, styling temporarily as-is (re-themed in Task 8). Logo text becomes `NicoFacts` with the zh platform name as a smaller subtitle span (spec: Global chrome).
- [ ] **Step 2: Extract Footer** — server component, links + © from siteConfig.
- [ ] **Step 3: Extract Analytics** — client component with the two GA `<Script>` tags, the Clarity `useEffect`, and the JSON-LD script. Keep ids identical. JSON-LD FAQ content verbatim.
- [ ] **Step 4: Rewrite `app/layout.tsx` as a server component** rendering `<html lang="zh-TW">` → `<body>` → `<Analytics />`, flex column wrapper, `<Header />`, `{children}`, `<Footer />`. Keep the existing `metadata` export.
- [ ] **Step 5: Delete `app/ClientLayout.tsx` and `components/theme-provider.tsx`; run `pnpm remove next-themes`.**
- [ ] **Step 6: Verify** — `pnpm build` passes; `pnpm dev` + preview: header/nav/mobile menu work, GA/Clarity script tags present in page source, JSON-LD present.
- [ ] **Step 7: Commit** — `git add -A && git commit -m "refactor: server root layout with extracted Header/Footer/Analytics; drop next-themes"`

---

### Task 7: Design tokens + typography foundation

**Files:**
- Modify: `app/globals.css`, `tailwind.config.ts`, `app/layout.tsx` (font)
- Delete: `styles/globals.css` (duplicate), `app/styles/faq-styles.css` (fold any still-needed rules into globals or the FAQ component in Task 9)

**Interfaces:**
- Produces: semantic Tailwind classes used by ALL later restyle tasks: `bg-background`, `text-foreground`, `text-ink` (headings), `bg-primary text-primary-foreground` (teal CTA), `text-accent` (links), `bg-surface` (cards/alt sections), `border-border`, `text-muted-foreground`, plus utility `.hero-gradient`.

- [ ] **Step 1: Rewrite the token block in `app/globals.css`** (light only — delete the whole `.dark` block and all `--sidebar-*` / `--chart-*` tokens):

```css
@layer base {
  :root {
    /* Clinical teal/blue — light only */
    --background: 180 20% 99%;          /* near-white with a cool cast */
    --foreground: 202 28% 18%;          /* body text: dark slate */
    --ink: 205 45% 14%;                 /* headings: near-navy */
    --card: 0 0% 100%;
    --card-foreground: 202 28% 18%;
    --surface: 185 25% 96%;             /* alt section background */
    --popover: 0 0% 100%;
    --popover-foreground: 202 28% 18%;
    --primary: 174 65% 26%;             /* deep clinical teal */
    --primary-foreground: 0 0% 98%;
    --primary-hover: 174 65% 21%;
    --secondary: 187 35% 93%;
    --secondary-foreground: 202 28% 18%;
    --muted: 195 20% 94%;
    --muted-foreground: 202 15% 42%;
    --accent: 199 75% 38%;              /* sky-blue links/highlights */
    --accent-foreground: 0 0% 98%;
    --destructive: 0 72% 45%;
    --destructive-foreground: 0 0% 98%;
    --border: 195 20% 88%;
    --input: 195 20% 88%;
    --ring: 174 65% 26%;
    --radius: 0.625rem;
  }
}
```

Add base rules: headings default `color: hsl(var(--ink))`; `.hero-gradient { background: linear-gradient(to bottom, hsl(var(--secondary)), hsl(var(--background))) }`. Keep `text-balance` utility. Remove the `body { font-family: Arial... }` rule (font handled by next/font).

- [ ] **Step 2: Extend `tailwind.config.ts`** colors with `ink: 'hsl(var(--ink))'`, `surface: 'hsl(var(--surface))'`, `'primary-hover': 'hsl(var(--primary-hover))'` alongside the existing shadcn color mappings; set `fontFamily.sans` to `['var(--font-noto-sans-tc)', 'sans-serif']`.

- [ ] **Step 3: Add Noto Sans TC in `app/layout.tsx`:**

```tsx
import { Noto_Sans_TC } from 'next/font/google'
const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
})
// <html lang="zh-TW" className={notoSansTC.variable}> and <body className="font-sans">
```

- [ ] **Step 4: Delete `styles/globals.css`.** Read `app/styles/faq-styles.css` first: port any rule actually used by the FAQ accordion into `globals.css` (temporarily) and delete the file, removing its import from `app/page.tsx`/`home-client.tsx`.

- [ ] **Step 5: Verify** — `pnpm build` passes. Preview: pages render in Noto Sans TC; existing hardcoded blue styling still functions (full re-skin comes next).

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat: clinical teal/blue design tokens + Noto Sans TC"`

---

### Task 8: Motion + layout primitives

**Files:**
- Create: `components/motion/reveal.tsx`, `components/motion/stagger.tsx`, `components/motion/count-up.tsx`
- Create: `components/primitives/section.tsx`, `components/primitives/page-header.tsx`, `components/primitives/cta-button.tsx`
- Modify: `components/layout/header.tsx` (re-theme + animated underline)

**Interfaces:**
- Produces (used by Tasks 9–11):
  - `<Reveal delay?: number className?: string>` — client; fades+rises children into view once, 24px offset, ~0.5s ease-out, `whileInView` with `viewport={{ once: true, margin: '-80px' }}`; renders children statically when `useReducedMotion()` is true.
  - `<Stagger className?: string staggerDelay?: number>` — client; parent orchestrates children variants with `staggerChildren` (default 0.08s); exposes `<StaggerItem>` for children.
  - `<CountUp to: number suffix?: string duration?: number>` — client; animates 0→`to` when scrolled into view using `motion`'s `useInView` + `animate`; renders the final number immediately under reduced motion.
  - `<Section id? className? tone?: 'default' | 'surface'>` — server; `<section>` with container + vertical padding (`py-14 md:py-20`), `tone="surface"` gives `bg-surface`.
  - `<PageHeader title subtitle? backLink?>` — server; hero-gradient page top used by all subpages.
  - `<CTAButton href children variant?: 'primary' | 'outline'>` — server; teal filled or outline link-button with hover lift (`transition-transform hover:-translate-y-0.5` + shadow).
- All motion components: `'use client'`, import from `motion/react`.

- [ ] **Step 1: Implement the three motion components** (full implementations, ~30 lines each, per the interface contract above; example Reveal):

```tsx
'use client'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Implement Section, PageHeader, CTAButton** per contracts; use only semantic token classes.
- [ ] **Step 3: Re-theme Header** — white→`bg-card`, borders→`border-border`, logo `text-ink`, nav links `text-muted-foreground hover:text-primary` with animated underline (`after:` pseudo-element scaling on hover); mobile menu re-themed the same way. Copy stays verbatim.
- [ ] **Step 4: Verify** — `pnpm build`; preview: header re-themed, underline animates, reduced-motion (toggle in devtools/emulation) shows no movement.
- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: motion primitives (Reveal/Stagger/CountUp) + layout primitives; re-themed header"`

---

### Task 9: Home page decomposition + restyle

**Files:**
- Create: `components/sections/home/hero.tsx`, `video-endorsement.tsx`, `media-carousel.tsx`, `featured-posts.tsx`, `faq.tsx` (adjust names to the actual sections found in `home-client.tsx` — one component per top-level `<section>`)
- Modify: `app/page.tsx`
- Delete: `components/sections/home/home-client.tsx` (the Task-3 interim file)

**Interfaces:**
- Consumes: `Reveal`/`Stagger`, `Section`, `CTAButton`, `getAllPosts` (posts passed down from the server page), CONTENT_SPEC.md "Landing (/)" section.
- Produces: `app/page.tsx` as a server component: fetches posts, composes `<Hero />, <VideoEndorsement />, <MediaCarousel articles={...} />, <FeaturedPosts posts={posts} />, <Faq />` (match to actual current section list).

- [ ] **Step 1: Map sections.** Read `home-client.tsx` top to bottom; list every `<section>` with its heading. Cross-check against CONTENT_SPEC.md Landing section — they must match 1:1.
- [ ] **Step 2: Extract one component per section**, copy JSX + text verbatim, then re-skin: replace every hardcoded `blue-*`/`gray-*` class with the semantic equivalents (`text-blue-800`→`text-ink`, `bg-blue-600`→`bg-primary`, `text-gray-600`→`text-muted-foreground`, `bg-blue-50`→`bg-secondary`/`hero-gradient`, `bg-gray-50`→`bg-surface`, etc.). Mark client components (`'use client'`) only where interactivity exists: media carousel (embla + autoplay), video play button, FAQ accordion.
- [ ] **Step 3: Add motion**: hero content in a `Stagger` (headline → subhead → CTA row); each subsequent section wrapped in `Reveal`; card grids in `Stagger`; keep it restrained — no parallax, no scroll-jacking.
- [ ] **Step 4: Rebuild `app/page.tsx`** as server composition; the `mediaArticles` array moves into `media-carousel.tsx` (its copy is dictated by CONTENT_SPEC.md).
- [ ] **Step 5: Verify** — `pnpm build`; preview desktop (1280px) + mobile (375px): all sections present in order, copy verbatim (spot-check 5 strings against CONTENT_SPEC.md), carousel autoplays, video plays, FAQ opens with smooth easing, animations subtle, reduced-motion static.
- [ ] **Step 6: Commit** — `git add -A && git commit -m "refactor: decompose home page into sections with clinical theme + motion"`

---

### Task 10: Subpage restyle — learn, research, blog

**Files:**
- Modify: `app/learn/page.tsx`, `app/research/page.tsx`, `app/blog/[slug]/page.tsx`
- Create: `components/sections/learn/*` or `components/sections/research/*` only if a page exceeds ~150 lines after cleanup; otherwise keep the page self-contained but built from primitives.

**Interfaces:**
- Consumes: `Section`, `PageHeader`, `CTAButton`, `Reveal`/`Stagger`, `@tailwindcss/typography` prose classes, CONTENT_SPEC.md sections for each page.

- [ ] **Step 1: Learn page** — `PageHeader` + post-card grid in `Stagger`; semantic classes; copy verbatim.
- [ ] **Step 2: Research page** — same treatment; keep its content structure; wrap content blocks in `Reveal`.
- [ ] **Step 3: Blog post page** — `PageHeader`-style header with hero image; re-theme prose (`prose-blue` → customize typography plugin colors to teal/ink via `prose` overrides in tailwind config or `prose-headings:text-ink prose-a:text-accent`); related-articles cards re-themed with hover lift.
- [ ] **Step 4: Verify** — `pnpm build`; preview all three routes both widths; blog post body visually identical in content to baseline.
- [ ] **Step 5: Commit** — `git add -A && git commit -m "refactor: learn/research/blog restyled on design system"`

---

### Task 11: Subpage restyle — vendors, market-growth, contact, legal trio

**Files:**
- Modify: `app/vendors/page.tsx`, `app/market-growth/page.tsx`, `app/contact/page.tsx`, `app/disclaimer/page.tsx`, `app/legal-disclaimer/page.tsx`, `app/privacy-policy/page.tsx`

**Interfaces:**
- Consumes: primitives + motion from Task 8; `CountUp` specifically for `market-growth` statistics; CONTENT_SPEC.md sections for each page.

- [ ] **Step 1: Vendors** — re-theme vendor cards (hover lift via `Stagger` grid), external links keep `target="_blank" rel="noopener"` semantics if present; copy verbatim.
- [ ] **Step 2: Market growth** — wrap each headline statistic in `<CountUp>` (extract the numeric part; keep prefix/suffix text verbatim around it); re-theme charts/sections.
- [ ] **Step 3: Contact** — re-theme; form/CTA styling from primitives.
- [ ] **Step 4: Legal trio** — `PageHeader` + `prose` body; near-pure text pages, minimal motion (single `Reveal`).
- [ ] **Step 5: Verify** — `pnpm build`; preview all six routes both widths; stats count up once on scroll into view and show final values under reduced motion.
- [ ] **Step 6: Commit** — `git add -A && git commit -m "refactor: vendors/market-growth/contact/legal restyled on design system"`

---

### Task 12: README rewrite + dead-code sweep

**Files:**
- Modify: `README.md`, `package.json`
- Delete: unused `components/ui/*` and unused dependencies (verify first)

- [ ] **Step 1: Rewrite README.md**: project overview (NicoFacts, nicofacts.com, zh-TW education site), stack, `pnpm dev/build/test` commands, **content workflow section**: (a) page copy — edit `CONTENT_SPEC.md` first, then sync the components to match (spec is authoritative); (b) blog — add/edit `content/blog/<slug>.md` with the documented frontmatter fields (list them + `{{year}}` token + `draft: true`), live on next deploy; (c) Cloudflare Pages deployment note: static export via `pnpm build` → `out/`, don't add server-runtime features.
- [ ] **Step 2: Dead-code sweep.** For each file in `components/ui/` run a grep for its import path; delete unimported ones. For each dependency in package.json (candidates: `react-hook-form`, `@hookform/resolvers`, `zod`, `recharts`, `sonner`, `vaul`, `cmdk`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `date-fns`, unused `@radix-ui/*`): grep the codebase; `pnpm remove` all with zero hits. This is mechanical — when in doubt (any hit anywhere), keep it.
- [ ] **Step 3: Verify** — `pnpm build && pnpm test` pass after every removal batch.
- [ ] **Step 4: Commit** — `git add -A && git commit -m "docs: NicoFacts README with content workflow; prune dead components and deps"`

---

### Task 13: Final verification pass

**Files:** none (verification only; small fixes as found)

- [ ] **Step 1: Full build + tests**: `pnpm test && pnpm build`. Expected: green; `out/` contains index, all 9 static routes, 3 blog posts, `sitemap.xml`, `robots.txt`.
- [ ] **Step 2: Static-export regression check**: `grep -r "nicofacts.com" out/sitemap.xml` (present); confirm `next.config.mjs` untouched (`git diff main -- next.config.mjs` empty); no new `runtime`/middleware files exist.
- [ ] **Step 3: Copy parity sweep**: for each page, pick the headline + 2 body strings from CONTENT_SPEC.md and grep them in `out/**/*.html`. Every string must hit. Any miss = fix the component (or, if the spec transcription was wrong, fix the spec) before completing.
- [ ] **Step 4: Visual pass** (preview server or `npx serve out`): every route at 1280px and 375px — coherent teal/blue theme (zero leftover `blue-600`-style mismatches: also `grep -rn "text-blue-\|bg-blue-\|text-gray-\|bg-gray-" app/ components/` should return no user-facing styling hits), animations subtle, mobile menu works, carousel/video/FAQ/count-ups work, reduced-motion renders statically.
- [ ] **Step 5: Rebrand sweep**: `grep -rni "v0.dev\|nicopouch\|台灣口含菸（尼古丁袋）科普平台" app/ components/ lib/ public/ README.md` — remaining hits must be deliberate (body copy kept verbatim per spec), each justified against CONTENT_SPEC.md.
- [ ] **Step 6: Commit any fixes** — `git add -A && git commit -m "fix: final verification pass fixes"`

---

## Self-Review Notes

- Spec §1 (content architecture) → Tasks 2, 3, 4, 12. Spec §2 (design system) → Tasks 7, 8, 9–11. Spec §3 (refactor) → Tasks 3, 6, 9–12. Spec §4 (brand/domain) → Task 5 (+ header/footer in 6). Spec §5 (Cloudflare constraint) → Task 1 baseline, Task 13 regression check, global constraints. Spec §6 (verification) → Task 13.
- Copy-verbatim rule is enforced three ways: extraction procedure (Task 4), parity script (Task 3), grep sweep (Task 13).
- Type consistency: `BlogPost.contentHtml` (not `content`) used consistently in Tasks 2, 3, 10; `siteConfig` shape defined once in Task 5 and only read elsewhere.
