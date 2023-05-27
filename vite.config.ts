import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()',
    },
  },
  plugins: [react()],
});
