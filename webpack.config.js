const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    lib: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: '[name].bundle.js'
  },
  optimization: {
    noEmitOnErrors: true
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@linaria/webpack5-loader',
            options: { sourceMap: dev }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: dev }
          }
        ]
      }
    ]
  }
};
