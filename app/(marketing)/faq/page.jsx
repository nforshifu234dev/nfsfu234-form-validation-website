// app/(marketing)/faq/page.jsx
import { faqs } from '@/lib/faq'
import { buildFaqLd } from '@/lib/json-ld'
import { JsonLdScript } from '../components/JsonLdScript'

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about NFSFU234FormValidation.'
}

export default function FaqPage() {
  return (
    <div className="land-wrap blog-index">
      <JsonLdScript data={buildFaqLd(faqs)} />

      <nav className="blog-breadcrumb">
        <a href="/">Home</a><span>/</span><span>FAQ</span>
      </nav>

      <div className="land-section-head" style={{ textAlign: 'left', margin: '1.5rem 0 2rem' }}>
        <span className="land-eyebrow">FAQ</span>
        <h1 style={{ fontFamily: 'var(--land-display)', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', margin: 0 }}>
          Frequently Asked Questions
        </h1>
      </div>

      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.question} className="faq-item">
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}