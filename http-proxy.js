var http = require("http"),
  httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer();

var DELAY = 5000;
var DELAY = 01;

http
  .createServer(function(req, res) {
    // This simulates an operation that takes 500ms to execute
    setTimeout(function() {
      proxy.web(req, res, {
        target: "http://localhost:8080",
      });
    }, DELAY);
  })
  .listen(3500);
