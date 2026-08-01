import { getAllPosts, getAllTags } from '@/lib/blog'

const PAGE_SIZE = 6

import { JsonLdScript } from '@/(marketing)/components/JsonLdScript'

const SITE_URL = 'https://form-validation.nforshifu234dev.com'

export const metadata = {
  title: 'Blog',
  description: 'Release notes, extension launches, and updates from the NFSFU234FormValidation team.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Blog&subtitle=NFSFU234FormValidation`,
      width: 1200, height: 630
    }]
  }
}

export default function BlogIndexPage({ searchParams }) {
  const activeTag = searchParams?.tag || null
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10))

  const allPosts = getAllPosts()
  const tags = getAllTags()

  const filtered = activeTag
    ? allPosts.filter((p) => (p.tags || []).includes(activeTag))
    : allPosts

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const pagePosts = filtered.slice(start, start + PAGE_SIZE)

  const buildHref = (targetPage) => {
    const params = new URLSearchParams()
    if (activeTag) params.set('tag', activeTag)
    if (targetPage > 1) params.set('page', String(targetPage))
    const qs = params.toString()
    return qs ? `/blog?${qs}` : '/blog'
  }

  return (
    <div className="land-wrap blog-index">

      <JsonLdScript data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'NFSFU234FormValidation Blog',
        url: `${SITE_URL}/blog`
      }} />

      <nav className="blog-breadcrumb">
        <a href="/">Home</a><span>/</span><span>Blog</span>
      </nav>

      <div className="land-section-head" style={{ textAlign: 'left', margin: '1.5rem 0 2rem' }}>
        <span className="land-eyebrow">Blog</span>
        <h1 style={{ fontFamily: 'var(--land-display)', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', margin: 0 }}>
          All Posts
        </h1>
      </div>

      <div className="blog-filter-row">
        <a href="/blog" className={`blog-filter-chip ${!activeTag ? 'is-active' : ''}`}>All Posts</a>
        {tags.map((t) => (
          <a
            key={t}
            href={`/blog?tag=${encodeURIComponent(t)}`}
            className={`blog-filter-chip ${activeTag === t ? 'is-active' : ''}`}
          >
            #{t}
          </a>
        ))}
      </div>

      <div className="blog-list">
        {pagePosts.map((post) => (
          <a href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
            <div className="blog-card-meta">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="blog-tags">
              {(post.tags || []).map((t) => <span key={t} className="blog-tag">#{t}</span>)}
            </div>
          </a>
        ))}
        {pagePosts.length === 0 && (
          <p style={{ color: 'var(--land-muted)' }}>No posts match this tag yet.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="blog-pagination">
          <a
            href={buildHref(page - 1)}
            className={`blog-page-btn ${page <= 1 ? 'is-disabled' : ''}`}
            aria-disabled={page <= 1}
          >
            ← Previous
          </a>
          <span className="blog-page-status">Page {page} of {totalPages}</span>
          <a
            href={buildHref(page + 1)}
            className={`blog-page-btn ${page >= totalPages ? 'is-disabled' : ''}`}
            aria-disabled={page >= totalPages}
          >
            Next →
          </a>
        </div>
      )}
    </div>
  )
}