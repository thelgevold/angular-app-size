module.exports = {
  server : {
    middleware : { 1 : require('compression')({index: '/index-webpack.html', verbose: true}) }
  }
};