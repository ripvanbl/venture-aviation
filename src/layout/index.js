'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routes = require('./layout.routes');

module.exports = 
  angular
    .module('app.layout', [uirouter])
    .config(routes);
  