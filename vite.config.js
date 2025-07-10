import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import analyze from 'vite-bundle-analyzer';

export default defineConfig({
  plugins: [react(), analyze()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group common dependencies into a vendor chunk
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            // Add other large dependencies here (e.g., 'lodash', 'date-fns')
          ],
          // Optional: Group route-specific utilities or components
          // utils: ['./src/utils/someUtility.js'], // Adjust based on your project
        },
      },
    },
  },
});