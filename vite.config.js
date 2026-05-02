import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fixes the "motion/react" not found error
      "motion/react": "framer-motion",
      // Allows you to use @/utils/cn instead of ../../utils/cn if you want
      "@": path.resolve(__dirname, "./src"),
    },
  },
});