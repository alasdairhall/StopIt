// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  // Page Routing
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    .state('menu.home', {
      url: '/home',
      views: {
        'menuContent' : { // menuContent is the name of the nav-view used by the menu
          templateUrl: 'templates/home.html',
          controller: 'mainCtrl'
        }
      }
    })

    .state('menu.calc1' , {
      url: '/calc1',
      views: {
        'menuContent' : {
          templateUrl: 'templates/calc1.html',
          controller: 'calcCtrl'
        }
      }
    })

    .state('menu.calc2' , {
      url: '/calc2',
      views: {
        'menuContent' : {
          templateUrl: 'templates/calc2.html',
          controller: 'calcCtrl'
        }
      }
    })

    $urlRouterProvider.otherwise('/menu/home');

  })
// })
