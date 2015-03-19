angular.module('starter.scan-controllers', [])

.controller('ScanCtrl', ['$scope', '$cordovaBarcodeScanner', '$cordovaDialogs', '$ionicPlatform', function($scope, $cordovaBarcodeScanner, $cordovaDialogs, $ionicPlatform) {

  $scope.scanner = function(){
    $ionicPlatform.ready(function() {

      $cordovaBarcodeScanner
       .scan()
       .then(function(barcodeData) {
         console.log(barcodeData);
         // Success! Barcode data is here
       }, function(error) {
         // An error occurred
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
