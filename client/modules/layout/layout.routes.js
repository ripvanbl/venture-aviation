/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
  .state('main', {
    abstract: true,
    views: {
      layout: {
        template: require('./layout.html'),
      }
    }
  });
};