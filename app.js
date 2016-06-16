var express  = require('express');
var	app		 = express();
var	fs		 = require('fs');
var	User	 = require('./routes/user');
var	ObjectId = require('mongodb').ObjectID;
var	db = require('./config/db');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var methodOverride = require('method-override');
var path = require('path');

var routes = require('./routes/user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method', { methods: ['GET', 'POST'] }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('lalala'));
app.use(session({
  secret: 'lalala',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('index.html');
  //It will find and locate index.html from View or Scripts
});

module.exports = app;
