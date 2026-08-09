// app/hello/page.jsx
import Image from 'next/image'

export const metadata = {
  title: 'Hello, World'
}

export default function HelloWorldPage() {
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
          padding: '4rem 1.5rem',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <div className="land-glow land-glow-1" />
        <div className="land-glow land-glow-2" />

        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <a
            href="/"
            className="land-brand"
            style={{ justifyContent: 'center', marginBottom: '2rem' }}
          >
            <Image src="/logo.png" alt="" width={32} height={32} priority />
            <span className="land-brand-scope">nfsfu234/</span>form-validation
          </a>

          <h1
            className="land-gradient-text"
            style={{
              fontFamily: 'var(--land-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              margin: '0 0 2rem'
            }}
          >
            Hello, World.
          </h1>

          <div className="land-terminal" style={{ margin: '0 auto' }}>
            <div className="land-terminal-bar">
              <span /><span /><span />
            </div>
            <pre>
              <span className="land-prompt">$</span>console.log(&quot;Hello, World&quot;);{'\n'}
              <span className="land-prompt">$</span>// built by IAMNOTSHIFU, NFORSHIFU234 Dev{'\n'}
              <span className="land-prompt">$</span>// this page has no purpose but tradition
            </pre>
          </div>

          <p style={{ marginTop: '2rem', color: 'var(--land-muted)', fontSize: '0.9rem' }}>
            Every project gets one of these. It&apos;s tradition.
          </p>
        </div>
      </div>
    </div>
  )
}