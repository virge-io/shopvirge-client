// Fetches the live OpenAPI spec into ../openapi.json (pretty-printed so diffs stay readable).
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
const spec = await response.json();
writeFileSync(target, JSON.stringify(spec, null, 4) + '\n');
console.log(`Wrote ${url} (API version ${spec.info?.version}) to openapi.json`);
