var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  question: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Comment'
    }
  ]
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;