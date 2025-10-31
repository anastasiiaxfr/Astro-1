import { defineConfig } from "astro/config"
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  i18n: {
   defaultLocale: "en",
    locales: ["en", "fr", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    },
    fallback: {
      fr: "en", 
      ru: "en"  
    },
   
  },
  site: 'https://astro-1-coral.vercel.app',

  integrations: [sitemap({
			entryLimit: 1000,
			changefreq: 'weekly',
			priority: 0.7
		})],
  vite: {
    plugins: [tailwindcss(), yaml() ]
  }
})

import { defineConfig } from 'astro/config';

