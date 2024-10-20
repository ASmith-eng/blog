import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import indexPosts from './hooks/indexPosts/indexPosts';

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode, ssrBuild }) => {
  if (command === 'build') {
    const indexResult = await indexPosts();
  }
  return {
    base: '/blog/',
    plugins: [
      // {
      //   name: 'build-index',
      //   async buildStart(options) {
      //     // console.log(options);
      //     await indexPosts();
      //     return;
      //   }
      // },
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
