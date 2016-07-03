/*@ngInject*/
module.exports = function(blTaHangerService) {
  'use strict';
  
  return {
    template: require('./owner.html'),
    controller: controller, 
    controllerAs: 'vm',
    bindToController: true
  };
  
  /////
  
  function controller() {
    var vm = this;
    
    vm.aircraft = blTaHangerService.aircraft;
    vm.selectedAircraft = null;
    vm.selectAircraft = selectAircraft;
    
    
    function selectAircraft(aircraft) {
      vm.selectedAircraft = aircraft;
    }
  }
}