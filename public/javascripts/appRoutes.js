var app = angular.module('appRoutes', []);
app.config(config);

config.$inject = ['$routeProvider', '$urlRouterProvider', '$locationProvider'];

function config($routeProvider, $urlRouterProvider, $locationProvider) {
  console.log('config');
  $routeProvider
    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    // posts page that will use the PostController
    .when('/posts', {
      templateUrl: 'views/nerd.html',
      controller: 'PostController'
    });
  //for any unmatched URL redirect to / 
  $urlRouterProvider.otherwise('/');
  //use routes without /#/
  $locationProvider.html5Mode({
    enabled: true,
    requiredBase: false
  });
}