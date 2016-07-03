/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
    .state('main.home', {
      url: '/',
      template: require('./home.html')
    });
};