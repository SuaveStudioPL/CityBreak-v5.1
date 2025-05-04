import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Nasłuchuj na wszystkich interfejsach sieciowych
    port: 3000,      // Można też jawnie ustawić port, jeśli jest inny niż domyślny
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  envPrefix: 'VITE_',
});
