// fetch-api-json.mjs — same file as before, with one addition near the top
import fs from 'node:fs';
import https from 'node:https';

const PACKAGE_NAME = '@nfsfu234/form-validation';
const OUT_FILE = './lib-api.json';

function parseArgs() {
  const args = process.argv.slice(2);
  const localFlagIndex = args.findIndex((a) => a === '--local' || a === '-l');
  if (localFlagIndex !== -1) {
    const localPath = args[localFlagIndex + 1];
    if (!localPath) {
      throw new Error('Usage: node fetch-api-json.mjs --local <path-to-api.json>');
    }
    return { mode: 'local', localPath };
  }
  return { mode: 'remote', version: args[0] };
}

function resolveVersion(explicitVersion) {
  if (explicitVersion) return explicitVersion;
  try {
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const pinned =
      pkg.dependencies?.[PACKAGE_NAME] ||
      pkg.devDependencies?.[PACKAGE_NAME] ||
      pkg.peerDependencies?.[PACKAGE_NAME];
    if (pinned) return pinned.replace(/^[\^~]/, '');
  } catch {}
  throw new Error(
    `Could not resolve a version to fetch. Either add "${PACKAGE_NAME}" to this ` +
    `project's package.json, or pass a version explicitly:\n` +
    `  node fetch-api-json.mjs 3.0.0`
  );
}

function fetchText(url, redirectsLeft = 5) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'nfsfu234-docs-generator' } }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        if (redirectsLeft <= 0) return reject(new Error(`Too many redirects fetching ${url}`));
        res.resume();
        return resolve(fetchText(res.headers.location, redirectsLeft - 1));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Request to ${url} failed with status ${res.statusCode}`));
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function validateAndWrite(raw, sourceLabel) {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Content from ${sourceLabel} is not valid JSON: ${err.message}`);
  }
  if (!parsed.name || !Array.isArray(parsed.children)) {
    throw new Error(
      `JSON from ${sourceLabel} doesn't look like a TypeDoc API model (missing "name"/"children").`
    );
  }
  fs.writeFileSync(OUT_FILE, JSON.stringify(parsed, null, '\t') + '\n');
  console.log(`Wrote ${OUT_FILE} (${parsed.children.length} top-level entries) from ${sourceLabel}.`);
}

const { mode, localPath, version: rawVersion } = parseArgs();

if (mode === 'local') {
  // Pre-release workflow: point this at the sibling library repo's own
  // generated docs-json/api.json (npm run docs:build over there) instead of
  // waiting on a published npm version to exist.
  console.log(`Reading local api.json from ${localPath}...`);
  const raw = fs.readFileSync(localPath, 'utf8');
  validateAndWrite(raw, localPath);
} else {
  const version = resolveVersion(rawVersion);
  // unpkg resolves to the exact published version you ask for - unlike
  // jsDelivr's @latest tag, which the changelog (2.4.3) already flagged as
  // unreliable. Only usable once this version is actually on npm.
  const url = `https://unpkg.com/${PACKAGE_NAME}@${version}/docs-json/api.json`;
  console.log(`Fetching ${PACKAGE_NAME}@${version} api.json from unpkg...`);
  console.log(url);
  const raw = await fetchText(url);
  validateAndWrite(raw, `unpkg@${version}`);
}