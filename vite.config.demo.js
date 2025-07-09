import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'demo'),
  base: '/OpenInApp/',
  build: {
    outDir: 'docs', // ✅ inside demo/, clean structure
    sourcemap: true,
  },
});
