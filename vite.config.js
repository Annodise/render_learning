import { defineConfig } from "vite";
import { resolve } from "path"

import react from "@vitejs/plugin-react";


export default defineConfig({
  root: ".",
  plugins: [react()],


  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        //main: resolve(__dirname, "./src/main_page/index.html"), // ✅ หน้าแรกของเว็บ
        main: resolve(__dirname, "./index.html"),
        page01: resolve(__dirname, "./src/page01/index.html")
      },
    },
  },


});
