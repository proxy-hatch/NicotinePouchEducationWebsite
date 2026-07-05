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

  // Validate required fields
  const title = String(data.title || '').trim()
  if (!title) {
    throw new Error(`${filename}: frontmatter field 'title' must be a non-empty string`)
  }

  const publishDate = String(data.publishDate || '').trim()
  if (!/^\d{4}-\d{2}-\d{2}$/.test(publishDate)) {
    throw new Error(`${filename}: frontmatter field 'publishDate' must match YYYY-MM-DD format`)
  }

  const readingTime = Number(data.readingTime)
  if (!Number.isFinite(readingTime)) {
    throw new Error(`${filename}: frontmatter field 'readingTime' must be a finite number`)
  }

  const author = String(data.author || '').trim()
  if (!author) {
    throw new Error(`${filename}: frontmatter field 'author' must be a non-empty string`)
  }

  return {
    slug: filename.replace(/\.md$/, ''),
    title: substituteYear(title),
    publishDate: publishDate,
    readingTime: readingTime,
    author: author,
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
