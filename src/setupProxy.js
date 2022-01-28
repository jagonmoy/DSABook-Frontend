const { createProxyMiddleware } = require('http-proxy-middleware');

let URL;
if (process.env.REACT_APP_ENV === 'production') URL = process.env.REACT_APP_BACKEND_URL_PRODUCTION;
else if (process.env.REACT_APP_ENV === 'test') URL = process.env.REACT_APP_BACKEND_URL_TEST;

module.exports = function(app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: URL,
			changeOrigin: true
		})
	);
};