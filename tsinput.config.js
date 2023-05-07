const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['./src', './node_modules']
  },
  entry: {
    tsinput: {
      import: './src/index.js',
      library: {
        name: 'tsinput',
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
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
}
