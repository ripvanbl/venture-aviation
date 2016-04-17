'use strict';

require('./assets/styles/main.css');

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./app.config');
var layoutModule = require('./modules/layout');
var homeModule = require('./modules/home');

angular.module('app', [
    uirouter, 
    layoutModule.name,
    homeModule.name
  ])
  .config(routing);