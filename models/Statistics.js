var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatisticsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true },
  count: Number,
});

module.exports = mongoose.model('Statistics', StatisticsSchema);
