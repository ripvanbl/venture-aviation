var http = require('http');
var express = require('express');
var app = express();
http.createServer(app).listen(process.env.port || 8080);
app.set('jsonp callback', true);
app.get('/api/:id', function(req, res) {
    console.log('Received request for: ' + req.param('somedata'));
    res.header('Content-Type', 'application/json');
    res.header('Charset', 'utf-8');
    res.send(req.query.callback + '({"something": "rather", "more": "pork", "tua": "tara"});');
});