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

`vite-tsconfig-paths` is great if you just want Vite to automatically mirror whatever’s in your `tsconfig.json`. But it has one big limitation: **it only looks at the root `tsconfig`, not at how aliases should behave inside shared or nested packages.**
