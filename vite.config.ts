import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~components': path.resolve(__dirname, 'src/components'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~features': path.resolve(__dirname, 'src/features'),
      '~mock': path.resolve(__dirname, 'src/mock'),
      '~constants': path.resolve(__dirname, 'src/constants'),
      '~shared': path.resolve(__dirname, 'src/shared'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~routes': path.resolve(__dirname, 'src/routes'),
    },
  },
});
