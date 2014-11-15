var http = require('http'),
    express = require('express'),
    app = express(),
    apiServer = require('./api/server.js'),
    port = process.env.PORT || 8080,
    host = process.env.IP || '0.0.0.0';

http.createServer(app).listen(port, host);
console.log('HTTP listening at ' + host + ' on port ' + port);

app.use('/api', apiServer); // Mount the HTTP API on the URL space /api
app.use(express.static(__dirname + '/static')); // For other requests, just serve /static