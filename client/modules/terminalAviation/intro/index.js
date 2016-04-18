'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routes = require('./intro.routes');

module.exports = 
  angular
    .module('app.ta.intro', [uirouter])
    .config(routes);
  