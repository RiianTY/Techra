import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    cssCodeSplit: true,
    cssMinify: true, // Use built-in CSS minification
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@heroui/react", "@heroui/theme"],
        },
      },
    },
  },
  css: {
    devSourcemap: false,
  },
});
