var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'mocha!babel!./test/browser/index.spec.js'
  ],
  output: {
    path: path.join(__dirname, 'build'), // 文件存放地址
    filename: 'test-bundle.js',
    publicPath: '/build/' // 发布地址，也就是HTML中引用的地址
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
