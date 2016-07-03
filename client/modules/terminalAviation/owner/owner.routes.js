/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
    .state('ta.owner', {
      url: '/owner',
      template: '<div data-bl-ta-owner=""></div>'
    });
};