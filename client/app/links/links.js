angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  $scope.data = {}; // data obj

  $scope.getLinks = function () {
    // add in function using Links from services.js
    Links.getLinks($scope.data)
      .then(function(data) {
         $scope.data.links = data;
      })
      .catch( function (error) {
        console.log( error );
      })
  }
  $scope.getLinks();
});
