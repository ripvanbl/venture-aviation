var express = require('express'),
    aircraft = require('./models/aircraft.js'),
    repo = require('./repo.js'),
    router = express.Router();

router.get('/aircraft', function(req, res) {
    console.log('Received request for all aircraft');
    res.header('Content-Type', 'application/json');
    res.header('Charset', 'utf-8');
    repo.load(null, function(result) {
        result ? res.send(result)
           : res.send({});
    });
});

router.get('/aircraft/:id', function(req, res) {
    console.log('Received request for: ' + JSON.stringify(req.params.id));
    res.header('Content-Type', 'application/json');
    res.header('Charset', 'utf-8');
    repo.load(req.params.id, function(result) {
        result ? res.send(result)
           : res.send({});
    });
});

router.post('/aircraft', function(req, res) {
    var item = new aircraft({
        make: req.body.make,
        model: req.body.model,
        nnumber: req.body.nnumber
    });

    repo.save(item, function(result) {
        res.header('Content-Type', 'application/json');
        res.header('Charset', 'utf-8');
        res.send(result, 201);
    });
});

router.put('/aircraft/:id', function(req, res) {
    repo.load(req.params.id, function(item) {
        item.make = req.body.make;
        item.model = req.body.model;
        item.nnumber = req.body.nnumber;

        repo.save(item, function(result) {
            res.header('Content-Type', 'application/json');
            res.header('Charset', 'utf-8');
            res.send(result, 200);
        });
    });
});

router.delete('/aircraft/:id', function(req, res) {
    repo.load(req.params.id, function(item) {
        repo.remove(item, function () {
            res.send(200);
        });
    });
});

// Test data
//console.log('Adding new aircraft.');
//repo.save(new aircraft({ make: 'Beechcraft', model: 'Bonanza', nnumber: 'N12345'}));

console.log('Loaded API Server');

module.exports = router;