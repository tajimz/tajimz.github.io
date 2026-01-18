import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: 'tr-tajim',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/blogs': 'http://localhost:8000',
      '/blogs/*': 'http://localhost:8000',
      '/featured-blogs': 'http://localhost:8000',
      '/projects': 'http://localhost:8000',
      '/featured-projects': 'http://localhost:8000',
    },
  },
})
