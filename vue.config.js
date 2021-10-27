/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const vueSrc = "./src";
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = {
  parallel: false,

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        cash: "cash-dom",
        Popper: "@popperjs/core",
      }),
    ],

    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc),
      },
    },
  },
  pluginOptions: {
    apollo: {
      lintGQL: false,
    },
  },
  transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.exclude.add(path.join(__dirname, "node_modules", "@ckeditor"));
    config.module
      .rule("cke-svg")
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
      .use("raw-loader")
      .loader("raw-loader");

    config.module
      .rule("cke-css")
      .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
      .use("postcss-loader")
      .loader("postcss-loader")
      .tap(() => {
        return {
          postcssOptions: styles.getPostCssConfig({
            themeImporter: {
              themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
            },
            minify: true,
          }),
        };
      });

    config.plugin("html").tap((args) => {
      args[0].title = "UBIASOKO - PORTAL";
      return args;
    });
  },
};
