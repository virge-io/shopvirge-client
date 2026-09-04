import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { OpenAPI } from '../src';

const read = (path: string) =>
    JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
const specVersion: string = read('../../openapi.json').info.version;

describe('version', () => {
    it('package.json follows openapi.json (run `pnpm sync-version`)', () => {
        expect(read('../package.json').version).toBe(specVersion);
    });

    it('generated client follows openapi.json (run `pnpm generate`)', () => {
        expect(OpenAPI.VERSION).toBe(specVersion);
    });
});
