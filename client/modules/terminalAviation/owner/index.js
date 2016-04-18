'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routes = require('./owner.routes');

module.exports = 
  angular
    .module('app.ta.owner', [uirouter])
    .config(routes)
    .directive('blTaOwner', require('./owner.directive'));
  