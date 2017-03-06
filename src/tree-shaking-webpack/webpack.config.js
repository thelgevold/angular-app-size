const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: './src/tree-shaking-webpack/main.js',
  output: {
    filename: 'dist/webpack-tree-shaken-bundle.js'
  },
  plugins: [
    new UglifyJsPlugin({
      beautify: false, 
      output: {
        comments: false
      }, 
      mangle: {
        screw_ie8: true
      }, 
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      },
    })
  ]
}