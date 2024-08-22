const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open:true,
    hot:false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};
