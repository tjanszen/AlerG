angular.module('starter.account-controllers', [])

.controller('AccountCtrl', function($scope) {
  console.log('made it to the AccountCtrl');
  $scope.settings = {
    enableFriends: true
  };
})
