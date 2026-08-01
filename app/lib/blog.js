import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return { slug: filename.replace(/\.mdx$/, ''), ...data }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllTags() {
  const tags = new Set()
  getAllPosts().forEach((p) => (p.tags || []).forEach((t) => tags.add(t)))
  return [...tags].sort()
}

export function getPostSource(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: data, content }
}