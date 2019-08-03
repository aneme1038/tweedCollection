////////////////////////////////////////////////////////////
//USER DATABASE SCHEMA.
// -This file sets up the mongoose schema that will be used to store user information such as username and password. It might also end up including other information such as an array of selected Tweed Suits.
////////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tweed = require('../models/tweed.js');
//___________________
//Schema
//___________________
const userSchema = Schema({
  username: String,
  password: String,
  //reference another schema - solution found at https://mongoosejs.com/docs/populate.html
  tweedList: [{type: Schema.Types.ObjectId, ref: 'Tweed'}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
