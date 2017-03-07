/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl', function($scope) {
    var count=-1;
  $scope.fruit = {name:"apple",price:"10"};
  $scope.$watch('fruit.name', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
      $scope.message='fruit name chnage'+(count++);
  });
});

