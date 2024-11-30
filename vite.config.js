import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173,  // Use Heroku's dynamic PORT or default to 4173
    host: '0.0.0.0', // Allow access from external network (necessary for Heroku)
  },
})


