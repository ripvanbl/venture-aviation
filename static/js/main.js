angular.module('main', ['aircraft']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'layout/list.html'}).
      when('/edit/:aircraftId', {controller:EditCtrl, templateUrl:'layout/detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'layout/detail.html'}).
      otherwise({redirectTo:'/'});
});

function ListCtrl($scope, Aircraft) {
  $scope.aircraft = Aircraft.query();
}
 
 
function CreateCtrl($scope, $location, Aircraft) {
  $scope.save = function() {
    Aircraft.save($scope.aircraft, function(aircraft) {
      $location.path('/');
    });
  }
}
 
 
function EditCtrl($scope, $location, $routeParams, Aircraft) {
  var self = this;
 
  Aircraft.get({id: $routeParams.aircraftId}, function(aircraft) {
    self.original = aircraft;
    $scope.aircraft = new Aircraft(self.original);
  });
 
  $scope.isClean = function() {
    return angular.equals(self.original, $scope.aircraft);
  }
 
  $scope.save = function() {
    $scope.aircraft.update(function() {
      $location.path('/');
    });
  };

  $scope.destroy = function () {
      $scope.aircraft.destroy(function () {
          $location.path('/');
      });
  };
}