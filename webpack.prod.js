import webpackBase from './webpack.base.js'

export default {
  ...webpackBase,
  mode: 'production',
  optimization: {
    minimize: true
  }
}
