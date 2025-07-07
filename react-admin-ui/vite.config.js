import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"


// https://vite.dev/config/
export default defineConfig({
   base: './',
  plugins: [react(), tailwindcss()],
   build: {
    outDir: "../woo-dash/dist", // directly builds into your plugin folder
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/main.jsx",
      output: {
        entryFileNames: "app.js",
        assetFileNames: "app.css",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
