import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/v2/",
  plugins: [react()],
  server: {
    // origin: 'http://127.0.0.1:8080/',
    host: true,
  },
});
