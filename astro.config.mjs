// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// URL del sitio (sitemap, canónicas y RSS). Cambiar al dominio propio
// cuando lo tengan (p. ej. https://lacreciente.org).
export default defineConfig({
  site: 'https://lacreciente.netlify.app',
  integrations: [icon(), sitemap()],
  // Precarga las páginas internas al pasar el mouse → navegación instantánea.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
