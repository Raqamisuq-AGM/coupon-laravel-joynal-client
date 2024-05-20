import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/admin/main.scss", "resources/js/app.jsx"],
            ssr: "resources/js/ssr.jsx",
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: "localhost",
        port: 5173,
    },
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
