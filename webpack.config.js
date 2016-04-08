var webpack = require('webpack');
var path = require('path');

require('es6-promise').polyfill();

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    javascript: [
      'webpack-dev-server/client?http://127.0.0.1:8080',
      'webpack/hot/only-dev-server',
      './app.js'
    ],
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
