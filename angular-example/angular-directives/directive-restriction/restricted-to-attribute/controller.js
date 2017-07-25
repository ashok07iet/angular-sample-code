/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);

    myApp.controller('Controller', ['$scope', function ($scope) {
            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }])
            .directive('myCustomer', function () {
                return {
                    restrict: 'AE',
                    templateUrl: 'my-customer.html'
                };
            });
})();
