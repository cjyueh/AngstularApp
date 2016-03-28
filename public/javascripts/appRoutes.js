app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config loaded');

  $stateProvider
    //home route
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'MainCtrl'
    });

  //redirect unspecified routes to /
  $urlRouterProvider.otherwise('/');

  //use routes without /#/
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

app.factory('posts', [function() {
  //create new posts object with array property posts
  var postsObj = {
    posts: [{question: 'hello from the postsObj', upvotes: 3}] //check that factory is working
  };
  return postsObj;
}]);