'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const VERSIONS = [
  { value: 'v3', label: 'v3 (current)' },
  { value: 'v2', label: 'v2 (legacy)' }
]

export function VersionSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = VERSIONS.find((v) => pathname.startsWith(`/docs/${v.value}`))?.value || 'v3'
  const currentLabel = VERSIONS.find((v) => v.value === current)?.label

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function selectVersion(value) {
    const rest = pathname.replace(/^\/docs\/v\d+/, '')
    router.push(`/docs/${value}${rest || ''}`)
    setOpen(false)
  }

  return (
    <div className="version-switcher" ref={ref}>
      <button
        type="button"
        className="version-switcher-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {currentLabel}
        <span className="version-switcher-caret">▾</span>
      </button>
      {open && (
        <ul className="version-switcher-menu" role="listbox">
          {VERSIONS.map((v) => (
            <li key={v.value}>
              <button
                type="button"
                role="option"
                aria-selected={v.value === current}
                className={v.value === current ? 'is-active' : ''}
                onClick={() => selectVersion(v.value)}
              >
                {v.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}