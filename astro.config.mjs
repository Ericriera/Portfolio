// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url),
      },
    },
  },

  integrations: [icon({
    iconDir: "src/assets/icons",
  }), solidJs()],

  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});