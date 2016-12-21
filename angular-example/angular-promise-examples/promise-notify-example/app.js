/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller('ToDoController', ['$scope', '$q', '$interval', function ($scope, $q, $interval) {
            $scope.getTodoList = function () {
                var promise = getTodoList();
                promise.then(function (data) {
                    $scope.list = data;
                    $scope.isVisible = true;
                    $scope.status = 'DONE';
                }, function (error /*Error event should handle here*/) {

                }, function (data /*Notify event should handle here*/) {
                    $scope.status = 'PENDING';
                    $scope.percentage = data.percentage;
                });
            };
            function getTodoList() {
                var deferred = $q.defer();
                var data = [
                    {
                        "task": "I wanna to learn Web-Worker...",
                        "stared": "nopes!!: (",
                        "estimatedTime": "Infinity"
                    },
                    {
                        "task": "I wanna to learn Monkey-Patching...",
                        "stared": "Yup!!!",
                        "estimatedTime": "1day"
                    },
                    {
                        "task": "I wanna to learn ui-router",
                        "stared": "nopes!!: (",
                        "estimatedTime": "99999hr"
                    }
                ];
                var percentage = 0;
                var interval = $interval(function () {
                    percentage = percentage + 5;
                    deferred.notify({percentage: percentage});
                    if (percentage > 99) {
                        $interval.cancel(interval);
                        deferred.resolve(data);
                    }
                }, 500);
                return deferred.promise;
            }
        }]);
})();

