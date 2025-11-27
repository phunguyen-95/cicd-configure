import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/cicd-configure/',
  css:  {
    preprocessorOptions : {
      scss: {
        loadPaths: [path.resolve(__filename, 'src/styles')]
      }
    }
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
