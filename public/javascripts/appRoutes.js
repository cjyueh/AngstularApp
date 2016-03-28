app.factory('posts', [function() {
  //create new posts object with array property posts
  var postsObj = {
    posts: [{question: 'hello from the postsObj', upvotes: 3}] //check that factory is working
  };
  return postsObj;
}]);