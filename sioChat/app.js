/**
 * Module dependencies.
 */

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , sio = require('socket.io');

/**
 * App.
 */

var app = express.createServer();

/**
 * App configuration.
 */

app.configure(function () {
  app.use( express.bodyParser() );
  app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname);
  app.set('view engine', 'jade');
  app.set('view options', {
	    layout: false
  });

  function compile (str, path) {
    return stylus(str)
      .set('filename', path)
      .use(nib());
  };
});

/**
 * App routes.
 */
var users = [];

app.get('/', function (req, res) {
  res.render('index', { layout: false });
});

app.get('/users', function(req, res){
	res.render('users', {title: 'Users', users: users});
});

app.get('/users/new', function (req, res) {
  res.render('register');
});

app.get('/users/:name', function(req, res, next){
	var user = users[req.params.name];
	if (user) {
		res.render('profile', {title: 'User profile', user: user});
	} else {
		next();
	}
});

app.post('/users', function(req, res) {
	console.log( 'Registering new user' );
	if (users[req.body.username]) {
		res.send('Conflict', 409);
	} else {
		users[req.body.username] = req.body;
		res.redirect('/users');
	}
});

/**
 * App listen.
 */

app.listen(3000, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});

/**
 * Socket.IO server (single process only)
 */

var io = sio.listen(app)
  , nicknames = {};

io.sockets.on('connection', function (socket) {
  socket.on('user message', function (msg) {
    socket.broadcast.emit('user message', socket.nickname, msg);
  });

  socket.on('nickname', function (nick, fn) {
    if (nicknames[nick] || !users[nick]) {
      fn(true);
    } else {
      fn(false);
      nicknames[nick] = socket.nickname = nick;
      socket.broadcast.emit('announcement', nick + ' connected');
      io.sockets.emit('nicknames', nicknames);
    }
  });

  socket.on('disconnect', function () {
    if (!socket.nickname) return;

    delete nicknames[socket.nickname];
    socket.broadcast.emit('announcement', socket.nickname + ' disconnected');
    socket.broadcast.emit('nicknames', nicknames);
  });
});
