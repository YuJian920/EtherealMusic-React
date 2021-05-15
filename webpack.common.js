const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const WebpackBar = require("webpackbar");
// const NyanProgressPlugin = require("nyan-progress-webpack-plugin");

module.exports = (env) => {
  return {
    entry: { index: "./src/index.js" },
    // 打包目录
    output: { path: path.resolve(__dirname, "dist/") },
    // 生成 index.html
    plugins: [
      new WebpackBar({ name: "EtherealMusic-React", color: "#ff00ff" }),
      // new NyanProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./build/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          use: ["babel-loader"],
          include: path.resolve(__dirname, "src"),
        },
        {
          test: /\.less$/,
          exclude: /\.module\.less$/,
          use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
          sideEffects: true,
        },
        {
          test: /\.module\.less$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
            },
            "postcss-loader",
            "less-loader",
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    cache: {
      type: "filesystem",
      // 可选配置
      buildDependencies: {
        config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
      },
      name: "development-cache",
    },
  };
};
