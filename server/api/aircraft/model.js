var mongoose = require('mongoose');
var lastModPlugin = require('../plugins/lastModified');

var AircraftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  isAvailable: Boolean,
  manufacturer: String,
  model: String,
  registrationId: String,
  year: Number,
  flightStats: {
    booked: Number,
    completed: Number,
    inProgress: Number
  },
  maintenanceStats: {
    engineHours: Number,
    lastEngineOverhaul: Date,
    lastEngineOverhaulHours: Number
  },
  pics: {
    thumbnail: String,
    front: String,
    left: String,
    right: String,
    back: String,
    top: String,
    bottom: String
  }
});

AircraftSchema.plugin(lastModPlugin);
module.exports = mongoose.model('Aircraft', AircraftSchema);