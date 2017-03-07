/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl', function($scope) {
  $scope.people = [{name:'mohan',age:'30'},{name:'ram',age:'32'}];
 
});
