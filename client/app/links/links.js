angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  $scope.data = {}; // data obj

  $scope.getLinks = function () {
    // add in function using Links from services.js
    Links.getLinks()
      .then(function(links) {
         return $scope.data.links = links; //bind to scope data
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  $scope.getLinks(); //invoke function when ctrl loads (not preferred way)
  $scope.name = 'LinksController';

});

