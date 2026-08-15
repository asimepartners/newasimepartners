import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
        portfolio: path.resolve(__dirname, 'portfolio.html'),
        media: path.resolve(__dirname, 'media.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        terms: path.resolve(__dirname, 'terms.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
