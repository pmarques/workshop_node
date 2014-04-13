var net = require('net');
var port = 3000;
var host = 'localhost';
var conn = net.createConnection(port, host);
conn.once('connect', function() {
	console.log('connected to server');
	conn.write('Bye bye!', 'utf8');
	setTimeout( function() {
		conn.write('quit', 'utf8');
	}, 2000 );
});
conn.on('data', function(data) {
	console.log('some data has arrived:', data);
});
conn.on('error', function(err) {
	console.error('this error happened:' + err.message + ', code: ' + err.code);
});
