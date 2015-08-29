angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  $scope.data = {}; // data obj

  $scope.getLinks = function () {
    // add in function using Links from services.js
    Links.getAll()
      .then(function(links) {
         $scope.data.links = links;
      })
      .catch( function (error) {
        console.log(error);
      })
  }
  console.log($scope.data.links);
  $scope.getLinks(); //invoke function when ctrl loads

  $scope.name = 'LinksController';
});
