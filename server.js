var http = require('http'),
    express = require('express'),
    app = express(),
    //apiServer = require('./api/server.js'),
    port = process.env.PORT,
    host = process.env.IP;

http.createServer(app).listen(port, host);
console.log('HTTP listening at ' + host + ' on port ' + port);

//app.use('/api', apiServer); // Mount the HTTP API on the URL space /api
app.use(express.static(__dirname + '/dist')); // For other requests, just serve /dist