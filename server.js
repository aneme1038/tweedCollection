///////////////////////////////////////////////////////////
//SERVER JAVASCRIPT FILE
// -this file contains all configurations, dependancies and routes specific to index files. All other routes, configurations, and dependancies will be in the controllers
//////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
const db = mongoose.connection;
require('dotenv').config();
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3005;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
//use session. ENV file only includes SECRET.
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))
//___________________
// Routes
//___________________
//GET Route for main Index.ejs
app.get('/' , (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
});
//GET Route for logged in user
app.get('/app', (req, res) => {
  if (req.session.currentUser){
    res.render('app/index.ejs');
  } else {
    res.redirect('/sessions/new');
  }
})
//___________________
// Controllers
//___________________
const userController = require('./controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
const tweedController = require('./controllers/tweed.js');
app.use('/tweed', tweedController);
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
