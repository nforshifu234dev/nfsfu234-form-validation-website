'use client'

import InstallTerminal from '@/components/InstallTerminal'
import { Reveal } from '@/components/Reveal'
import Image from 'next/image'
import { useState } from 'react'
import { JsonLdScript } from './components/JsonLdScript'
import { buildOrganizationLd, buildSoftwareApplicationLd } from '@/lib/json-ld'


function Icon({ paths, ...props }) {
  return (
    <svg
      className="icn"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      {paths}
    </svg>
  )
}

const FEATURES = [
  {
    title: 'Reads your markup first',
    body: (
      <>
        <code>required</code>, <code>pattern</code>, <code>minlength</code>,{' '}
        <code>type</code> &mdash; validated straight off the attributes
        already on your inputs.
      </>
    ),
    icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  },
  {
    title: "Configure only what's different",
    body: (
      <>
        One <code>configureForms()</code> call overrides or extends any
        field, for every form on the site.
      </>
    ),
    icon: <circle cx="12" cy="12" r="3" />
  },
  {
    title: 'Files and images, properly',
    body: (
      <>
        Count limits, MIME/extension allowlists, max size, and image
        dimension checks &mdash; the part <code>accept</code> can&apos;t do.
      </>
    ),
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15l2 2 4-4" />
  },
  {
    title: 'Every field type included',
    body: (
      <>
        Inputs, textareas, selects, radios, and checkboxes all run through{' '}
        <code>validate()</code> and <code>submit()</code> &mdash; none
        silently skipped.
      </>
    ),
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    )
  },
  {
    title: 'Errors, your way',
    body: 'Inline text, a DOM element, or nothing at all — set per field or per form.',
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  },
  {
    title: 'Zero runtime dependencies',
    body: (
      <>
        Check <code>package.json</code>. It&apos;s genuinely empty. Nothing
        to audit, nothing to update.
      </>
    ),
    icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
  }
]

function useFieldValidation(validate) {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const result = validate(value)
  const status = !touched ? 'idle' : result === true ? 'valid' : 'invalid'

  return {
    value,
    status,
    error: status === 'invalid' ? result : '',
    onChange: (e) => setValue(e.target.value),
    onBlur: () => setTouched(true)
  }
}

function LiveDemo() {
  const name = useFieldValidation((v) =>
    v.trim().length > 0 ? true : 'This field is required.'
  )
  const email = useFieldValidation((v) => {
    if (!v.trim()) return 'This field is required.'
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? true
      : 'Enter a valid email address.'
  })
  const message = useFieldValidation((v) => {
    if (!v.trim()) return 'This field is required.'
    return v.trim().length >= 10 ? true : 'Must be at least 10 characters.'
  })

  return (
    <div className="land-demo-panel">
      <div className="land-demo-label">
        <span>live-form.html</span>
      </div>

      <div className={`land-demo-field is-${name.status === 'idle' ? '' : name.status}`}>
        <label htmlFor="d-name">Full name</label>
        <div className="land-demo-input-row">
          <input
            id="d-name"
            type="text"
            placeholder="Ada Lovelace"
            value={name.value}
            onChange={name.onChange}
            onBlur={name.onBlur}
          />
          <span className="land-demo-seal">&#10003;</span>
        </div>
        <div className="land-demo-error">{name.error}</div>
        <div className="land-demo-attr">required</div>
      </div>

      <div className={`land-demo-field is-${email.status === 'idle' ? '' : email.status}`}>
        <label htmlFor="d-email">Email</label>
        <div className="land-demo-input-row">
          <input
            id="d-email"
            type="text"
            placeholder="ada@example.com"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
          <span className="land-demo-seal">&#10003;</span>
        </div>
        <div className="land-demo-error">{email.error}</div>
        <div className="land-demo-attr">type=&quot;email&quot; required</div>
      </div>

      <div
        className={`land-demo-field is-${message.status === 'idle' ? '' : message.status}`}
        style={{ marginBottom: 0 }}
      >
        <label htmlFor="d-msg">Message</label>
        <div className="land-demo-input-row">
          <textarea
            id="d-msg"
            placeholder="Tell us what you're building..."
            value={message.value}
            onChange={message.onChange}
            onBlur={message.onBlur}
          />
          <span className="land-demo-seal">&#10003;</span>
        </div>
        <div className="land-demo-error">{message.error}</div>
        <div className="land-demo-attr">minlength=&quot;10&quot; required</div>
      </div>
    </div>
  )
}

