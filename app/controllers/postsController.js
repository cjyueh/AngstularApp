var Post = require('../models/Post');

var postsController = {
  // GET all the posts
  index: function(req, res) {
    Post.find({}, function(err, posts) {
      err ? console.log(err) : res.json(posts);
    });
  },

  // POST (create) a new post
  create: function(req, res) {
    var comment = req.body.comment;
    Post.create({comment: comment}, function(err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  },

  // POST updates to a post
  update: function(req, res) {
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
  remove: function(req, res) {
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