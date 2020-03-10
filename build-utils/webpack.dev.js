const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development',
    }),
    new DashboardPlugin(),
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
