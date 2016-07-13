var http = require('http'),
    express = require('express'),
    path = require('path'),
    errorhandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    port = process.env.PORT,
    host = process.env.IP,
    publicFolderPath,
    aircraftRoutes = require('./api/aircraft/routes');

if (process.env.NODE_ENV === 'development') {
    console.log('using errorhandler');
    app.use(errorhandler());
}

http.createServer(app).listen(port, host);
console.log('HTTP listening at ' + host + ' on port ' + port);

publicFolderPath = path.resolve('./public');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api', aircraftRoutes); // Mount the aircraft API
app.use(express.static(publicFolderPath)); // For other requests, just serve /public
app.get('/*', function(req, res) {
    res.sendFile(path.resolve(publicFolderPath, 'index.html'));
});

mongoose.connect(process.env.MONGODB_MONGOLAB_URI);