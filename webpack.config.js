var path = require('path');
var webpack = require('webpack');
var projectRoot = __dirname;

var config = {
  context: path.join(projectRoot, 'src'),
  entry: [
    './index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
  ],
  output: {
    path: path.join(projectRoot, 'html'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ],
  },
  resolveLoader: {
    root: [
      path.join(projectRoot, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(projectRoot, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = config;
