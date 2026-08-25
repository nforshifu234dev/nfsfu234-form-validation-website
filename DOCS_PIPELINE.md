# 📚 Documentation Generation Pipeline

The API reference for **NFSFU234FormValidation** is **generated**, not hand-written.

Rather than manually maintaining API documentation, this website generates reference pages directly from the library's TypeDoc output. This ensures the documentation remains synchronised with the library source code and greatly reduces the risk of outdated or inconsistent API documentation.

Only the API reference is generated. Guides, tutorials, blog posts, migration guides, examples, and other editorial content are maintained manually.

---

## 📂 Generated vs Hand-Written Documentation

### ✍️ Hand-Written Content

The following sections are written and maintained manually:

* Getting Started
* Installation
* Initialization
* Usage
* Framework Guides
* Examples
* Blog
* Changelog
* Migration Guides
* Credits

These pages can be edited normally and are **never** modified by the documentation generator.

---

### ⚙️ Generated Content

Everything under the generated API reference—including individual function and interface pages—is rebuilt whenever the documentation generator runs.

This also includes the **Available Functions** page.

> **Do not manually edit generated API pages.**
>
> Any manual changes will be overwritten the next time the documentation is regenerated.

---

## 🏗️ How the Pipeline Works

The documentation generator is built around three layers.

### 1. `lib-api.json`

This file contains the TypeDoc JSON output produced by the **NFSFU234FormValidation** library.

It provides the authoritative source for:

* Function signatures
* Parameters
* Return types
* Descriptions
* Interfaces
* Type information

Rather than copying documentation manually, the website always generates its API reference from this file, ensuring the documentation accurately reflects the library.

---

### 2. `examples.mjs`

`examples.mjs` contains the curated examples shown beneath generated API pages.

Unlike the generated API data, this file is maintained manually.

If an API entry has no custom example, the generator automatically falls back to a simple usage snippet derived from the function signature.

Because examples are stored separately, documentation can be regenerated without overwriting hand-written examples.

---

### 3. `generate-docs.mjs`

`generate-docs.mjs` combines:

* `lib-api.json`
* `examples.mjs`

It then generates:

* Every API reference page
* Interface documentation
* `available-functions/page.mdx`
* `_meta.js`

---

## 📥 Fetching the TypeDoc Output

The documentation generator supports two workflows depending on whether you're documenting a local development version or an already published release.

### Local Mode

Use Local Mode when developing the library before it has been published.

The generator reads the TypeDoc JSON directly from a local checkout of the library repository.

```bash
node fetch-api-json.mjs --local ../nfsfu234-form-validation/docs-json/api.json

# or

npm run docs:fetch-api:local
```

Adjust the path to match the location of your local library checkout.

---

### Published Mode

Once a version has been published to npm, the generator can download the TypeDoc JSON automatically.

```bash
node fetch-api-json.mjs

# or

npm run docs:fetch-api
```

The generator fetches the documentation for the version currently configured by the project, validates that the downloaded file is a valid TypeDoc model, and only then replaces `lib-api.json`.

This validation helps prevent accidental corruption caused by incorrect paths, invalid downloads, or unpublished releases.

---

## 🔄 Updating the Documentation

### During Library Development

After making documentation-related changes in the library:

```bash
# Generate the library's TypeDoc JSON
npm run docs:build

# Regenerate the documentation website
npm run docs:generate:local

# Verify everything still builds
npm run build
```

Review the generated changes carefully.

If you've added new functions or interfaces, consider adding curated examples to `examples.mjs` so they appear alongside the generated API documentation.

---

### After Publishing a Release

Once the new version has been published:

```bash
npm run docs:generate
npm run build
```

This downloads the published TypeDoc JSON before regenerating the API reference.

---

### ⚙️ Available Scripts

```json
{
  "docs:fetch-api:local": "node fetch-api-json.mjs --local ../nfsfu234-form-validation/docs-json/api.json",
  "docs:fetch-api": "node fetch-api-json.mjs",
  "docs:generate:local": "npm run docs:fetch-api:local && node generate-docs.mjs",
  "docs:generate": "npm run docs:fetch-api && node generate-docs.mjs"
}
```

Both `docs:generate` commands finish by running `generate-docs.mjs`.

The only difference is where `lib-api.json` is sourced from.

If the fetch step fails, the generation process stops immediately. This prevents the documentation from being regenerated using incomplete or invalid API data.

---

## ✍️ Adding or Updating Examples

Curated examples are maintained in `examples.mjs`.

Each entry is keyed by the generated folder name (for example `validateFile` or `fieldRuleInterface`) and contains raw MDX that is injected directly into the generated documentation.

This separation allows practical examples to evolve independently from the generated API reference.

---

## ⚠️ Implementation Details

The documentation generator handles several edge cases automatically.

### Case-Sensitive Folder Names

Different operating systems treat file names differently.

For example:

```bash
getPageUrl
getPageURL
```

can coexist on Linux but conflict on Windows or macOS.

The generator automatically resolves these casing differences before writing files to ensure builds remain portable across platforms.

---

### HTML Inside JSDoc

JSDoc comments containing HTML such as:

```text
Validates a single <input type="file"> field
```

are automatically escaped before being written to MDX.

Without escaping, MDX would interpret the HTML as JSX and fail to compile.

---

### Markdown Table Escaping

Type definitions containing characters such as:

* `|`
* `{ }`

are escaped automatically so generated markdown tables remain valid.

---

### Generated Files Are Rebuilt

The **Available Functions** page is regenerated from scratch every time the documentation generator runs.

This avoids duplicate content and removes the need for marker-based file editing.

As a result, generated `.mdx` files should never be edited manually.

---

Built with ❤️ by **NFORSHIFU234 Dev**.
