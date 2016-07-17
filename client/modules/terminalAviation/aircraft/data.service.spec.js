var _ = require('lodash');
var $httpBackend, $rootScope;
var target, config;
var aircraftListMock;

describe('terminalAviation/aircraft/data.service', function() {
  beforeEach(presetup);
  beforeEach(setup);
  afterEach(cleanup);

  describe('load', function(){
    it('should call the endpoint for all aircraft when no id is supplied', function() {
      $httpBackend.expectGET(config.urls.load.all).respond(200, aircraftListMock);
      target.load();
      $httpBackend.flush();
    });
    
    it('should call the endpoint for a single aircraft when an id is supplied', function() {
      var id = 'a';
      
      $httpBackend.expectRoute('GET', config.urls.load.byId)
                  .respond(function(method, url, data, headers, params) {
                    return [200, _.find(aircraftListMock, {'_id': params.id})];
                  });
      
      target.load(id).then(doAssert);
      $httpBackend.flush();
      
      function doAssert(aircraft) {
        expect(aircraft._id).toEqual(id);
      }
    });
  });
});

function presetup() {
  angular.mock.module('app.ta.aircraft');
}

function setup() {
  angular.mock.inject(function($injector) {
    target = $injector.get('blTaAircraftDataService');
    config = $injector.get('blTaAircraftConfig');
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    
    aircraftListMock = [{_id:'a'},{_id:'b'},{_id:'c'}]; 
  });
}

function cleanup() {
  $httpBackend.verifyNoOutstandingExpectation();
  $httpBackend.verifyNoOutstandingRequest();
}