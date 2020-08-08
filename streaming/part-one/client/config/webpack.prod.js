/* eslint-disable import/no-extraneous-dependencies */

const dotenv = require('dotenv');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.config.js');

/**
 * During CI we are generating a `.env` file with app specific configuration,
 * Which we are grabbing here during build time.
 * This will load these configs into process.env for our application to utilize.
 */
const env = dotenv.config().parsed;

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env),
  ],
});
