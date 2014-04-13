var async = require( 'async' );

async.waterfall([
		function( next ){
			setTimeout( function() {
				console.log( 'task A' );
				next( null, Math.random() );
			}, 2000 );
		},
		function( value, next ){
			setTimeout( function() {
				console.log( 'task B' );
				next( null, value * 1000 );
			}, 1000 );
		}
], function( ) {
	console.log( arguments )
});
