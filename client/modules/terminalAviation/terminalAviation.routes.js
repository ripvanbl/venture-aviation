/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';

  $stateProvider
    .state('ta', {
      url: '/ta',
      abstract: true,
      views: {
        layout: {
          template: require('./terminalAviation.html'),
        }
      }
    });
};