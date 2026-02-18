// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://leon4rdodev.vercel.app',
  integrations: [icon()],
  server: { host: true },
});
