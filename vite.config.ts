import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/sampleShadowDomApp/',
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'docs',
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/shadowDomWrapper.tsx'),
      name: 'sampleShadowDomApp',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: 'index.css',
      }
    }
  },
});
