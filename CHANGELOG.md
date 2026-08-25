# Changelog

All notable changes to the **NFSFU234FormValidation Official Documentation Website** are documented in this file.

> This changelog tracks changes to the documentation website contained in this repository. Changes to the **NFSFU234FormValidation** library itself are documented in the library repository's `CHANGELOG.md`.

The format is based on **Keep a Changelog**, and this project follows **Semantic Versioning (SemVer)**.

---

## [3.0.0] - 2026-08-25

This release is a complete rebuild of the official **NFSFU234FormValidation Documentation Website**, released alongside **NFSFU234FormValidation v3.0.0**.

Rather than serving as a simple documentation site, the project now acts as the official developer portal for the library, combining versioned documentation, framework guides, API references, migration resources, practical examples, technical articles, and automated documentation generation into a single experience.

---

## Highlights

- Completely redesigned website
- Dedicated marketing pages
- Versioned documentation (v2 & v3)
- New framework installation guides
- Expanded practical examples
- Automated API reference generation
- MDX-powered blog
- Full-text search
- Improved SEO
- Faster documentation generation pipeline

---

## Migration Notes

### Documentation URLs are now versioned

Documentation now lives under version-specific routes.

```
/docs/v2/...
/docs/v3/...
```

The previous documentation remains available under **v2**, while **v3** is now the default documentation for all new users.

If you bookmarked pages from previous releases, update them to their new versioned URLs.

---

## Added

### Marketing Website

Added a complete marketing website including:

- Interactive homepage
- Live validation demo
- Feature showcase
- Code preview section
- Framework compatibility section
- Ecosystem showcase
- Statistics section
- FAQ
- Contact page
- About page

---

### Documentation

Added an entirely new documentation experience.

New sections include:

- Getting Started
- Installation
- Initialization
- Usage
- Framework Guides
- Examples
- Migration Guide
- Changelog
- Credits
- API Reference
- Available Functions

Documentation now includes:

- Better navigation
- Cross-linking between guides
- Version-aware routing
- Improved page layouts
- Better code samples
- Framework-specific instructions

---

### Framework Guides

Added dedicated installation and setup guides for:

- Next.js
- Vite
- Create React App
- Expo Web
- Plain HTML

Each guide now includes:

- Project creation
- Installation
- First example
- Automatic configuration
- Common pitfalls
- Next steps

---

### Practical Examples

Added real-world implementation examples including:

- AJAX Login
- Contact Form
- Newsletter Signup
- Avatar Upload Validation
- Password Strength Meter
- Character Counter
- Survey Validation
- Multi-step Registration
- Expo Web Waitlist
- Custom Error Messages

Each example now includes:

- Complete source code
- Implementation notes
- Framework considerations
- Links to related documentation

---

### API Documentation

Added automatic API documentation generation from the library's TypeDoc output.

Features include:

- Generated method reference
- Generated interfaces
- Generated types
- Generated enums
- Automatic synchronization with library releases

---

### Blog

Added a new MDX-powered blog featuring:

- Pagination
- Tag filtering
- Rich code blocks
- Figure captions
- Embedded media
- Reading time
- SEO metadata

---

### Search

Added full-text documentation search powered by **Pagefind**.

---

### SEO

Added:

- Structured metadata
- JSON-LD
- Canonical URLs
- Open Graph metadata
- Twitter Cards
- XML sitemaps
- robots.txt
- Automatically generated Open Graph images

---

### Privacy

Added:

- Cookie consent banner
- Privacy-friendly analytics loading

---

### Developer Tooling

Added documentation tooling including:

- Local API generation
- Published API generation
- Automatic TypeDoc synchronization
- Version-aware documentation generation

---

## Changed

### Website

- Completely redesigned the website.
- Rebuilt the routing architecture.
- Improved responsiveness.
- Improved accessibility.
- Improved navigation.
- Improved footer.
- Improved information architecture.
- Improved typography and spacing.
- Improved mobile experience.

---

### Documentation

- Documentation is now versioned.
- Rewrote the Getting Started experience.
- Rewrote installation guides.
- Rewrote framework guides.
- Rewrote migration documentation.
- Expanded practical examples.
- Improved internal linking.
- Added "Next Steps" navigation throughout the documentation.
- Improved readability of code examples.

---

### Documentation Generation

- API documentation is now generated directly from the library's TypeDoc JSON output.
- Reduced manual maintenance of API reference pages.
- Documentation generation now stays synchronized with library releases.

---

### Technology

Upgraded to:

- Next.js 15.5
- React 19.2
- Nextra 4.6
- Nextra Docs Theme 4.6

---

### Build Pipeline

Improved the production build by automatically generating:

- API reference
- Search index
- XML sitemap
- robots.txt
- Open Graph assets

This significantly reduces manual deployment steps.

---

## Removed

- Legacy documentation homepage
- Previous flat documentation structure
- Previous navigation system
- Manually maintained API reference pages
- Legacy documentation layout

---

## Performance

Improved:

- Search indexing
- Static page generation
- Metadata generation
- Documentation build workflow
- Navigation performance

---

## Developer Experience

Improved:

- Framework onboarding
- Installation experience
- Migration documentation
- Practical examples
- API discoverability
- Internal documentation navigation
- Cross-referencing between guides
- Version switching

---

## Acknowledgements

Thank you to everyone using **NFSFU234FormValidation**.

This release lays the foundation for future versions of the documentation platform, making it easier to learn, adopt, and build with the library across modern JavaScript frameworks and environments.

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
