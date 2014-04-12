var http = require( 'http' );

var options = {
	port : 3000
}

var req = http.request(options, function(response) {
	response.on("data", function(data) {
		console.log("some data from the response", data.toString());
	});
	response.on("end", function() {
		console.log("response ended");
	});
});

req.end();
