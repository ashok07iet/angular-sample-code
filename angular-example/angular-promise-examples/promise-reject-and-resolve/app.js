/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('GreetingController', ['$scope', '$q', function ($scope, $q) {
            $scope.sayHello = function () {
                var helloPromise = sayHelloAsync($scope.name);
                helloPromise.then(function (data) {
                    console.log(data);
                    $scope.message=data;
                    $scope.endMessage="";
                },function (error) {
                    console.error(error);
                     $scope.message=error;
                      $scope.endMessage="";
                });
                $scope.endMessage="call finish";
                console.log('call finish');
            };
            function sayHelloAsync(name) {
               
                    var defer = $q.defer();
                    setTimeout(function () {
                        //Greet when your name is 'deepak'
                        if (name === 'deepak') {
                            defer.resolve('Hello, ' + name + '!');
                        } else {
                            defer.reject('Greeting ' + name + ' is not allowed.');
                        }
                    }, 1000);

                    return defer.promise;
                
            }
        }]);
})();

