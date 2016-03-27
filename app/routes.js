var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var postsController = require('../controllers/postsController');

router.route('/posts')
  .get(postsController.getAll) //route to all posts
  .post(postsController.createPost); //route to post new post
router.route('/posts/new')
  .get(postsController.newPost); //route to form for new post
router.route('/posts/:id')
  .get(postsController.showPost) //route to show one post
  .patch(postsController.updatePost) //route to post updated post
  .delete(postsController.removePost); //route to delete a post
router.route('/posts/:id/edit')
  .get(postsController.editPost); //route to form for editing post

module.exports = router;