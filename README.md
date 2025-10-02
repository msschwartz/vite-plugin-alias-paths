### `aliasPaths` Vite Plugin

This plugin lets you define path aliases in Vite that behave just like TypeScript’s `paths` option in `tsconfig.json`.

It intercepts module resolution and rewrites imports based on your alias mappings, trying each candidate path until it finds a match. This allows setups where shared modules can optionally be replaced by local project-specific implementations.

#### Example

```ts
// vite.config.ts
import * as path from "path";
import { defineConfig } from "vite";
import { aliasPaths } from "./plugins/aliasPaths";

export default defineConfig({
  plugins: [
    aliasPaths({
      "@shared": [path.resolve(__dirname, "./"), path.resolve(__dirname, "../shared")],
    }),
  ],
});
```

### Why not just use `vite-tsconfig-paths`?

One key limitation of `vite-tsconfig-paths` is that it does not fully align with TypeScript’s behavior: project aliases are not respected in shared or nested packages.
