var Post = require('../models/Posts');

var postsController = {
  // GET all the posts
  indexPosts: function(req, res) {
    Post.find({}, function(err, posts) {
      err ? console.log(err) : res.json(posts);
    });
  },

  // POST (create) a new post
  createPost: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err, post) {
      if (err) {
        console.log(err);
      }
      res.json(post);
    });
  },

  // GET a post
  showPost: function(req, res) {
    var id = req.params.id;
    Post.findById({_id: id}, function(err, post) {
      if (err) {
        console.log(err);
      }
      req.post.populate('comments', function(err, post) {
        if (err) {
          console.log(err);
        }
        res.json(post);
      });      
    });
  },

  // UPDATE post with upvotes
  incrementPostUpvote: function(req, res) {
    req.post.upvote(function(err, post) {
      if (err) {
        console.log(err);
      }
      res.json(post);
    });
  },

  // POST comments to a post
  addComment: function(req, res) {
    var comment = new Comment(req.body);
    comment.post = req.post;

    comment.save(function(err, comment) {
      if (err) {
        console.log(err);
      }
      req.post.comments.push(comment);
      req.post.save(function(err, post) {
        if (err) {
          console.log(err);
        }
        res.json(comment);
      });
    });
  },

  // GET a comment for a post
  showComment: function(req, res) {
    var id = req.params.id;
    Comment.findById({_id: id}, function(err, comment) {
      if (err) {
        console.log(err);
      }
      res.json(comment);
    });
  },

  // UPDATE comment with upvotes
  incrementCommentUpvote: function(req, res) {
    req.comment.upvote(function(err, comment) {
      if (err) {
        console.log(err);
      }
      res.json(comment);
    });
  }

};

module.exports = postsController;