import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    // Generated code is not linted; it is regenerated wholesale from openapi.json.
    globalIgnores(['dist/', 'src/api/generated/']),
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ['scripts/**/*.mjs'],
        languageOptions: { globals: globals.node },
    },
    prettier,
]);
