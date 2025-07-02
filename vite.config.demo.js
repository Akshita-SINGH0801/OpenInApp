import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'demo'),
  base: '',  // default is fine; empty base works with docs/
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'docs'),
    emptyOutDir: true,
  }
});
