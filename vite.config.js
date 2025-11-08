import { defineConfig } from "vite";
import { resolve } from "path"

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  root: ".",
  plugins: [react()],

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        //main: resolve(__dirname, "./src/main_page/index.html"), // ✅ หน้าแรกของเว็บ
        main: resolve(__dirname, "./index.html")
      },
    },
  },


  server: {
  port: 5173,
  open: '/src/main_page/index.html', // ✅ เวลา dev ให้เปิดหน้านี้โดยอัตโนมัติ
  },


});
