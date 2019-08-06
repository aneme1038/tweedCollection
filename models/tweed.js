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
  fabric: String,
  img: String,
  fit: String,
  description: String,
  style: String,
  jacketLapels: String,
  lapelWidth: String,
  pocket: String,
  slant: Boolean,
  color: String,
  sleeveButtons: Number,
  buttonHoles: Boolean,
  backStyle: String,
  pattern: String,
  weight: String,
  breastPocket: String,
  pantsFit: String,
  pleats: String,
  fastening: String,
  sidePockets: String,
  backPockets: String,
  pantCuffs: Boolean,
  vest: Boolean,
  internalLining: Boolean,
  monogram: Boolean,
  pocketSquare: Boolean,
  buttonThreads: Boolean,
  neckLining: Boolean
})

const Tweed = mongoose.model('Tweed', tweedSchema);

module.exports = Tweed;
