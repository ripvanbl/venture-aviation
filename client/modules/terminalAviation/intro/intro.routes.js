/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
    .state('ta.intro', {
      url: '/',
      template: require('./intro.html')
    });
};