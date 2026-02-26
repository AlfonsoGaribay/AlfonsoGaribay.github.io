import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://alfonsogaribay.github.io',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
