////////////////////////////////////////////////////////////
//USER DATABASE SCHEMA.
// -This file sets up the mongoose schema that will be used to store user information such as username and password. It might also end up including other information such as an array of selected Tweed Suits.
////////////////////////////////////////////////////////////
//___________________
//Dependencies
//___________________
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//___________________
//Schema
//___________________
const tweedSchema = Schema({
  name: String,
  img: String,
  description: String,
  brand: String,
  color: String,
  pattern: String,
  weight: String,
  price: Number
})

const Tweed = mongoose.model('Tweed', tweedSchema);

module.exports = Tweed;
