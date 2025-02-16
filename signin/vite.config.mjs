import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Change this to your desired port
    strictPort: true, // Prevents Vite from switching to a different port if 3001 is busy
  },
  css: {
    postcss: 'postcss.config.mjs', // Correct the path (No need for `postcss:`)
  },
});


