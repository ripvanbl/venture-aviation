'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
require('angular-uuid');
var routes = require('./aircraft.routes');

module.exports = 
  angular
    .module('app.ta.aircraft', [uirouter, uiBootstrap, 'angular-uuid'])
    .config(routes)
    .factory('blTaHangerService', require('./hanger.service'))
    .factory('blTaAircraftService', require('./aircraft.service'))
    .directive('blTaAircraftAdd', require('./add/add.directive'));
  