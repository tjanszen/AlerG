angular.module('starter.users-controllers', [])

.controller('UsersCtrl', ['$scope', '$rootScope', '$state', '$window', '$auth', '$ionicPlatform', function($scope, $rootScope, $state, $window, $auth, $ionicPlatform) {
  $scope.name = _.capitalize($state.current.name);

  $scope.submit = function(user) {
    console.log('USER.JS: THE USER IS', user);
    if($scope.name === "Register") {
      if((user.password) && (user.email)) {
        $auth.signup({email: user.email, password: user.password})
        .then(login)
      }
    }
  };
}]);
