import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv("development", process.cwd(), "VITE")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4144,//env.VITE_SERVER.port,
    host: env.VITE_HOSTNAME
  }
})
