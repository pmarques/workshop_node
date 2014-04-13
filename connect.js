var connect = require( 'connect' );

var port = 3000;
var app = connect();

app.use( connect.errorHandler() );
app.use( connect.logger() );
app.use( connect.static( './public' ) );
app.use( connect.query() );
app.use( connect.bodyParser() );
app.use( connect.cookieParser() );
app.use( connect.session({
	secret: 'session secret'
}) );


app.use( function( req, res ) {
	res.write( 'Query String:' + JSON.stringify( req.query, undefined, 2 ) );
	res.write( '\nRequest Body:' + JSON.stringify( req.body, undefined, 2 ) );
	res.write( '\nRequest Cookies:' + JSON.stringify( req.cookies, undefined, 2 ) );
	res.write( '\nSession:' + JSON.stringify( req.session, undefined, 2 ) );
	res.end();
});

app.listen( port, function() {
	console.log('Server is listening on port', port );
})
