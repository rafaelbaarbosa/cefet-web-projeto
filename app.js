var express  = require('express'),
	app		 = express(),
	fs		 = require('fs'),
	User	 = require('./model/user'),
	ObjectId = require('mongodb').ObjectID,
	db = require('./config/db');


app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/pages'));

app.get('/',function(req,res){
  res.render('index.html');
  //It will find and locate index.html from View or Scripts
});