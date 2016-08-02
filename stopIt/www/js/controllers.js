angular.module('starter.controllers', [])

.controller('mainCtrl', function($scope, $ionicSideMenuDelegate) { 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();  // Toggle the side menu
  }
})