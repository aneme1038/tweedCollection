//////////////////////////////////////////////////////////////
//SERVER TWEED ROUTES FILE
// -this file contains configurations and dependancies related to a TWEED schema and users tweed collection. The user will take in view a list of pre-generated tweed suits add their favorite to their personal collection. Otherwise, the user can create their own tweed suits, deleted them, update them, etc.
////////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const express = require('express');
const tweed = express.Router();
const User = require('../models/users.js');
const Tweed = require('../models/tweed.js');
//___________________
//Routes
//___________________
tweed.get('/app/seed', (req, res) => {
  Tweed.create([
    {
      name: "Tweed Blazer",
      img: "https://images-na.ssl-images-amazon.com/images/I/91ECM6AD-LL._UX385_.jpg",
      brand: "Sunshine Young",
      color: "Gray/Yellow",
      pattern: "Plaid",
      weight: "400g"
    }
  ], (error, data) => {
    console.log(error);
    console.log(data);
    res.redirect('/tweed/app/')
  })
})
  //GET route to take user to create new Tweed Suit!
tweed.get('/app/new', (req, res) => {
  if (req.session.currentUser){
      res.render('app/new.ejs')
  } else {
    res.redirect('/sessions/new')
  }
})
  //DELETE route to have user delete a Tweed Suit
tweed.delete('/app/:id', (req, res) => {
  Tweed.findByIdAndDelete(req.params.id, () => {
    res.redirect('/tweed/app');
  })
})
//Edit Tweed Suit ROUTES
tweed.get('/app/:id/edit', (req, res) => {
  Tweed.findById(req.params.id, (error, foundTweed) => {
    res.render(
      'app/edit.ejs',
      {
        tweed: foundTweed
      }
    )
  })
})
  //UPDATE / PUT Route
tweed.put('/app/:id', (req, res) => {
  Tweed.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
    res.redirect('/tweed/app')
  })
})
  //Show Route for Tweed Suits
tweed.get('/app/:id', (req, res) => {
  Tweed.findById(req.params.id, (error, foundTweed) => {
    res.render(
      'app/show.ejs',
      {
        tweed: foundTweed
      }
    )
  })
})
//TWEED Post route
tweed.post('/app', (req, res) => {
Tweed.create(req.body, (error, createdTweed) => {
  res.redirect('/tweed/app');
})
})
  //INDEX for Tweed
tweed.get('/app', (req, res) => {
  Tweed.find({}, (error, allTweed) => {
    res.render(
      'app/index.ejs',
      {
        tweeds: allTweed
      }
    )
  })
})

module.exports = tweed;
