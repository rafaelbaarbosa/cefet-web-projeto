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

var User = require('./routes/user');
var Championship = require('./routes/championship');

app.set('port', process.env.PORT || 3000);
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

app.use(express.static(path.join(__dirname, '/public')));

app.get('/',function(req,res){
  res.render('index.hbs');
  //It will find and locate index.html from View or Scripts
});

app.get('/index',function(req,res){
  res.render('index.hbs');
  //It will find and locate index.html from View or Scripts
});

app.get('/register',function(req,res){
  res.render('register.hbs');
  //It will find and locate index.html from View or Scripts
});

app.get('/login',function(req,res){
  res.render('login.hbs');
  //It will find and locate index.html from View or Scripts
});

app.get('/championships',function(req,res){
  res.render('championships.hbs');
  //It will find and locate index.html from View or Scripts
});

app.get('/new_championship',function(req,res){
  res.render('new_championship.hbs');
  //It will find and locate index.html from View or Scripts
});

/*POST*/
/*Create new user*/
app.post('/signup',function(req,res){
  var email = req.body.email;
  var confirmEmail = req.body.confirmEmail;
  var password = req.body.password;  
  var confirmPassword = req.body.confirmPassword;

  var newUser = new User({
  	  username: req.body.userName,
	  password: req.body.password,
	  date_birth: req.body.date,
	  email: req.body.email
  });

  newUser.save(function(err) {
  	if (err) {
  		console.log(err);
        req.flash('error','Username already exists, tyr new user name!');
        res.redirect('/register');
      }
      else{
      	console.log('User created!');
        req.flash('Success','successfully created user!');
        res.redirect('/login');
      }
  });

});

/*Create new new_championship*/
app.post('/new_championship',function(req,res){

  var number = req.body.nParticipatins;
   User.findOne({username: req.body.admin}, function(err,user){
	  	if (!user) {
  		console.log(err);
        req.flash('error','Admin not exists, tyr new admin!');
        res.redirect('/new_championship');
	      }else if(err){
              console.log(err);
              req.flash('error', 'Ocorreu um error');
              res.redirect('/new_championship');
            }
	      else{
	      	console.log('User exists!');
	      	console.log(user.username);
	        
	      }
	  })
  var newChampion = new Championship({
  	  name: req.body.name,
	  n_participants: req.body.nParticipatins,
	  admin: user
	 
  });

  newChampion.save(function(err) {
  	if (err) {
  		console.log(err);
        req.flash('error','Championship already exists, tyr new name!');
        res.redirect('/new_championship');
      }
      else{
      	console.log('Championship created!');
        req.flash('Success','successfully created championship!');
        res.redirect('/championships');
      }
  });

});


var server = app.listen(app.get('port'), function () {
  console.log('Servidor aberto em http://localhost:' + server.address().port);
});

module.exports = app;
