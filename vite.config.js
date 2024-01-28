import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import indexPosts from './hooks/indexPosts/indexPosts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
      base: '/blog/',
      plugins: [
        {
          name: 'build-index',
          buildStart(options) {
            // console.log(options);
            indexPosts();
            return;
          }
        },
        react()
      ],
    }
})
