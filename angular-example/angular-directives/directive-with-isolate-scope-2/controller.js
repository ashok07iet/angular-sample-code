/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('Controller', ['$scope', function ($scope) {
            $scope.naomi = {name: 'Naomi', address: '1600 Amphitheatre'};
            $scope.vojta = {name: 'Vojta', address: '3456 Somewhere Else'};
        }])
            .directive('myCustomer', function () {
                return {
                    restrict: 'E',
                    
                    templateUrl: 'my-customer-plus-vojta.html'
                };
            });
})();
