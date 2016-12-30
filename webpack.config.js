var path;
path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
    alias: {
      underscore: 'vendor/underscore'
    }
  },
  devtool: 'cheap-eval-source-map'
}