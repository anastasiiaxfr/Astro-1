import { defineConfig } from "astro/config"
import yaml from '@rollup/plugin-yaml';

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

  vite: {
    plugins: [tailwindcss(), yaml() ]
  }
})

import { defineConfig } from 'astro/config';

