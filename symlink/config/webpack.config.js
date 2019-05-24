const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const inDevelopment = process.env.NODE_ENV !== 'production';
const htmlTitle = process.env.HTML_TITLE || 'React Boilerplate';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '..', '/dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [
          inDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: process.cwd(),
      },
    ),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      title: htmlTitle,
    }),
    new MiniCssExtractPlugin({
      filename: inDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: inDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here http://localhost:8080'],
      },
    }),
  ],
};
