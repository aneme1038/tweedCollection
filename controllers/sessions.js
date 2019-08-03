//////////////////////////////////////////////////////////////SERVER SESSIONS FILE
// -this file contains configurations and dependancies related to a user login session. The session will take in information regarding if the user entered correct login information. If successful, the user should be redirected to personal page showing listed Tweed collection.
////////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');
const Tweed = require('../models/tweed.js');
const bcrypt = require('bcrypt');
//___________________
//Routes
//___________________
  //GET route for sessions
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
})
  //POST route for sessions
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    console.log(req.body);
    //series of checks for username and password
    if (error) {
      console.log(error);
      res.send('The database encountered some error. Refer to Callstack')
    } else if (!foundUser) {
      //if the user found is considered 'undefined' or 'null'
      res.send('<a href="/">Sorry, no such user was found</a>')
    } else {
      //if the user is found (matching username) execute this block
      //now check for password matching
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //add user to our session
        req.session.currentUser = foundUser;
        //redirect to the user show page (not the index. We will go to a show page listing user's tweed collection which will feature items user can click on to go to another show page)
        res.redirect('/');
      } else {
        //if the password does not match...
        res.send('<a href="/">Password does not match</a>');
      }
    }
  })
})
  //DELETE ROUTE for Sessions
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
})
//export this file
module.exports = sessions;
