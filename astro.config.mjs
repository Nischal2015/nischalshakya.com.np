import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],
});
