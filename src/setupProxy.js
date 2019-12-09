const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    'v2',
    proxy({
      target: 'https://as-vip.missfresh.cn',
      changeOrigin: true,
    })
  )
}