var http = require('http'),
    express = require('express'),
    aircraft = require('./models/aircraft.js'),
    repo = require('./repo.js'),
    app = express();
    
module.exports = http.createServer(app);

app.use(express.bodyParser());
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.set('jsonp callback', true);

app.get('/aircraft', function(req, res) {
    console.log('Received request for all aircraft');
    res.header('Content-Type', 'application/json');
    res.header('Charset', 'utf-8');
    repo.load(null, function(result) {
        result ? res.send(result)
           : res.send({});
    });
});

app.get('/aircraft/:id', function(req, res) {
    console.log('Received request for: ' + JSON.stringify(req.params.id));
    res.header('Content-Type', 'application/json');
    res.header('Charset', 'utf-8');
    repo.load(req.params.id, function(result) {
        result ? res.send(result)
           : res.send({});
    });
});

app.post('/aircraft', function(req, res) {
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

app.put('/aircraft/:id', function(req, res) {
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

app.delete('/aircraft/:id', function(req, res) {
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