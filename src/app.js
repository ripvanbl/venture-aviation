'use strict';

require('./styles/main.css');

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./app.config');
var layoutModule = require('./layout');
var homeModule = require('./home');

angular.module('app', [
    uirouter, 
    layoutModule.name,
    homeModule.name
  ])
  .config(routing);