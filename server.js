var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: 'www',
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
});
server.listen(8080, 'localhost', () => {
  console.log('Server started, webpack is compiling...');
});
