# 🌐 NFSFU234FormValidation Official Documentation Website

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/nfsfu234-form-validation)](https://www.npmjs.com/package/nfsfu234-form-validation)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![Nextra](https://img.shields.io/badge/Nextra-4.6-blue)](https://nextra.site/)
[![Live Documentation](https://img.shields.io/badge/Live-Documentation-orange)](https://form-validation.nforshifu234dev.com/)
[![Made by NFORSHIFU234 Dev](https://img.shields.io/badge/Made%20by-NFORSHIFU234%20Dev-ff7a00)](https://www.nforshifu234dev.com)

> The official documentation website for **NFSFU234FormValidation**.

This repository powers the public documentation experience for **NFSFU234FormValidation**, bringing together versioned documentation, API references, practical examples, migration guides, technical articles, and developer resources in one place.

Built with **Next.js**, **Nextra**, **MDX**, and **TypeScript**, the website is designed to provide a fast, modern, and developer-friendly documentation experience.

---

## 🌍 Part of the NFORSHIFU234 Ecosystem

NFSFU234FormValidation is one of several projects built and maintained by **NFORSHIFU234 Dev**, a software engineering brand of **NFORSHIFU LOGICFORGE LTD.**

The ecosystem includes:

* 📜 **NFSFU234FormValidation** — A lightweight, framework-agnostic JavaScript form validation library.
* 🧭 [**NFSFU234TourGuide**](https://tour-guide.nforshifu234dev.com) — An open-source library for building interactive product tours and onboarding experiences.
* 💙 [**WishIT**](https://www.wish-it.app) — A platform for creating beautiful digital tribute pages and celebrating life's special moments.
* 🩺 [**HealthHub AI**](https://healthhub.nforshifu234dev.com) — A multilingual health guidance application focused on making basic healthcare information more accessible.
* 👨🏾‍💻 [**IAMNOTSHIFU**](https://www.iamnotshifu.com) — The personal brand of founder and engineer **Nyuiring-yoh Rhagninyui Shifu-Nfor**, sharing projects, insights, and the journey behind the ecosystem.

---

## ✨ Features

* 📚 Versioned documentation (`v2` & `v3`)
* ⚡ Automatically generated API reference from the library's TypeDoc output
* 💡 Practical examples and implementation guides
* 📰 MDX-powered technical blog
* 🔍 Full-text search powered by Pagefind
* 🎨 Modern, responsive developer experience
* 📈 SEO optimisation with structured metadata, Open Graph images, canonical URLs, and sitemaps
* 🔄 Migration guides between major releases
* 🍪 Privacy-friendly cookie consent for analytics

---

## 🌍 Live Website

Visit the official documentation website:

**https://form-validation.nforshifu234dev.com**

---

## 📦 Looking for the Library?

This repository contains the **official documentation website**, not the validation library itself.

If you're looking to install or use **NFSFU234FormValidation**, visit the main repository:

**📜 Library Repository**

https://github.com/NFSFU234FormValidation/nfsfu234-form-validation

Install with npm:

```bash
npm install nfsfu234-form-validation
```

Or include it directly via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/nfsfu234-form-validation/dist/js/nfsfu234FormValidation.global.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nfsfu234-form-validation/dist/css/nfsfu234FormValidation.min.css">
```

For complete installation guides, API documentation, migration guides, examples, and developer resources, visit the official documentation website.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/NFSFU234FormValidation/website.git
```

Navigate into the project:

```bash
cd website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

---

## 🛠️ Available Scripts

| Script                         | Description                                                               |
| :----------------------------- | :------------------------------------------------------------------------ |
| `npm run dev`                  | Starts the Next.js development server.                                    |
| `npm run build`                | Builds the production website.                                            |
| `npm run start`                | Starts the production server.                                             |
| `npm run docs:fetch-api:local` | Fetches the TypeDoc JSON from a local checkout of the library.            |
| `npm run docs:fetch-api`       | Fetches the TypeDoc JSON for the published library version.               |
| `npm run docs:generate:local`  | Fetches the local TypeDoc JSON and regenerates the API documentation.     |
| `npm run docs:generate`        | Fetches the published TypeDoc JSON and regenerates the API documentation. |

> **Note:** Production builds automatically generate the Pagefind search index, `robots.txt`, and XML sitemaps.

---

## 📂 Project Structure

```text
app/                Application routes
components/         Shared React components
content/            Documentation, blog posts, and examples
lib/                Shared utilities
public/             Static assets
scripts/            Documentation generation utilities
```

---

## ⚙️ Documentation Generation Pipeline

The API reference is **generated**, not hand-written.

Documentation pages are generated directly from the **NFSFU234FormValidation** library's TypeDoc JSON output, ensuring the API reference stays synchronised with every library release while allowing guides, tutorials, blog posts, and examples to evolve independently.

Generate documentation using a local checkout of the library:

```bash
npm run docs:generate:local
```

Generate documentation using the published npm version:

```bash
npm run docs:generate
```

For a detailed explanation of how the documentation pipeline works, see **[DOCS_PIPELINE.md](DOCS_PIPELINE.md)**.

---

## 🤝 Contributing

Contributions are always welcome!

Whether you've found a typo, discovered a bug, want to improve the documentation, or have an idea for a new guide, blog post, or example, feel free to open an issue or submit a pull request.

Before contributing, please read **[CONTRIBUTING.md](CONTRIBUTING.md)** for the project's contribution guidelines and documentation workflow.

---

## 📜 License

This project is licensed under the **MIT License**.

See the **[LICENSE](LICENSE)** file for more information.

---

## 💛 About NFORSHIFU234 Dev

NFSFU234FormValidation is developed and maintained by **NFORSHIFU234 Dev**, a software engineering brand of **NFORSHIFU LOGICFORGE LTD.**

Our mission is to build modern, developer-first software, libraries, and tools that help developers build better applications with confidence.

Built with ❤️ by **NFORSHIFU234 Dev**.

Happy coding! 🚀
