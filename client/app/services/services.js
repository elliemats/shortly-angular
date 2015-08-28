/* Intro notes:
  - controllers and directives are largely stateless, meaning that if the route changes to diplay a new page, or if the element a directive is within is removed, any internal variable or data are reset. If you have data that needs to persist across pages or throughout the life cycle of your app, a servive, or factory, is the best place to store it.
  - advantage: ctrl and directives dont have to concern with internal logic
  - services can act like an internal api
  */

angular.module('shortly.services', [])

.factory('Links', function ($http) { // (name, initialize function)
  // Your code here

  var getLinks = function () {
    return $http({
      method: 'GET',
      url: '/api/links',
    })
    .then(function (resp) {
      return resp.data;
    })
  }

  var addLink = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
  }

    return {
      getLinks : getLinks,
      addLink : addLink
    }

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

// this is standard to return an object of these factory functions
  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
