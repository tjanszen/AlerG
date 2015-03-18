angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  console.log('made it to the HomeCtrl');
})

.controller('ScanCtrl', function($scope, $cordovaBarcodeScanner) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
