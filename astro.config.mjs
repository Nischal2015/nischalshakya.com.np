import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
  integrations: [tailwind(), astroImageTools],
});
