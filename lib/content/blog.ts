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
