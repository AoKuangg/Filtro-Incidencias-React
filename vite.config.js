import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv("development", process.cwd(), "VITE")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: env.VITE_SERVER.port,
    hostname: env.VITE_SERVER.hostname
  }
})
