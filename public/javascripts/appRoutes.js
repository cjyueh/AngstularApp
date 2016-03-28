app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config loaded');

  $stateProvider
    //home route
    .state('home', {
      url: '/',
      templateUrl: 'templates/posts-index.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts) {
          return posts.getAll();
        }]
      }
    })
    //get a post to see associated comments
    .state('posts', {
      url: '/posts/{id}', //{id} is route param
      templateUrl: '/templates/posts-show.html',
      controller: 'PostsCtrl'
    });

  //redirect unspecified routes to /
  $urlRouterProvider.otherwise('/');

  //use routes without /#/
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

app.factory('posts', ['$http', function() {
  //create new posts object with array property posts
  var postsObj = {
    // posts: [{question: 'hello from the postsObj', upvotes: 3}] //check that factory is working
    posts: []
  };
  postsObj.getAll = function() {
    return $http.get('/posts').success(function(data) {
      angular.copy(data, postsObj.posts);
    });
  };
  return postsObj;
}]);