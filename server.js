var http = require('http');
var fs = require('fs');

var handleRequest = function (request, response) {
};

var server = http.createServer(handleRequest);

server.listen(1337);
