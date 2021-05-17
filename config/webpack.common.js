const paths = require("./paths");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
  entry: [paths.src + "/index.js"],
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  plugins: [
    new WebpackBar({ name: "EtherealMusic-React", color: "#ff00ff" }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: paths.public + "/index.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },

      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.module\.css$/,
        use: ["style-loader", { loader: "css-loader" }, "postcss-loader"],
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
          { loader: "css-loader" },
          "postcss-loader",
          "less-loader",
        ],
      },

      { test: /\.svg$/, use: ["@svgr/webpack"] },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: "asset/inline" },
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
