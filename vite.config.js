import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig((command, mode, ssrBuild) => {
  if(command==='build') {
    // config for built version (production)
    return {
      base: 'https://asmith-eng.github.io/blog/',
      plugins: [react()],
    }
  } else {
    // config for 'serve' and 'dev' (local)
    return {
      base: '/',
      plugins: [react()],
    }
  }
})
