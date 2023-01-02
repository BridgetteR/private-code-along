import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // so I don't need to inport describe and it every time
        environment: "jsdom",
        setupFiles: "./config/setup.js",
    },
});
