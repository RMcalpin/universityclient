const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client-call.js', // Adjust if needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'json', // Built-in in Webpack 5, no need for json-loader
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/test.html',
      filename: 'test.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/dept-insert.html',
      filename: 'dept-insert.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  mode: 'development',
};