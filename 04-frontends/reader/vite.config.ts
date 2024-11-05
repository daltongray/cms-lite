import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { checker } from "vite-plugin-checker";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths({ root: "./" }),
    checker({
      typescript: false,
      root: "./",
    }),
    nodePolyfills({
      protocolImports: true,
    }),

    {
      name: "custom-watch",
      configureServer(server) {
        const additionalPaths = [
          "../../02-goods/client/dist",
          "../../01-packages/common/dist",
          "../../01-packages/component-library/dist",
        ];

        additionalPaths.forEach((path) => {
          server.watcher.add(path);
        });

        //@ts-expect-error - implicit any is not something I care to support
        server.watcher.on("change", async (eventName, path, stats) => {
          // console.log(eventName, path, stats);

          if (eventName.includes("vite.config.ts.timestamp")) return;

          if (eventName.includes("..\\..\\")) {
            await server.restart(true);
            server.ws.send({
              type: "full-reload",
              path: "*",
            });
            return;
          }

          await server.restart();
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        });
      },
    },
  ] as PluginOption[],

  resolve: {
    preserveSymlinks: true,
  },

  server: {
    port: 4000,
  },

  esbuild: false,

  build: {
    manifest: true, // This will generate a manifest.json file in the dist directory - used by SW
  },
});
