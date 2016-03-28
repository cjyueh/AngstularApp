var app = angular.module('AngstularApp', []);
app.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ["$scope"];

function MainCtrl($scope) {
  $scope.test = "Hello World!"; //check controller is linked to view

  $scope.posts = [
    {question: 'post 1', upvotes: 5},
    {question: 'post 2', upvotes: 2},
    {question: 'post 3', upvotes: 15},
    {question: 'post 4', upvotes: 9},
    {question: 'post 5', upvotes: 4}
  ];

  $scope.addPost = function() {
    if (!$scope.question || $scope.question === '') {
      return;
    }
    $scope.posts.push({question: $scope.question, upvotes: 4});
    $scope.question = ''; //clear form
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}