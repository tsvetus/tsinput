/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['./src', './node_modules']
  },
  entry: {
    tsinput: {
      import: './src/index.js',
      library: {
        type: 'commonjs2'
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.js$|\.jsx$|\.ts$|\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
}
