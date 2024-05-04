/* eslint-disable import/no-extraneous-dependencies */
import autoprefixer from 'autoprefixer';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ENV_DEV = 'development';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName:
        mode === ENV_DEV ? '[name]__[local]' : '[hash:base64]',
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
}));
