'use client'

import { useEffect, useState } from 'react'
import {
  hasRespondedToConsent,
  acceptAllConsent,
  rejectOptionalConsent,
  onConsentChange
} from '@/lib/analytics/consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!hasRespondedToConsent())
    const unsubscribe = onConsentChange(() => setVisible(false))
    return unsubscribe
  }, [])

  if (!visible) return null

  return (
    <div role="dialog" aria-label="Cookie consent" style={bannerStyle}>
      <p style={{ margin: 0, flex: 1, minWidth: '240px' }}>
        We use analytics cookies to understand how this site is used. No
        cookies are set until you accept.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
        <button type="button" onClick={rejectOptionalConsent} style={secondaryButtonStyle}>
          Reject
        </button>
        <button type="button" onClick={acceptAllConsent} style={primaryButtonStyle}>
          Accept
        </button>
      </div>
    </div>
  )
}

const bannerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 1.5rem',
  background: '#111',
  color: '#fff',
  fontSize: '0.875rem',
  boxShadow: '0 -2px 12px rgba(0,0,0,0.25)'
}

const primaryButtonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: 'none',
  background: '#fff',
  color: '#111',
  fontWeight: 600,
  cursor: 'pointer'
}

const secondaryButtonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: '1px solid rgba(255,255,255,0.4)',
  background: 'transparent',
  color: '#fff',
  cursor: 'pointer'
}