var fs = require('fs');
require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/ogg'});
	var rs = fs.createReadStream('/home/pmarques/Downloads/big_buck_bunny_720p_stereo.ogg');
	console.log( 'Start streaming' );
	rs.pipe(res);
}).listen(3000)
console.log('Server is listening on port', 3000);
