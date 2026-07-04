# NicoFacts

NicoFacts (nicofacts.com) is a Traditional Chinese (zh-TW) education site about nicotine pouches for the Taiwan market. It's a statically-exported Next.js site deployed to Cloudflare Pages.

## Stack

- **Next.js 15** (App Router), fully static export (`output: 'export'`)
- **React 19**, **TypeScript**
- **Tailwind CSS** + a small set of Radix UI primitives (accordion, slot) under `components/ui/`
- **motion** for animation, **embla-carousel** for the home page carousel
- **Chart.js** (loaded via CDN `<script>`, not npm) for the `/market-growth` chart
- **gray-matter** + **remark** for parsing/rendering blog Markdown
- **Vitest** for unit tests

## Getting started

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # production static export -> out/
pnpm test     # vitest unit tests
pnpm lint     # next lint
```

## Content workflow

### Page copy

`CONTENT_SPEC.md` is the **source of truth** for all on-page copy (headlines, body text, FAQ answers, etc.). To change page copy:

1. Edit `CONTENT_SPEC.md` first.
2. Update the corresponding component(s) under `app/` and `components/` to match.

Never edit copy in a component without also updating the spec — the spec must stay authoritative and in sync with what's rendered.

### Blog posts

Blog posts live as Markdown files in `content/blog/<slug>.md`. To add or edit a post, create/edit the file — no code changes needed, the post goes live on the next deploy.

Each post needs YAML frontmatter with these fields:

| Field | Description |
|---|---|
| `title` | Post title |
| `publishDate` | `YYYY-MM-DD` format |
| `readingTime` | Estimated reading time in minutes (number) |
| `author` | Author name/team |
| `heroImageUrl` | Path to the hero image (e.g. `/blog/foo.jpg`) |
| `heroImageAlt` | Alt text for the hero image |
| `excerpt` | Short summary used in listings/previews |
| `draft` | Optional. Set `draft: true` to hide the post from the site without deleting it |

The literal token `{{year}}` can be used in the title or body — it's replaced with the current year at build time (e.g. `"口含菸完整介紹 {{year}}"`).

### Deployment (Cloudflare Pages)

The site deploys to Cloudflare Pages as a static export: `pnpm build` produces the `out/` directory, which is what gets served. Because of this:

- Do **not** add server-runtime features (API routes, middleware, ISR, server actions, etc.) — Cloudflare Pages here serves pre-built static files only.
- `output: 'export'` in `next.config.mjs` is load-bearing; removing it will break the deploy.

## Project structure

```
app/                 route segments (pages)
components/
  ui/                small set of used Radix-based primitives
  layout/            header, footer, analytics
  sections/          home page sections (hero, carousel, FAQ, etc.)
  primitives/        shared page building blocks (PageHeader, Section)
  motion/            animation wrappers (Reveal, CountUp)
content/blog/        blog post Markdown + frontmatter
lib/                 site-config, utils, content parsing
CONTENT_SPEC.md      authoritative page copy spec
tests/               vitest unit tests
```
