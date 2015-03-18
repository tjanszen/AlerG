angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  console.log('made it to the HomeCtrl');
})

.controller('ScanCtrl', function($scope) {
  console.log('made it to the ScanCtrl');
})

.controller('ScanDetailCtrl', function($scope, $stateParams, Scans) {
  $scope.scan = Scans.get($stateParams.scanId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
