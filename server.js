var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');

//config db
var db = require('./config/db');

//set port
var port = process.env.PORT || 3000;

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));

//set up methodOverride
app.use(methodOverride('X-HTTP-Method-Override'));

//set static files
app.use(express.static(__dirname + '/public'));

//controllers
var postsController = require('./app/controllers/postsController');

//routes
var routes = require('./app/routes');
app.use(routes);

//handle all front-end angular requests
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//listen on port
app.listen(port, function() {
  console.log('app is listening on port ' + port);
});

// //expose app
module.exports = app;