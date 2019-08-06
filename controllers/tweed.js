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
      fabric: "Hampton",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYHrxs1_ALd5JEoPklabp7RdyaAy23ThhlML7bgAW7h-TVvWtx9GS7Gw8bpT9QltjcLdMmoJ819Mj3ah_BJoMRvTtxKUgYZ2COD0tf0y_7rl8dgw2kuE1a&usqp=CAc",
      fit: "Standard",
      description: "Irish Gray Tweed Suit",
      style: "Single-Breasted 1 Button",
      jacketLapels: "Notch",
      lapelWidth: "Standard",
      pocket: "With Flap",
      slant: true,
      color: "Gray",
      sleeveButtons: 0,
      buttonHoles: false,
      backStyle: "Ventless",
      pattern: "Herringbone",
      weight: "230g",
      breastPocket: true,
      pantsFit: "Normal Fit",
      pleats: "No Pleats",
      fastening: "Centered",
      sidePockets: "Diagonal",
      backPockets: "No Pockets",
      pantCuffs: false,
      vest: true,
      internalLining: true,
      monogram: false,
      pocketSquare: true,
      buttonThreads: true,
      neckLining: false
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
    console.log(req.body);
    console.log(error);
    res.redirect('/tweed/app')
  })
})
  //Show Route for Tweed Suits
tweed.get('/app/:id', (req, res) => {
  Tweed.findById(req.params.id, (error, foundTweed) => {
    console.log(foundTweed);
    console.log(error);
    res.render(
      'app/show.ejs',
      {
        tweed: foundTweed
        // currentUser: User.find({"TweedList"})
      }
    )
  })
})
//TWEED Post route
tweed.post('/app', (req, res) => {
  Tweed.create(req.body, (error, createdTweed) => {
    res.redirect('/tweed/app');
    console.log(req.body);
    console.log(error);
  })
})
  //INDEX for Tweed
tweed.get('/app', (req, res) => {
  Tweed.find({}, (error, allTweed) => {
    console.log(error);
    console.log(allTweed);
    res.render(
      'app/index.ejs',
      {
        tweeds: allTweed
      }
    )
  })
})

module.exports = tweed;
