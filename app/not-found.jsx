// app/not-found.jsx
import Image from 'next/image'
import './landing.css'

export const metadata = {
  title: '404: Page Not Found'
}

export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="landing-body" style={{ minHeight: '100vh' }}>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
          overflow: 'hidden'
        }}
      >
        <div className="land-glow land-glow-1" />
        <div className="land-glow land-glow-2" />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <a
            href="/"
            className="land-brand"
            style={{ justifyContent: 'center', marginBottom: '2.5rem' }}
          >
            <Image src="/logo.png" alt="" width={32} height={32} priority />
            <span className="land-brand-scope">nfsfu234/</span>form-validation
          </a>

          <span
            className="land-gradient-text"
            style={{
              display: 'block',
              fontFamily: 'var(--land-display)',
              fontSize: 'clamp(4rem, 12vw, 7.5rem)',
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: '-0.03em'
            }}
          >
            404
          </span>

          <h1
            style={{
              fontFamily: 'var(--land-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              margin: '1rem 0 0.6rem'
            }}
          >
            This page didn&apos;t validate.
          </h1>

          <p
            style={{
              maxWidth: '30rem',
              margin: '0 auto 2rem',
              color: 'var(--land-muted)',
              lineHeight: 1.6
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist, moved, or
            never made it past a draft.
          </p>

          <div className="land-hero-actions" style={{ marginBottom: 0 }}>
            <a href="/" className="land-btn land-btn-primary">Back home</a>
            <a href="/docs/v3/getting-started" className="land-btn land-btn-secondary">
              Go to docs
            </a>
          </div>

          <p
            style={{
              marginTop: '2.5rem',
              fontFamily: 'var(--land-mono)',
              fontSize: '0.75rem',
              color: 'var(--land-muted)'
            }}
          >
            error: <code style={{ color: 'var(--land-orange)' }}>type=&quot;404&quot;</code> required=&quot;false&quot;
          </p>
        </div>
      </div>
    </div>
  )
}