import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: true,
  clean: true,
  format: ["cjs", "esm"],
  minify: true,
  experimentalDts: true,
});
