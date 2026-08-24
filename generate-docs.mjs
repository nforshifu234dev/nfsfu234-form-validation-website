import fs from 'node:fs';
import path from 'node:path';
import examples from './examples.mjs';

const API_JSON = process.argv[2] || './lib-api.json';
const OUT_DIR = './app/docs/v3';
const SITE_URL = 'https://formvalidation.nforshifu234dev.com';
const DRY_RUN = process.argv.includes('--dry-run');

// 'available-functions' is no longer hand-maintained — it's fully regenerated
// on every run (see writeAvailableFunctionsPage below), so it's dropped from
// this "left untouched" list.
//
// NOTE: 'migration' was missing here before — it's a real hand-authored
// folder under app/docs/v3 (confirmed in production build output), not a
// generated method/interface page. Leaving it out of this set means the new
// stale-folder cleanup below would have deleted it as "unrecognized." Any
// future hand-authored folder under OUT_DIR needs to be added here too, or
// cleanup will remove it.
const GUIDE_PAGES = new Set([
  "getting-started",
  "quick-start",
  "installation",
  "initialization",
  "usage",
  "frameworks",
  "examples",
  "migration",
  "changelog",
  "credits"
]);

const api = JSON.parse(fs.readFileSync(API_JSON, 'utf8'));

// --- Type-node -> readable string ------------------------------------- (unchanged)
function typeToString(t) {
  if (!t) return 'any';
  switch (t.type) {
    case 'intrinsic': return t.name;
    case 'literal': return t.value === null ? 'null' : JSON.stringify(t.value);
    case 'union': return t.types.map(typeToString).join(' \\| ');
    case 'array': return `${typeToString(t.elementType)}[]`;
    case 'reference':
      if (t.typeArguments) return `${t.name}<${t.typeArguments.map(typeToString).join(', ')}>`;
      return t.name;
    case 'reflection': return 'object';
    default: return t.name || 'any';
  }
}

function commentToText(comment) {
  if (!comment || !comment.summary) return '';
  const raw = comment.summary.map((c) => c.text).join('').trim();
  return raw.replace(/<([a-zA-Z][^<>]*)>/g, '`<$1>`');
}

function cell(s) {
  return `\`${String(s ?? '').replace(/\|/g, '\\|').replace(/`/g, "'")}\``;
}

// --- Keywords -------------------------------------

const BASE_KEYWORDS = ['form validation', 'javascript', 'html forms', 'client-side validation'];

function buildKeywords(name, extra = []) {
  // dedupe, keep it tight — 6-10 keywords is the useful range, more is noise
  return [...new Set([name, ...extra, ...BASE_KEYWORDS])].slice(0, 10);
}

// --- JSON-LD -------------------------------------

