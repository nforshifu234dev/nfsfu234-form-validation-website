'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/docs/v3/getting-started', label: 'Docs', match: '/docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/examples', label: 'Examples' },
  { href: 'https://github.com/nforshifu234dev/nfsfu234-form-validation', label: 'GitHub', external: true }
]

function isLinkActive(pathname, link) {
  if (link.external) return false
  const base = link.match || link.href
  return pathname === base || pathname.startsWith(`${base}/`)
}

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="land-nav">
      <div className="land-nav-inner">
        <a href="/" className="land-brand">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="land-brand-scope">nfsfu234/</span>form-validation
        </a>

        <div className="land-nav-links">
          {LINKS.map((l) => {
            const active = isLinkActive(pathname, l)
            return (
              <a
                key={l.href}
                href={l.href}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </a>
            )
          })}
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
          {LINKS.map((l) => {
            const active = isLinkActive(pathname, l)
            return (
              <a
                key={l.href}
                href={l.href}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            )
          })}
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