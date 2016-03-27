var app = angular.module('MainCtrl', []);
app.controller('MainController', MainController);

function MainController($scope) {
  $scope.tagline = 'let go of your AngularJS angst.';   
}