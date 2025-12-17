import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/casting': {
        target: 'https://d3tat64zqbamt7.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
      '/api/grn': {
        target: 'https://d3tat64zqbamt7.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
      '/api/reports': {
        target: 'https://d3tat64zqbamt7.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
      '/api/users': {
        target: 'https://d3tat64zqbamt7.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
      '/api/stock': {
        target: 'https://d3tat64zqbamt7.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
      '/api/production': {
        target: 'https://d3tat64zqbamt7.cloudfront.net',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
