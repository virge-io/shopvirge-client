# @shopvirge/shopvirge-client

Auto-generated TypeScript API client for the [ShopVirge](https://api.shopvirge.com) API, built from the OpenAPI spec using [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts).

## Installation

```bash
npm install @shopvirge/shopvirge-client
# or
yarn add @shopvirge/shopvirge-client
```

## Usage

### Configure the API URL

Before making any API calls, set the `BASE` URL on the exported `OpenAPI` config object:

```ts
import { OpenAPI } from '@shopvirge/shopvirge-client';

OpenAPI.BASE = 'https://api.shopvirge.com';
```

### Authentication

You can configure authentication by setting `TOKEN` or `HEADERS`:

```ts
import { OpenAPI } from '@shopvirge/shopvirge-client';

// Bearer token
OpenAPI.TOKEN = 'your-access-token';

// Or use custom headers
OpenAPI.HEADERS = {
    Authorization: 'Bearer your-access-token',
};
```

### Making API calls

Once configured, use the generated service functions to interact with the API:

```ts
import { OpenAPI, ShopsService } from '@shopvirge/shopvirge-client';

OpenAPI.BASE = 'https://api.shopvirge.com';

const shops = await ShopsService.getShops();
```

### Full configuration reference

All properties on the `OpenAPI` config object can be overridden:

| Property           | Type                                   | Default     | Description                      |
| ------------------ | -------------------------------------- | ----------- | -------------------------------- |
| `BASE`             | `string`                               | `''`        | Base URL for all API requests    |
| `TOKEN`            | `string \| Resolver`                   | `undefined` | Bearer token or async resolver   |
| `HEADERS`          | `Record<string, string> \| Resolver`   | `undefined` | Custom headers or async resolver |
| `CREDENTIALS`      | `'include' \| 'omit' \| 'same-origin'` | `'include'` | Fetch credentials mode           |
| `WITH_CREDENTIALS` | `boolean`                              | `false`     | XHR withCredentials flag         |
| `ENCODE_PATH`      | `(path: string) => string`             | `undefined` | Custom path encoder              |
| `USERNAME`         | `string \| Resolver`                   | `undefined` | Basic auth username              |
| `PASSWORD`         | `string \| Resolver`                   | `undefined` | Basic auth password              |

### Request/Response interceptors

You can add interceptors to modify requests or responses:

```ts
import { OpenAPI } from '@shopvirge/shopvirge-client';

OpenAPI.interceptors.request.use((request) => {
    console.log('Request:', request);
    return request;
});

OpenAPI.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
});
```

## Development

### Regenerate the client

From the `packages/shopvirge-client/` directory:

```bash
# From a local openapi.json file
yarn openapi-ts

# From the live API
yarn openapi-ts-live
```

### Sync package version

After regenerating, sync the package version from the OpenAPI spec:

```bash
yarn sync-version
```
