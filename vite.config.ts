import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2022",
    sourcemap: true,
    minify: "esbuild",
    emptyOutDir: true,
    outDir: "dist",
    lib: {
      entry: "src/energy-insight-card.ts",
      formats: ["es"],
      fileName: () => "energy-insight-card.js",
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        globals: {
          lit: "Lit",
        },
      },
    },
  },
});
