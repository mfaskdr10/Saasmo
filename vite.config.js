import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url"; // 1. Import this helper

// 2. create a variable for __dirname (required since you are using modules)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 3. Correct structure (no double nesting) and safe path resolution
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Ini mengizinkan akses via IP Network
  },
});
