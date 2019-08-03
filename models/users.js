////////////////////////////////////////////////////////////
//USER DATABASE SCHEMA.
// -This file sets up the mongoose schema that will be used to store user information such as username and password. It might also end up including other information such as an array of selected Tweed Suits.
////////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const mongoose = require('mongoose');
const Tweed = require('./tweed.js');
const Schema = mongoose.Schema;
//___________________
//Schema
//___________________
const userSchema = Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  tweedList: [Tweed];
})
