var app = angular.module('AngstularApp', []);
app.controller('PostController', PostController);

function PostController(Post) {
  this.newPost = {};
  this.posts = Post.query(); //returns all the posts
  this.createPost = createPost;
  this.updatePost = updatePost;
  this.deletePost = deletePost;

  function createPost() {
    Post.save(this.newPost);
    this.posts.push(this.newPost);
  }

  function updatePost(post) {
    Post.update({id: post._id}, post);
    var postIndex = this.posts.indexOf(post);
    this.posts[postIndex] = post;
    post.displayEditForm = false;
  }

  function deletePost(post) {
    Post.remove({id: post._id});
    var postIndex = this.posts.indexOf(post);
    this.posts.splice(postIndex, 1);
  }
  console.log('Controller loaded');
}