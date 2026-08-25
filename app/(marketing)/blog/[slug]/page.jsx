import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostSource } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { blogComponents } from '@/(marketing)/components/blog-mdx-components'
import { ContentLayout } from '@/(marketing)/components/ContentLayout'
import { JsonLdScript } from '@/(marketing)/components/JsonLdScript'
import { buildBlogPostingLd } from '@/lib/json-ld'

const SITE_URL = 'https://formvalidation.nforshifu234dev.com'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = getPostSource(params.slug)
  if (!post) return {}
  const ogUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(post.meta.title)}&subtitle=Blog`
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    keywords: post.meta.tags || [],
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: 'article',
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updated || post.meta.date,
      images: [{ url: ogUrl, width: 1200, height: 630 }]
    },
    twitter: { card: 'summary_large_image' }
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostSource(params.slug)
  if (!post) notFound()

  const jsonLd = buildBlogPostingLd({
    title: post.meta.title,
    description: post.meta.excerpt,
    url: `${SITE_URL}/blog/${params.slug}`,
    datePublished: post.meta.date,
    dateModified: post.meta.updated,
    tags: post.meta.tags || []
  })

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <ContentLayout post={{ slug: params.slug, ...post.meta }}>
        <MDXRemote source={post.content} components={blogComponents} />
      </ContentLayout>
    </>
  )
}