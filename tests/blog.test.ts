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
