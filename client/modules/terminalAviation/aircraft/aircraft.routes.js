/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
    .state('ta.aircraft', {
      url: '/aircraft',
      template: require('./aircraft.html')
    })
    .state('ta.aircraft.addModal', {
      isModal: true,
      size: 'lg',
      template: '<div data-bl-ta-aircraft-add=""></div>'
    });
};