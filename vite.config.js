import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import';

const proxyHost = 'https://jiazheng.58.com';
const proxyConfig = {};

[
    '^/api/v1/c/',
    '^/api/v1/a/',
    '^/api/v1/basis/',
    '^/api/v1/',
].forEach((url) => {
    proxyConfig[url] = {
        target: proxyHost,
        ws: false,
        changeOrigin: true,
        secure: false,
    };
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [
              {
                libraryName: 'vant',
                esModule: true,
                resolveStyle: (name) => `vant/es/${name}/style`,
              },
            ],
          }),],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
        }
    },
    base: './', // 设置打包路径
    server: {
        host:'dev.58.com',
        port: 4000, // 设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
        cors: true, // 允许跨域
        https: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },

        // 设置代理
        proxy: proxyConfig,
    }
})
