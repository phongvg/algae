import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import inject from "@rollup/plugin-inject";
import postcssPlugin from "postcss-import";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    inject({
      jQuery: "jquery",
    }),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  optimizeDeps: {
    include: ["jquery"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
      less: {
        charset: false,
      },
    },
    charset: false,
    postcss: {
      plugins: [
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
