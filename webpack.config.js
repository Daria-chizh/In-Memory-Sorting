const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: argv.mode === 'development' ? '/' : '/In-Memory-Sorting/',
  },
  entry: [
    './src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
});
