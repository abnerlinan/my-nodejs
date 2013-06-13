
/**
* Module dependencies.
*/

var express = require('express')
, engine = require('ejs-locals')
, routes = require('./routes')
, user = require('./routes/user')
, route = require('./routes/route')
, login = require('./login/login')
, http = require('http')
, db = require('./db/mydb')
, path = require('path');
  
var app = express();

// all environments
app.engine('ejs', engine);

app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('asdasddadasdas'));
app.use(express.session());
app.use(app.router);

app.use(require('stylus').middleware(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//route list
route.route(app,routes,user,login);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
