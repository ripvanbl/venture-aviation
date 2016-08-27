/*@ngInject*/
module.exports = function($stateProvider) {
  'use strict';
  
  $stateProvider
    .state('ta.owner', {
      abstract: true,
      url: '/owner',
      template: '<div data-bl-ta-owner=""></div>'
    })
    .state('ta.owner.index', {
      url: '',
      views: {
        'view0': {
          template: require('./aircraftItem.html')
        },
        'view1': {
          template: require('./aircraftList.html')
        }
      }
    });
};