import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const basePath = env.PUBLIC_BASE_PATH || '/truanayangii/';

  return {
    plugins: [react()],

    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true,
    },

    preview: {
      host: '127.0.0.1',
      port: 4173,
      strictPort: true,
    },

    base: basePath,

    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
