import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@public': path.resolve(__dirname, './public/'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    open: true,
    port: 3001,
    host: true,
  },
})
