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
    title: "HTML-first validation",
    body: (
      <>
        Built on top of native HTML validation. The library reads
        <code> required</code>, <code>type</code>,{" "}
        <code>pattern</code>, <code>minlength</code>,{" "}
        <code>maxlength</code>, <code>min</code>,{" "}
        <code>max</code>, <code>step</code>, and other standard
        attributes before applying any custom rules.
      </>
    ),
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </>
    )
  },

  {
    title: "Configure once. Use everywhere.",
    body: (
      <>
        Register every form on your website with{" "}
        <code>configureForms()</code>, then initialize only the forms
        on the current page using <code>autoInit()</code>. Perfect for
        multi-page applications.
      </>
    ),
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10" />
        <path d="M7 13h10" />
      </>
    )
  },

  {
    title: "File & image validation",
    body: (
      <>
        Validate uploads beyond what HTML can do. Restrict file types,
        image dimensions, file size, number of files, MIME types, and
        more—all before upload.
      </>
    ),
    icon: (
      <>
        <path d="M5 20h14" />
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
      </>
    )
  },

  {
    title: "One library. Every form element.",
    body: (
      <>
        Validate inputs, textareas, selects, checkboxes, radio groups,
        files and custom configurations using one consistent API.
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m9 12 2 2 4-4" />
      </>
    )
  },

  {
    title: "Flexible error handling",
    body: (
      <>
        Display inline errors, target your own DOM elements, or disable
        built-in rendering completely and integrate with your own UI.
      </>
    ),
    icon: (
      <>
        <path d="M12 3v12" />
        <circle cx="12" cy="19" r="1" />
      </>
    )
  },

  {
    title: "Zero runtime dependencies",
    body: (
      <>
        No third-party runtime packages. Smaller bundles, fewer supply
        chain concerns, easier upgrades, and complete control over your
        application.
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2 2 6-6" />
      </>
    )
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
            Version 3 · Zero runtime dependencies
          </span>

          <h1>
            Validate the HTML
            <br />
            <span className="land-gradient-text">you already wrote.</span>
          </h1>

          <p>
            NFSFU234FormValidation reads the validation attributes already
            present on your forms—<code>required</code>,{" "}
            <code>type</code>,{" "}
            <code>pattern</code>,{" "}
            <code>minlength</code>,{" "}
            <code>maxlength</code>,{" "}
            <code>min</code>,{" "}
            <code>max</code>,{" "}
            <code>step</code> and more.
          </p>

          <p>
            When native HTML validation isn't enough, extend it with one configuration object—or configure an entire website using the same API.
            Configure one form or an entire website
            using the same API.
          </p>

          <div className="land-hero-actions">
            <a
              href="/docs/v3/quick-start"
              className="land-btn land-btn-primary"
            >
              Quick Start
            </a>

            <a
              href="/docs/v3/getting-started"
              className="land-btn land-btn-secondary"
            >
              Documentation
            </a>

            <a
              href="https://github.com/nfsfu234/nfsfu234-form-validation"
              className="land-btn land-btn-secondary"
            >
              GitHub
            </a>
          </div>

          <InstallTerminal />

          <div className="land-framework-strip">
            <span>Plain HTML</span>
            <span>Next.js</span>
            <span>React</span>
            <span>Vite</span>
            <span>Expo Web</span>
            <span>TypeScript</span>
          </div>
        </div>
      </header>

      <div className="land-stats">
        <div className="land-stat">
          <strong>0</strong>
          <span>Runtime Dependencies</span>
        </div>

        <div className="land-stat">
          <strong>HTML First</strong>
          <span>Uses Native Validation</span>
        </div>

        <div className="land-stat">
          <strong>v3</strong>
          <span>Configuration Driven</span>
        </div>

        <div className="land-stat">
          <strong>MIT</strong>
          <span>Open Source</span>
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

          <div className="land-section-head">
            <span className="land-eyebrow">
              New in Version 3
            </span>

            <h2>
              Built for modern websites, not just forms.
            </h2>

            <p>
              Version 3 introduces configuration-driven validation,
              automatic form registration, generated API documentation,
              stronger TypeScript support and a cleaner developer
              experience from installation to deployment.
            </p>
          </div>

          <div className="land-features">

            <div className="land-feature">
              <h3>configureForms()</h3>

              <p>
                Register every form once and keep all validation rules in one
                place.
              </p>
            </div>

            <div className="land-feature">
              <h3>autoInit()</h3>

              <p>
                Automatically initialize only the forms that exist on the
                current page.
              </p>
            </div>

            <div className="land-feature">
              <h3>Async Validation</h3>

              <p>
                Both <code>validate()</code> and{" "}
                <code>submit()</code> return promises for cleaner async code.
              </p>
            </div>

            <div className="land-feature">
              <h3>TypeScript Ready</h3>

              <p>
                Ships with full typings and generated API documentation.
              </p>
            </div>

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

          <div className="land-section-head">
            <span className="land-eyebrow">
              The NFSFU234 Ecosystem
            </span>

            <h2>
              Focused tools. Better web experiences.
            </h2>

            <p>
              Every NFSFU234 library solves a specific frontend problem while
              remaining lightweight, dependency-free where possible, and designed
              to work well alongside the rest of the ecosystem.
            </p>
          </div>

          <div className="land-features">

            <div className="land-feature">

              <span className="land-feature-label">
                FLAGSHIP LIBRARY
              </span>

              <h3>NFSFU234FormValidation</h3>

              <p className="my-3">
                HTML-first form validation with configuration-driven rules, AJAX
                submission, automatic form initialization, file validation, and
                first-class TypeScript support.
              </p>

              <a href="/docs/v3/getting-started">
                Explore FormValidation →
              </a>

            </div>

            <div className="land-feature">

              <span className="land-feature-label">
                REACT LIBRARY
              </span>

              <h3>NFSFU234TourGuide</h3>

              <p className="my-3">
                Create beautiful onboarding experiences, guided product tours,
                feature walkthroughs, and user education flows for React
                applications.
              </p>

              <a href="https://tour-guide.nforshifu234dev.com">
                Explore TourGuide →
              </a>

            </div>

            <div className="land-feature">

              <span className="land-feature-label">
                DEVELOPER TOOL
              </span>

              <h3>NFSFU234ShotSweep</h3>

              <p className="my-3">
                Generate beautiful website screenshots for documentation, blogs,
                portfolios, testing, automation, social sharing, and marketing
                content.
              </p>

              <a href="https://shotsweep.nforshifu234dev.com">
                Explore ShotSweep →
              </a>

            </div>

          </div>

        </div>
      </section>

      <section className="land-section">
        <div className="land-wrap">

          <div className="land-cta">

            <span className="land-eyebrow">
              Build with the ecosystem
            </span>

            <h2>
              Build less boilerplate. Ship more software.
            </h2>

            <p>
              Validate forms, guide users through your application, and create
              beautiful website screenshots—all with lightweight tools built for
              modern JavaScript applications.
            </p>

            <div className="land-hero-actions">

              <a
                href="/docs/v3/quick-start"
                className="land-btn land-btn-primary"
              >
                Quick Start
              </a>

              <a
                href="/docs/v3"
                className="land-btn land-btn-secondary"
              >
                Browse Documentation
              </a>

            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                opacity: 0.75,
                fontSize: ".9rem"
              }}
            >
              <span>✓ Open Source</span>
              <span>✓ MIT Licensed</span>
              <span>✓ Modern JavaScript</span>
              <span>✓ Developer-first</span>
            </div>

          </div>

        </div>
      </section>

    </>
)
}