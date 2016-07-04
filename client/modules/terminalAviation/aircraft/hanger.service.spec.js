var target;

describe('terminalAviation/aircraft/hanger.service', function() {
  beforeEach(presetup);
  beforeEach(setup);
  
  it('should be ready', function() {
    expect(target.aircraft).toEqual([]);
    expect(target.addAircraft).toBeDefined();
    expect(target.findAircraft).toBeDefined();
  });
});

function presetup() {
  angular.mock.module('app.ta.aircraft');
}

function setup() {
  angular.mock.inject(function(blTaHangerService) {
    target = blTaHangerService;
  });
}

