'use strict';

require('./terminalAviation.css');

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routes = require('./terminalAviation.routes');
var taAircraft = require('./aircraft');
var taIntroModule = require('./intro');
var taOwnerModule = require('./owner');

module.exports = 
  angular
    .module('app.ta', [
      uirouter, 
      taAircraft.name,
      taIntroModule.name, 
      taOwnerModule.name
    ])
    .config(routes);
  