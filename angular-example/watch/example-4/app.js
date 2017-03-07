/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl', function($scope) {
  $scope.fruits = [];
  $scope.fruitCount = 0;
  $scope.add=function (){
      $scope.fruits=[$scope.fruit];
  };
  $scope.$watch('fruits', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
      $scope.fruitCount=$scope.fruits.length;
  });
});

