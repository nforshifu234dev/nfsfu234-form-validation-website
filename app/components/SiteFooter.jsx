import { docsPrimaryColumn, sharedFooterColumns, socialIcons } from "@/lib/footer-links"

const YEAR = new Date().getFullYear()
const columns = [docsPrimaryColumn, ...sharedFooterColumns]

export function SiteFooter() {
  return (
    <div className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <b className="footer-brand-scoped">
              <span className="brand-scope">nfsfu234/</span>form-validation
            </b>
          </a>
          <p>
            A lightweight, dependency-free client-side form validation
            library for HTML forms. Built and maintained under the
            NFORSHIFU234 ecosystem.
          </p>
          <span className="footer-version-badge">
            <span className="footer-version-dot" />
            v3 (current) — Latest
          </span>
          <div className="footer-install-chip">
            <span className="land-prompt">$</span> npm i @nfsfu234/form-validation
          </div>
          <div className="footer-icon-row">
            <a href="https://github.com/nfsfu234/nfsfu234-form-validation" aria-label="GitHub" className="footer-icon-btn" dangerouslySetInnerHTML={{ __html: socialIcons.github }} />
            <a href="https://www.npmjs.com/package/nfsfu234-form-validation" aria-label="npm" className="footer-icon-btn" dangerouslySetInnerHTML={{ __html: socialIcons.npm }} />
            <a href="https://x.com/nf_validator234" aria-label="X" className="footer-icon-btn" dangerouslySetInnerHTML={{ __html: socialIcons.x }} />
            <a href="https://www.instagram.com/nforshifu234dev_projects/" aria-label="Instagram" className="footer-icon-btn" dangerouslySetInnerHTML={{ __html: socialIcons.instagram }} />
            <a href="/contact" aria-label="Contact" className="footer-icon-btn" dangerouslySetInnerHTML={{ __html: socialIcons.mail }} />
          </div>
        </div>
        {columns.map(col => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(link => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.iconKey && (
                      <span style={{ display: 'inline-flex', marginRight: '0.4rem', verticalAlign: '-2px' }} dangerouslySetInnerHTML={{ __html: socialIcons[link.iconKey] }} />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="site-footer-bottom">
        <span>MIT {YEAR} &copy; nfsfu234/form-validation, part of the NFORSHIFU234 ecosystem.</span>
        <span>
          Built by{' '}
          <a href="https://www.nforshifu234dev.com" target="_blank" rel="noopener noreferrer">
            NFORSHIFU234 Dev
          </a>
          , a{' '}
          <a href="https://www.nforshifu234dev.com/about" target="_blank" rel="noopener noreferrer">
            NFORSHIFU LOGICFORGE LTD
          </a>{' '}
          company
        </span>
      </div>
    </div>
  )
}