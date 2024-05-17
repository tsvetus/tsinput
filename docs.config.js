const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['./src', './docs', './node_modules'],
    alias: {
      tsinput: path.resolve(__dirname, 'src')
    }
  },
  entry: {
    'tsinput.docs': {
      import: './docs/index.jsx'
    }
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  }
}
