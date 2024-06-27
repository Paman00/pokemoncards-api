import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pokemoncards-api/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(path.join(__dirname, '/src'))
      },
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, '/src/components'))
      },
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages'))
      },
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname, '/src/assets'))
      }
    ]
  }
});
