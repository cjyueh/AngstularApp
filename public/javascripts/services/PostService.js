//api calls from angular frontend to node backend
var app = angular.module('PostService', []);
app.factory('Post', ['$http', function($http) {
  return {
    // call to get all posts
    get: function() {
      return $http.get('/api/posts');
    },

    // call to POST and create a new post
    create: function(post) {
      return $http.post('/api/posts', post);
    },

    // call to DELETE a post
    delete: function(id) {
      return $http.delete('/api/posts/' + id);
    }
  };
}]);