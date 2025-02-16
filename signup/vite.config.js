import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to your desired port
    strictPort: true, // Prevents Vite from switching to a different port if 3001 is busy
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});