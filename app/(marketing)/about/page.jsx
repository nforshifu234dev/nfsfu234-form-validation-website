// app/(marketing)/about/page.jsx
import { sharedFooterColumns } from '@/lib/footer-links'
import { buildOrganizationLd } from '@/lib/json-ld'
import { JsonLdScript } from '../components/JsonLdScript'

const SITE_URL = 'https://form-validation.nforshifu234dev.com'

export const metadata = {
  title: 'About',
  description:
    'NFSFU234FormValidation is built and maintained by NFORSHIFU234 Dev — part of a small ecosystem of zero-dependency, developer-first tools.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=About&subtitle=NFSFU234FormValidation`,
      width: 1200,
      height: 630
    }]
  }
}

const ecosystemColumn = sharedFooterColumns.find((c) => c.title === 'NFORSHIFU234 Ecosystem')

export default function AboutPage() {
  return (
    <div className="land-wrap blog-index">
      <JsonLdScript data={buildOrganizationLd()} />

      <nav className="blog-breadcrumb">
        <a href="/">Home</a><span>/</span><span>About</span>
      </nav>

      <div className="land-section-head" style={{ textAlign: 'left', margin: '1.5rem 0 2rem' }}>
        <span className="land-eyebrow">About</span>
        <h1 style={{ fontFamily: 'var(--land-display)', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', margin: 0 }}>
          About NFSFU234FormValidation
        </h1>
      </div>

      <div className="blog-prose">
        <p>
          NFSFU234FormValidation started as a simple idea: most forms already
          declare everything they need to validate themselves — <code>required</code>,{' '}
          <code>type=&quot;email&quot;</code>, <code>minlength</code> — so a validation
          library shouldn&apos;t need you to redeclare all of it in JavaScript.
          Point it at a form, and it reads what&apos;s already there.
        </p>
        <p>
          It&apos;s built and maintained by <strong>NFORSHIFU234 Dev</strong>, and kept
          deliberately dependency-free — zero runtime dependencies means nothing to
          audit, nothing to update when an upstream package breaks.
        </p>

        <h2>The ecosystem</h2>
        <p>
          This library is one of a small set of tools built under the same
          philosophy — lightweight, framework-agnostic where possible, and built
          for developers who&apos;d rather ship than configure.
        </p>
        <ul>
          {ecosystemColumn?.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <h2>Get in touch</h2>
        <p>
          Questions, bug reports, or just want to say hi? Visit the{' '}
          <a href="/contact">contact page</a>, or reach out directly on{' '}
          <a href="https://x.com/nf_validator234">X</a>.
        </p>
      </div>
    </div>
  )
}