angular.module('starter.home-controllers', [])

.controller('HomeCtrl', ['$scope', '$rootScope', '$cordovaBarcodeScanner', '$cordovaDialogs', '$ionicPlatform', 'Scans', function($scope, $rootScope, $cordovaBarcodeScanner, $cordovaDialogs, $ionicPlatform, Scans) {
  
  $scope.scanner = function(){
    $ionicPlatform.ready(function() {

      $cordovaBarcodeScanner
       .scan()
       .then(function(barcodeData) {
         $rootScope.data = barcodeData.text;
         $rootScope.type = barcodeData.type;
         // Success! Barcode data is here
         Scans.scanning($rootScope.data)
         .then(function(response){
           $scope.product = response.data[0];
         })
       }, function(error) {
       });


     // NOTE: encoding not functioning yet
     $cordovaBarcodeScanner
       .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
       .then(function(success) {
         // Success!
       }, function(error) {
         // An error occurred
       });

   }, false);
  }
}])
