import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/sampleShadowDomApp/', // Matches the "homepage" field in package.json
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'docs',
    lib: {
      entry: path.resolve(__dirname, 'src/shadowDomWrapper.tsx'),
      name: 'sampleShadowDomApp',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'index.css',
      }
    }
  },
});
