import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/mfe-dummy-vite-app/', // Matches the "homepage" field in package.json
  plugins: [react()],
});
