/*@ngInject*/
module.exports = function() {
  'use strict';
  
  return {
    template: require('./add.html'),
    link: postLink
  };
  
  /////
  
  function postLink(scope) {
    var vm = scope.vm = {};
    
    vm.cancel = scope.$dismiss;
  }
}