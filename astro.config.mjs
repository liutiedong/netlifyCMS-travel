import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://peaceful-rolypoly-ce4360.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react()
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
});