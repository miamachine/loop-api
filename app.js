
// load needed modules
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

// connect to database 
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

// find data models
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

var app = express();

require('./config/express')(app, config);

/* new 
app.use(logger('dev'));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if(req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

// Auth Middleware
app.all('/api/v1/*', [require('./middlewares/validateRequest')]);

app.use('/', require('./routes'));

// if no route is matched by now, it must be a 404
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// start the server
//app.set('port', process.env.PORT || 3000);
*/

app.get('/', function(req, res) {
	res.send('Loop API is running');
})

app.listen(config.port);

