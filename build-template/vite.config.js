import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '../frontend', // Kyunki asli code frontend folder mein hai
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
