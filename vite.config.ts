import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        assetsInlineLimit: 0,
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/png|jpe?g|gif|tiff|bmp|ico|webp|svg/.test(ext)) {
                return `assets/images/[name][extname]`;
              } else if (/woff|woff2|ttf|otf|eot/.test(ext)) {
                return `assets/fonts/[name][extname]`;
              } else if (ext === 'css') {
                return `assets/css/[name][extname]`;
              }
              return `assets/[name][extname]`;
            }
          }
        }
      },
      server: {
        middlewareMode: true
      }
    };
});
