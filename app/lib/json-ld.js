const SITE_URL = 'https://form-validation.nforshifu234dev.com'

export function buildSoftwareApplicationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NFSFU234FormValidation',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description:
      'A lightweight, dependency-free client-side form validation library for HTML forms.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    softwareVersion: '3',
    url: SITE_URL,
    codeRepository: 'https://github.com/nfsfu234/nfsfu234-form-validation',
    license: 'https://github.com/nfsfu234/nfsfu234-form-validation/blob/main/LICENSE',
    downloadUrl: 'https://www.npmjs.com/package/nfsfu234-form-validation'
  }
}

export function buildOrganizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NFORSHIFU234 Dev',
    url: 'https://www.nforshifu234dev.com',
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://x.com/nf_validator234',
      'https://www.instagram.com/nf_validator234/',
      'https://github.com/NFSFU234FormValidation'
    ]
  }
}

export function buildFaqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  }
}

// Enables the sitelinks search box eligibility.
export function buildWebSiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NFSFU234FormValidation',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/docs/v3/getting-started?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

// for blog posts.
export function buildBlogPostingLd({ title, description, url, datePublished, dateModified, tags = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    keywords: tags.join(', '),
    author: { '@type': 'Organization', name: 'NFORSHIFU234 Dev', url: 'https://nforshifu234dev.com' },
    publisher: {
      '@type': 'Organization',
      name: 'NFORSHIFU234 Dev',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
    }
  }
}

// for example walkthroughs. Distinct from blog posts: these are
// instructional/code content, so TechArticle fits better than BlogPosting.
export function buildExampleTechArticleLd({ title, description, url, frameworks = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url,
    keywords: frameworks.join(', '),
    about: {
      '@type': 'SoftwareApplication',
      name: 'NFSFU234FormValidation',
      applicationCategory: 'DeveloperApplication'
    }
  }
}