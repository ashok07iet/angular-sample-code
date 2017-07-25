/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('myApp',[]);
app.controller('MainCtrl', function($scope,$rootScope) {
  $scope.foo = "0";
  $scope.bar = "1";
  
  $scope.hello = "Hello";
  
  $scope.setHello = function() {
    $scope.hello = "World";
  };
  $scope.$watch(function(){
      console.log('digest');
  });
});

app.directive('clickable', function() {

  return {
    restrict: "E",
    scope: {
      foo: '=',
      bar: '='
    },
    template: '<ul style="background-color: lightblue"><li>{{foo}}</li><li>{{bar}}</li></ul>',
    link: 
            
                
                function(scope, element, attrs) {
      element.bind('click', function() {
        scope.foo++;
        scope.bar++;
        scope.$digest();
      });
    }
  };

});