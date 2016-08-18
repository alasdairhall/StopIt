angular.module('starter.controllers', [])

.controller('mainCtrl', function($scope, $ionicSideMenuDelegate) { 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();  // Toggle the side menu
  }
})

.controller('calcCtrl', function($scope, $ionicPopup, $state) {
	// The values for a calculation before anything is added
    $scope.calculation = {
      noOfLayers: 1,
      layers: [{info:"yo"}]
    };

    $scope.noOfLayersValid = true;

    $scope.checkNoOfLayersValid = function() {
	    if($scope.calculation.noOfLayers == undefined) {
	    	$scope.noOfLayersValid = false;
	    } else {
	    	$scope.noOfLayersValid = true;
	    }
    }

    $scope.calc1Next = function() {
    	if(!$scope.noOfLayersValid) {
    		var alertPopup = $ionicPopup.alert({
	        	title: 'Not quite!',
	        	template: 'You haven\'t entered a valid number of layers'
	        });

    	} else {
    		console.log("Hey");
    		for(i = 0; i < $scope.calculation.noOfLayers; i++) {
    			console.log("Hey" + i);
    			$scope.calculation.layers.push({info:"thing"});
    		}
    		$state.go('menu.calc2');
    	}
    }

    $scope.calc2Back = function() {
    	$state.go('menu.calc1');
    }
    
})