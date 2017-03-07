/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl', function($scope) {
  setTimeout(function() {
    $scope.message = 'Fetched after two seconds';
    console.log('message:' + $scope.message);
    $scope.$digest(); //this triggers a $digest
  }, 2000);
  
});

