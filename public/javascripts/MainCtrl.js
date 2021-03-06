app.controller('MainCtrl', MainCtrl);

// MainCtrl.$inject = ["$scope"];

function MainCtrl($scope, posts) {
  $scope.test = "Hello World!"; //check controller is linked to view

  //display array of posts from post factory
  $scope.posts = posts.posts;

  //dummy data to start, delete/comment out after making factory
  // $scope.posts = [
  //   {question: 'post 1', upvotes: 5},
  //   {question: 'post 2', upvotes: 2},
  //   {question: 'post 3', upvotes: 15},
  //   {question: 'post 4', upvotes: 9},
  //   {question: 'post 5', upvotes: 4}
  // ];

  $scope.addPost = function() {
    if (!$scope.question || $scope.question === '') {
      return;
    }
    $scope.posts.push({
      question: $scope.question, 
      upvotes: 0,
      comments: [
        {author: 'Christina', body: 'Good question!', upvotes: 0},
        {author: 'Albert', body: 'Dunno what this is about.', upvotes: 0}
      ]
    });
    $scope.question = ''; //clear form
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}