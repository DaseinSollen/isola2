import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import fs from 'fs';

let server = {}
if(import.meta.env.APP_DEBUG){
    const host = 'isola2.dev'
    server = {
        host,
            hmr: { host },
        https: {
            key: fs.readFileSync('C:\\laragon\\etc\\ssl\\laragon.key'),
                cert: fs.readFileSync('C:\\laragon\\etc\\ssl\\laragon.crt')
        }
    }
}


export default defineConfig({
    server: server,
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
