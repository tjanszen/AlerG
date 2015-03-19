angular.module('starter.services', [])

.factory('Scans', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  function scanning(upc){
    console.log('This is the variable passed into SCANNING', upc);
    return $http.get('http://192.168.5.52:8080/scans/' + upc);
  }

  return {scanning:scanning};

}]);
