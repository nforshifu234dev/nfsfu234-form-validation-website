'use client'

import { useState } from 'react'
import Image from 'next/image'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/docs/v3/getting-started', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/examples', label: 'Examples' },
  { href: 'https://github.com/nfsfu234/nfsfu234-form-validation', label: 'GitHub' }
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="land-nav">
      <div className="land-nav-inner">
        <a href="/" className="land-brand">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="land-brand-scope">nfsfu234/</span>form-validation
        </a>

        <div className="land-nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="/docs/v3/getting-started" className="land-nav-cta">Get started</a>
        </div>

        <button
          type="button"
          className="land-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="land-nav-mobile-panel">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a
            href="/docs/v3/getting-started"
            className="land-nav-cta"
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  )
}