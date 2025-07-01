import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'src/demo'), // 👈 this makes demo root
  base: '/open-in-app-akshita/',             // 👈 GitHub Pages path
  build: {
    outDir: path.resolve(__dirname, 'dist'), // 👈 build output to dist
    emptyOutDir: true
  }
});
