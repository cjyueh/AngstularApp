var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;