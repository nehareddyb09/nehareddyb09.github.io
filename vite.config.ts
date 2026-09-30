import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ⚠️ Set the base path to your GitHub repository name
  // Replace <repository-name> with your exact repo name (keep the slashes)
  base: mode === "production" ? "/nehareddyb09.github.io/" : "/", 
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    tailwindcss(), 
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
