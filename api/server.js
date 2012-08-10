var http = require('http'),
    express = require('express'),
    db = require('./db.js'),
    aircraft = require('./models/aircraft.js'),
    app = express();
    
module.exports = http.createServer(app);
app.use(express.bodyParser());
app.set('jsonp callback', true);
app.get('/aircraft/:id', function(req, res) {
    console.log('Received request for: ' + JSON.stringify(req.params.id));
    res.header('Content-Type', 'application/json');
    res.header('Charset', 'utf-8');
    var result = db.load(req.params.id);
    result ? res.send(result)
           : res.send({});
});

db.save(new aircraft('test', 
    { make: 'Beechcraft', model: 'Bonanza', nnumber: 'N12345'}
));

console.log('Loaded API Server');