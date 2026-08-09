// app/(marketing)/contact/page.jsx
export const metadata = {
  title: 'Contact',
  description: 'Get in touch about NFSFU234FormValidation — bugs, feature requests, or general questions.'
}

export default function ContactPage() {
  return (
    <div className="land-wrap blog-index">
      <nav className="blog-breadcrumb">
        <a href="/">Home</a><span>/</span><span>Contact</span>
      </nav>

      <div className="land-section-head" style={{ textAlign: 'left', margin: '1.5rem 0 2rem' }}>
        <span className="land-eyebrow">Get in touch</span>
        <h1 style={{ fontFamily: 'var(--land-display)', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', margin: 0 }}>
          Contact
        </h1>
      </div>

      <div className="blog-prose">
        <p>
          Found a bug, have a feature request, or just a question about
          NFSFU234FormValidation? Reach out — we read everything that comes in.
        </p>

        <h2>Email</h2>
        <p>
          <a href="mailto:info@nforshifu234dev.com">info@nforshifu234dev.com</a>
        </p>

        <h2>Bug reports &amp; feature requests</h2>
        <p>
          For anything code-related, opening a{' '}
          <a href="https://github.com/nforshifu234dev/nfsfu234-form-validation/issues">
            GitHub issue
          </a>{' '}
          gets it in front of us fastest and keeps a public record for other
          users hitting the same thing.
        </p>

        <h2>Contributing</h2>
        <p>
          Want to contribute code or docs? Check the{' '}
          <a href="https://github.com/nforshifu234dev/nfsfu234-form-validation/blob/main/CONTRIBUTING.md">
            contribution guidelines
          </a>.
        </p>
      </div>
    </div>
  )
}