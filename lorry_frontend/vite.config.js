import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import purgecss from 'vite-plugin-purgecss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      // You can add more options here if needed
    }),
  ],
});
