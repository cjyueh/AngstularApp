var Post = require('../models/Post');

var postsController = {
  // GET all the posts
  getAll: function(req, res) {
    Post.find({}, function(err, posts) {
      err ? console.log(err) : res.json(posts);
    });
  },

  // POST (create) a new post
  createPost: function(req, res) {
    var question = req.body.question;
    var comment = req.body.comment;
    Post.create({question: question, comment: comment}, function(err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  },

  // POST updates to a post
  updatePost: function(req, res) {
    var id = req.params.id;
    var comment = req.body.comment;
    Post.findById(id, function (err, post) {
      if (err) {
        console.log(err);
      }
      if (comment) {
        post.comment = comment;
      }
      post.save(function(err, data) {
        if (err) {
          console.log(err);
        }
        res.json(data);
      });
    });
  },

  // POST to delete a post
  removePost: function(req, res) {
    var id = req.params.id;
    Post.remove({_id: id}, function(err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  }
};

module.exports = postsController;