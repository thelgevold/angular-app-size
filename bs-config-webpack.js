module.exports = {
  server : {
    middleware : { 
      2 : require('compression')(),
      1: require('connect-history-api-fallback')({index: '/index-webpack.html', verbose: true})
    }
  }
};