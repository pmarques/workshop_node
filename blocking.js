setTimeout( function() {
	console.log( 'again' );
}, 500 );

setTimeout( function() {
	var i = 0;
	while( i < 5e9 ) {
		i++
	}
}, 200 );
