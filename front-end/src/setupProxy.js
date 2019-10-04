const proxy = require("http-proxy-middleware");
// proxy 中间件的选择项

let serverUrl = require('../proxyUrl');
var options = {
	target: serverUrl,
	changeOrigin: true,
	pathRewrite: {
		"^/api": "/"
	}
};
// 创建代理
var myProxy = proxy(options);
module.exports = function(app) {
	app.use("/api",myProxy);
};
