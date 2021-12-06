const  { createProxyMiddleware } = require("http-proxy-middleware");
const URL = `https://dsa-book-backend.herokuapp.com`
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: URL,
      changeOrigin: true
    })
  );
};