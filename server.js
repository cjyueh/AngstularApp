//require server dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;

//configure bodyParser to receive form data
app.use(bodyParser.urlencoded({ extended:true }));

//serve static files from public folder
app.use(express.static(__dirname + '/public'));

//connect to mongod
mongoose.connect('mongod://localhost/angstular_app');

//require models
var Question = require('./models/questions');
var Answer = require('./models/answers');

//server will responde with layout index view for any request
app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname + '/views/index.html'));
});

//listen on port
app.listen(port, function() {
  console.log('server started on ' + port);
});