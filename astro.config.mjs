import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alfonsogaribay.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
