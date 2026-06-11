// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: cambien esta URL por el dominio real cuando lo tengan.
// Se usa para el sitemap, las URLs canónicas y el feed RSS.
export default defineConfig({
  site: 'https://lacreciente.org',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
