var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

//set port
var port = process.env.PORT || 3000;

//set up mongoose
// require('./models/Posts');
// require('./models/Comments');
mongoose.connect('mongodb://localhost/angstular-app');
process.on('exit', function(){mongoose.disconnect();});

var routes = require('./config/routes');
app.use(routes);
// var users = require('./routes/users');

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));

//set up methodOverride
app.use(methodOverride('X-HTTP-Method-Override'));

//set static files
app.use(express.static(__dirname + '/public'));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

//listen on port
app.listen(port, function() {
  console.log('app is listening on port ' + port);
});

module.exports = app;