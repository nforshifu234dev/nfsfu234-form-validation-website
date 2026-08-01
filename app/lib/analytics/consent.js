'use client'

// Cookie consent store for form-validation.nforshifu234dev.com.
// Browser localStorage + a same-tab custom event, so any mounted component
// (the banner, Analytics, anything future) reacts immediately without a
// page reload.
//
// Stored shape: { necessary: true, analytics: boolean, hasResponded: boolean }
// `hasResponded` distinguishes "visitor said no" from "visitor hasn't been
// asked yet" — both leave analytics: false, but only the second case should
// show the banner.

const STORAGE_KEY = 'nfsfu234-cookie-consent'
const CONSENT_EVENT = 'nfsfu234-consent-changed'

const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  hasResponded: false
}

export function getConsent() {
  if (typeof window === 'undefined') return DEFAULT_CONSENT
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? { ...DEFAULT_CONSENT, ...JSON.parse(raw) } : DEFAULT_CONSENT
  } catch {
    return DEFAULT_CONSENT
  }
}

export function hasAnalyticsConsent() {
  return getConsent().analytics === true
}

export function hasRespondedToConsent() {
  return getConsent().hasResponded === true
}

export function setConsent(next) {
  if (typeof window === 'undefined') return
  const merged = { ...DEFAULT_CONSENT, ...next, hasResponded: true }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function acceptAllConsent() {
  setConsent({ necessary: true, analytics: true })
}

export function rejectOptionalConsent() {
  setConsent({ necessary: true, analytics: false })
}

/** Returns an unsubscribe function — call it in a useEffect cleanup. */
export function onConsentChange(callback) {
  if (typeof window === 'undefined') return () => {}
  const handler = () => callback(getConsent())
  window.addEventListener(CONSENT_EVENT, handler)
  return () => window.removeEventListener(CONSENT_EVENT, handler)
}