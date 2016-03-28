app.controller('PostsCtrl', PostsCtrl);

function PostsCtrl($scope, $stateParams, posts) {
  $scope.post = posts.posts[$stateParams.id]; //use $stateParams to get id of the post
}