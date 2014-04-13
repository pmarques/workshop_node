var buf1 = new Buffer(26);
var buf2 = buf1.slice( 10, 20 );

var buf3 = new Buffer( 10 );

for (var i = 0 ; i < 26 ; i++) {
	buf1[i] = i + 97; // 97 is ASCII a
}

console.log( buf1.toString() );
console.log( buf2.toString() );
console.log( buf3.toString() );

buf1.copy( buf3 );

for (var i = 0 ; i < 26 ; i++) {
	buf2[i] = 33; // ASCII !
}

console.log( buf1.toString() );
console.log( buf2.toString() );
console.log( buf3.toString() );
