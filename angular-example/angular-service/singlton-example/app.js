/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  var myApp=angular.module('myApp',[]);
  myApp.controller('HelloController1',['$scope','HelloService',function($scope,HelloService){
          console.log("HelloController1 is called");
        $scope.message=HelloService.sayHello();  
        $scope.setMessage=function(){
            HelloService.setMessage($scope.message);
        };
  }]);
   myApp.service('HelloService',[function(){
           console.log("HelloService is called");
           var message="Hello user";
           this.sayHello=function(){
                return message;
           };
            this.setMessage=function(msg){
                return message=msg;
           }; 
   }]);
   
     myApp.controller('HelloController2',['$scope','HelloService',function($scope,HelloService){
              console.log("HelloController2 is called");
             $scope.displayMessage=function(){
               $scope.message=HelloService.sayHello();   
             };
  }]);
})();

