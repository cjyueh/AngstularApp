var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  body: { type: String },
  author: { type: String },
  upvotes: { type: Number, default: 0 },
  post:
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Post'
    }
});

CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;