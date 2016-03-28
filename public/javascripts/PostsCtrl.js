app.controller('PostsCtrl', PostsCtrl);

function PostsCtrl($scope, $stateParams, posts) {
  $scope.post = posts.posts[$stateParams.id]; //use $stateParams to get id of the post

  $scope.addComment = function() {
    if ($scope.body === "") {
      return;
    }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0,
    });
    $scope.body = ''; //clear form
  };
  $scope.incrementUpvotes = function(comment) {
    comment.upvotes += 1;
  };
}