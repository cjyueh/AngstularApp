var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Answer = require('./answer');

var QuestionSchema = new Schema({
  text: String,
  answer: [AnswerSchema]
});

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;