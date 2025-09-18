import * as vite from "vite";

export function aliasPaths(entries: Record<string, string[]>): vite.Plugin {
  return {
    name: "aliasPaths",
    enforce: "pre",
    async resolveId(source, importer, options) {
      for (const [key, paths] of Object.entries(entries)) {
        if (source.startsWith(key)) {
          for (const path of paths) {
            const result = await this.resolve(source.replace(key, path), importer, options);
            if (result) return result;
          }
        }
      }
    },
  };
}
