// Fetches the live OpenAPI spec into ../openapi.json, byte for byte as the server sends it.
// No JSON round-trip through JS on purpose: JSON.stringify would turn 0.0 into 0 and sort
// numeric-looking keys such as response codes, which shows up as noise in the spec diff.
// `pnpm generate` formats the file with prettier.
import { writeFileSync } from 'node:fs';
import process from 'node:process';

const url =
    process.env.SHOPVIRGE_OPENAPI_URL ??
    'https://api.shopvirge.com/openapi.json';
const target = new URL('../../openapi.json', import.meta.url);

const response = await fetch(url);
if (!response.ok) {
    throw new Error(
        `Fetching ${url} failed: ${response.status} ${response.statusText}`,
    );
}
const body = await response.text();
const spec = JSON.parse(body); // validates the body and reads the version
writeFileSync(target, body.endsWith('\n') ? body : body + '\n');
console.log(`Wrote ${url} (API version ${spec.info?.version}) to openapi.json`);
