angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  $scope.link = {}; // data obj

  $scope.getLinks = function () {
    // add in function using Links from services.js
    Links.getLinks($scope.link)
      .then(function(data) {
         console.log(data); 
      })
      .catch( function (error) {
        console.log( error );
      }) 
  }
});
