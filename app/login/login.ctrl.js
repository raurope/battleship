'use strict';

angular.module('battleShip.login', [])

.controller('LoginCtrl', ['$scope', function($scope) {
  this.signIn = signIn;

  function signIn(form) {
    if (form.user.name == "username" && form.user.password == "exists") return true;
    return false;
  }

  function isUserFound(form) {

  }
}]);
