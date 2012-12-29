var express = require('express'),
	app = express(),
	httpPort = 2000;

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index', { title: 'TwitterApp'} );
});

app.listen(httpPort);
console.log('Listening on port ' + httpPort);
