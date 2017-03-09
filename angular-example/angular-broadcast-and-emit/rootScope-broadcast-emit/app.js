/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('app', []);
app.controller('ParentCtrl',function  ($scope) {

  $scope.$on('rootScope:emit', function (event, data) {
    console.log("parent->>"+data); // 'Some data'
  });
 $scope.$on('rootScope:broadcast', function (event, data) {
    console.log("parent->>"+data); // 'Some data'
  });
});
app.controller('SiblingOneCtrl',
  function SiblingOneCtrl ($rootScope,$scope) {

  $rootScope.$on('rootScope:emit', function (event, data) {
    console.log("SiblingOneCtrl->"+data); // 'Emit!'
  });
  
  $scope.$on('rootScope:broadcast', function (event, data) {
   console.log("SiblingOneCtrl->"+data); // 'Broadcast!'
  });
  
  $rootScope.$on('rootScope:broadcast', function (event, data) {
    console.log("SiblingOneCtrl->"+data);// 'Broadcast!'
  });

});

app.controller('ChildCtrl',
  function ChildCtrl ($rootScope) {

  $rootScope.$emit('rootScope:emit', 'Emit!'); // $rootScope.$on
  $rootScope.$broadcast('rootScope:broadcast', 'Broadcast'); // $rootScope.$on && $scope.$on

});

