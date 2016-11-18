/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('HelloController', ['$scope', 'HelloService', function ($scope, HelloService) {
            $scope.message = HelloService.sayHello();
        }]);
    myApp.provider('HelloService', [function () {
            var name;
            this.setName = function (newName) {
                name = newName;
            };
            this.$get = function () {
                return {
                    sayHello: function () {
                        return "hello " + name;
                    }
                };
            };
        }]);
    myApp.config(function(HelloServiceProvider){
        console.log("config run-----------------");
        HelloServiceProvider.setName("John");
    });
})();

