import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Use modern JavaScript
    minify: "esbuild", // Faster minification
    chunkSizeWarningLimit: 500, // Avoid warning on large chunks
  },
});
