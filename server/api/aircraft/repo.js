var aircraft = require('./model.js');

var repo = function() {
  return {
    load: load,
    remove: remove,
    save: save
  };

  function load(id) {
    if (id && typeof(id) === 'string') {
      return _getById(id);
    }

    return _getAll();
  }

  function remove(item) {
    if (!item || !item._id) return Promise.reject();

    return new Promise(function(resolve, reject) {
      item.remove(function(err) {
        if (err) {
          reject(err);
        }
        else {
          resolve();
        }
      });
    });
  }

  function save(item) {
    if (!item) return Promise.reject();

    return new Promise(function(resolve, reject) {
      item.save(function(err) {
        if (err) {
          reject(err);
        }
        else {
          resolve(item);
        }
      });
    });
  }

  /////

  // Get all aircraft
  // TODO: Limits / filters / paging
  function _getAll() {
    return new Promise(function(resolve, reject) {
      aircraft.find(function(err, data) {
        if (err) {
          reject(err);
        }
        else {
          resolve(data);
        }
      });
    });
  }

  // Get an aircraft by the mongod id
  // TODO: Filter by a user once the I have the concept of a user
  function _getById(id) {
    return new Promise(function(resolve, reject) {
      console.log('Getting aircraft by id:', id);
      aircraft.findById(id, function(err, data) {
        if (err) {
          reject(err);
        }
        else {
          if (!data) {
            resolve(null);
            return;
          }

          // Return as an array of 1 to be consistent
          resolve([data]);
        }
      });
    });
  }
};

module.exports = repo();
