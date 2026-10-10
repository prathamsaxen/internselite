import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The October 4 API has no CORS headers. This proxy lets the React app
// call the same routes on port 3000 during `npm run dev`.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
