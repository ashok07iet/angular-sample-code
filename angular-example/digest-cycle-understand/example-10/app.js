/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl1', function($scope) {
  setTimeout(function() {
    $scope.message1 = 'message1 Fetched after two seconds';
    console.log('message1:' + $scope.message);
     
  }, 2000);
  
});
app.controller('MainCtrl2', function($scope) {
  setTimeout(function() {
    $scope.message2 = 'message2 Fetched after two seconds';
    console.log('message2:' + $scope.message);
    $scope.$apply(); //this triggers a $digest
  }, 2000);
  
});

