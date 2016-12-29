module.exports = {
  entry: './src/main.js',
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
  devtool: 'cheap-eval-source-map'
}