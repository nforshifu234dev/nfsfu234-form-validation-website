// lib/examples.js
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const EXAMPLES_DIR = path.join(process.cwd(), 'content/examples')

export function getAllExamples() {
  return fs.readdirSync(EXAMPLES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const { data } = matter(fs.readFileSync(path.join(EXAMPLES_DIR, filename), 'utf8'))
      return { slug, ...data }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllFrameworkTags() {
  const set = new Set()
  getAllExamples().forEach((e) => (e.frameworks || []).forEach((f) => set.add(f)))
  return [...set]
}

export function getExampleSource(slug) {
  const filePath = path.join(EXAMPLES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  return { meta: data, content }
}