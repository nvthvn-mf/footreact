import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        proxy: {
            // On crée un tunnel : quand tu appelles /api, Vite va chercher sur l'API de foot
            '/api': {
                target: 'https://api.football-data.org/v4',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
