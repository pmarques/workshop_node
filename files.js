var fs = require('fs');
var path = require('path');
var filePath = path.join('/tmp', 'file.txt');
fs.exists( filePath, function(exists) {
	console.log('exists:', exists);
});
