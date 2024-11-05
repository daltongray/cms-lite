// vite.config.sw.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "public",
    emptyOutDir: false,
    lib: {
      entry: "sw/offlineAccessSW.ts",
      name: "ServiceWorker",
      fileName: "service-worker",
      formats: ["es"], // Bundle it as a single
      // self-executing script
    },
    rollupOptions: {
      output: {
        entryFileNames: "service-worker.js",
      },
    },
  },
});
