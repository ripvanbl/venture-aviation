'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
var routes = require('./aircraft.routes');

module.exports = 
  angular
    .module('app.ta.aircraft', [uirouter, uiBootstrap])
    .config(routes)
    .constant('blTaAircraftConfig', require('./config'))
    .factory('blTaAircraftDataService', require('./data.service'))
    .factory('blTaHangerService', require('./hanger.service'))
    .factory('blTaAircraftService', require('./aircraft.service'))
    .directive('blTaAircraftAdd', require('./add/add.directive'));
  