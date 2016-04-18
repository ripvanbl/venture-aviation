/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
    .state('ta.intro', {
      url: '/ta',
      template: require('./intro.html')
    });
};