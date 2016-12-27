/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var myApp = angular.module("myApp", []);
    myApp.controller('Controller', ['$scope', function ($scope) {
            var counter = 0;
            $scope.customer = {
                name: 'David',
                street: '1234 Anywhere St.'
            };
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

            $scope.changeData = function () {
                counter++;
                $scope.customer = {
                    name: 'James',
                    street: counter + ' Cedar Point St.'
                };
            };
        }]).directive('myIsolatedScopeWithModel', function () {
        return {
            scope: {
                customer: '=' //Two-way data binding
            },
            template: '<ul><li ng-repeat="prop in customer">{{ prop }}</li></ul>'
        };
    });
})();
