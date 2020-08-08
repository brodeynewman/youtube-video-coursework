/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    /**
     * Makes it so that when WDS is running, it serves index.html for every route.
     * ex: '/foo/bar' resolves to -> /index.html
     */
    historyApiFallback: true,
    contentBase: './dist',
    quiet: true,
    hot: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
