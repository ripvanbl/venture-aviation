/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';

  $stateProvider
    .state('ta', {
      abstract: true,
      views: {
        layout: {
          template: require('./terminalAviation.html'),
        }
      }
    });
};