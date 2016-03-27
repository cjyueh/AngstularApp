var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  text: String,
  createdAt: {type: Date, default: Date.now()}
});

var Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;