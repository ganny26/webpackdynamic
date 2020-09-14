const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: {
    app: './src/appstyles.js',
    script: './src/script.js',
    script1: './src/script2.js',
    script2: './src/script1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[hash].bundle.js',
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
