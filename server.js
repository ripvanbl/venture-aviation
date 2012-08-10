var http = require('http'),
    express = require('express'),
    app = express(),
    apiServer = require('./api/server.js');
    
var port = process.env.PORT || 8080;
http.createServer(app).listen(port);
console.log('Listening on port ' + port);

app.use('/api', apiServer); // Mount the HTTP API on the URL space /api
app.use(express.static(__dirname + '/static')); // For other requests, just serve /static