var express  =   require('express');
var app  =   express();
const path = require('path');

//Middleware express. For session also.
var expressJwt = require('express-jwt');
var session = require('express-session');
var restify = require('restify');
var bodyParser = require('body-parser');
var mysql = require('mysql');

const ejs = require('ejs')

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(express.static ('public'));

 app.set('view engine', 'ejs');

var cors = require('cors')  // Not required.
var router = require('express').Router();  // Not required. 
app.use(cors());  // Not required. Used to host the server from a different domain.
app.use(express.static('public'))
var db = require('./db');

//-----For Session --------------

const cookieParser = require('cookie-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');


app.use(cookieParser());
app.use(session({
  secret: 'geolocationapi',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//----------Session ends -------------

app.set('views',path.join(__dirname+'/views'));

app.set('view engine', 'ejs');

//app.use('/', require('./display.js'));


    
  app.get('/', (req, res,next) => {
      db.query("Create DATABASE locationsdata; use locationsdata ;create table locations(value VARCHAR(100) NOT NULL)  ",  [1, 2,3],function(err, result) {

          if (err) throw err
          else{
            console.log("Inside locationsdata ");
            res.render('location', {
              data: req.body, // { location }
        
             
            })         
          }
        });

   
// next();
  })

  app.post('/saveInDatabase',function(req,res){
   
    var post =req.body.name;
    console.log("req.name in savedatabase = ", post)
    db.query("INSERT INTO locations (value) VALUES ('"+ post +"') ;", function(err, result) {

      if (err) throw err
      else{
        console.log("saveInDatabase Result = ", result);
        res.render ('location');            
      }
    });
});


  
  app.post('/database', function(req,res,next){
      console.log(req.body, "req.solve" )

      db.query('SELECT * FROM locations', function(err, result) {

        if(err){
            throw err;
        } else {
          console.log("Inside database view =", result)
            obj = {print: result};
            res.render('viewDatabase', obj);                
        }
    });

   
  })

  app.get('/backToLocation', (req,res) =>{
    res.render('location')
  })


// Another middleware, will get executed after above one.
// Order of middleware is sequential.


app.listen(8080,(req,res)=>{
    console.log('server running on port 8080')
})




// Links 

// https://expressjs.com/en/guide/writing-middleware.html
// https://expressjs.com/en/resources/middleware/cors.html

// https://www.opencodez.com/java-script/static-website-with-node-js-webserver.htm

// https://expressjs.com/en/starter/static-files.html

//Stack Overflow link.

//https://stackoverflow.com/questions/54957409/why-does-the-console-log-appear-twice-in-app-js-in-nodejs?noredirect=1#comment96676606_54957409



/* Add the middleware to express app */

// Require static assets from public folder
// app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
// app.set('views', path.join(__dirname, 'views'));

// app.set('views', __dirname + '/views/');
