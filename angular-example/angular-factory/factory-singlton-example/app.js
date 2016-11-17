/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  var myApp=angular.module('myApp',[]);
  myApp.controller('HelloController',['$scope','HelloService',function($scope,HelloService){
        $scope.message=HelloService;  
  }]);
   myApp.factory('HelloService',[function(){
           console.log("factory is called");
         return "Hello user";  
   }]);
   
     myApp.controller('HelloController2',['$scope','HelloService',function($scope,HelloService){
        $scope.message=HelloService;  
  }]);
})();

