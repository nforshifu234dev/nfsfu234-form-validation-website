// app/(marketing)/examples/page.jsx
import { getAllExamples, getAllFrameworkTags } from '@/lib/examples'

// export const metadata = {
//   title: '',
//   description: 'Working examples of NFSFU234FormValidation across HTML, React, Vite, Next.js, and Expo.'
// }

const SITE_URL = 'https://form-validation.nforshifu234dev.com'

export const metadata = {
  title: 'Examples',
  description: 'Working examples of NFSFU234FormValidation across HTML, React, Vite, Next.js, and Expo.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Examples&subtitle=NFSFU234FormValidation`,
      width: 1200, height: 630
    }]
  }
}

export default async function ExamplesIndexPage({ searchParams }) {
  // const activeFramework = searchParams?.framework || null
  const sp = await searchParams
  const activeFramework = sp?.framework || null
  const allExamples = getAllExamples()
  const frameworks = getAllFrameworkTags()

  const filtered = activeFramework
    ? allExamples.filter((e) => (e.frameworks || []).includes(activeFramework))
    : allExamples

  return (
    <div className="land-wrap blog-index">
      <nav className="blog-breadcrumb">
        <a href="/">Home</a><span>/</span><span>Examples</span>
      </nav>

      <div className="land-section-head" style={{ textAlign: 'left', margin: '1.5rem 0 2rem' }}>
        <span className="land-eyebrow">Examples</span>
        <h1 style={{ fontFamily: 'var(--land-display)', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', margin: 0 }}>
          Working Examples
        </h1>
      </div>

      <div className="blog-filter-row">
        <a href="/examples" className={`blog-filter-chip ${!activeFramework ? 'is-active' : ''}`}>All</a>
        {frameworks.map((f) => (
          <a
            key={f}
            href={`/examples?framework=${encodeURIComponent(f)}`}
            className={`blog-filter-chip ${activeFramework === f ? 'is-active' : ''}`}
          >
            {f}
          </a>
        ))}
      </div>

      <div className="blog-list">
        {filtered.map((ex) => (
          <a href={`/examples/${ex.slug}`} key={ex.slug} className="blog-card">
            <h2>{ex.title}</h2>
            <p>{ex.excerpt}</p>
            <div className="blog-tags">
              {(ex.frameworks || []).map((f) => <span key={f} className="blog-tag">{f}</span>)}
            </div>
          </a>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: 'var(--land-muted)' }}>No examples for this framework yet.</p>
        )}
      </div>
    </div>
  )
}