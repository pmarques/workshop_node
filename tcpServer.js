var server = require('net').createServer();
var port = 3000;
server.on('listening', function() {
	console.log('Server is listening on port', port);
});
server.on('connection', function(socket) {
	console.log('Server has a new connection');

	socket.setEncoding( 'utf8' );
	socket.on('data', function(data) {
		console.log('got:', data.toString())
		if (data.trim().toLowerCase() === 'quit') {
			socket.write('Bye bye!');
			return socket.end();
		}
		socket.write(data);
	});
});
server.on('close', function() {
	console.log('Server is now closed');
});
server.on('error', function(err) {
	console.log('Error occurred:', err.message);
});

server.listen(port);
