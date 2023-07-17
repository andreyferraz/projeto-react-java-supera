const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // Atualize com a URL correta da API Java
      changeOrigin: true,
    })
  );
};
