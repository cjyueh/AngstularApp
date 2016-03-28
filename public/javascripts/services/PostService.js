//api calls from angular frontend to node backend
var app = angular.module('AngstularApp', []);
app.service('Post', PostFactory);

function PostFactory($resource) {
  return $resource('/posts/:id', { id: '@_id}' }, {
    update: {
      method: 'PUT' //this method issues at PUT request
    },
    query: {
      isArray: true,
      transformResponse: function(data) {
        return angular.fromJson(data).posts;
      }
    }
  });
}