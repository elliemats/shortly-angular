angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.addLink = function() { // takes our addLink function and passes in the given link and does the post req.
    $scope.loading = true; // shows loading spinner when ajax req is running...  not necessary
    Links.addLink($scope.link)
    .then(function () {
      $scope.loading = false;
      $location.path('/'); //when the server resp back successfully, it send us back to root (aka: links page )
    })
    .catch(function (error) {
      console.log(error);
    });
  };
});
