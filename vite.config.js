import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  Plugin: [react()],
  test: {
    environment: 'happy-dom'
  }
})
