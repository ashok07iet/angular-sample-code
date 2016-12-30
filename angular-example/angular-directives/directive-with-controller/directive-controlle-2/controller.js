/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {

    var app = angular.module('directivesModule', []);
    app.controller("controller", ['$scope', function ($scope) {
            var counter = 0;
            $scope.customers = [
                {
                    name: 'David',
                    street: '1234 Anywhere St.'
                },
                {
                    name: 'Tina',
                    street: '1800 Crest St.'
                },
                {
                    name: 'Michelle',
                    street: '890 Main St.'
                }
            ];
            $scope.addCustomer = function () {
                counter++;
                $scope.customers.push({
                    name: 'New Customer' + counter,
                    street: counter + ' Cedar Point St.'
                });
            };
        }]);
    app.directive('isolateScopeWithController', function () {
        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
            },
            controller: 'controller',
            templateUrl: 'customer-list.html'
        };
    });

}());
