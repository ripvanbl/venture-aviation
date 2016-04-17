'use strict';

var webpack = require('webpack');
//var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: "./client/app.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      // https://github.com/webpack/css-loader
      // https://github.com/webpack/style-loader
      test: /\.css$/, 
      loader: 'style-loader!css-loader'
    }, {
      // https://github.com/webpack/html-loader
      test: /\.html$/,
      loader: "html-loader"
    }, {
      // https://github.com/webpack/file-loader
      test: /\.(png|jpg|gif)$/,
      loader: "file-loader?name=img/img-[hash:6].[ext]"
    }, {
      // https://github.com/webpack/url-loader
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=10000&name=img/img-[hash:6].[ext]"
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.UglifyJsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: 'body'
    }),

    // https://github.com/kevlened/copy-webpack-plugin
    // new CopyWebpackPlugin([{
    //   from: __dirname + '/client/assets/img',
    //   to: 'img'
    // }]),

    // https://github.com/jeffling/ng-annotate-webpack-plugin
    new ngAnnotatePlugin({
      add: true
    })
  ]
};