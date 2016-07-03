'use strict';

require('./assets/styles/main.css');

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./app.config');
var modalHandler = require('./app.modalHandler');
var layoutModule = require('./modules/layout');
var homeModule = require('./modules/home');
var taModule = require('./modules/terminalAviation');

angular.module('app', [
    uirouter, 
    layoutModule.name,
    homeModule.name,
    taModule.name
  ])
  .config(routing)
  .run(modalHandler);