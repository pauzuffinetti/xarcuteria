import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/xarcuteria/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Incluir archivos con extensión .JPG como activos
})
