var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  question: { type: String },
  upvotes: { type: Number, default: 0 },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Comment'
    }
  ]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;