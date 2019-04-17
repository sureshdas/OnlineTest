'use strict';

/**
 * @ngdoc overview
 * @name onlinetestApp
 * @description
 * # onlinetestApp
 *
 * Main module of the application.
 */
angular
  .module('onlinetestApp', [
    'ngRoute'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
