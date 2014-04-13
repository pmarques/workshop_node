var request = require('request');

function onRequestDone( err, res, body ) {
	if (err) { throw err; }
	console.log('STATUS:', res.statusCode);
	console.log('HEADERS:', res.headers);
	console.log('BODY:', body);
}

request('http://localhost:3000', onRequestDone );
