var mongoose = require('mongoose');

var aircraft = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  nnumber: { type: String, required: false }
});

module.exports = mongoose.model('aircraft', aircraft);