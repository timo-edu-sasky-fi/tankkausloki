import { VitePWA } from "vite-plugin-pwa";
import manifest from './manifest.json';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),
            VitePWA({ manifest: manifest })],
})



