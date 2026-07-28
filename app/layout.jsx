import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://form-validation.nforshifu234dev.com'),
  title: {
    default: 'NFSFU234FormValidation',
    template: '%s | NFSFU234FormValidation'
  },
  description:
    'A lightweight, dependency-free client-side form validation library for HTML forms - inputs, textareas, selects, radios, checkboxes, and file/image uploads.',
  openGraph: {
    siteName: 'NFSFU234FormValidation',
    type: 'website'
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
    logo={<b>NFSFU234FormValidation</b>}
    projectLink="https://github.com/NFSFU234FormValidation/nfsfu234-form-validation"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © NFSFU234FormValidation.
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
          pageMap={await getPageMap()}
          footer={footer}
          search={<Search />}
          docsRepositoryBase="https://github.com/NFSFU234FormValidation/nfsfu234-form-validation/tree/main/docs-site"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
