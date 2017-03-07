/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl', function($scope) {
  $scope.name = "Angular";

  $scope.updated = 0;

  $scope.$watch('name', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
    $scope.updated++;
  });
});

