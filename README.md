# shopvirge-client

API clients for the [ShopVirge](https://shopvirge.com) backend, generated from its OpenAPI spec.

| Path           | What                                                                          | Published as                                                                                            |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `openapi.json` | The spec both clients are generated from (`https://api.shopvirge.com/openapi.json`) | —                                                                                                       |
| `npm/`         | TypeScript client, generated with `@hey-api/openapi-ts`                       | [`@shopvirge/shopvirge-client`](https://www.npmjs.com/package/@shopvirge/shopvirge-client) on npm       |
| `python/`      | Python client                                                                 | not yet                                                                                                 |

## Releasing the npm client

Versions follow `info.version` in `openapi.json`, so a backend release that bumps the API version produces a client with the same version.

1. Update the spec and regenerate, from `npm/`:
    - `pnpm generate:live` fetches the live spec into `openapi.json`, regenerates `src/api/generated` and syncs `package.json` to the spec version, or
    - drop a spec into `openapi.json` yourself and run `pnpm generate && pnpm sync-version`.
2. Open a pull request. CI checks that the committed generated code matches the spec, then typechecks, lints, builds and tests.
3. Merge. If the version in `npm/package.json` is not on npm yet, the publish workflow publishes it with provenance and creates a `npm-v<version>` GitHub release. Nothing is published when the version already exists.

Publishing authenticates with npm Trusted Publishing (OIDC), configured on npmjs.com for this repository and the `publish-npm.yml` workflow. No npm token is stored in GitHub.

## Requirements

Node 22 (`.nvmrc`) and pnpm (`corepack enable` picks the version from `npm/package.json`).
