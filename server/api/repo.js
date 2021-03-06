var mongoose = require('mongoose'),
    aircraft = require('./models/aircraft.js');

mongoose.connect(process.env.MONGODB_MONGOLAB_URI);

exports.load = function(id, callback) {
    if(id) {
        console.log('Getting aircraft by id.');
        aircraft.findById(id, function(err, data) {
            if(!err) {
                if(typeof callback === 'function') {
                    callback.call(this, data);
                }
            }
            else {
                console.log('Failed to get aircraft by id.');

                if(typeof callback === 'function') {
                    callback.call(this, null);
                }
            }
        });
    }
    else {
        console.log('Getting all aircraft.');
        aircraft.find(function(err, data) {
            if(!err) {
                if(typeof callback === 'function') {
                    callback.call(this, data);
                }
            }
            else {
                console.log('Failed to get aircraft.');

                if(typeof callback === 'function') {
                    callback.call(this, null);
                }
            }
        });
    }
};

exports.save = function(aircraft, callback) {
    aircraft.save(function(err) {
        if(!err) {
            console.log('Aircraft saved.');

            if(typeof callback === 'function') {
                callback.call(this, aircraft);
            }
        }
        else {
            console.log('Failed to save aircraft.');

            if(typeof callback === 'function') {
                callback.call(this, null);
            }
        }
    });
};

exports.remove = function(aircraft, callback) {
    return aircraft.remove(function(err) {
        if(!err) {
            console.log('Aircraft removed.');

            if(typeof callback === 'function') {
                callback.call(this, true);
            }
        }
        else {
            console.log('Could not remove aircraft.');

            if(typeof callback === 'function') {
                callback.call(this, false);
            }
        }
    });
};