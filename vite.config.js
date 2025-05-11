import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import indexPosts from './hooks/indexPosts/indexPosts';

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode, ssrBuild }) => {
  if (command === 'build') {
    // before the config returns we must run our indexPosts hook
    // necessary because .env.local must be created before build starts
    // attempting with onBuildStart rollup hook would be nice but does not capture env vars in build properly
      await indexPosts();
  }

  return {
    base: '/',
    plugins: [
      react()
    ],
    build: {
      outDir: 'dist',
    },
    publicDir: 'public',
    server: {
      watch: {
        ignored: ['**/.env*']
      }
    }
  }
})
