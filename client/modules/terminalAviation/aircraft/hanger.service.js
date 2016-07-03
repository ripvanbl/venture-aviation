/*@ngInject*/
module.exports = function($q) {
  'use strict';
  
  var _aircraft = [];
  
  return {
    get aircraft() { return _aircraft; },
    addAircraft: addAircraft,
    findAircraft: findAircraft
  };
  
  /////
  
  function addAircraft(aircraft) {
    if(!aircraft || !aircraft.id) return $q.reject('Invalid aircraft.');
    
    // TODO: Ensure aircraft isn't already in the hanger...
    _aircraft.push(aircraft);
    
    return $q.when(aircraft);
  }
  
  function findAircraft(aircraft) {
    if(!aircraft) return _aircraft;
    
    // TODO: Build a filter which can parse the properties of the aircraft to filter the aircraft in the hanger...
    
    return _aircraft;
  }
};