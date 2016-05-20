'use strict';

// Declare app level module which depends on views, and components
angular.module('battleShip', [
  'ngRoute',
  'battleShip.view1',  
  'battleShip.login'
]).
config(function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  }).otherwise({redirectTo: '/view1'});

});
