// app\docs\layout.jsx
import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { SiteFooter } from '../components/SiteFooter.jsx'
import { CookieBanner } from '../components/CookieBanner.jsx'
import { Analytics } from '../components/Analytics.jsx'
import './globals.css'
import { VersionSwitcher } from '../components/VersionSwitcher.jsx'

export const metadata = {
  metadataBase: new URL('https://form-validation.nforshifu234dev.com'),
  title: {
    default: 'NFSFU234FormValidation',
    template: '%s | NFSFU234FormValidation'
  },
  description: 'A lightweight, dependency-free client-side form validation library for HTML forms - inputs, textareas, selects, radios, checkboxes, and file/image uploads.',
  keywords: ['form validation', 'javascript', 'html forms', 'client-side validation', 'zero dependencies'],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    siteName: 'NFSFU234FormValidation',
    type: 'website',
    images: [{
      url: 'https://form-validation.nforshifu234dev.com/api/og?title=NFSFU234FormValidation&subtitle=Docs',
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

const banner = (
  <Banner storageKey="v3-release">
    NFSFU234FormValidation v3 is here — file upload validation, config-driven
    rules, and more.
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Image src="/logo.png" alt="" width={32} height={32} priority />
        <b className="hidden lg:block footer-brand-scoped">
          <span className="brand-scope">nfsfu234/</span>form-validation
        </b>
      </span>
    }
    projectLink="https://github.com/NFSFU234FormValidation/nfsfu234-form-validation"
  >
    <a href="/about" className="navbar-extra-link" style={{ fontSize: '0.85rem', marginRight: '0.75rem' }}>About</a>
    <a href="/blog" className="navbar-extra-link" style={{ fontSize: '0.85rem', marginRight: '0.75rem' }}>Blog</a>
    <a href="/faq" className="navbar-extra-link" style={{ fontSize: '0.85rem', marginRight: '0.75rem' }}>FAQs</a>
    <a href="/examples" className="navbar-extra-link" style={{ fontSize: '0.85rem', marginRight: '0.75rem' }}>Examples</a>
    <VersionSwitcher />
  </Navbar>
)

const footer = (
  <Footer>
    <SiteFooter />
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap('/docs')}
          footer={footer}
          search={<Search />}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
          docsRepositoryBase="https://github.com/NFSFU234FormValidation/website/tree/main/docs-site"
        >
          {children}
        </Layout>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}