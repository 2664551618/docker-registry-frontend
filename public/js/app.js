// public/js/app.js

'use strict';

var app = angular.module('docker-registry-frontend', [
    'ngRoute', 'ngResource', 'appRoutes', 'MainCtrl', 'TodoCtrl', 'TodoService'
]);
