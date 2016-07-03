/*@ngInject*/
module.exports = function($q, uuid, blTaHangerService) {
  'use strict';

  var service = {
    Aircraft: Aircraft,
    save: save
  };

  return service;

  /////

  function Aircraft() {
    this.description = '';
    this.id = '';
    this.isAvailable = false;
    this.name = '';
    this.manufacturer = '';
    this.model = '';
    this.registrationId = '';
    this.year = '';

    this.flights = {
      booked: 0,
      completed: 0,
      inProgress: 0
    };

    this.maintenance = {
      engineHours: 0
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

    aircraft.id = uuid.v4();

    if (!aircraft.pics.thumbnail) {
      aircraft.pics.thumbnail = require('./paperairplane.png');
    }

    return blTaHangerService.addAircraft(aircraft);
  }
};