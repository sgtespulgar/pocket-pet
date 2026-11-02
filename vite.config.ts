import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Pocket Pet',
        short_name: 'Pocket Pet',
        description: 'Take care of your own little virtual pet.',
        theme_color: '#f8e8d8',
        background_color: '#f8e8d8',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/icons/pet-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ]
})