function buildJsonLd({ name, description, folderName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${name} — NFSFU234FormValidation`,
    description,
    url: `${SITE_URL}/docs/v3/${folderName}`,
    proficiencyLevel: 'Beginner',
    dependencies: 'None — zero runtime dependencies',
    about: {
      '@type': 'SoftwareApplication',
      name: 'NFSFU234FormValidation',
      applicationCategory: 'DeveloperApplication'
    },
    isPartOf: {
      '@type': 'TechArticle',
      name: 'NFSFU234FormValidation Docs',
      url: `${SITE_URL}/docs/v3/getting-started`
    },
    author: {
      '@type': 'Organization',
      name: 'NFORSHIFU234 Dev',
      url: 'https://nforshifu234dev.com'
    }
  };
}

function jsonLdBlock(data) {
  const importLine = `import { JsonLd } from '@/components/JsonLd.jsx'`;
  return `\n${importLine}\n\n<JsonLd data={${JSON.stringify(data)}} />\n`;
}

// --- Class methods -> one page each -------------------------------------

function findClassNode(api) {
  return api.children.find((c) => c.kind === 128);
}

function generateMethodPage(method, exampleKey, folderName) {
  const sig = method.signatures && method.signatures[0];
  if (!sig) return null;

  const description = commentToText(sig.comment) || `${method.name} - part of the NFSFU234FormValidation API.`;
  const params = sig.parameters || [];
  const returnType = typeToString(sig.type);

  let paramTable = '';
  if (params.length) {
    const rows = params.map((p) => {
      const optional = p.flags?.isOptional || p.defaultValue !== undefined ? 'optional' : 'required';
      const def = p.defaultValue !== undefined ? p.defaultValue : '-';
      const desc = commentToText(p.comment).replace(/\n/g, ' ').replace(/\|/g, '\\|');
      return `| ${cell(p.name)} | ${cell(typeToString(p.type))} | ${cell(optional)} | ${cell(def)} | ${desc} |`;
    });
    paramTable = [
      '| Parameter | Type | Required | Default | Description |',
      '| --- | --- | --- | --- | --- |',
      ...rows
    ].join('\n');
  }

  const usageSection = examples[exampleKey]
    ? '\n' + examples[exampleKey] + '\n'
    : `\n##### Usage\n\n\`\`\`js\nconst result = nfsfu234FormValidation.${method.name}(${params.map((p) => p.name).join(', ')});\n\`\`\`\n`;

  const shortDescription = description.split('\n')[0].slice(0, 155);
  const jsonLd = buildJsonLd({ name: `${method.name}()`, description: shortDescription, folderName, kind: 'method' });

  const body = [
    `#### ${method.name}`,
    '',
    description,
    '',
    `**Returns:** \`${returnType}\``,
    '',
    paramTable,
    usageSection,
    jsonLdBlock(jsonLd)
  ].filter(Boolean).join('\n');

  return {
    title: method.name,
    description: shortDescription,
    ogTitle: `${method.name}() — NFSFU234FormValidation`,
    keywords: buildKeywords(method.name, params.map((p) => p.name)),
    body
  };
}

// --- Interfaces -> one page each -------------------------------------

function generateInterfacePage(iface, folderName) {
  const props = (iface.children || []).filter((c) => c.variant === 'declaration');
  const rows = props.map((p) => {
    const optional = p.flags?.isOptional ? 'optional' : 'required';
    return `| ${cell(p.name)} | ${cell(typeToString(p.type))} | ${optional} |`;
  });

  const table = [
    '| Property | Type | Required |',
    '| --- | --- | --- |',
    ...rows
  ].join('\n');

  const description = `Fields available on ${iface.name}.`;
  const folderKey = iface.name.charAt(0).toLowerCase() + iface.name.slice(1);
  const usageSection = examples[folderKey] ? '\n' + examples[folderKey] + '\n' : '';
  const jsonLd = buildJsonLd({ name: iface.name, description, folderName, kind: 'interface' });
  const usedBy = findUsages(iface, methods);
  const usedBySection = usedBy.length
    ? '\n##### Used by\n\n' + usedBy.map((name) => `- [\`${name}()\`](/docs/v3/${resolveFolderName(name)})`).join('\n') + '\n'
    : '';

  const body = [
    `#### ${iface.name}`, '', description, '', table,
    usageSection, usedBySection, jsonLdBlock(jsonLd)
  ].filter(Boolean).join('\n');

  return { title: iface.name, description, ogTitle: `${iface.name} — NFSFU234FormValidation`, keywords: buildKeywords(iface.name, props.map((p) => p.name)), body };

}

// --- Frontmatter helper, shared by writePage() and writeAvailableFunctionsPage() ---

function buildFrontmatter({ title, description, ogTitle, ogDescription, keywords }) {
  const desc = description || `${title} — part of the NFSFU234FormValidation API.`;
  const finalOgTitle = (ogTitle || `${title} — NFSFU234FormValidation`).replace(/"/g, '\\"');
  const finalOgDescription = (ogDescription || desc).replace(/"/g, '\\"');
  const kw = keywords && keywords.length ? keywords : buildKeywords(title);
  const ogImageUrl = `https://formvalidation.nforshifu234dev.com/api/og?title=${encodeURIComponent(finalOgTitle)}&subtitle=nfsfu234%2Fform-validation`;

  return [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `description: "${desc.replace(/"/g, '\\"')}"`,
    'keywords:',
    ...kw.map((k) => `  - "${k.replace(/"/g, '\\"')}"`),
    'openGraph:',
    `  title: "${finalOgTitle}"`,
    `  description: "${finalOgDescription}"`,
    '  images:',
    `    - url: "${ogImageUrl}"`,
    '      width: 1200',
    '      height: 630',
    '---',
    ''
  ].join('\n');
}

// --- Write pages -------------------------------------

function writePage(folderName, pageData) {
  const dir = path.join(OUT_DIR, folderName);
  fs.mkdirSync(dir, { recursive: true });

  const frontmatter = buildFrontmatter(pageData);
  fs.writeFileSync(path.join(dir, 'page.mdx'), frontmatter + pageData.body + '\n');
}

function typeReferencesTarget(t, targetId) {
  if (!t) return false;
  if (t.type === 'reference' && t.target === targetId) return true;
  if (t.type === 'array') return typeReferencesTarget(t.elementType, targetId);
  if (t.type === 'union') return (t.types || []).some((sub) => typeReferencesTarget(sub, targetId));
  if (t.type === 'reflection' && t.declaration) {
    const decl = t.declaration;
    if ((decl.children || []).some((c) => typeReferencesTarget(c.type, targetId))) return true;
    return (decl.indexSignatures || []).some((s) => typeReferencesTarget(s.type, targetId));
  }
  return false;
}

function findUsages(interfaceNode, methods) {
  const usedBy = [];
  for (const method of methods) {
    const sig = method.signatures && method.signatures[0];
    if (!sig) continue;
    const params = sig.parameters || [];
    const inParams = params.some((p) => typeReferencesTarget(p.type, interfaceNode.id));
    const inReturn = typeReferencesTarget(sig.type, interfaceNode.id);
    if (inParams || inReturn) usedBy.push(method.name);
  }
  return usedBy;
}


// --- Available Functions summary page -------------------------------------
//
// This page used to be a hand-maintained .mdx file with an HTML-comment
// marker pair (<!-- AUTO-GENERATED-FUNCTIONS-START/END -->) that the script
// spliced a fresh table into on each run. Two bugs made that approach unsafe:
//
//   1. `<!-- -->` is not valid inside .mdx — MDX parses content as JSX too,
//      and `<!` is not a legal JSX tag opener, so it broke the Next.js build
//      every time this file was touched.
//   2. The marker strings were interpolated straight into `new RegExp(...)`
//      without escaping. Even swapping to MDX-safe `{/* ... */}` markers,
//      those contain regex metacharacters (`{`, `}`, `/`, `*`) that would
//      still fail to match unescaped — so the "replace between markers" step
//      was silently no-op-ing and the script kept falling into the "append a
//      new block" branch instead, which is why the table kept duplicating.
//
// Fix: stop treating this as a file to be surgically edited. It has no
// hand-written content worth preserving, so it's now fully regenerated from
// scratch every run, same as every method/interface page.

const STUB_METHODS = new Set(); // both passwordStrength/getPasswordStrength now documented — nothing to skip

function categorizeMethod(name) {
  if (['configureForms', 'autoInit'].includes(name)) return 'Static Methods';
  if (name === 'submit' || name === 'validate') return 'Core';
  if (/^validate/i.test(name)) return 'Field Validation';
  if (/password/i.test(name) || /^toggle/i.test(name)) return 'Password Utilities';
  if (['isEmail', 'isURL', 'isNumber', 'isZipCode', 'isZip', 'countString', 'containsOnlyIntegers', 'checkVariableType', 'isOnline'].includes(name)) {
    return 'Format & Type Checks';
  }
  return 'Form & Request Utilities';
}

const CATEGORY_ORDER = [
  'Static Methods',
  'Core',
  'Field Validation',
  'Format & Type Checks',
  'Password Utilities',
  'Form & Request Utilities'
];

function truncateAtWord(str, maxLength) {
  if (str.length <= maxLength) return str;
  const sliced = str.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(' ');
  return (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced).trimEnd() + '...';
}

function generateAvailableFunctionsTable(methods) {
  const byCategory = {};
  for (const method of methods) {
    if (STUB_METHODS.has(method.name)) continue;
    const sig = method.signatures && method.signatures[0];
    if (!sig) continue;
    (byCategory[categorizeMethod(method.name)] ??= []).push({ method, sig });
  }

  const sections = [];
  for (const cat of CATEGORY_ORDER) {
    const entries = byCategory[cat];
    if (!entries?.length) continue;

    entries.sort((a, b) => a.method.name.localeCompare(b.method.name));

    const rows = entries.map(({ method, sig }) => {
      const params = sig.parameters || [];
      const paramList = params
        .map((p) => (p.flags?.isOptional || p.defaultValue !== undefined ? `${p.name}?` : p.name))
        .join(', ');
      const isStatic = method.flags?.isStatic ? 'Static' : 'Instance';
      const rawDesc = (commentToText(sig.comment) || '-').replace(/\n/g, ' ').trim();
      const description = rawDesc;
      const folderName = resolveFolderName(method.name);
      const link = `[${cell(`${method.name}(${paramList})`)}](/docs/v3/${folderName})`;
      return `| ${link} | ${isStatic} | ${description} |`;
    });

    sections.push(
      [`### ${cat}`, '', '| Function | Type | Description |', '| --- | --- | --- |', ...rows, ''].join('\n')
    );
  }

  return sections.join('\n');
}

function writeAvailableFunctionsPage(methods) {
  const folderName = 'available-functions';
  const dir = path.join(OUT_DIR, folderName);
  fs.mkdirSync(dir, { recursive: true });

  const title = 'Available Functions';
  const description = 'Complete reference of every method and static function in NFSFU234FormValidation, grouped by category.';
  const intro = 'Every public method and static function, grouped by category. Click through to any function for full parameter details and usage examples.';
  const table = generateAvailableFunctionsTable(methods);

  const frontmatter = buildFrontmatter({
    title,
    description,
    ogTitle: `${title} — NFSFU234FormValidation`,
    keywords: buildKeywords('available functions', ['api reference', 'methods'])
  });

  const heading = `# ${title}`;

  const body = [heading, '', intro, '', table].join('\n');

  fs.writeFileSync(path.join(dir, 'page.mdx'), frontmatter + body + '\n');
}


const classNode = findClassNode(api);
const methods = (classNode?.children || []).filter((c) => c.kind === 2048 && c.signatures);
const interfaces = api.children.filter((c) => c.kind === 256);

const existingFolders = fs.existsSync(OUT_DIR) ? fs.readdirSync(OUT_DIR) : [];
const existingByLowerCase = new Map(existingFolders.map((f) => [f.toLowerCase(), f]));

function resolveFolderName(name) {
  const existing = existingByLowerCase.get(name.toLowerCase());
  return existing || name;
}

const generatedNames = [];

for (const method of methods) {
  if (STUB_METHODS.has(method.name)) continue;

  const folderName = resolveFolderName(method.name);
  const page = generateMethodPage(method, folderName, folderName);
  if (!page) continue;
  writePage(folderName, page);
  generatedNames.push(folderName);
}

writeAvailableFunctionsPage(methods);
generatedNames.push('available-functions'); // written above but not through the loop, so track it here for cleanup

for (const iface of interfaces) {
  const rawFolder = iface.name.charAt(0).toLowerCase() + iface.name.slice(1);
  const folderName = resolveFolderName(rawFolder);
  const page = generateInterfacePage(iface, folderName, methods);
  writePage(folderName, page);
  generatedNames.push(folderName);
}

// --- Cleanup: remove stale folders for methods/interfaces no longer in the API ---
//
// This script has always written a page for every method/interface *currently*
// in the API JSON, but never removed one for something that's since been
// deleted from the source (e.g. hashPassword/verifyPassword/passwordMatch,
// dropped when password hashing was removed in v3; an old "loadings" folder
// duplicating the current "loading" page; a hand-authored
// "customErrorMessageInterface" folder that was never a real extracted
// interface to begin with). Left alone, those keep shipping as live, indexed
// URLs describing functionality that no longer exists and will throw or
// 404 at runtime.
//
// This removes any top-level folder under OUT_DIR that is neither a known
// guide page (GUIDE_PAGES) nor something this run just generated
// (generatedNames). Run with --dry-run first to see what would be removed
// without actually deleting anything.

function cleanupStaleFolders(outDir, keepNames) {
  if (!fs.existsSync(outDir)) return [];

  const removed = [];
  const currentEntries = fs.readdirSync(outDir, { withFileTypes: true });

  for (const entry of currentEntries) {
    if (!entry.isDirectory()) continue; // skip _meta.js and any stray files
    const name = entry.name;
    if (GUIDE_PAGES.has(name)) continue;
    if (keepNames.has(name)) continue;

    const fullPath = path.join(outDir, name);
    if (!DRY_RUN) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    }
    removed.push(name);
  }

  return removed;
}

const keepNames = new Set(generatedNames);
const removedFolders = cleanupStaleFolders(OUT_DIR, keepNames);

// --- Regenerate _meta.js, preserving guide pages up top ------------------------------------- (unchanged)

const metaPath = path.join(OUT_DIR, '_meta.js');
let existingMeta = {};
try {
  const raw = fs.readFileSync(metaPath, 'utf8');
  const match = raw.match(/export default\s*(\{[\s\S]*\});?\s*$/);
  if (match) existingMeta = new Function(`return (${match[1]})`)();
} catch {}

const priority = [
  "getting-started",
  "quick-start",
  "installation",
  "initialization",
  "usage",
  "frameworks",
  "examples",
  "migration",
  "blog",
  "available-functions"
];

const finalMeta = {};
for (const k of priority) {
  if (k === 'available-functions') {
    finalMeta[k] = 'Available Functions';
    continue;
  }
  if (existingMeta[k]) finalMeta[k] = existingMeta[k];
}
generatedNames.sort((a, b) => a.localeCompare(b)).forEach((name) => { finalMeta[name] = name; });
if (existingMeta['credits']) finalMeta['credits'] = existingMeta['credits'];

// Stale folders are gone from disk — also drop them from _meta.js so the
// sidebar doesn't keep a dangling nav entry pointing at a 404.
for (const removedName of removedFolders) {
  delete finalMeta[removedName];
}

fs.writeFileSync(metaPath, 'export default ' + JSON.stringify(finalMeta, null, 2) + '\n');

console.log(`Generated ${methods.length} method pages and ${interfaces.length} interface pages from ${API_JSON}`);
console.log(`available-functions/page.mdx fully regenerated (no more comment-marker splicing).`);
console.log(`Guide pages left untouched: ${[...GUIDE_PAGES].join(', ')}`);
if (removedFolders.length) {
  console.log(`${DRY_RUN ? '[dry run] Would remove' : 'Removed'} ${removedFolders.length} stale folder(s) no longer in the API: ${removedFolders.join(', ')}`);
} else {
  console.log('No stale folders found.');
}
