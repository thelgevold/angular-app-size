var path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const webpack = require('webpack');

module.exports = {
  entry : {
    person: './src/code-splitting-webpack/person-service.js',
    car: './src/code-splitting-webpack/car-service.js'
  },
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../../dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'lib',
        minChunks: 3,
        filename: '[name].js',
    })
  ]
}