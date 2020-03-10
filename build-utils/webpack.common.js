const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // styles
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?modules=true',
          'postcss-loader?sourceMap=true',
          'stylus-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?modules=true',
          'postcss-loader?sourceMap=true',
        ],
      },
      // images
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.svg/i,
        loader: 'file-loader?name=svg/[name].[ext]',
      },
      // fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, '..', 'src/actions'),
      assets: path.resolve(__dirname, '..', 'src/assets'),
      components: path.resolve(__dirname, '..', 'src/components'),
      constants: path.resolve(__dirname, '..', 'src/constants'),
      routes: path.resolve(__dirname, '..', 'src/routes'),
      reducers: path.resolve(__dirname, '..', 'src/reducers'),
      store: path.resolve(__dirname, '..', 'src/store'),
      sagas: path.resolve(__dirname, '..', 'src/sagas'),
      utils: path.resolve(__dirname, '..', 'src/utils'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React boilerplate',
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../', 'public'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
};
