import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import fs from 'fs';

const host = 'isola2.dev'
export default defineConfig({
    server: {
        host,
        hmr: { host },
        https: {
            key: fs.readFileSync('C:\\laragon\\etc\\ssl\\laragon.key'),
            cert: fs.readFileSync('C:\\laragon\\etc\\ssl\\laragon.crt')
        }
    },
    plugins: [
        laravel({
            input: "resources/js/app.js",
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    ssr: {
        noExternal: ["vue", "@protonemedia/laravel-splade"]
    },
});
