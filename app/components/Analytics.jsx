'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { hasAnalyticsConsent, onConsentChange } from '@/lib/analytics/consent'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * Mount this once per rendered <body> — this site has two (docs layout and
 * marketing layout each render their own <html>/<body>), so it needs to go
 * in both, not just one root layout.
 */
export function Analytics() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setConsented(hasAnalyticsConsent())
    const unsubscribe = onConsentChange((consent) => {
      setConsented(consent.analytics === true)
    })
    return unsubscribe
  }, [])

  if (!GA_ID) return null
  if (process.env.NODE_ENV !== 'production') return null
  if (!consented) return null

  return <GoogleAnalytics gaId={GA_ID} />
}