var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({
  question: { type: String, required: true },
  comment: String,
  createdAt: { type: Date, default: Date.now() }
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;