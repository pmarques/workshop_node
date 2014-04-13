var fs = require('fs');

var serverOptions = {
	key: fs.readFileSync('./my_key.pem'),
	cert: fs.readFileSync('./my_cert.pem')
};

var http = require('https');
var server = http.createServer( serverOptions );
server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!');
	res.end();
});

server.listen(3000);
console.log('Server is listening on port', 3000 );
