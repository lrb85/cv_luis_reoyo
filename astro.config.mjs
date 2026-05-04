import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://curriculum.genkipool.com',
  base: '/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
