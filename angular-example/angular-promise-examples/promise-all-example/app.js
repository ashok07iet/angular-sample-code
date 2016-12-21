/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('GreetingController', ['$scope', '$q', function ($scope, $q) {
            $scope.sayHello = function () {
                var helloPromise1 = sayHelloAsync1($scope.name);
                var helloPromise2 = sayHelloAsync2($scope.name);
                 $q.all([helloPromise1,helloPromise2])
                .then(function (data) {
                    console.log(data);
                    $scope.message1=data[0];
                    $scope.message2=data[1];
                    $scope.endMessage="";
                },function (error) {
                    
                });
                $scope.endMessage="call finish";
                console.log('call finish');
            };
            function sayHelloAsync1(name) {
                    var defer = $q.defer();
                    setTimeout(function () {
                        //Greet when your name is 'deepak'
                        if (name === 'deepak') {
                            defer.resolve('Hello, ' + name + '!'+' sayHelloAsync1');
                        } else {
                            defer.reject('Greeting ' + name + ' is not allowed.');
                        }
                    }, 1000);
                    return defer.promise; 
            }
            function sayHelloAsync2(name) {
                    var defer = $q.defer();
                    setTimeout(function () {
                        //Greet when your name is 'deepak'
                        if (name === 'deepak') {
                            defer.resolve('Hello, ' + name + '!'+'from sayHelloAsync2');
                        } else {
                            defer.reject('Greeting ' + name + ' is not allowed.');
                        }
                    }, 500);
                    return defer.promise; 
            }
        }]);
})();

