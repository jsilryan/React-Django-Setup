import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./public",
  build: {
    manifest: true,
    rollupOptions: {
      // input: '/path/to/main.jsx',
      assetFileNames: (file) => {
        return `assets/css/index.min.css`
      },
      entryFileNames: (file) => {
        return "assets/js/[name].min.js"
      }
    }
  }
})
