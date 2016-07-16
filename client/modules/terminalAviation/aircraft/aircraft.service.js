/*@ngInject*/
module.exports = function($q, blTaHangerService) {
  'use strict';

  var service = {
    Aircraft: Aircraft,
    save: save
  };

  return service;

  /////

  function Aircraft() {
    this.description = '';
    this._id = '';
    this.isAvailable = false;
    this.name = '';
    this.manufacturer = '';
    this.model = '';
    this.registrationId = '';
    this.year = '';

    this.flightStats = {
      booked: 0,
      completed: 0,
      inProgress: 0
    };

    this.maintenanceStats = {
      engineHours: 0,
      lastEngineOverhaul: null,
      lastEngineOverhaulHours: 0
    };

    this.pics = {
      thumbnail: '',
      front: '',
      left: '',
      right: '',
      back: '',
      top: '',
      bottom: ''
    };
  }

  function save(aircraft) {
    if (!aircraft || aircraft.constructor !== Aircraft) $q.reject('Save Aircraft Failured: Invalid aircraft');

    if(!aircraft.name) $q.reject('Save Aircraft Failured: Missing name'); 
    
    if (!aircraft.pics.thumbnail) {
      aircraft.pics.thumbnail = require('./paperairplane.png');
    }

    return blTaHangerService.addAircraft(aircraft);
  }
};