export default function LandingPage() {

  return (
    <>

      <JsonLdScript data={buildSoftwareApplicationLd()} />
      <JsonLdScript data={buildOrganizationLd()} />

      <header className="land-hero">
        <div className="land-glow land-glow-1" />
        <div className="land-glow land-glow-2" />
        <div className="land-wrap land-hero-content">
          <span className="land-badge">
            <span className="land-badge-dot" />
            v3 &middot; zero dependencies
          </span>
          <h1>
            Validation your HTML
            <br />
            <span className="land-gradient-text">already wrote.</span>
          </h1>
          <p>
            Point it at a form and it reads the <code>required</code>,{' '}
            <code>pattern</code>, <code>minlength</code>, and{' '}
            <code>type</code> attributes you already set. Override anything
            with one config object. Works in plain HTML, React, Next.js, and
            Expo web &mdash; the same API everywhere.
          </p>
          <div className="land-hero-actions">
            <a href="/docs/v3/getting-started" className="land-btn land-btn-primary">
              Get started
            </a>
            <a
              href="https://github.com/NFSFU234FormValidation/nfsfu234-form-validation"
              className="land-btn land-btn-secondary"
            >
              View on GitHub
            </a>
          </div>
          <InstallTerminal />
          <div className="land-framework-strip">
            <span>Plain HTML</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Expo web</span>
          </div>
        </div>
      </header>

      <div className="land-stats">
        <div className="land-stat">
          <strong>0</strong>
          <span>Dependencies</span>
        </div>
        <div className="land-stat">
          <strong>6</strong>
          <span>Field types</span>
        </div>
        <div className="land-stat">
          <strong>4</strong>
          <span>Frameworks</span>
        </div>
        <div className="land-stat">
          <strong>MIT</strong>
          <span>License</span>
        </div>
      </div>

      <section className="land-section" id="features">
        <div className="land-wrap">
          <div className="land-section-head">
            <span className="land-eyebrow">Why it reads different</span>
            <h2>Built for the form you already have</h2>
            <p>
              No rewrite, no component migration. It attaches to markup
              you&apos;ve already shipped.
            </p>
          </div>
          <div className="land-features">
            {FEATURES.map((f, i) => (
              <Reveal className="land-reveal" delay={i * 60} key={f.title}>
                <div className="land-feature">
                  <div className="land-feature-icon">
                    <Icon paths={f.icon} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="land-section">
        <div className="land-wrap">
          <div className="land-code-section">
            <div className="land-code-copy">
              <span className="land-eyebrow">See it work</span>
              <h2>It validates while you type.</h2>
              <p>
                Every field on the right is plain HTML &mdash;{' '}
                <code>required</code>, <code>type=&quot;email&quot;</code>,{' '}
                <code>minlength=&quot;10&quot;</code>. No JavaScript was
                written for this demo beyond mounting the library.
              </p>
              <a href="/docs/v3/getting-started">
                Read the getting started guide &rarr;
              </a>
            </div>
            <LiveDemo />
          </div>
        </div>
      </section>

      <section className="land-section" style={{ paddingTop: 0 }}>
        <div className="land-wrap">
          <div className="land-sibling-card">
            <div className="land-sibling-copy">
              <span className="land-eyebrow">From the same ecosystem</span>
              <h3>Handling the form is half the job.</h3>
              <p>
                <strong>NFSFU234TourGuide</strong> is our zero-dependency
                React library for onboarding, walkthroughs, and product
                tours &mdash; ~3&ndash;4kB gzipped. Pair it with this
                library to validate the form, then walk new users through
                it.
              </p>
              <a href="https://tour-guide.nforshifu234dev.com">
                Explore NFSFU234TourGuide &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="land-section">
        <div className="land-wrap">
          <div className="land-cta">
            <h2>Ship the form. Skip the validation library.</h2>
            <p>One npm install and a script tag. No build step required.</p>
            <div className="land-hero-actions">
              <a href="/docs/v3/getting-started" className="land-btn land-btn-primary">
                Get started
              </a>
              <InstallTerminal variant="compact" />
            </div>
          </div>
        </div>
      </section>

    </>
)
}