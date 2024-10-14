import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  output: 'hybrid',
  integrations: [mdx()],
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    test: {
      globals: true,
      environment: 'jsdom',
    },
  },
});