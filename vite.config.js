import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'templates',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../static',
          dest: ''
        }
      ]
    })
  ]
});
