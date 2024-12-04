import webpackBase, { path, root } from './webpack.base.js'

export default {
  ...webpackBase,
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(root, 'public')
    },
    compress: true,
    port: 9000
  }
}
