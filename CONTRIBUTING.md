# 🤝 Contributing to the NFSFU234FormValidation Official Documentation Website

First off, thank you for taking the time to contribute! ❤️

Whether you're fixing a typo, improving a guide, reporting a bug, suggesting a feature, or helping improve the developer experience, every contribution is genuinely appreciated.

This repository powers the official documentation website for **NFSFU234FormValidation**, and our goal is to make it one of the best documentation experiences possible for developers.

---

## 🌟 Ways to Contribute

There are many ways you can help improve the project:

* 🐛 Report bugs
* ✨ Suggest new features
* 📝 Improve documentation
* 📚 Write guides or tutorials
* 💡 Expand practical examples
* 🔍 Fix broken links or outdated information
* 🎨 Improve the UI and user experience
* ⚡ Improve accessibility or performance

No contribution is too small.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/nfsfu234/nfsfu234-form-validation-website.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🌿 Create a Branch

Please create a dedicated branch for every contribution.

Examples:

```bash
git checkout -b feature/add-new-guide
```

```bash
git checkout -b fix/mobile-navbar
```

---

## 📚 Understanding the Documentation

This project contains **two kinds of documentation**.

### ✍️ Hand-written Documentation

These files are written and maintained manually.

Examples include:

* Guides
* Tutorials
* Blog posts
* Practical examples
* Migration guides
* Changelog
* FAQ
* Marketing pages

Feel free to improve these whenever necessary.

---

### ⚙️ Generated API Documentation

The API reference is automatically generated from the **NFSFU234FormValidation** library's TypeDoc JSON output.

**Please do not manually edit generated API pages.**

Instead:

1. Update the library's JSDoc.
2. Update `examples.mjs` if a curated example should change.
3. Regenerate the documentation.

---

## 🔄 Documentation Generation

Generate documentation from a local checkout of the library:

```bash
npm run docs:generate:local
```

Generate documentation using the latest published library version:

```bash
npm run docs:generate
```

For a complete explanation of how the documentation generator works, please read **DOCS_PIPELINE.md**.

---

## 🧪 Before Opening a Pull Request

Before submitting a pull request, please ensure that you have:

* ✅ Built the project successfully.

```bash
npm run build
```

* ✅ Verified there are no build errors.
* ✅ Confirmed your documentation renders correctly.
* ✅ Checked that links still work.
* ✅ Tested any new examples you added.
* ✅ Updated related documentation if necessary.

---

## 💬 Commit Messages

Please write clear and descriptive commit messages.

Examples:

```text
docs: improve installation guide

fix: correct sidebar navigation

feat: add React Router example
```

---

## 🚨 Reporting Bugs

When reporting a bug, please include:

* A clear description of the issue
* Steps to reproduce
* Expected behaviour
* Actual behaviour
* Browser (if applicable)
* Screenshots (if applicable)

---

## 💡 Suggesting Features

Feature requests are always welcome.

If possible, explain:

* The problem you're trying to solve
* Why the feature would be useful
* Any implementation ideas you may have

For larger changes, please open an issue first so we can discuss the approach before significant work begins.

---

## ❤️ Community

Please be respectful, constructive, and welcoming.

We want this project to be an enjoyable place for everyone to contribute, regardless of experience level.

---

## 📜 License

By contributing to this project, you agree that your contributions will be licensed under the project's **MIT License**.

---

Built with ❤️ by **NFORSHIFU234 Dev**.
