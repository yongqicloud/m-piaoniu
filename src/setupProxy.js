const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://m.piaoniu.com',
      changeOrigin: true,
    })
  )
}