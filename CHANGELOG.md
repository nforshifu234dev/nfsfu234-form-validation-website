# Changelog

All notable changes to the **NFSFU234FormValidation Official Documentation Website** are documented in this file.

> This changelog tracks changes to the website contained in this repository. Changes to the **NFSFU234FormValidation** library itself are documented in the library repository's `CHANGELOG.md`.

The format is based on **Keep a Changelog** and this project follows **Semantic Versioning (SemVer)**.

---

## [3.0.0] - 2026-08-01

This release marks the complete redesign of the official NFSFU234FormValidation documentation website, released alongside **NFSFU234FormValidation v3.0.0**. While previous releases primarily focused on documentation, this version evolves the project into a complete developer portal featuring a redesigned marketing website, versioned documentation, practical examples, a blog, improved search, enhanced SEO, and an automated API documentation generation pipeline.

### Migration Notes

- Documentation is now versioned under `/docs/v3` and `/docs/v2`.
- The legacy documentation has been preserved under the **v2** section, while **v3** is now the default version for all new documentation.
- If you have bookmarked pages from previous versions of the website, you may need to update them to the new versioned documentation URLs.

### Added

- Complete marketing website with:

  - Hero section featuring a live client-side validation demo.
  - Feature showcase.
  - Code preview section.
  - Framework compatibility section.
  - Statistics section.
  - Ecosystem showcase.
- Dedicated About, FAQ and Contact pages.
- MDX-powered blog with:

  - Pagination.
  - Tag filtering.
  - Rich code blocks.
  - Figure captions.
  - Embedded media support.
  - Structured metadata for search engines.
- Examples section containing practical implementations for:

  - AJAX login forms.
  - File uploads.
  - Multi-step registration forms.
  - Password strength validation.
  - Survey validation.
  - Newsletter signup.
  - Expo Web examples.
- Versioned documentation supporting both **v2** and **v3**.
- Version switcher throughout the documentation.
- Automated documentation generation from the library's TypeDoc JSON output.
- Framework-specific installation guides for:

  - Next.js
  - Vite
  - Create React App
  - Expo (Web)
  - Plain HTML
- Dedicated migration guide from **v2** to **v3**.
- Dedicated changelog page.
- Full-text search powered by Pagefind.
- Automatically generated Open Graph images for marketing pages, documentation, blog posts and examples.
- Cookie consent banner for privacy-compliant Google Analytics loading.
- Automatic sitemap generation with version-aware search prioritisation.

### Changed

- Rebuilt the entire website architecture.
- Upgraded to the latest Next.js 15.5 release.
- Upgraded to Nextra 4.6 and Nextra Docs Theme 4.6.
- Updated to React 19.2.
- Introduced separate application layouts for the marketing website and documentation.
- Redesigned the entire user interface with the NFORSHIFU234 ecosystem branding.
- Improved navigation, footer and overall information architecture.
- Improved SEO through structured metadata, JSON-LD, canonical URLs and enhanced sitemap generation.
- Documentation generation now uses the library's TypeDoc output directly, ensuring the API reference remains synchronised with every release.
- Simplified the deployment pipeline by integrating Pagefind indexing and sitemap generation into the production build process, reducing manual deployment steps.

### Removed

- Previous single-page documentation homepage.
- Previous flat documentation structure.
- Legacy documentation navigation.

---

## [1.0.1] - 2024-08-31

### Fixed

- Fixed documentation sidebar navigation.
- Fixed the Available Functions page.

### Changed

- General documentation improvements and maintenance updates.

---

## [1.0.0] - 2024-08-29

### Added

- Initial public release of the official NFSFU234FormValidation documentation website.
- Documentation built with Next.js and Nextra.

---

## [0.1.0] - 2024-02-29

### Added

- Initial project scaffold.

### Changed

- Initial project configuration and setup.
