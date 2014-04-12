var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyClass = function() {
}

util.inherits(MyClass, EventEmitter);

var c = new MyClass();

c.on('someEvent', function( data ) {
	console.log( "Data:", data );
});

c.emit('someEvent', "Some data");
