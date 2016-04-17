'use strict';

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routes = require('./home.routes');

module.exports = 
  angular
    .module('app.home', [uirouter])
    .config(routes);
  