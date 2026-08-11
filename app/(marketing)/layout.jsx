// app/(marketing)/layout.jsx
import { ThemeProvider } from 'next-themes'
import { SiteNav } from './components/SiteNav'
import { SiteFooterMarketing } from './components/SiteFooterMarketing'
import { CookieBanner } from '../components/CookieBanner.jsx'
import { Analytics } from '../components/Analytics.jsx'
import '../landing.css'

export const metadata = {
  metadataBase: new URL('https://form-validation.nforshifu234dev.com'),
  title: {
    default: 'NFSFU234FormValidation — Validation your HTML already wrote',
    template: '%s | NFSFU234FormValidation'
  },
  description:
    'A lightweight, dependency-free client-side form validation library for HTML forms - inputs, textareas, selects, radios, checkboxes, and file/image uploads. Works in plain HTML, React, Next.js, and Expo web.',
  keywords: ['form validation', 'javascript', 'html forms', 'client-side validation', 'zero dependencies'],
  openGraph: {
    siteName: 'NFSFU234FormValidation',
    type: 'website',
    title: 'NFSFU234FormValidation — Validation your HTML already wrote',
    description: 'Point it at a form and it reads the attributes you already set. Zero dependencies.',
    images: [{
      url: 'https://form-validation.nforshifu234dev.com/api/og?title=NFSFU234FormValidation&subtitle=Validation%20your%20HTML%20already%20wrote',
      width: 1200,
      height: 630
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nforshifu234dev',
    creator: '@nforshifu234dev'
  }
}

export default function MarketingRootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="landing-body">
        <ThemeProvider attribute="class" defaultTheme="system">
          <SiteNav />
          {children}
          <SiteFooterMarketing />
        </ThemeProvider>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}