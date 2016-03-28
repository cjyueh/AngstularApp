var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  post:
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Post'
    }
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;