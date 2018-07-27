const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: ["webpack-hot-middleware/client?path=/__webpack_hmr", "./main.js"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
