var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CasesSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true },
  name: String,
  gender: String,
  age: Number,
  address: String,
  city: String,
  country: String,
  status: String,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cases', CasesSchema);
