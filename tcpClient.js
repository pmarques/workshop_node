var net = require('net');
var port = 3000;
var host = 'localhost';
var conn = net.createConnection(port, host);
conn.once('connect', function() {
	console.log('connected to server');
	process.stdin.resume();
	process.stdin.pipe(conn);
	conn.pipe(process.stdout);
});
conn.on('end', function(data) {
	process.stdin.pause();
})
conn.on('data', function(data) {
	console.log('some data has arrived:', data);
});
conn.on('error', function(err) {
	console.error('this error happened:' + err.message + ', code: ' + err.code);
});
