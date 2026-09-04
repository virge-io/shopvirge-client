# CLAUDE.md

`@shopvirge/shopvirge-client`: a TypeScript client generated from `../openapi.json` with `@hey-api/openapi-ts`. `src/index.ts` only re-exports `src/api/generated`; there is no hand-written client code.

- Never edit `src/api/generated/**` by hand. Change the spec, then `pnpm generate`.
- The package version is `info.version` from the spec: `pnpm sync-version`. `pnpm generate:live` fetches the live spec and does both.
- `pnpm check:generated` is what CI runs: regenerate + sync and fail on any diff.
- Merging to `main` publishes to npm automatically when the version is new (see `../.github/workflows/publish-npm.yml`). Nothing else publishes.
- Verify with `pnpm tsc && pnpm lint && pnpm prettier && pnpm build && pnpm test`.
- The generator is pinned to an exact version on purpose: newer majors change the generated API surface, which every consumer would have to migrate.
