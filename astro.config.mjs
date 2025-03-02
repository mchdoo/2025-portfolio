import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import vue from "@astrojs/vue";
import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  integrations: [
    alpinejs(),
    vue(),
    sanity({
      projectId: "vdh771pd",
      dataset: "production",
      useCdn: true,
    }),
  ],

  adapter: vercel(),
});
