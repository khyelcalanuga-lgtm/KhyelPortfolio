import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   plugins: [react()],
   assetsInclude: ['**/*.docx'], // Add this line
   server: {
    hmr: {
      overlay: false // Optional: disable error overlay if needed
    }
  }
})