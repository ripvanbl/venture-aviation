angular.module('aircraft', ['ngResource']).
    factory('Aircraft', function($resource) {
        var Aircraft = $resource('/api/aircraft/:id', 
                                    {},
                                    { update: { method: 'PUT' } }
      );

        Aircraft.prototype.update = function(cb) {
            return Aircraft.update({ id: this._id }, this, cb);
        };

        Aircraft.prototype.destroy = function(cb) {
            return Aircraft.remove({id: this._id}, cb);
          };

        return Aircraft;
    });