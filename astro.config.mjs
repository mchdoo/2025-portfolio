import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import vue from "@astrojs/vue";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs(),
    vue(),
    sanity({
      projectId: "vdh771pd",
      dataset: "production",
    }),
  ],
});
