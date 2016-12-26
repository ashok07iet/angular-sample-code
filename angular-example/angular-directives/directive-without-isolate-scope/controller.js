/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('NaomiController', ['$scope', function ($scope) {
            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }])
            .controller('IgorController', ['$scope', function ($scope) {
                    $scope.customer = {
                        name: 'Igor',
                        address: '123 Somewhere'
                    };
                }])
            .directive('myCustomer', function () {
                return {
                    restrict: 'E',
                    templateUrl: 'my-customer.html'
                };
            });
})();
