var app = angular.module('PostCtrl', []);
app.controller('PostController', PostController);

function PostController($scope) {
  $scope.tagline = 'share your angstular';
}