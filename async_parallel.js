var async = require( 'async' );

async.parallel([
		function( next ){
			setTimeout( function() {
				console.log( 'task A' );
				next( null, 1 );
			}, 2000 );
		},
		function( next ){
			setTimeout( function() {
				console.log( 'task B' );
				next( null, 2 );
			}, 1000 );
		}
], function( ) {
	console.log( arguments )
});
