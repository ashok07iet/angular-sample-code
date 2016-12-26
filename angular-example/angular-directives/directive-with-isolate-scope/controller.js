/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('Controller', ['$scope', function ($scope) {
            $scope.naomi = {name: 'Naomi', address: '1600 Amphitheatre'};
            $scope.igor = {name: 'Igor', address: '123 Somewhere'};
        }])
            .directive('myCustomer', function () {
                return {
                    restrict: 'E',
                    scope: {
                        customerInfo: '=info'
                    },
                    templateUrl: 'my-customer-iso.html'
                };
            });
})();
