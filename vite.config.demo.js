import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [react()],
    root: path.resolve(__dirname, 'demo'),
    base: isBuild ? '/OpenInApp/' : '/',
    build: {
      outDir: path.resolve(__dirname, 'docs'), // ✅ put it directly into /docs
      emptyOutDir: true,
    },
  };
});
