export const metadata = {
  title: '404: Page Not Found'
}

// Opts this route out of static prerendering. Nextra 4.6.1's Layout hits an
// internal prop-validation error specifically when statically prerendering
// the auto-generated /_not-found route on Next 15/16 - see build notes.
export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        404 — Page Not Found
      </h1>
      <p>
        The page you're looking for doesn't exist.{' '}
        <a href="/docs/v3/getting-started">Head back to the docs</a>.
      </p>
    </div>
  )
}
