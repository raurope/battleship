'use strict';

angular
    .module('battleShip.login')
    .factory('loginService', loginService);

function loginService() {

    var service = {};
    return service;

    function checkUser() {
        return false;
    }
}
