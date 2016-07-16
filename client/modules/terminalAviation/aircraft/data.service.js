/*@ngInject*/
module.exports = function($http, blTaAircraftConfig) {
  'use strict';

  var service = {
    load: load
  };

  return service;

  /////

  function load(id) {
    var url;
    
    if(typeof(id) === 'string') {
      url = blTaAircraftConfig.urls.load.byId.replace(/:id/, id);
    } else {
      url = blTaAircraftConfig.urls.load.all; 
    }
    
    return $http.get(url)
                .then(onSuccess)
                .catch(onFailure);
        
    ///
    
    function onFailure() {
      return null;
    }
    
    function onSuccess(response) {
      if(!response || !response.data) return null;
      
      return response.data;
    }
  }
  
};