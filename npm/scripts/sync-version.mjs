// Copies info.version from ../openapi.json into package.json, so the client version tracks the API version.
import { readFileSync, writeFileSync } from 'node:fs';

const specUrl = new URL('../../openapi.json', import.meta.url);
const packageUrl = new URL('../package.json', import.meta.url);

const spec = JSON.parse(readFileSync(specUrl, 'utf8'));
const pkg = JSON.parse(readFileSync(packageUrl, 'utf8'));
const specVersion = spec.info?.version;

if (!specVersion) {
    throw new Error('openapi.json has no info.version');
}
if (pkg.version === specVersion) {
    console.log(`package.json is already at ${specVersion}`);
} else {
    console.log(`package.json: ${pkg.version} -> ${specVersion}`);
    pkg.version = specVersion;
    writeFileSync(packageUrl, JSON.stringify(pkg, null, 4) + '\n');
}
