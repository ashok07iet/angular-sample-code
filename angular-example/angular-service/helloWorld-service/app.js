/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  var myApp=angular.module('myApp',[]);
  myApp.controller('HelloController',['$scope','HelloService',function($scope,HelloService){
        $scope.message=HelloService.sayHello();  
  }]);
   myApp.service('HelloService',[function(){
         this.sayHello=function(){
            return "Hello user";
         };
   }]);  
})();

