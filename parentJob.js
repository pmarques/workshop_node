var spawn = require('child_process').spawn;
var child = spawn('node', ['childWorker.js']);
child.on('exit', function(code) {
	console.log('child process terminated with code ' + code);
	clearInterval( timer );

});
var timer = setInterval(function() {
	var number = Math.floor(Math.random() * 10000);
	child.stdin.write(number + "\n");
	child.stdout.once('data', function(data) {
		console.log('child replied to ' + number + ' with: ' + data);
	});
}, 1000);

child.stderr.once('data', function(data) {
	console.log('ERR: ' + data);
});

setTimeout(function() {
	console.log( 'Send signal' );
	child.kill( 'SIGUSR2' );
}, 4500);
