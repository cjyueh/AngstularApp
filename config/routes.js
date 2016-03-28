var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// require controllers
var postsController = require('../controllers/postsController');

router.route('/posts')
  .get(postsController.indexPosts)
  .post(postsController.createPost);
router.route('/posts/:id')
  .get(postsController.showPost); //index of comments
router.route('/posts/:id/upvote')
  .put(postsController.incrementPostUpvote);

router.route('/posts/:id/comments')
  .post(postsController.addComment);
router.route('/posts/:id/comments/:id')
  .get(postsController.showComment);
router.route('/posts/:id/comments/:id/upvote')
  .put(postsController.incrementCommentUpvote);

// // GET all the posts
// router.get('/posts', function(req, res, next) {
//   Post.find({}, function(err, posts) {
//     if (err) {
//       return next(err);
//     } else {
//       res.json(posts);
//     }
//   });
// });

module.exports = router;