'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routes = require('./owner.routes');
var aircraft = require('../aircraft');

module.exports = 
  angular
    .module('app.ta.owner', [uirouter, aircraft.name])
    .config(routes)
    .directive('blTaOwner', require('./owner.directive'));
  