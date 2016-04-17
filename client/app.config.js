/*@ngInject*/
module.exports = function($locationProvider, $urlRouterProvider) {
  'use strict';
  
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};