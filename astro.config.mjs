import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://joshijam.club', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), icon({ iconDir: 'src/components/svg' })], // Add renderers to the config
  security: {
    checkOrigin: false
  },
  redirects: {
    "/google": "https://google.com",
    "/events/past/eorzealand-cupsleeve": "/events/eorzealand-cupsleeve/",
    "/events/past/feileacancu-bday-cafe": "/events/feileacancu-bday-cafe/",
  }
});
