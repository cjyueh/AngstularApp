var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Answer = require('./answer');

var QuestionSchema = new Schema({
  text: {type: String, required: true},
  answer: [AnswerSchema],
  createdAt: {type: Date, default: Date.now()}
});

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;