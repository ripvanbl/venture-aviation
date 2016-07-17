/*@ngInject*/
module.exports = function($q, blTaAircraftDataService) {
  'use strict';
  
  var _aircraft = [];
  
  var service = {
    get aircraft() { return _aircraft; },
    addAircraft: addAircraft,
    findAircraft: findAircraft,
    loadAircraft: loadAircraft
  };
  
  return service;
  
  /////
  
  function addAircraft(aircraft) {
    if(!aircraft || !aircraft.name) return $q.reject('Invalid aircraft.');
    
    // TODO: Ensure aircraft isn't already in the hanger...
    _aircraft.push(aircraft);
    
    return $q.when(aircraft);
  }
  
  function findAircraft(aircraft) {
    if(!aircraft) return _aircraft;
    
    // TODO: Build a filter which can parse the properties of the aircraft to filter the aircraft in the hanger...
    
    return _aircraft;
  }
  
  function loadAircraft() {
    return blTaAircraftDataService.load().then(function(aircraft){
      if(Array.isArray(aircraft)) {
        _aircraft = aircraft;
      }
    });
  }
};