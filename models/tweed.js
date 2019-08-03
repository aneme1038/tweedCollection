////////////////////////////////////////////////////////////
//TWEED DATABASE SCHEMA.
// -This file sets up the mongoose schema that will be used to store tweed database information. It might also end up including other information such as an array of selected Tweed Suits.
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
  color: String,
  pattern: String,
  weight: Number,
  price: Number,
  quantity: Number
})

const Tweed = mongoose.model('Tweed', tweedSchema);

module.exports = Tweed;
