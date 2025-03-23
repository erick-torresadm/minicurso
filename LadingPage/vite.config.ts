import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression()
  ],
  build: {
    outDir: 'dist',
    minify: 'terser',
  },
  server: {
    port: 3001,
    host: true
  }
});
