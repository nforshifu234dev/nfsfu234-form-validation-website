// app/components/NavExtraLinks.jsx
'use client'

import { usePathname } from 'next/navigation'

const EXTRA_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQs' },
  { href: '/examples', label: 'Examples' }
]

export function NavExtraLinks() {
  const pathname = usePathname()

  return (
    <>
      {EXTRA_LINKS.map((l) => {
        const active = pathname === l.href || pathname.startsWith(`${l.href}/`)
        return (
            <a
                key={l.href}
                href={l.href}
                className="navbar-extra-link"
                aria-current={active ? 'page' : undefined}
                style={{
                fontSize: '0.85rem',
                marginRight: '0.75rem',
                color: active ? 'var(--land-accent)' : undefined,
                fontWeight: active ? 600 : undefined
                }}
            >
                {l.label}
            </a>
        )
      })}
    </>
  )
}