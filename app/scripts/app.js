'use strict';

/**
 * @ngdoc overview
 * @name gwebAngularApp
 * @description
 * # gwebAngularApp
 *
 * Main module of the application.
 */
angular
  .module('gwebApp', [
    'ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch',
    'pascalprecht.translate', 'angulartics', 'angulartics.google.analytics', 'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
