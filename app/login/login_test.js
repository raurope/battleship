'use strict';

describe('battleShip.login module', function() {

  beforeEach(module('battleShip.login'));

  var $scope;
  var loginCtrl;

  beforeEach(inject(function($rootScope, $controller) {
     $scope = $rootScope.$new();
     loginCtrl = $controller('LoginCtrl', {$scope: $scope});
   }));

  describe('login controller', function(){

    it('should be defined controller', inject(function() {
      //spec body
      expect(loginCtrl).toBeDefined();
    }));

    it('should be defined sign In', inject(function() {
      //spec body
      expect(loginCtrl.signIn).toBeDefined();
    }));

    it('should return false if doesnt exists', inject(function() {
      //spec body
      var form = {};
      form.user = {};
      form.user.name = "username";
      form.user.password = "notexists";
      expect(loginCtrl.signIn(form)).toBe(false);
    }));

    it('should return true if user exists', inject(function() {
      var form = {};
      form.user = {};
      form.user.name = "username";
      form.user.password = "exists";
      expect(loginCtrl.signIn(form)).toBe(true);
    }));




  });
});
