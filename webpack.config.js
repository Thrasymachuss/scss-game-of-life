const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/scss/index.scss"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/i,
        use: [{ loader: "ejs-easy-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.ejs",
      excludeAssets: ["bundle.js", "bundle.js.map"],
    }),
  ],
};
