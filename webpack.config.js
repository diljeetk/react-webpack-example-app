"use strict";

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: "./src/main.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}

module.exports = config;
