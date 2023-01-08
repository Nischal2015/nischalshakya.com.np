import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
  integrations: [tailwind(), mdx(), astroImageTools],
});
