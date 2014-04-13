var str1 = new Buffer( 'SGVsbG8gd29ybGQK', 'base64');
var str2 = new Buffer( 'This is will be enconded' );

console.log( str1.toString() );
console.log( str2.toString( 'base64' ) );
