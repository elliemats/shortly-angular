angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  // $scope.navToPage = function() {

  // }


  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function () {
      $location.path('/links');
    })
    .catch(function (error) {
      console.log(error);
    })
  }
})
