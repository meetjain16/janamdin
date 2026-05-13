import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    ssr: false,
    rollupOptions: {
      external: ["node:async_hooks"],
    },
  },
  ssr: {
    external: ["node:async_hooks"],
  },
});