import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    // Distinto puerto que el backend (4000), así podés correr los dos a la vez.
    // Coincide con FRONTEND_URL=http://localhost:5500 del .env del backend.
    port: 5500
  }
})