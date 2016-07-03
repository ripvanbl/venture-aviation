'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
var routes = require('./aircraft.routes');

module.exports = 
  angular
    .module('app.ta.aircraft', [uirouter, uiBootstrap])
    .config(routes)
    .directive('blTaAircraftAdd', require('./add/add.directive'));
  