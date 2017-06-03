const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: './src/webpack-babili/main.js',
  output: {
    filename: 'dist/webpack-tree-shaken-babili-bundle.js'
  },
  plugins: [
    new BabiliPlugin({}, {comments: false})
  ]
}