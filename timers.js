var timer = setInterval( function() {
	console.log( 'again' );
}, 600 );

setTimeout( function() {
	clearInterval( timer );
}, 2500 );
