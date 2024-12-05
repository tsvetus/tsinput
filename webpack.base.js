import { path, root } from './bin/util.js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export { path, root }

export default {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['./src', './docs', './node_modules'],
    alias: {
      tsinput: path.resolve(root, 'src')
    }
  },
  resolveLoader: {
    alias: {
      file: 'raw-loader'
    }
  },
  entry: {
    'tsinput.docs': {
      import: './docs/index.jsx'
    }
  },
  output: {
    path: path.resolve(root, 'public'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
