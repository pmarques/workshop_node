var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!');
	res.end();
});

server.listen(3000);
console.log('Server is listening on port', 3000 );
