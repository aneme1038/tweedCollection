//////////////////////////////////////////////////////////////SERVER USER FILE
// -this file contains configurations and dependancies related to a user login session. The USER file will take in information that encrypts the user info such as the password and redirect back to root.
////////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const Tweed = require('../models/tweed.js');
const bcrypt = require('bcrypt');
//___________________
//Routes
//___________________
  //GET Route
users.get('/new', (req, res) => {
  res.render('users/new.ejs');
})
  //POST Route
users.post('/', (req, res) => {
  //overwrite the user password with a hashed password, than pass it into the database.
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  console.log(req.body);
  User.create(req.body, (error, createdUser) => {
    if (error){
      console.log(error);
    } else {
      console.log(createdUser);
      res.redirect('/')
    }
  })
})
//export this file
module.exports = users;
