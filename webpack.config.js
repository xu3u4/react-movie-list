const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: [/node_modules/],
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|png)$/,
        use: ['file-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
  resolve: {
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname+'/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
