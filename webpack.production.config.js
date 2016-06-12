var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/browser/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'), // 文件存放地址
    filename: 'bundle.js',
    publicPath: '/build/' // 发布地址，也就是HTML中引用的地址
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
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
