export function ContentLayout({
  post,
  children,
  indexHref = '/blog',
  indexLabel = 'Blog',
  tagsField = 'tags',
  tagPrefix = '#'
}) {
  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
  const updatedStr = post.updated
    ? new Date(post.updated).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : null
  const tags = post[tagsField] || []

  return (
    <article className="blog-post">
      <div className="land-wrap">
        <nav className="blog-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href={indexHref}>{indexLabel}</a>
          <span>/</span>
          <span>{post.title}</span>
        </nav>

        <header className="blog-post-header">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>Created on {dateStr}</span>
            {updatedStr && <span>· Last updated {updatedStr}</span>}
          </div>
          <div className="blog-tags">
            {tags.map((t) => (
              <span key={t} className="blog-tag">{tagPrefix}{t}</span>
            ))}
          </div>
        </header>

        <div className="blog-prose">{children}</div>

        <div className="blog-post-footer">
          <a href={indexHref} className="land-btn land-btn-secondary">← Back to all {indexLabel.toLowerCase()}</a>
        </div>
      </div>
    </article>
  )
}

// keep the old name working for existing blog imports
export const BlogPostLayout = (props) => <ContentLayout {...props} />