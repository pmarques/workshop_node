var fs = require('fs');
var path = require('path');
var filePath = path.join('/tmp', 'file.txt');
fs.exists( filePath, function(exists) {
	console.log('exists:', exists);

	if( !exists ) return;

	fs.open( filePath, 'r', function opened( err, fd ) {
		if (err) { throw err }
		var readBuffer = new Buffer(1024),
		bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 0;

		function read( err, readBytes ) {
			if (err) { throw err; }
			console.log('just read ' + readBytes + ' bytes');
			if (readBytes > 0) {
				console.log(readBuffer.slice(0, readBytes));
			}
		}

		fs.read( fd, readBuffer, bufferOffset, bufferLength, filePosition, read );
	});
});
