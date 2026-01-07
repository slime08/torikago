// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://torikago.net', // デプロイ時に実際のURLに変更
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
