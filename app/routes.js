var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var postsController = require('./controllers/postsController');

router.route('/api/posts')
  .get(postsController.index) //route to all posts
  .post(postsController.create); //route to post new post
router.route('/api/posts/:id')
  .patch(postsController.update) //route to post updated post
  .delete(postsController.remove); //route to delete a post

module.exports = router;