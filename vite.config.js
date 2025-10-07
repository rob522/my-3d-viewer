import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-3d-viewer/", // This ensures your site works on GitHub Pages
  plugins: [react()],
});
