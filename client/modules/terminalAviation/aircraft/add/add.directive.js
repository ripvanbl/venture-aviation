/*@ngInject*/
module.exports = function(blTaAircraftService) {
  'use strict';
  
  return {
    template: require('./add.html'),
    link: postLink
  };
  
  /////
  
  function postLink(scope) {
    var vm = scope.vm = {};
    
    vm.aircraft = new blTaAircraftService.Aircraft();
    vm.save = save;
    vm.cancel = scope.$dismiss;
    
    function save() {
      blTaAircraftService
        .save(vm.aircraft)
        .then(function() {
          scope.$close();
        })
        // TODO: Add error condition
        ;
    }
  }
}