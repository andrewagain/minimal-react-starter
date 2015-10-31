var path = require('path');
var projectRoot = __dirname;

var config = {
  // Must be an absolute path or watching feature will fail
  context: path.join(projectRoot, 'js'),
  entry: './index.js',
  output: {
    path: path.join(projectRoot, 'html'),
    filename: 'bundle.js',
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
};
module.exports = config;
